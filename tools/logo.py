"""Regenerate the logo and favicon set from the client's artwork.

    pip install pillow
    python3 tools/logo.py

Source: assets/logo-src/MC_Home_Improvements_Logo.png (black on white).
Outputs are committed; build.mjs only references them.
"""
from PIL import Image

src = Image.open('assets/logo-src/MC_Home_Improvements_Logo.png').convert('L')
# Ink becomes alpha, with a soft ramp so the serif edges stay smooth.
alpha = src.point(lambda v: 0 if v > 225 else 255 if v < 60 else int((225 - v) * 255 / 165))
alpha = alpha.crop(alpha.point(lambda v: 255 if v > 40 else 0).getbbox())
W, H = alpha.size

def logo(color, w, name):
    im = Image.new('RGBA', (W, H), color + (0,))
    im.putalpha(alpha)
    im.resize((w, round(H * w / W)), Image.LANCZOS).save(f'assets/img/logo/{name}-{w}.png', optimize=True)

for w in (220, 440, 320, 640):
    logo((255, 255, 255), w, 'mc-light')   # navy masthead and footer
for w in (320, 640):
    logo((17, 28, 46), w, 'mc-dark')       # light backgrounds

# Favicon: the M&C monogram alone, white on navy. The tagline does not survive 16px.
mono = alpha.crop((0, 0, W, int(H * 0.60)))
mono = mono.crop(mono.point(lambda v: 255 if v > 40 else 0).getbbox())

def icon(size, pad):
    bg = Image.new('RGBA', (size, size), (18, 32, 54, 255))
    iw = int(size * (1 - 2 * pad)); ih = round(mono.height * iw / mono.width)
    fg = Image.new('RGBA', (iw, ih), (255, 255, 255, 0))
    fg.putalpha(mono.resize((iw, ih), Image.LANCZOS))
    bg.alpha_composite(fg, ((size - iw) // 2, (size - ih) // 2))
    return bg

for size, name in ((16, 'favicon-16.png'), (32, 'favicon-32.png'), (48, 'favicon-48.png'), (180, 'apple-touch-icon.png')):
    icon(size, 0.08 if size <= 32 else 0.14).save('assets/' + name)
icon(48, 0.1).save('assets/favicon.ico', sizes=[(16, 16), (32, 32), (48, 48)])
icon(512, 0.14).convert('RGB').save('assets/img/logo/mc-social-512.png')
