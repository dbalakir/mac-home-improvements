"""Generate an inline SVG service-area map from Census county boundaries.

Outputs assets/service-area-map.svg — a partial that build.mjs inlines, so the
page makes no extra request and the map inherits the site's CSS tokens.
"""
import json, math, os, urllib.request

# Census cartographic county boundaries. Downloaded on first run and cached
# next to this script; it is ~3 MB, so it is not committed.
SRC_URL = 'https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json'
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'counties.json')
OUT = os.path.join(HERE, '..', 'assets', 'service-area-map.svg')

if not os.path.exists(SRC):
    print('downloading county boundaries…')
    urllib.request.urlretrieve(SRC_URL, SRC)

# Jurisdictions M&C actually serves — drawn filled and outlined.
SERVED = {
    '51059': 'Fairfax County',
    '51600': 'Fairfax City',
    '51610': 'Falls Church',
    '51013': 'Arlington',
    '51510': 'Alexandria',
}
# Neighbouring jurisdictions, drawn faintly so the served area has context.
CONTEXT = {
    '11001': 'Washington, D.C.',
    '51107': 'Loudoun', '51153': 'Prince William', '51179': 'Stafford',
    '51177': 'Spotsylvania', '51061': 'Fauquier', '51610': None,
    '24031': 'Montgomery', '24033': "Prince George's", '24021': 'Frederick',
    '51043': 'Clarke', '51187': 'Warren', '51099': 'King George',
    '51033': 'Caroline', '51137': 'Orange', '51113': 'Madison',
    '51047': 'Culpeper', '24017': 'Charles', '51057': 'Essex',
}

# Pins. Towns inside Fairfax County (Vienna, McLean, Annandale, Springfield)
# have no separate boundary of their own, so they only appear as pins.
PINS = [
    # name, lat, lon, text-anchor, dy nudge (viewBox units)
    ('McLean',        38.9339, -77.1773, 'end',   -10),
    ('Vienna',        38.9012, -77.2653, 'end',    -8),
    ('Falls Church',  38.8823, -77.1711, 'end',    14),
    ('Arlington',     38.8816, -77.0910, 'start',   0),
    ('Alexandria',    38.8048, -77.0469, 'start',   6),
    ('Fairfax',       38.8462, -77.3064, 'end',     8),
    ('Annandale',     38.8304, -77.1964, 'start',   4),
    ('Springfield',   38.7893, -77.1872, 'start',  12),
]

# Towns that appear only as a pin, for the <desc>. Kept explicit rather than
# derived: the pin names and the SERVED labels are deliberately spelled
# differently ("Fairfax" vs "Fairfax City"), so no join between them is safe.
PIN_ONLY = ['Vienna', 'McLean', 'Annandale', 'Springfield']

# Viewport in degrees, chosen so the served band reads roughly square.
LON0, LON1 = -77.60, -76.85
LAT0, LAT1 = 38.58, 39.12
W = 1000.0
LAT_MID = (LAT0 + LAT1) / 2
KX = math.cos(math.radians(LAT_MID))          # flatten lon at this latitude
H = W * ((LAT1 - LAT0) / ((LON1 - LON0) * KX))


def project(lon, lat):
    x = (lon - LON0) / (LON1 - LON0) * W
    y = (LAT1 - lat) / (LAT1 - LAT0) * H
    return x, y


def rdp(pts, eps):
    """Ramer-Douglas-Peucker: drop points that don't change the outline."""
    if len(pts) < 3:
        return pts
    ax, ay = pts[0]
    bx, by = pts[-1]
    dx, dy = bx - ax, by - ay
    n = math.hypot(dx, dy)
    imax, dmax = 0, -1.0
    for i in range(1, len(pts) - 1):
        px, py = pts[i]
        d = abs(dy * px - dx * py + bx * ay - by * ax) / n if n else math.hypot(px - ax, py - ay)
        if d > dmax:
            imax, dmax = i, d
    if dmax > eps:
        return rdp(pts[:imax + 1], eps)[:-1] + rdp(pts[imax:], eps)
    return [pts[0], pts[-1]]


def rings(geom):
    t, c = geom['type'], geom['coordinates']
    return c if t == 'Polygon' else [r for poly in c for r in poly]


def path_for(feature, eps):
    d = []
    for ring in rings(feature['geometry']):
        pts = [project(lon, lat) for lon, lat in ring]
        # Drop rings entirely outside the viewport (offshore islands etc.)
        if max(x for x, _ in pts) < -50 or min(x for x, _ in pts) > W + 50:
            continue
        if max(y for _, y in pts) < -50 or min(y for _, y in pts) > H + 50:
            continue
        pts = rdp(pts, eps)
        if len(pts) < 3:
            continue
        d.append('M' + 'L'.join(f'{x:.1f} {y:.1f}' for x, y in pts) + 'Z')
    return ''.join(d)


data = json.load(open(SRC))
served, context = {}, {}
for f in data['features']:
    fips = f['properties']['STATE'] + f['properties']['COUNTY']
    if fips in SERVED:
        served[fips] = path_for(f, 0.6)
    elif fips in CONTEXT:
        context[fips] = path_for(f, 1.4)

missing = set(SERVED) - set(served)
assert not missing, f'missing boundaries: {missing}'

parts = []
parts.append(
    f'<svg class="areamap" viewBox="0 0 {W:.0f} {H:.0f}" role="img" '
    f'aria-labelledby="areamap-t areamap-d" xmlns="http://www.w3.org/2000/svg">'
)
parts.append('<title id="areamap-t">M&C Home Improvements service area map</title>')
parts.append(
    '<desc id="areamap-d">Northern Virginia and Washington DC, with '
    + ', '.join(v for v in SERVED.values())
    + ' highlighted, plus '
    + ', '.join(PIN_ONLY[:-1]) + ' and ' + PIN_ONLY[-1] + '.</desc>'
)

parts.append('<g class="areamap__context">')
for fips, d in context.items():
    if d:
        parts.append(f'<path d="{d}"/>')
parts.append('</g>')

parts.append('<g class="areamap__served">')
for fips, d in served.items():
    parts.append(f'<path d="{d}"><title>{SERVED[fips]}</title></path>')
parts.append('</g>')

parts.append('<g class="areamap__pins">')
for name, lat, lon, anchor, dy in PINS:
    x, y = project(lon, lat)
    dx = 14 if anchor == 'start' else -14
    parts.append(
        f'<g class="areamap__pin"><circle cx="{x:.1f}" cy="{y:.1f}" r="7"/>'
        f'<text x="{x + dx:.1f}" y="{y + 5 + dy:.1f}" text-anchor="{anchor}">{name}</text></g>'
    )
parts.append('</g>')
parts.append('</svg>')

svg = '\n'.join(parts)
os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(os.path.normpath(OUT), 'w').write(svg + '\n')
print(f'wrote {os.path.normpath(OUT)}')
print(f'  viewBox 0 0 {W:.0f} {H:.0f}  ({len(svg)/1024:.1f} KB)')
print(f'  {len(served)} served, {len(context)} context, {len(PINS)} pins')
