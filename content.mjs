/* ==========================================================================
   M&C Home Improvements — site content
   --------------------------------------------------------------------------
   Everything you would want to edit lives in this file. Change it, then run
   `node build.mjs` to regenerate the HTML.

   Anything marked TODO needs a real value before launch.
   ========================================================================== */

export const BIZ = {
  name: 'M&C Home Improvements',
  legal: 'M&C Home Improvements LLC',
  tagline: 'Masonry, Stonework, Roofing & Siding · Northern Virginia',
  phone: '(703) 929-1621',
  phoneHref: 'tel:+17039291621',
  email: 'info@machomeimprovements.com',   // TODO: M&C email
  city: 'Northern Virginia',
  since: '2010',
  facebook: '#',                 // TODO: M&C Facebook page
  origin: 'https://machomeimprovements.com',   // TODO: confirm domain

  // --- TODO: confirm before launch -------------------------------------
  // Fill these in and rebuild; the build drops the line entirely if empty.
  license: '',              // TODO: M&C license #   // VA DPOR number, rendered as "License #…"
  // Business address. Shown in the footer and contact page, and used in the
  // LocalBusiness schema. Leave street blank to show the service area only.
  street: '5510 Cherokee Ave, Ste 300',
  locality: 'Alexandria',
  region: 'VA',
  postalCode: '22312',
  // ----------------------------------------------------------------------

  // Taken from the Google Business Profile, where the business sets them.
  hours: 'Open 7 days · 9 AM - 6 PM',

  // Headline rating, shown as a single combined figure.
  //
  // Google was 77 and HomeAdvisor 13 at build time (both straight 5.0). Note
  // that 5 of the 13 HomeAdvisor entries are syndicated Google reviews, so the
  // count of distinct reviews is nearer 85 than 90 — set `reviewCount` to
  // '85+' if you would rather state the conservative figure.
  rating: '5.0',
  reviewCount: '90+',
  ratingSource: 'Google and HomeAdvisor',

  // TODO: M&C's own Google Business Profile and HomeAdvisor links.
  googleProfileUrl: '#',
  googleReviewUrl: '#',
  ratingUrl: '#',

  // Paste your Formspree form ID here (formspree.io -> New Form).
  // Until it is set, the estimate form falls back to an email link.
  formspreeId: '',   // TODO: M&C's own Formspree form

  // --- Analytics & search-console verification ---------------------------
  // Both lines are dropped entirely from the HTML while blank, so the site is
  // safe to ship before either account exists.
  //
  // gscVerification is emitted on every build, including staging, so the tag
  // is already in place whenever you verify. ga4Id is emitted only on a
  // production build (no BASE_PATH) — otherwise local previews and the
  // staging site would report as real traffic.
  ga4Id: '',            // 'G-XXXXXXXXXX' — GA4 > Admin > Data streams > Web
  gscVerification: '',  // token only, not the whole tag — Search Console >
                        // Add property > URL prefix > HTML tag; from
                        // <meta name="google-site-verification" content="THIS">
};

/* --- Primary navigation -------------------------------------------------- */
export const NAV = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about-us/' },
  { label: 'Services',  href: '/services/' },
  { label: 'Projects',  href: '/projects/' },
  { label: 'Reviews',   href: '/reviews/' },
  { label: 'Contact',   href: '/get-your-free-estimate/' },
];

/* --- Services ------------------------------------------------------------
   `href` values intentionally match the old WordPress URLs so existing
   search rankings and inbound links survive the rebuild.
   ------------------------------------------------------------------------ */
export const SERVICES = [
  {
    slug: 'driveway-paving',
    warranty: ['asphalt', 'concrete', 'pavers'],
    reviewFrom: 'RJ C.',
    process: [
      ['Site visit and written estimate', 'We walk the driveway with you, look at how water currently leaves it, check access for equipment, and measure. You get an itemized written price before anything is scheduled.'],
      ['Excavation', 'The old surface comes out and we dig to the depth the new surface has to carry. Skipping depth here is the single most common reason a driveway fails early, and it cannot be corrected later.'],
      ['Base and compaction', 'Aggregate goes in and is compacted in lifts rather than all at once. Compaction is what stops the settling you see as dips and low spots a few winters in.'],
      ['Grading for drainage', 'Pitch is set so water runs off the surface and away from the house and garage, not toward them. If the old driveway had a drainage problem, this is the stage where it gets corrected.'],
      ['Surface installation', 'Asphalt is laid hot and rolled, or pavers are set, cut to the edges, and locked in. Either way the finish work happens on a base that is already right.'],
      ['Edging, jointing, and cleanup', 'Edge restraint goes in, paver joints are swept and compacted, and the site is cleaned. We walk the finished job with you before we leave.'],
    ],
    faq: [
      { q: 'How long does a new driveway take?',
        a: ['A typical residential replacement runs three to five days from excavation to finished surface. Larger or steeper driveways, poor access, and drainage correction all add time. Weather is the biggest variable: asphalt in particular cannot be laid properly in the wet or the cold, and we would rather wait a few days than lay a surface that will not hold.'] },
      { q: 'Should I choose asphalt, pavers, or concrete?',
        a: ['Asphalt is the least expensive up front, goes down fastest, and is straightforward to resurface later. Pavers cost more initially but individual units lift out and go back without a patch mark, so repairs and utility work do not leave scars. Concrete sits between the two and gives the cleanest uniform surface.', 'We walk through all three against your site, your budget, and how much maintenance you actually want to do, rather than steering you toward one by default.'] },
      { q: 'Can you pave over the existing driveway?',
        a: ['Sometimes, but usually it is a false economy. Overlaying leaves whatever caused the original failure in place underneath, so cracks reflect back through the new surface, often within a couple of seasons. If the base is sound and the problem is genuinely surface-level, we will tell you an overlay is reasonable. More often, the honest answer is that the base is the problem.'] },
      { q: 'When can I drive on it?',
        a: ['A paver driveway is ready as soon as the edging and jointing are finished. New asphalt needs to cure: light traffic after a day or two, and we ask you to keep heavy vehicles and sharp turning off it for longer than that, especially in hot weather. We give you specific timing for your job when we finish.'] },
      { q: 'Will you fix the drainage that ruined the old driveway?',
        a: ['Yes, and we will raise it whether or not you ask. Water is the reason most paving fails early. If the grading around your driveway is sending water the wrong way, replacing the surface without correcting it just buys you a few years before the same failure repeats. It goes in the estimate as a line item so you can see what it costs.'] },
    ],
    href: '/masonry/driveway-paving/',
    title: 'Driveway Paving',
    group: 'Masonry',
    // On /services/ this hub stands aside and its three material pages take
    // the slot instead — see buildServicesIndex() in build.mjs.
    splitOnIndex: true,
    card: 'Asphalt, concrete, and paver driveways across Northern Virginia. Base prep done right, every layer laid the way it should be.',
    image: 'driveway-paver-grey',
    feature: 'driveway-circle',
    gallery: ['driveway-circle', 'driveway-paver-grey', 'driveway-asphalt-new', 'driveway-roller', 'driveway-paver-tan', 'driveway-crew'],
    h1: 'Driveway Paving and Installation',
    intro: 'A professionally paved driveway does more than lift curb appeal: it improves safety, drainage, and the value of the property. Whether you are replacing a surface that has reached the end of its life or installing something new, the right materials and the right preparation make a difference you can see for decades.',
    sections: [
      {
        h: "Signs it's time to repave",
        p: [
          'Even a well-built driveway shows its age eventually. Cracking, potholes, water pooling after rain, and a faded, brittle surface all point toward repaving rather than patching. Uneven areas are not only unattractive; they become trip hazards and collect standing water.',
          'Once a driveway is past the point of minor repair, a new surface gives you a smoother, safer approach to the house and a chance to correct the drainage problems that shortened the life of the old one.',
        ],
      },
      {
        h: 'Choosing between asphalt, concrete, and pavers',
        p: [
          'The material decides the up-front price, the look, and how the driveway ages, and each of the three has a situation it is genuinely the right answer for. We walk through all three against your site, your budget, and how much maintenance you actually want to do, rather than steering you toward one by default. Each has its own page above if you want the detail.',
        ],
        list: [
          ['Asphalt', 'Least expensive up front and fastest to install. Flexes with the ground rather than cracking against it, and can be resurfaced later rather than replaced. Wants sealcoating every few years.'],
          ['Concrete', 'The cleanest uniform surface, and the one that takes finishes: broom, exposed aggregate, or stamped. Longer-lived than asphalt and lower maintenance, but rigid, so it needs a better base and honest control joints.'],
          ['Pavers', 'The only surface that repairs invisibly: individual units lift out and go back after a utility trench, a stain, or a settled area. Highest up-front cost, and the widest range of patterns, borders, and inlays.'],
        ],
      },
      {
        h: 'Built to hold up to daily use',
        p: [
          'Every driveway we build starts with site preparation: excavation, a compacted aggregate base, and attention to how water will leave the surface. Skipping that step is the most common reason driveways fail early, and it is the step you can never go back and fix.',
          'From base prep through precision finishing, each stage gets the same attention. The result is a surface built for daily traffic and Northern Virginia freeze-thaw cycles.',
        ],
      },
    ],
  },
  {
    slug: 'asphalt-driveways',
    parent: '/masonry/driveway-paving/',
    warranty: ['asphalt'],
    reviewFrom: 'RJ C.',
    process: [
      ['Site visit and written estimate', 'We measure the drive, look at where water currently goes, and check whether the failure you can see is a surface problem or a base problem. The estimate is itemized, so you can see what the tear-out costs and what the paving costs.'],
      ['Tear-out and excavation', 'The old asphalt comes up and goes away. We excavate to the depth the new section needs rather than the depth the old one happened to sit at. An undersized base is the reason most driveways in this area are being replaced ten years early.'],
      ['Base repair and compaction', 'Aggregate is laid and compacted in lifts. Soft spots get dug out and rebuilt rather than bridged over, because a soft spot under new asphalt reappears as a depression in the first year.'],
      ['Grading for drainage', 'Pitch is set so water sheets off the driveway and away from the garage and the foundation. Where the old drive was draining toward the house, this is the stage that corrects it.'],
      ['Paving in lifts', 'A binder course goes down first and is compacted, then the surface course. Two lifts on a residential drive is not overkill; it is what lets the mat carry vehicle loads without deforming at the wheel tracks.'],
      ['Rolling while hot', 'Compaction has a window measured in minutes, not hours. The roller works the mat while the material is still at temperature, which is what closes the surface and stops it ravelling at the edges a few winters in.'],
      ['Edges, seams, and cleanup', 'Edges are cut and tapered, the seam against the street or garage apron is sealed, and the site is swept. We walk the finished drive with you before we leave.'],
    ],
    faq: [
      { q: 'How much does an asphalt driveway cost?',
        a: ['It depends on square footage, how much tear-out and excavation is involved, whether the base needs rebuilding, and whether drainage has to be corrected. Asphalt is the least expensive of the three driveway surfaces up front, which is the main reason homeowners choose it.', 'We give you a written itemized price after seeing the site. We do not quote asphalt by the square foot over the phone, because the number that matters is what is under the surface, and nobody can see that from a driveway.'] },
      { q: 'How long before I can drive on new asphalt?',
        a: ['Light traffic after 24 to 48 hours in normal weather. New asphalt keeps curing for months, so for the first summer we ask you to avoid parking in the same spot for days at a time, turning the wheel while stationary, and putting jack stands or trailer jacks directly on the surface. We give you the specific timing for your job when we finish, because it depends on the temperature the week we paved.'] },
      { q: 'Can you resurface instead of replacing?',
        a: ['Sometimes. An overlay works when the base is genuinely sound and the problem is confined to the surface: oxidation, minor cracking, a tired-looking mat. It does not work when the driveway has alligator cracking, potholes, or areas that sink after rain, because those are base failures and they reflect straight back through new asphalt, often within two seasons.', 'We will tell you honestly which one you have. An overlay we know will fail is not a saving.'] },
      { q: 'When should an asphalt driveway be sealcoated?',
        a: ['Not immediately. New asphalt needs to cure and release its oils first, so the first sealcoat should wait roughly six to twelve months. After that, every three to five years is reasonable in this climate. Sealing more often than that does nothing useful and builds up a brittle film that cracks on its own.'] },
      { q: 'Can you pave in winter?',
        a: ['Not reliably. Asphalt has to be laid hot and compacted before it cools, and cold ground pulls the heat out of the mat before the roller can finish its work. We schedule paving into the warmer months and into dry windows, and we would rather move your date than lay a surface that will not hold. Excavation and base work can go ahead in colder weather.'] },
    ],
    href: '/masonry/asphalt-driveways/',
    title: 'Asphalt Driveways',
    group: 'Masonry',
    card: 'New asphalt driveways and full replacements. Torn out to depth, rebuilt on a compacted base, laid in lifts and rolled hot.',
    image: 'driveway-asphalt-new',
    feature: 'driveway-roller',
    gallery: ['driveway-asphalt-new', 'driveway-asphalt-curve', 'driveway-roller', 'driveway-crew', 'driveway-asphalt-cone', 'driveway-prep'],
    h1: 'Asphalt Driveway Installation and Replacement',
    intro: 'Asphalt is the fastest and least expensive way to get a driveway that carries daily traffic and sheds water properly, provided the base underneath it is built to do its job. We tear out to depth, rebuild the base, and lay the mat in lifts.',
    sections: [
      {
        h: 'When asphalt is the right choice',
        p: [
          'Asphalt costs less up front than concrete or pavers, goes down in a day or two once the base is ready, and flexes with the ground rather than cracking against it. On a long or sloped driveway, where a rigid surface would need control joints every few feet, that flexibility is a genuine advantage rather than a compromise.',
          'It is also the easiest surface to bring back. A tired asphalt drive over a sound base can be overlaid; a tired concrete drive generally cannot. If you expect to be in the house a long time and want the lowest cost of ownership rather than the lowest cost today, that matters.',
        ],
      },
      {
        h: 'What kills an asphalt driveway early',
        p: [
          'Almost never the asphalt. Alligator cracking, the interlocking web of fine cracks that looks like reptile skin, means the base beneath has failed and is moving under load. Potholes are the same story further along. Depressions that hold water after rain are a base that was never compacted properly, or a soft spot that was paved over instead of dug out.',
          'Edge ravelling, where the perimeter crumbles away a handful of stones at a time, is the one genuine surface failure, and it comes from compaction that was rushed or from an unsupported edge. All of it is decided before the paver truck arrives, which is why we spend most of a driveway job below the surface.',
        ],
        list: [
          ['Alligator cracking', 'Base failure. An overlay will crack in the same pattern within a season or two. The honest fix is a tear-out.'],
          ['Standing water', 'Either grading that never shed water or a settled area over a soft spot. Both get corrected during excavation.'],
          ['Potholes', 'Water has got into the base and is washing it out under traffic. Patching buys time; it does not stop it.'],
          ['Crumbling edges', 'Compaction or edge support. New paving is cut and tapered at the perimeter so the edge is not left standing proud.'],
        ],
      },
      {
        h: 'Two lifts, not one',
        p: [
          'A residential asphalt driveway laid in a single thin mat looks identical on the day it is finished and behaves differently a few years later. We lay a binder course of coarser mix first and compact it, then the finer surface course on top. The binder carries the load; the surface course sheds water and gives you the finish.',
          'It costs more and takes longer than a single pass, and it is the difference between wheel tracks that stay flat and wheel tracks that slowly print themselves into the driveway where the cars park.',
        ],
      },
      {
        h: 'Drainage comes first, always',
        p: [
          'Water is what destroys asphalt, and it does the damage from underneath. If the grading around your driveway sends runoff toward the house or ponds at the low end, replacing the surface without fixing that just resets the clock on the same failure.',
          'We look at where water arrives, where it currently sits, and where it should be going, and we price the correction as a visible line item so you can decide with the numbers in front of you. Where the fix needs a French drain or a trench drain rather than regrading, we build that too.',
        ],
      },
    ],
  },
  {
    slug: 'concrete-driveways',
    parent: '/masonry/driveway-paving/',
    warranty: ['concrete'],
    reviewFrom: 'RJ C.',
    process: [
      ['Site visit and written estimate', 'We measure, check access for the truck, and agree the finish (broom, exposed aggregate, or stamped) before anything is priced. Finish affects cost, so it belongs in the estimate rather than in a conversation on pour day.'],
      ['Demolition and excavation', 'The old surface is broken out and hauled away, and the subgrade is cut to the depth the new slab and its base need.'],
      ['Base and compaction', 'Compacted aggregate under the slab, in lifts. Concrete is rigid: it does not tolerate a base that settles unevenly, and the result of one is a crack you cannot lift out and reset.'],
      ['Forming and grading', 'Forms are set to the finished line and the fall is established so water leaves the slab and travels away from the house and garage.'],
      ['Reinforcement', 'Rebar or mesh goes in on chairs so it sits within the slab rather than on the ground under it. Steel lying on the subgrade is doing nothing.'],
      ['Pour, screed, and finish', 'Placed, screeded, floated, and finished to the agreed texture. Timing here is everything: a slab finished too early traps bleed water and a slab finished too late is fighting the set.'],
      ['Jointing and curing', 'Control joints are cut at the right spacing and depth so the slab cracks where we decided rather than where it chooses, and the surface is kept damp or covered while it cures.'],
    ],
    faq: [
      { q: 'How long before I can drive on a new concrete driveway?',
        a: ['Foot traffic after 24 to 48 hours. Vehicles after seven days as a rule, and we ask you to keep anything heavier than a car (a loaded truck, a dumpster, a delivery lorry) off it for a full 28 days, which is when concrete reaches its design strength. We give you exact dates when the pour is done.'] },
      { q: 'Will my concrete driveway crack?',
        a: ['Concrete shrinks as it cures, and shrinkage has to go somewhere. The job of a control joint is to decide where. Cut at the right spacing and to a quarter of the slab depth, joints give the slab a weak line to crack along, and the crack happens inside the joint where you never see it.', 'What is not normal is random cracking across the field, and that comes from an inadequate base, missing or badly placed joints, reinforcement lying on the ground, or a slab that was poured too wet. Those are all decisions made before the truck leaves.'] },
      { q: 'Concrete or asphalt?',
        a: ['Concrete costs more up front, lasts longer with less attention, stays lighter and cooler underfoot, and takes finishes (broom, exposed aggregate, stamped patterns) that asphalt cannot. It is also rigid, which means it needs a better base and it does not forgive ground movement.', 'Asphalt is cheaper, faster, flexes with the ground, and can be resurfaced later. If you want the lowest price today, asphalt. If you want the surface to still look deliberate in twenty years, concrete.'] },
      { q: 'Can you pour concrete in cold weather?',
        a: ['Yes, with precautions. Concrete does not cure below about 40°F and freezing during the first days does permanent damage, so a winter pour means watching the forecast for a clear window, using the right mix, and protecting the slab with blankets while it sets. We schedule around the weather rather than pretending it does not matter.'] },
      { q: 'Do I need to seal a concrete driveway?',
        a: ['It is worth doing in this climate. A penetrating sealer slows the water absorption that drives freeze-thaw spalling and helps against de-icing salt, which is harder on concrete than winter itself. First application once the slab has cured, then every few years. It is optional; the driveway will not fail without it, but it will age faster.'] },
    ],
    href: '/masonry/concrete-driveways/',
    title: 'Concrete Driveways',
    group: 'Masonry',
    card: 'Poured concrete driveways in broom, exposed aggregate, and stamped finishes, reinforced, jointed properly, and graded to drain.',
    // Both point at the Annandale project photo rather than a manifest slug —
    // it is the only finished poured-concrete drive we have photographed, and
    // mediaFor() in build.mjs resolves a project slug the same way.
    image: 'stamped-concrete-driveway-annandale-va',
    feature: 'stamped-concrete-driveway-annandale-va',
    gallery: ['driveway-prep', 'foundation-driveway', 'driveway-crew'],
    h1: 'Concrete Driveway Installation',
    intro: 'A poured concrete driveway is the cleanest uniform surface you can put in front of a house, and the one that asks least of you once it is in. It is also unforgiving of shortcuts: the base, the steel, and the joints all have to be right, because none of them can be corrected afterwards.',
    sections: [
      {
        h: 'Finishes worth knowing about',
        p: [
          'Concrete is not one look. The finish is chosen on pour day and it cannot be changed later, so it is worth deciding deliberately rather than defaulting to whatever is quickest.',
        ],
        list: [
          ['Broom finish', 'The standard, and the most practical. A light drag across the fresh surface gives the traction that keeps a driveway safe in a wet Northern Virginia winter.'],
          ['Exposed aggregate', 'The top paste is washed back to reveal the stone in the mix. Textured, hard-wearing, and it hides surface staining far better than a smooth slab.'],
          ['Stamped concrete', 'Textured while plastic to read as slate, ashlar, or brick, and integrally coloured. A continuous surface with no joints for weeds, at a fraction of the cost of the material it imitates.'],
          ['Concrete with a paver border', 'A soldier course of pavers down each edge. It terminates the slab cleanly against the lawn and defines a curve that a raw concrete edge would make look accidental.'],
        ],
      },
      {
        h: 'The three things that decide whether it lasts',
        p: [
          'Base, steel, and joints. A compacted aggregate base spreads the load and gives the slab something that will not settle under it. Reinforcement sits on chairs inside the slab, not underneath it, so it is actually holding the concrete together across a crack rather than resting uselessly on the subgrade.',
          'Control joints are cut at spacing appropriate to the slab thickness and to a depth of about a quarter of it. Get that wrong and the slab cracks wherever it likes. Get it right and you never see a crack, because every one of them is hiding in a joint.',
        ],
      },
      {
        h: 'Freeze-thaw, salt, and what to expect here',
        p: [
          'Northern Virginia gives concrete a hard time: repeated freeze-thaw cycling all winter, and de-icing salt on top of it. Water that gets into the surface expands as it freezes and lifts the paste away in flakes (spalling) and salt accelerates the process considerably.',
          'The defences are an air-entrained mix, a properly finished surface that is not overworked into a weak skin, drainage that does not leave water standing on the slab, and a penetrating sealer applied after the cure. We specify all of that as standard rather than as an upgrade.',
        ],
      },
      {
        h: 'Replacing a failed concrete driveway',
        p: [
          'Concrete that has cracked across the field, tipped at the joints, or spalled through to the aggregate has generally reached the end of what repair can do for it. Resurfacing a moving slab puts a new coating on the same problem.',
          'We break it out, address whatever caused the failure, nearly always base or water, and pour a new slab that is jointed and reinforced properly. If the honest answer is that a section can be cut out and replaced rather than the whole drive, we will tell you that instead.',
        ],
      },
    ],
  },
  {
    slug: 'paver-driveways',
    parent: '/masonry/driveway-paving/',
    warranty: ['pavers'],
    reviewFrom: 'Eric O.',
    process: [
      ['Design and material selection', 'Pattern, colour, border, and any inlay are settled first, against the house rather than against a brochure. A driveway is the largest single surface on most properties and it sets the tone for everything else.'],
      ['Excavation', 'Dug out considerably deeper than a patio would be. A driveway carries vehicle loads, and the depth of the base is what carries them.'],
      ['Base and compaction', 'Aggregate in lifts, each one compacted before the next goes on. This is the whole job. Everything visible sits on top of it.'],
      ['Grading', 'Pitch set across the finished level so water leaves the surface and travels away from the garage and the house.'],
      ['Bedding and laying', 'A screeded bedding layer, then units set to the pattern, worked off the laid field so the courses stay true.'],
      ['Cutting and bordering', 'Perimeter cuts are made to fit rather than filled with slivers, and the soldier course or border is set to lock the field.'],
      ['Edge restraint, jointing, compaction', 'Edge restraint is installed, joint sand is swept in, the field is plate-compacted, and the joints are topped and compacted again.'],
    ],
    faq: [
      { q: 'Are paver driveways strong enough for vehicles?',
        a: ['Yes, interlocking concrete pavers are used on port aprons and bus lanes, which are considerably harder duty than a family car. The strength comes from two things: the units interlock so load spreads sideways into neighbouring pavers instead of punching straight down, and the base under a driveway is built deeper than the base under a patio.', 'What matters is that it was built as a driveway. A paver surface laid on a patio-depth base will rut where the wheels sit, and no paver can compensate for that.'] },
      { q: 'Will weeds grow between the pavers?',
        a: ['Some, eventually, and not from below. Weed seed blows in and germinates in the joint sand at the surface. Polymeric jointing sand, compacted in properly, largely prevents it and is what we use as standard. A few volunteers a year at the edges is normal and pulls out by hand.'] },
      { q: 'What happens if a paver gets stained or damaged?',
        a: ['You replace that paver. This is the real advantage of the material and the reason it holds its value: an oil stain, a cracked unit, or a utility trench across the drive is a repair that lifts out and goes back invisibly. The same events on asphalt or concrete leave a patch you will look at for the rest of the time you own the house.', 'We leave you spare units from the same batch when we finish, so a future repair matches rather than approximately matches.'] },
      { q: 'Do paver driveways sink or shift?',
        a: ['A properly built one moves very little. Settling comes from a base that was not compacted in lifts, from a base that was not deep enough for vehicle loads, or from water travelling under the surface because the grade sends it the wrong way. All three are decided before a single paver is laid.', 'When a paver drive does settle, the fix is genuinely a fix: the field is lifted, the base corrected and recompacted, and the same units reset. You rarely need new material.'] },
      { q: 'How much more do pavers cost than asphalt?',
        a: ['Meaningfully more up front: the excavation is deeper, the base is heavier, and the units are set by hand one at a time. Over twenty years the gap narrows, because pavers do not need resurfacing and repairs do not leave scars. We price both against your actual driveway so you are comparing real numbers rather than averages.'] },
    ],
    href: '/masonry/paver-driveways/',
    title: 'Paver Driveways',
    group: 'Masonry',
    card: 'Interlocking paver driveways with borders, banding, and circular inlays. Set on a driveway-depth base, and repairable unit by unit.',
    image: 'driveway-paver-grey',
    feature: 'driveway-circle',
    gallery: ['driveway-circle', 'hero-herringbone', 'driveway-paver-grey', 'driveway-paver-tan', 'driveway-paver-blue', 'driveway-paver-band', 'driveway-paver-wide'],
    h1: 'Paver Driveway Installation',
    intro: 'A paver driveway is the one surface that can be repaired without leaving a mark. Individual units lift out and go back (after a utility trench, an oil spill, or a settled area), which is why a paver drive twenty years on can still look like the day it was laid.',
    sections: [
      {
        h: 'Patterns, borders, and inlays',
        p: [
          'The pattern does real work on a surface this large. Herringbone is the strongest bond you can lay, because every unit locks against its neighbours in two directions and load spreads rather than concentrating; it is the right choice anywhere vehicles turn or brake. Running bond is calmer and pulls the eye toward the house.',
          'A soldier course around the perimeter is not decoration: it locks the field and gives the driveway a deliberate edge against the lawn. Banding across the width breaks up a long run, and a circular medallion set on axis with the garage doors gives a wide apron a centre instead of leaving it as an expanse of paving.',
        ],
      },
      {
        h: 'Why the base is deeper than you expect',
        p: [
          'The pavers are the least important part of a paver driveway. Under them sits a bedding layer, and under that a compacted aggregate base built considerably deeper than the one beneath a patio, because a car concentrates several thousand pounds into four small contact patches and the base is what spreads that out.',
          'It is compacted in lifts rather than all at once, because a thick layer compacted from the top is dense at the top and loose underneath. This is the part of the job nobody photographs and the only part that cannot be corrected later.',
        ],
      },
      {
        h: 'Materials that suit the house',
        p: [
          'Concrete pavers come in tumbled, smooth, and textured faces and in a range of formats, from small cobble units to large-format slabs. Clay brick pavers hold their colour permanently because the colour is the fired clay itself rather than a pigment, which is why a brick drive laid beside a brick house still matches decades later.',
          'We choose against the house (its brick, its stone, its roof) and we deliberately avoid an exact match, which flattens both surfaces. Picking up a tone rather than copying it is what makes new paving look like it belongs.',
        ],
      },
      {
        h: 'Living with a paver driveway',
        p: [
          'Very little maintenance, and what there is is simple. Sweep it. Top up the joint sand every few years where it has washed low. Pull the occasional weed from the perimeter. Sealing is optional and mostly cosmetic (it deepens the colour and helps against oil) and it is not required for the surface to perform.',
          'Snow clearing is no different from any other driveway, though a plough blade should be run with a shoe or a rubber edge so it rides over the surface rather than catching a raised unit.',
        ],
      },
    ],
  },
  {
    slug: 'brickwork',
    warranty: ['masonry'],
    reviewFrom: 'Jason S.',
    process: [
      ['Assessment and brick matching', 'We look at what is already there (the brick size, color, texture, and the bond it was laid in) and work out what will blend. On repairs, matching the existing brick matters more than anything else you choose.'],
      ['Mortar analysis', 'Old brick was laid with softer mortar than modern mixes. We match the mortar to the brick rather than defaulting to the strongest available, because a mortar harder than the brick will destroy the brick instead of protecting it.'],
      ['Preparation and demolition', 'Failed material comes out, joints are raked to depth, and surfaces are cleaned. On new work, the base or substrate is prepared first.'],
      ['Layout and dry bond', 'Courses are laid out dry so the pattern lands correctly at corners, edges, and openings. This is where a bond pattern either reads as deliberate or reads as improvised.'],
      ['Laying or repointing', 'Brick is laid and joints are struck to match the existing profile. Consistency in the joint is what your eye actually reads as good brickwork.'],
      ['Cleaning and cure', 'The work is cleaned down without acid-washing new mortar prematurely, and left to cure. We clean the site at the end of every day, not just at the end of the job.'],
    ],
    faq: [
      { q: 'Can you match my existing brick?',
        a: ['Usually, and it is the first thing we look at. Brick sizes and colors have changed over the decades, so a close match often means sourcing a reclaimed or specialty brick rather than picking the nearest thing off a pallet. On an older house we will show you options before ordering, because a mismatch on a front facade is permanent and obvious.'] },
      { q: 'What is repointing, and how do I know if I need it?',
        a: ['Repointing is raking out failed mortar joints and replacing them. You need it when mortar is crumbling, has receded noticeably behind the face of the brick, or you can rake it out with a key. Left alone, open joints let water into the wall, and freeze-thaw does the rest, at which point you are replacing brick rather than mortar.'] },
      { q: 'Will the new mortar match the old?',
        a: ['We mix to match color and tool the joint to the same profile, and on most walls the repair reads as part of the wall within a season. New mortar cures lighter and darkens as it weathers, so there is usually a visible difference for the first few months. We tell you that up front rather than letting you discover it.'] },
      { q: 'Why is there white powder on my brick?',
        a: ['That is efflorescence: mineral salts carried to the surface by water moving through the masonry. It is cosmetic in itself and often washes off, but it is a signal worth reading: it means water is getting into the wall and traveling. If it keeps returning after cleaning, the useful question is where the water is coming in, not how to scrub it off.'] },
    ],
    href: '/masonry/brickwork/',
    title: 'Brickwork',
    group: 'Masonry',
    card: 'Brick patios, entryways, steps, facades, and repointing. Traditional technique, materials chosen to match what is already there.',
    image: 'walkway-brick',
    feature: 'steps-stone',
    gallery: ['steps-brick', 'walkway-brick', 'brick-flooring', 'patio-red', 'steps-landing', 'wall-brick-long'],
    h1: 'Brickwork That Adds Character and Lasting Value',
    intro: 'Quality brickwork does not just change how a property looks; it adds character, strength, and value that holds. Whether you are refreshing a worn exterior, building something new, or restoring detail that has been lost, expert craftsmanship is what separates work that lasts from work that has to be redone.',
    sections: [
      {
        h: 'Custom brickwork designed to last',
        p: [
          'Every home deserves brick features built with care and attention to detail. Our projects are tailored to fit your style, whether that is a new patio, an elegant entryway, or a full exterior upgrade.',
          'We use premium materials and time-tested techniques so that every structure stands up to the elements and to time. We also help with the decisions that are easy to get wrong (color, bond pattern, and layout) so the finished work reads as though it was always part of the house.',
        ],
      },
      {
        h: 'Traditional technique, modern materials',
        p: [
          'Good brickwork honors the traditions of the craft while taking advantage of what modern materials do better. We blend old-world technique with current methods to deliver results that are classic and functional at once.',
          'Whether we are restoring a historic feature or building something entirely new, the approach is the same: care, precision, and materials that meet today’s performance standards without losing the timeless look.',
        ],
      },
      {
        h: 'Serving homeowners across Northern Virginia',
        p: [
          'We are proud to work throughout Northern Virginia and the surrounding communities, on everything from intricate facades to sturdy retaining walls and pathways. Local knowledge matters more than people expect: soil, drainage, and the way local weather works on mortar all shape how a job should be built.',
        ],
      },
    ],
  },
  {
    slug: 'retaining-walls',
    warranty: ['walls'],
    reviewFrom: 'Patricia W.',
    process: [
      ['Survey the slope and the water', 'We measure the grade, work out how much soil the wall actually has to hold, and trace where water moves across the site. Load and water are what size the wall; the look is chosen afterward.'],
      ['Design, engineering, and permits', 'Taller walls and walls carrying a surcharge such as a driveway need an engineered design and a permit. We tell you which category yours falls into before you commit, and confirm the requirement with your jurisdiction rather than guessing.'],
      ['Excavation and footing', 'We dig below the finished grade and build a compacted aggregate footing. The first course sits below ground level, which is what stops the wall walking forward over time.'],
      ['Drainage detail', 'Open-graded backfill, filter fabric, and an outlet that carries water somewhere useful. Most wall failures are water failures, and this is the stage that decides whether yours is one of them.'],
      ['Courses and backfill', 'Units are set level and backfilled as we go, compacting in lifts behind the wall rather than dumping soil in at the end.'],
      ['Caps and finish grading', 'Caps are set and secured, grade is restored above and below, and the site is cleaned up.'],
    ],
    faq: [
      { q: 'How tall can a wall be before it needs an engineer?',
        a: ['In most Northern Virginia jurisdictions the threshold is around four feet, measured from the bottom of the footing rather than from the ground you are standing on, which catches people out, because a wall that looks three feet tall may not be. Walls carrying extra load above them, such as a driveway or a slope, can trigger the requirement lower.', 'We confirm the specific requirement with your county before we build rather than working from a rule of thumb.'] },
      { q: 'Do you handle the permit?',
        a: ['Where a permit is required we walk you through what is needed and coordinate with the jurisdiction. What we will not do is build a wall that needed a permit without one; it is your property that carries the consequence at resale or inspection, not ours.'] },
      { q: 'Why do retaining walls fail?',
        a: ['Almost always water, not weight. Soil that cannot drain becomes far heavier than the wall was built to hold, and hydrostatic pressure pushes it out from behind. The second cause is a footing that was not dug below grade or not compacted. Both are invisible once the wall is finished, which is exactly why they get skipped.'] },
      { q: 'Segmental block or natural stone?',
        a: ['Block is engineered, consistent, and the straightforward choice for a structural wall of any height; it is designed to lock together and to be built to a spec. Natural stone costs more and takes longer, and it looks like nothing else. Many properties end up with block where the wall is doing structural work and stone where it is doing visual work.'] },
    ],
    href: '/masonry/retaining-walls/',
    title: 'Retaining Walls',
    group: 'Masonry',
    card: 'Natural stone and segmental block walls that hold back soil, stop erosion, and add real structure to a yard.',
    image: 'wall-closeup',
    feature: 'wall-curved',
    gallery: ['wall-curved', 'wall-build', 'wall-steps', 'wall-closeup', 'wall-brick-long', 'wall-hero'],
    h1: 'Custom Retaining Walls Built for Strength and Style',
    intro: 'Retaining walls do more than hold back soil. They create structure, add depth to landscaping, and protect a property from erosion. Ours are built to match your style while standing up to the pressure behind them, because a retaining wall that looks good and fails in five years has not done its job.',
    sections: [
      {
        h: 'Strength, stability, and style together',
        p: [
          'We combine structural integrity with thoughtful design. Proper installation is the whole game: we take the time to prepare each site carefully so the wall resists shifting, hydrostatic pressure, and erosion.',
          'Material and design options run from natural stone to segmental concrete block, which means there is a solution that fits almost any property and budget. The result is functional, good-looking, and adds real value to the space around it.',
        ],
      },
      {
        h: 'Design ideas worth considering',
        p: [
          'A retaining wall can completely change the look and usable layout of a yard. Whether you prefer something sleek and modern or natural and rustic, the design should follow the land as much as the house.',
        ],
        list: [
          ['Natural stone walls', 'A timeless, organic look that suits traditional and modern landscapes alike. Especially good for garden borders, raised beds, and sloped yards.'],
          ['Segmental block walls', 'Clean lines and consistent structure, with an interlocking design that delivers long-term stability and a uniform look.'],
          ['Tiered walls', 'Multiple levels add dimension, maximize planting space, and improve drainage on steeper slopes.'],
          ['Planter-integrated walls', 'Planting areas built directly into the wall, adding greenery without giving up yard space.'],
          ['Curved walls', 'A softer shape than straight runs, well suited to garden settings and pathways where flow matters.'],
          ['Seat walls', 'Double as built-in outdoor seating around patios and fire pits, which makes entertaining easier without adding furniture.'],
        ],
      },
      {
        h: 'Drainage is not optional',
        p: [
          'Most retaining wall failures trace back to water, not weight. Every wall we build gets the drainage detail it needs: open-graded backfill, filter fabric, and outlets that actually carry water away from the structure.',
        ],
      },
    ],
  },
  {
    slug: 'foundation-repair',
    reviewFrom: 'Jason S.',
    process: [
      ['Inspection and diagnosis', 'We look at the crack pattern, the direction of movement, and the ground around the house. What a crack looks like tells you a great deal about whether it is settlement, water, or seasonal movement, and those need different repairs.'],
      ['Find the water', 'Most foundation problems are water problems first. Gutters discharging at the wall, grade pitched toward the house, and a driveway or patio draining the wrong way are ordinary causes with ordinary fixes.'],
      ['Written scope and honest scoping', 'You get an itemized estimate and a straight answer about urgency. If a crack is stable and cosmetic, we say so.'],
      ['Excavation where needed', 'Exterior repairs mean opening up the ground against the wall. We protect what we can and restore what we disturb.'],
      ['Repair and stabilization', 'Cracks are cut, cleaned, and filled properly rather than skimmed over, and the affected masonry is rebuilt where rebuilding is what it needs.'],
      ['Drainage correction and restoration', 'The water path is corrected so the repair is not undone by the thing that caused it, then grade, plantings, and surfaces go back.'],
    ],
    faq: [
      { q: 'How do I know whether a crack is serious?',
        a: ['Width, direction, and whether it is moving. Fine vertical cracks in a poured wall are common and often cosmetic. Horizontal cracks, stair-step cracking through block joints, and any crack wide enough to put a coin into are worth looking at now rather than next year. So is a crack that has visibly changed since you first noticed it.', 'If you are unsure, that is what a free estimate is for. We would rather look and tell you it can wait.'] },
      { q: 'Is this masonry work or structural engineering?',
        a: ['Some of it is neither ours to do nor safe to guess at. Crack repair, stabilization, repointing, waterproofing, and rebuilding damaged masonry are masonry work. Underpinning, piering, and anything involving structural movement of the house belong to a structural engineer, and the honest thing is to tell you that rather than take the job.', 'If what your house needs is outside masonry repair, we will say so plainly.'] },
      { q: 'Will you tell me if the repair can wait?',
        a: ['Yes. A foundation is the one place where the cheapest version of a problem is the version you catch early, so there is nothing to gain from us talking you into work you do not need, and a great deal to lose. Several of our reviews mention exactly this.'] },
      { q: 'Why does foundation work cost so differently from job to job?',
        a: ['Because the visible crack is rarely the whole scope. The type of foundation, the extent of damage behind the surface, how accessible the repair area is, how much excavation is needed, and the soil conditions around the house all move the number substantially. We break the estimate out by line so you can see which of those is driving your price.'] },
    ],
    href: '/masonry/foundation-repair/',
    title: 'Foundation Repair',
    group: 'Masonry',
    card: 'Crack repair, stabilization, and restoration. Early attention to a foundation problem is the cheapest it will ever be.',
    image: 'foundation-exterior',
    feature: 'foundation-exterior',
    gallery: ['foundation-exterior', 'foundation-driveway'],
    h1: 'Professional Foundation Repair in Northern Virginia',
    intro: 'Your foundation is the most important structural element of the house, and protecting it means protecting the whole investment. Cracks, shifting, and settling get worse quickly when they are left alone, which is why early detection and timely repair matter so much.',
    sections: [
      {
        h: 'Stop the damage early',
        p: [
          'Small cracks turn into big problems when they are not addressed. We stabilize the structure and protect against water intrusion, soil movement, and the damage that follows both.',
          'Catching a problem early preserves the strength of the foundation and saves you from far more extensive and expensive work later. We identify the problem areas and deliver repairs built to hold.',
        ],
      },
      {
        h: 'What drives the cost of a repair',
        p: [
          'No two foundation repairs are the same. The size and type of the damage, the foundation construction, the materials required, and how accessible the repair area is all affect the total.',
          'Soil conditions around the house and the extent of any underlying issues matter too. During your consultation we walk you through a clear, itemized estimate so you know exactly what you are looking at before anything starts.',
        ],
      },
      {
        h: 'Repairs you can rely on',
        p: [
          'From minor crack repair through major structural restoration, the goal is the same: a solution that holds, explained honestly, priced transparently. We would rather tell you a repair can wait than sell you work you do not need.',
        ],
      },
      {
        h: 'What we repair',
        p: [
          'Foundation work covers a wide range, from a morning of crack repair to rebuilding a failed section of wall. These are the jobs we are called out for most:',
        ],
        list: [
          ['Crack repair and sealing', 'Cracks cut back, cleaned, and filled properly so the repair bonds to sound material instead of sitting on the surface.'],
          ['Block and brick foundation repair', 'Failed courses rebuilt and deteriorated mortar joints repointed, matched to the existing construction.'],
          ['Parging and resurfacing', 'A failed or spalling exterior coating removed and replaced, which protects the wall as well as tidying it.'],
          ['Water intrusion and exterior waterproofing', 'Excavating against the wall, treating it, and correcting where water is arriving from in the first place.'],
          ['Drainage correction', 'Regrading, redirecting downspout discharge, and fixing hardscape that pitches water back toward the house.'],
          ['Settlement and stabilization', 'Stabilizing masonry that has moved, and rebuilding where the material is past repair.'],
        ],
      },
      {
        h: 'The problems behind the problem',
        p: [
          'Foundations rarely fail on their own. In the great majority of what we see, the foundation is the place where a water problem somewhere else on the property finally became visible: gutters discharging at the wall, ground pitched toward the house rather than away, a driveway or patio draining backward, or a downspout that runs into a buried line nobody has checked in twenty years.',
          'That is why our first visit spends as much time on the ground around the house as on the crack you called about. Repairing masonry while leaving the water in place produces a repair that fails again, on your money the second time. If the cause is something simple and cheap, we would rather tell you to fix that and watch the crack.',
        ],
      },
    ],
  },
  {
    slug: 'chimney-repair',
    reviewFrom: 'Jason S.',
    process: [
      ['Inspection from the ground and the roof', 'A chimney has to be looked at from above to be assessed honestly. We check the crown, the flashing, the joint at the roofline, and the condition of the mortar on every face.'],
      ['Trace the water path', 'Almost every chimney problem is water finding a way in. Before scoping a repair we work out where it is entering, because repairing the symptom leaves the leak in place.'],
      ['Written scope', 'You get an itemized estimate that says which parts need work now and which are worth watching. Chimneys are easy to over-scope, and we would rather be specific.'],
      ['Repointing, crown, and flashing', 'Failed joints are raked and repointed, cracked or spalled brick is replaced, the crown is repaired or recast with a proper overhang and drip edge, and flashing is reset so the roof-to-chimney joint actually sheds water.'],
      ['Rebuild where repair will not hold', 'Where deterioration has gone too far, the affected section is taken down and rebuilt rather than patched. We tell you which one you are looking at before we start.'],
      ['Weatherproofing and cleanup', 'Where appropriate, a breathable water repellent goes on so masonry can still dry outward, and the roof and grounds are cleared of debris.'],
    ],
    faq: [
      { q: 'What is a chimney crown, and why does it matter so much?',
        a: ['The crown is the sloped slab across the top of the chimney that sheds water away from the masonry below. When it cracks (and thin, poorly formed crowns crack early) water runs straight down inside the chimney structure. A large share of the chimney damage we are called out to look at started as a failed crown, which is why we assess it first.'] },
      { q: 'How often does a chimney need repointing?',
        a: ['There is no fixed interval; it depends on exposure, the original mortar, and how much weather that face of the house takes. A chimney is the most exposed masonry on the building, so it almost always needs attention before the walls do. The practical answer is to look at it when you notice receding joints, spalling brick faces, or staining on the interior near the fireplace.'] },
      { q: 'I have a stain on the ceiling near the chimney. Is that the chimney?',
        a: ['Often, and the usual culprit is flashing rather than the brickwork. Flashing is the metal that seals the joint between the chimney and the roof, and when it lifts, corrodes, or was poorly detailed to begin with, water gets in at exactly that point. It is worth looking at before you repaint, because the stain will come back.'] },
      { q: 'Why does freeze-thaw damage matter here specifically?',
        a: ['Northern Virginia cycles above and below freezing repeatedly through a single winter rather than staying cold. Water that has soaked into a mortar joint expands each time it freezes and works the joint open a little more. That is why a small crack in November is a noticeably larger one by March, and why timing a repair before winter is worth doing.'] },
    ],
    href: '/masonry/chimney-repair/',
    title: 'Chimney Repair',
    group: 'Masonry',
    card: 'Repointing, crown and flashing repair, and rebuilds. A damaged chimney is a water problem before it is a fire problem.',
    image: 'chimney-home',
    feature: 'chimney-home',
    gallery: ['chimney-home'],
    h1: 'Chimney Repair and Restoration',
    intro: 'A damaged chimney leads to structural problems and safety risks, and it usually starts quietly. Whether the issue is cracked mortar, deteriorated flashing, or ordinary weathering, timely repair protects both the chimney and everything underneath it.',
    sections: [
      {
        h: 'Signs you may need chimney repair',
        p: [
          'Chimneys take constant weather from every direction. Small problems often go unnoticed until they cause water damage, heat loss, or structural movement. These are the indicators worth acting on:',
        ],
        list: [
          ['Cracks in the brick or crown', 'Visible cracking lets water in and accelerates deterioration, and can lead to shifting over time.'],
          ['Loose, missing, or damaged flashing', 'Flashing that has lifted or gone missing exposes the joint between chimney and roof. A small gap is enough.'],
          ['Water stains or moisture indoors', 'Spots, bubbling paint, or discoloration near the chimney usually mean water is already getting through.'],
          ['Rusted or corroded metal', 'Rust on flashing or the damper is direct evidence of moisture, and it weakens the assembly around it.'],
          ['Damp smells near the fireplace', 'Odors or a damp feeling point to hidden moisture, which leads to mold and mortar breakdown.'],
        ],
      },
      {
        h: 'Protecting the rest of the house',
        p: [
          'Your chimney shields the house from the elements, but minor issues like damaged flashing or failed mortar joints turn into serious structural problems when water reaches the roof deck, the walls, and the interior.',
          'We address the underlying cause rather than the symptom, which is the only way to keep the repair from coming back.',
        ],
      },
      {
        h: 'Local experience matters',
        p: [
          'Northern Virginia homes face seasonal swings that are hard on masonry: freeze-thaw cycles work on any joint that is already compromised. We know how local weather and aging construction materials interact, and we build repairs accordingly.',
        ],
      },
      {
        h: 'The repairs we carry out',
        p: [
          'Most chimneys need one or two of these rather than all of them, and a scope that lists everything is worth a second opinion:',
        ],
        list: [
          ['Repointing', 'Failed mortar joints raked back to sound material and replaced, matched in color and joint profile to the existing work.'],
          ['Crown repair or recasting', 'A cracked or undersized crown rebuilt with proper slope, overhang, and a drip edge so water is thrown clear of the brickwork.'],
          ['Flashing repair and replacement', 'The roof-to-chimney joint resealed and detailed correctly, the most common single source of a ceiling stain near a fireplace.'],
          ['Brick replacement', 'Spalled or cracked units cut out and replaced individually rather than skimmed over with mortar.'],
          ['Partial rebuild', 'Where deterioration has gone past repair, the affected section taken down to sound masonry and rebuilt.'],
          ['Waterproofing', 'A breathable repellent applied where it is appropriate, which sheds water while still letting the masonry dry outward.'],
        ],
      },
      {
        h: 'Matching mortar to the chimney you have',
        p: [
          'Mortar is not one product, and using the wrong one does real damage. Older brick is softer than modern brick and was laid with a softer lime-based mortar that was intended to move slightly and to fail before the brick does. Mortar is the sacrificial part of the wall by design.',
          'Repointing an older chimney with a modern high-strength mix produces joints harder than the brick around them. The assembly still has to move, so instead of the mortar giving, the faces of the brick spall off. It is a common and expensive mistake, and it is why we match the mortar to what is already there rather than defaulting to the strongest bag available.',
        ],
      },
    ],
  },
  {
    slug: 'patio-design',
    warranty: ['pavers', 'concrete', 'masonry'],
    reviewFrom: 'Patricia W.',
    process: [
      ['How you will actually use it', 'Before any layout, we talk about what the space is for (dining, a fire feature, a route to somewhere else) and how many people at once. Patios that feel wrong are usually the right material at the wrong size.'],
      ['Layout and material selection', 'We set the shape and size out on the ground so you can walk it before anything is dug, and choose material against the house, the light, and the maintenance you are willing to do.'],
      ['Excavation', 'The area is dug out to the depth the base needs, not to the depth that happens to be convenient. This is the stage that decides whether it stays level.'],
      ['Base and compaction', 'Aggregate goes in and is compacted in lifts, with the grade already pitched so water leaves the surface and travels away from the house.'],
      ['Setting bed and laying', 'A screeded bedding layer, then units set to the pattern. Cuts at the edges are made to fit rather than filled in with slivers.'],
      ['Edging, jointing, and compaction', 'Edge restraint holds the field together, joints are filled with polymeric sand and compacted in, and the site is cleaned down.'],
      ['Walk it before we leave', 'We go over the finished patio with you, check the fall with a hose if there is any doubt, and leave you spare units from the same batch.'],
    ],
    faq: [
      { q: 'How long does a patio take to build?',
        a: ['Most residential patios run three to six days depending on size, access, and how much excavation is involved. A backyard that equipment cannot reach is the factor homeowners most often underestimate: wheelbarrowing base material by hand can add days to an otherwise straightforward job, and we account for it in the estimate rather than discovering it on day two.'] },
      { q: 'Pavers, natural stone, brick, or stamped concrete?',
        a: ['Pavers are the most forgiving over time: individual units lift and reset, so settling, staining, and utility work do not mean replacing the whole surface. Natural stone such as bluestone gives a look manufactured units do not, at a higher cost and with more hand-cutting. Clay brick holds its colour permanently and is the obvious answer beside a brick house.', 'Stamped concrete gives you one continuous surface with no joints for weeds, at a competitive price, with the trade-off that a crack in concrete is permanent in a way a lifted paver is not. We have a separate page on stamped concrete patios if that is the direction you are leaning.'] },
      { q: 'How big should my patio be?',
        a: ['Work backwards from the furniture. A four-person dining table with chairs that actually pull out needs roughly a twelve by twelve foot area to itself. A seating group around a fire feature needs about sixteen feet across before it stops feeling cramped. Add circulation space around each zone so people are not squeezing behind someone else’s chair.', 'This is why we lay the shape out on the ground first. A patio that looks generous on a drawing frequently is not, and moving a line on the grass costs nothing.'] },
      { q: 'Will my patio settle?',
        a: ['A properly built one settles very little, and what does happen is correctable. Settling comes from base material that was not compacted in lifts, or from water moving under the surface because the grade sends it the wrong way. Both are decisions made before a single paver is laid, which is why we spend more of the job below the surface than on it.'] },
      { q: 'Can you fix an existing patio that has sunk or pools water?',
        a: ['Yes, and it is a common call. With pavers, the field is lifted, the base corrected and recompacted, the grade re-established, and the same units reset; you generally do not need new material. If the original base was never adequate, we will tell you that rebuilding is the honest fix rather than relevelling something that will sink again.'] },
      { q: 'Do I need a permit for a patio?',
        a: ['A ground-level patio usually does not, but requirements vary by jurisdiction and change when steps, walls, or proximity to a property line are involved. We check with your county rather than assuming, and tell you before work is scheduled.'] },
    ],
    href: '/stone-work/patio-design/',
    title: 'Patio Installation & Design',
    group: 'Stone Work',
    card: 'Paver, natural stone, brick, and stamped concrete patios built from the base up, designed around how you actually use the space.',
    image: 'patio-firepit',
    feature: 'patio-firepit',
    gallery: ['patio-firepit', 'patio-cobble', 'patio-backyard', 'patio-pool', 'patio-stone', 'patio-red', 'patio-covered', 'patio-build', 'brick-flooring'],
    h1: 'Patio Installation and Design',
    intro: 'We build patios (paver, natural stone, brick, and stamped concrete) from the excavation up. The design work happens first and it matters, but what decides whether you are still happy with the patio in fifteen years is the base underneath it and where the water goes.',
    sections: [
      {
        h: 'The patios we build',
        p: [
          'Four materials cover almost every patio in Northern Virginia. They are not interchangeable: they cost differently, they age differently, and they suit different houses. We will tell you which one your site and your budget actually point at rather than steering you toward one by default.',
        ],
        list: [
          ['Paver patios', 'Interlocking concrete units in the widest range of colours, formats, and patterns. The most forgiving surface over time: individual units lift out and go back without a patch mark, so settling, staining, and future utility work are all repairs rather than replacements.'],
          ['Natural stone patios', 'Bluestone, flagstone, and irregular stone cut and fitted by hand. More labour and more cost, and a surface that manufactured units do not imitate convincingly. Set on a base like anything else, or mortared on a slab where the design calls for it.'],
          ['Brick patios', 'Clay brick in herringbone, basketweave, or running bond. The colour is fired into the clay so it does not fade, which is why a brick patio still matches the brick house it was built beside twenty years on.'],
          ['Stamped concrete patios', 'One continuous coloured and textured surface reading as slate, ashlar, or brick. No joints for weeds, competitive on price, and covered in detail on its own page.'],
        ],
      },
      {
        h: 'Designed around how the space gets used',
        p: [
          'The most common fault in a patio is not the material; it is the size and the shape. A dining area that cannot take a chair being pushed back, a fire pit circle that seats four when six people come over, a walkway route that makes everyone squeeze behind the grill: those are layout decisions, and they are permanent once the base is in.',
          'So we start with what the space is for and how many people use it at once, then set the shape out on the ground so you can stand in it. Zones get sized individually (dining, seating, cooking) with circulation between them, and the whole thing is checked against the doors it connects to and the view it is meant to face.',
        ],
      },
      {
        h: 'Built from the base up',
        p: [
          'Below every patio we install: excavation to a real depth, aggregate compacted in lifts rather than in one pass, a screeded bedding layer, and a grade set to carry water off the surface and away from the house. Edge restraint around the perimeter holds the field together, and polymeric sand in the joints is compacted in rather than swept over.',
          'None of that is visible when the job is finished, and all of it is the reason one patio is still flat in fifteen years and the one next door is rocking underfoot in three. It is also the part that cannot be corrected afterwards without lifting everything.',
        ],
      },
      {
        h: 'Fire features, seating walls, and built-in elements',
        p: [
          'A patio that includes somewhere to sit and something to gather around gets used in October. A low seating wall around a fire pit does two jobs at once: it retains the pad against the surrounding grade and seats another half-dozen people when the chairs are taken, and it wants to be built at a height where someone on the wall and someone in a chair are roughly level.',
          'Fire pits, outdoor fireplaces, grill surrounds, steps down to the lawn, and lighting courses are all easier and cheaper to build into the patio than to add to it later, because each of them changes the base layout. If any of it is a possibility, it is worth designing in now even if it is built next year.',
        ],
      },
      {
        h: 'Repairs, relevelling, and rebuilds',
        p: [
          'A great deal of our patio work is fixing someone else’s. Paver fields that have sunk in the middle, patios that pool water against the house, surfaces lifted by tree roots, and joints that have washed out and grown weeds are all routine, and with pavers the repair usually reuses the original material.',
          'What we will not do is relevel a surface that is going to sink again. If the base was never adequate or water is still arriving from somewhere, we will tell you that a rebuild, or a drainage correction first, is the honest answer, even though it is the larger job.',
        ],
      },
      {
        h: 'Built for the Northern Virginia climate',
        p: [
          'We build with materials suited to this climate: weather-resistant stone, properly specified pavers, and joints set to handle freeze-thaw movement. Water is the variable that decides everything: a patio that drains is a patio that survives winter, and one that holds water is being taken apart a fraction at a time every time it freezes.',
          'That is why the grade is set before the base goes in, and why we raise drainage on a patio estimate whether or not it was in the enquiry.',
        ],
      },
    ],
  },
  {
    slug: 'stamped-concrete-patios',
    parent: '/stone-work/patio-design/',
    warranty: ['concrete'],
    reviewFrom: 'Eric O.',
    process: [
      ['Pattern and colour selection', 'Pattern, base colour, and release colour are chosen together, because they only make sense together. We show you the combination rather than the swatch: a colour on a sample chip and the same colour across four hundred square feet are different experiences.'],
      ['Excavation and base', 'Dug out to depth and a compacted aggregate base laid in lifts. Stamped concrete is a slab like any other: it is rigid, and it needs a base that will not settle unevenly beneath it.'],
      ['Forming and grading', 'Forms set to the finished line, with the fall established so water sheds off the patio and away from the house.'],
      ['Reinforcement', 'Steel on chairs inside the slab. Fibre mesh in the mix where it suits the pour. Reinforcement lying on the subgrade is not reinforcement.'],
      ['Pour and colouring', 'Placed and screeded, then integrally coloured or colour-hardened across the surface, depending on the finish agreed.'],
      ['Stamping', 'Mats are worked into the surface within the window while the concrete is still plastic. This is the part that cannot be redone: the timing decides whether the texture is crisp or soft, and it is measured in minutes.'],
      ['Jointing, curing, and sealing', 'Control joints cut into the pattern so they read as part of it, the slab cured properly, and a sealer applied once it has. The sealer is what holds the colour.'],
    ],
    faq: [
      { q: 'How does stamped concrete compare with pavers?',
        a: ['Stamped concrete gives you a continuous surface with no joints for weeds and no individual units to settle, generally at a lower installed cost than natural stone and comparable to good pavers. It reads as slate, ashlar, or brick from a normal viewing distance.', 'Pavers win on repairability. A stained or cracked paver lifts out; a crack in a stamped slab is permanent, and a repair will be visible because matching colour and texture on an existing slab is very difficult. Choose stamped concrete for the surface and the price, pavers for the ability to undo things.'] },
      { q: 'Will a stamped concrete patio crack?',
        a: ['It can, and control joints are how we decide where. Cut into the stamped pattern at the right spacing and depth, joints give the shrinkage somewhere to go and disappear into the texture. Random cracking across the field means the base, the steel, the joint spacing, or the mix was wrong.'] },
      { q: 'Is stamped concrete slippery when wet?',
        a: ['The texture itself provides grip; the sealer is what can make it slick. We add a fine grit additive to the sealer as standard on walking surfaces, which restores traction without changing the appearance. It matters most around a pool or on any part of the patio that connects to steps.'] },
      { q: 'How often does it need resealing?',
        a: ['Every two to three years in this climate, depending on sun exposure and how much of the surface stays wet. The sealer carries the colour depth and protects against freeze-thaw and staining, so a patio that has gone chalky and pale has usually just gone too long between coats rather than failed.'] },
      { q: 'Can you stamp over an existing concrete patio?',
        a: ['Not stamp, no. The concrete has to be plastic to take a mat. There are stamped overlay systems that go over sound existing slabs, and they can look good, but they are a coating and they will only ever be as sound as the slab underneath. If the existing patio is cracked or moving, an overlay hides that for a season or two. We would rather tell you that up front.'] },
    ],
    href: '/stone-work/stamped-concrete-patios/',
    title: 'Stamped Concrete Patios',
    group: 'Stone Work',
    card: 'Stamped and coloured concrete patios in slate, ashlar, and brick patterns: one continuous surface, no joints for weeds to find.',
    image: 'patio-cobble',
    feature: 'patio-covered',
    gallery: ['patio-cobble', 'patio-covered', 'patio-red', 'patio-stone', 'patio-backyard', 'patio-build'],
    h1: 'Stamped Concrete Patio Installation',
    intro: 'Stamped concrete gives you the look of cut stone or brick across one continuous surface: no joints for weeds, no individual units to settle. It is a slab, so what it asks for is a proper base, honest jointing, and a finisher who knows how short the stamping window is.',
    sections: [
      {
        h: 'Patterns that hold up at walking distance',
        p: [
          'The patterns that work are the ones with scale and irregularity. Large-format ashlar and random slate read convincingly because the joint lines are varied and the texture is deep. Small repeating patterns are the ones that give the game away, because the eye finds the repeat.',
        ],
        list: [
          ['Ashlar slate', 'Large rectangular units in a coursed layout. The most versatile pattern and the one that suits the widest range of houses.'],
          ['Random stone', 'Irregular shapes with no repeat visible at walking distance. The closest stamped concrete gets to laid flagstone.'],
          ['Running bond brick', 'A brick field, usually run as a border or an apron rather than across a whole patio, and the obvious choice beside brick.'],
          ['Seamless texture', 'Stone texture with no joint lines at all. Quiet, modern, and it makes a small patio feel larger than a patterned one does.'],
        ],
      },
      {
        h: 'Colour is two decisions, not one',
        p: [
          'A stamped slab gets its colour from a base (integral colour through the mix, or a colour hardener worked into the surface) and then from a release agent applied before stamping, which settles into the low points of the texture and gives the surface depth and variation.',
          'One colour alone reads flat and obviously manufactured. The secondary tone in the joints and hollows is what makes it read as stone. We pick the pair against the house and against the light the patio actually gets, because a colour chosen in shade behaves differently in full sun.',
        ],
      },
      {
        h: 'Borders, bands, and where it meets other surfaces',
        p: [
          'A stamped field is at its best framed. A contrasting border in a different pattern (a brick running bond around a slate field, or a plain band around a random stone) gives the patio an edge and stops the texture running raw into the lawn.',
          'The transitions matter too. Where the patio meets a paver walkway, a set of steps, or an existing porch, the levels have to be set flush and the pitch has to carry water across the junction rather than into it. Those junctions are where a stamped patio either looks built or looks poured.',
        ],
      },
      {
        h: 'Sealing, and what it is actually doing',
        p: [
          'The sealer on a stamped patio is not optional in the way it is on a plain slab. It is holding the colour, keeping water out of the surface ahead of the freeze-thaw cycle, and giving the finish its depth. A patio that has gone pale and chalky is almost always overdue rather than damaged.',
          'We seal once the slab has cured, with a grit additive in the mix for traction, and we tell you the reseal interval for your specific patio. Two to three years is typical here; a shaded patio under trees will want it sooner.',
        ],
      },
    ],
  },
  {
    slug: 'walkways-steps',
    warranty: ['pavers', 'concrete', 'masonry'],
    reviewFrom: 'Larry D.',
    process: [
      ['Walk the route with you', 'We walk the approach the way a visitor does, from the car or the sidewalk to the door. Where a path is too narrow, where the steps are the wrong rise, and where people are already cutting the corner across the grass all show up in that walk.'],
      ['Layout and rise-and-run', 'Width and line are marked on the ground. Steps are set out properly: every riser the same height, every tread the same depth. Uneven risers are the single most common fault in a front entrance and they are what makes people stumble.'],
      ['Demolition and excavation', 'The old walk or steps come out. On a replacement this is where the actual condition becomes visible: a settled walk is usually settled because there was never a base under it.'],
      ['Footings and base', 'Steps get a proper footing below frost depth so they do not heave and pull away from the house. Walkways get compacted aggregate in lifts.'],
      ['Setting the field and the treads', 'Units are set to the pattern, treads are laid to a consistent fall so water runs off rather than sitting on them, and cuts at the edges are made to fit.'],
      ['Borders, edging, and jointing', 'A soldier course or border locks the field and gives the walk a finished edge, joints are filled and compacted, and the transitions to the driveway, the sidewalk, and the landing are set flush.'],
      ['Final walk-through', 'We walk it with you, in daylight, and check that every riser reads the same underfoot. Then the site is cleaned down.'],
    ],
    faq: [
      { q: 'How wide should a front walkway be?',
        a: ['Wide enough for two people to walk up to the door side by side, which in practice means about four feet as a minimum and rather more on a house with a wide facade. A three-foot path forces visitors into single file and makes a large house look pinched.', 'It is the change homeowners are most pleased with after a replacement, and it costs surprisingly little more than rebuilding the narrow one.'] },
      { q: 'Can you repair steps rather than replacing them?',
        a: ['Sometimes. Loose or missing mortar, a cracked tread, or a single settled unit are genuine repairs. What is not repairable is a set of steps that is pulling away from the house, tipping forward, or moving as a whole; those have a footing problem or a water problem underneath, and repointing a moving structure buys a season.', 'We will tell you which one you have, and we will tell you if the repair is the right answer even though the replacement is the bigger job.'] },
      { q: 'Why do brick and stone steps pull away from the house?',
        a: ['Almost always water and frost. Steps built without a footing below frost depth, or with no drainage behind them, take on water that freezes, expands, and levers the structure away from the wall a fraction at a time. Once the gap opens, more water gets in and it accelerates.', 'The fix is a proper footing and somewhere for water to go. Rebuilt that way, they stay put.'] },
      { q: 'Pavers, brick, or natural stone?',
        a: ['Concrete pavers give you the widest range of formats and colours at the lowest cost, and they lift and reset cleanly. Clay brick holds its colour permanently because the colour is fired clay rather than pigment, and it is the natural choice beside a brick house. Natural stone, bluestone especially, gives a look manufactured units cannot, at a higher price and with more hand-cutting.', 'On steps specifically, the tread material matters more than on a flat walk, because it is what you feel underfoot and what has to stay grippy when it is wet.'] },
      { q: 'How long does a front walkway and steps take?',
        a: ['A straightforward walkway is often two to three days. Steps add time because of the footing, and a full front entrance (walk, steps, landing, and a border) usually runs four to six days. Access and how much demolition is involved are the two variables that move it.'] },
      { q: 'Will the new walkway match my driveway?',
        a: ['It can, and usually it should relate rather than match exactly. Running the same border detail or picking up the driveway colour in the walk ties the front of the house together. Using literally the same field pattern on both often reads as flat, so we generally vary one element deliberately.'] },
    ],
    href: '/stone-work/walkways-steps/',
    title: 'Walkways & Steps',
    group: 'Stone Work',
    card: 'Paver, brick, and natural stone walkways, front entrances, landings, and steps: new installations, replacements, and repairs.',
    image: 'walkway-steps',
    feature: 'walkway-steps',
    gallery: ['walkway-bluestone', 'walkway-brick', 'walkway-curved', 'steps-stone', 'steps-brick', 'walkway-front', 'steps-landing', 'hero-walkway', 'hero-steps', 'walkway-banded', 'steps-wide', 'walkway-flowers', 'walkway-side', 'wall-steps', 'walkway-crew'],
    h1: 'Walkways, Front Entrances, and Steps',
    intro: 'The walk and the steps are the first thing anyone touches on your house and the last thing most people get round to replacing. Done properly they change the whole approach: wider, level underfoot, and draining away from the door instead of toward it.',
    sections: [
      {
        h: 'Paver, brick, and natural stone walkways',
        p: [
          'Every walkway we build is set on a compacted base with edge restraint, not bedded into soil and hoped for. That is the difference between a path that is still true in ten years and one that is rocking and sprouting weeds in three.',
        ],
        list: [
          ['Paver walkways', 'Interlocking concrete units in running bond, herringbone, or a banded layout. The widest choice of colour and format, and individual units lift and reset if anything ever needs to come up.'],
          ['Brick walkways', 'Clay brick, usually herringbone or basketweave. The colour is the fired clay itself, so it does not fade, and it is the obvious answer beside a brick house.'],
          ['Natural stone walkways', 'Bluestone and irregular flagstone, cut and fitted by hand. More labour, more cost, and a surface that manufactured units do not imitate convincingly.'],
          ['Stone and paver combinations', 'A stone field with a paver border, or a paver field with a stone landing. Mixing materials deliberately is how a front walk stops looking like a catalogue page.'],
        ],
      },
      {
        h: 'Front entrances that work as one piece',
        p: [
          'A front entrance is a walk, a set of steps, and a landing, and it fails when those three are designed separately. The landing wants to be deep enough that someone can stand on it with the storm door swinging toward them. The steps want consistent risers from the first to the last. The walk wants to arrive square to the steps rather than at an angle that makes people cut the corner.',
          'We lay the whole approach out on the ground before anything is demolished, so you can see the width and the line and walk it yourself. Changing it at that stage costs nothing.',
        ],
      },
      {
        h: 'Steps built on a footing, not on fill',
        p: [
          'Steps carry more load and take more water than anything else at the front of a house, and they are usually the first element to fail. The two causes are always the same: no footing below frost depth, and nowhere for water behind the structure to go.',
          'We dig a proper footing, build up from it, and give the structure drainage behind it. Treads are laid with a slight fall so water runs off rather than freezing on the surface, and every riser is set to the same height, which is what your feet are actually reading as you climb, whether or not you notice it.',
        ],
      },
      {
        h: 'Replacements, repairs, and transformations',
        p: [
          'A great deal of what we do at the front of a house is replacing something that has settled, cracked, or come loose from the wall. Concrete stoops that have tipped, brick steps with mortar washing out, and narrow poured walks that have sunk into a ripple are all routine work here.',
          'Not everything needs replacing. Repointing sound masonry, resetting a settled section of paver walk, or rebuilding just the top two treads are all real answers, and they cost a fraction of a full rebuild. We tell you which one your entrance actually needs, including when that is the smaller job.',
        ],
        list: [
          ['Settled or cracked walkways', 'Lifted, base corrected and recompacted, and the same units reset where they are sound.'],
          ['Failing steps and stoops', 'Rebuilt on a proper footing with drainage behind, matched to the existing masonry where it stays.'],
          ['Narrow walks widened', 'The most-noticed change we make to a front approach, and rarely the most expensive one.'],
          ['Full front-entrance transformations', 'Walk, steps, landing, lighting course, and planting edge rebuilt together as a single piece of work.'],
        ],
      },
      {
        h: 'Where the water goes',
        p: [
          'A front walk that pitches back toward the house delivers water to the foundation every time it rains, and a landing that holds water is an ice sheet outside your front door every January. Both are grading problems and both get set right during installation.',
          'Where the approach sits below the surrounding grade, or where downspouts discharge across the walk, the fix is drainage rather than pitch alone: a trench drain across the low point, or a French drain carrying water away to daylight.',
        ],
      },
    ],
  },
  {
    slug: 'stone-veneer',
    warranty: ['masonry'],
    reviewFrom: 'Jason S.',
    process: [
      ['Assess the substrate', 'What is behind the stone determines how it has to be installed. We check the existing wall, the sheathing, and how water currently drains down the face of the building before quoting anything.'],
      ['Drainage plane and lath', 'A weather-resistive barrier and metal lath go on first, with a way for water that gets behind the stone to get back out. This layer is invisible in the finished job and is the single biggest difference between veneer that lasts and veneer that fails.'],
      ['Scratch coat', 'A mortar bed is applied over the lath and keyed so the stone has something to bond to properly.'],
      ['Dry layout', 'Stone is laid out on the ground first to balance color, size, and shape across the wall. Skipping this is how you end up with all the large pieces in one corner.'],
      ['Setting, corners, and terminations', 'Stone is set from the corners inward. Corners and edges are where rushed veneer gives itself away, so they get cut and fitted rather than filled.'],
      ['Pointing and cleaning', 'Joints are pointed to the profile the look calls for, and the face is cleaned before the mortar sets hard.'],
    ],
    faq: [
      { q: 'Natural stone or manufactured veneer?',
        a: ['Manufactured veneer is lighter, cheaper, and comes in consistent shapes, which makes installation faster. Natural stone costs more, weighs more, and holds its color and texture far longer; manufactured product is pigmented through a surface layer and fades with sustained sun exposure in a way real stone does not. On a front elevation that will be looked at every day for twenty years, the difference is worth the cost. On a sheltered accent wall, often it is not.'] },
      { q: 'Can veneer fall off?',
        a: ['Badly installed veneer can, and when it does the cause is almost always behind the stone rather than in it: no drainage plane, no proper lath, or stone set directly onto a surface it cannot bond to. Water gets behind, has nowhere to go, and freeze-thaw pushes the stone off the wall. It is the reason we spend as much time on what goes on before the stone as on the stone itself.'] },
      { q: 'Can it go over my existing brick or siding?',
        a: ['Over sound masonry, usually yes, with the surface prepared so the mortar bonds. Over siding it is not a matter of sticking stone to what is there; the siding comes off and the wall is built up properly underneath. Anyone offering to apply veneer straight onto existing siding is describing a job that will fail.'] },
      { q: 'Does stone veneer need maintenance?',
        a: ['Very little. An occasional rinse, and attention to any joint that opens up so water does not start traveling behind the face. What matters more is keeping gutters and grade doing their job, since veneer problems almost always begin as water problems somewhere else on the building.'] },
    ],
    href: '/stone-work/stone-veneer/',
    title: 'Stone Veneer',
    group: 'Stone Work',
    card: 'Natural stone veneer for facades, fireplaces, columns, and accent walls: real stone texture without full masonry weight.',
    image: 'veneer-siding',
    feature: 'veneer-siding',
    gallery: ['veneer-siding', 'veneer-walkway', 'veneer-drive', 'veneer-drive-build'],
    h1: 'Stone Veneer Crafted to Complement Your Home',
    intro: 'Stone veneer strikes the balance between natural beauty and practicality. Whether you are updating an exterior, facing a fireplace, or adding an accent wall, veneer delivers genuine stone texture without the weight or the cost of full masonry.',
    sections: [
      {
        h: 'Texture and depth on almost any surface',
        p: [
          'Veneer brings depth and character to surfaces inside and out. Whether the goal is a sleek contemporary finish or something more rustic, the range of colors, patterns, and textures is wide enough to match nearly any design direction.',
          'We help homeowners choose materials that complement what is already there rather than fighting it. Veneer is also an efficient way to highlight architectural details (columns, chimneys, and entry surrounds) that would otherwise go unnoticed.',
        ],
      },
      {
        h: 'Panels, walls, and full facades',
        p: [
          'Stone veneer panels and custom stone walls change the feel of a property quickly. They suit entryways, patios, accent walls, and outdoor living spaces, adding sophistication and structure at once.',
          'We design installations that blend into the property’s existing layout, with attention to corners, terminations, and the details that give away rushed work. Done well, veneer also improves resale appeal by making the exterior read as more considered.',
        ],
      },
      {
        h: 'Natural stone, installed properly',
        p: [
          'Natural veneer resists weather and wear far better than manufactured alternatives, which makes it the right choice when you want the work to last. Proper drainage plane, flashing, and mortar detail behind the stone are what determine whether it stays that way.',
        ],
      },
      {
        h: 'Where veneer works',
        p: [
          'Veneer earns its place where you want the weight and texture of stone on something that was never built to carry structural masonry:',
        ],
        list: [
          ['Full and partial facades', 'A whole elevation, or a water table and base course that grounds the house visually without facing the entire wall.'],
          ['Chimney chases', 'A framed chase faced in stone so it reads as masonry from the ground rather than as a box.'],
          ['Columns and entry surrounds', 'Porch columns and door surrounds, where the added depth changes how the entrance reads more than its size would suggest.'],
          ['Interior fireplace walls', 'A hearth wall faced floor to ceiling, with the fireplace opening and hearth detailed together.'],
          ['Accent and seating walls', 'Freestanding garden and seating walls faced on both sides, with caps that tie into the surrounding hardscape.'],
          ['Foundation and skirt walls', 'Exposed foundation faced so the house sits on stone instead of on bare block.'],
        ],
      },
      {
        h: 'Why veneer fails, and how it is avoided',
        p: [
          'When stone veneer comes off a wall, the stone is almost never the problem. Water gets behind the face of any veneer installation; that is expected, and it is designed for. What decides the outcome is whether it has a way back out.',
          'A correct installation has a weather-resistive barrier, metal lath, a properly keyed scratch coat, and drainage at the base with flashing where the veneer meets other materials. Leave out the drainage plane and water sits behind the stone, saturates the substrate, and freeze-thaw does the rest. Everything in that list is invisible in the finished job, which is exactly why it is the part that gets cut when a price looks too good.',
        ],
      },
    ],
  },
  {
    slug: 'outdoor-fireplaces',
    warranty: ['masonry'],
    reviewFrom: 'Larry D.',
    process: [
      ['Siting for wind and smoke', 'Where the fireplace goes is decided before what it looks like. We look at prevailing wind, how close the house and any overhang sit, and where people will actually be sitting; a fireplace that pushes smoke into the seating area is a mistake you notice every single evening.'],
      ['Design and scale', 'The structure is scaled to the patio and to the house rather than to a catalog. Oversized outdoor fireplaces dominate a small yard; undersized ones look like an afterthought.'],
      ['Footing', 'A fireplace is a heavy masonry structure and needs a footing built for it. Setting one on an existing patio surface without a proper footing is how they crack and lean.'],
      ['Firebox and flue', 'The firebox and flue are built to draw properly. Draw is a function of firebox dimensions and flue height in relation to each other, not something you can adjust afterward.'],
      ['Veneer, hearth, and finish', 'The visible masonry goes on, with the hearth and mantel detailed to match the surrounding hardscape.'],
      ['Built-ins and first burn', 'Seating walls, wood storage, and lighting are finished, and we walk you through curing and the first fires before you use it properly.'],
    ],
    faq: [
      { q: 'Wood-burning or gas?',
        a: ['Wood gives you the fire people picture (the sound, the smell, the heat) at the cost of storage, laying it, and cleaning it out. Gas lights instantly, produces no smoke to blow at your guests, and takes no work, but it is a different experience and needs a gas line run to the location. The question worth answering honestly is how you will use it on an ordinary Tuesday, not how you imagine using it.'] },
      { q: 'How close can it be to the house or a deck?',
        a: ['Clearances to combustible structures are set by code and vary by jurisdiction, and a wood-burning structure has different requirements than a gas one. We confirm the requirement with your county before siting rather than working from a general rule, and it is one of the reasons placement gets decided early.'] },
      { q: 'Does it need a permit?',
        a: ['Often yes, particularly for a full masonry fireplace with a flue, and gas connections carry their own requirements. We tell you what your jurisdiction requires as part of the estimate so it is not a surprise partway through.'] },
      { q: 'Does it need its own footing?',
        a: ['Yes. A masonry fireplace weighs a great deal and concentrates that weight in a small footprint, so it needs a footing sized and dug for it, not the patio base. Building one on top of an existing patio without a footing underneath is a common shortcut, and it shows up as cracking through the structure and the patio around it within a few years.'] },
      { q: 'Can we use it through the winter?',
        a: ['That is largely the point of building one here. What extends the season more than anything is placement: sheltering the seating area from wind does more for comfort than the size of the fire does. It is worth thinking about at the design stage, when it is free to change.'] },
    ],
    href: '/stone-work/outdoor-fireplaces/',
    title: 'Outdoor Fireplaces',
    group: 'Stone Work',
    card: 'Custom fireplaces and fire pits scaled to the space, with seating walls, storage, and lighting built in where it makes sense.',
    image: 'fireplace-stone',
    feature: 'fireplace-stone',
    gallery: ['fireplace-stone', 'fireplace-build', 'fireplace-install', 'fireplace-bbq', 'patio-firepit'],
    h1: 'Outdoor Fireplaces Designed for Northern Virginia Homes',
    intro: 'A custom outdoor fireplace becomes the center of an outdoor living area, the thing that draws people together for conversation, for warmth, and for evenings that run longer than planned. Scale and placement are what make that happen, and both are design decisions worth getting right.',
    sections: [
      {
        h: 'A gathering space, not just a feature',
        p: [
          'We design fireplaces scaled properly to the patio, deck, or garden they sit in, so they blend with the architecture of the house instead of competing with it. Finishes run from rustic stone to sleek and modern.',
          'Placement affects more than looks. Done thoughtfully, it maximizes usable warmth, shelters the seating area from prevailing wind, and keeps smoke away from the house.',
        ],
      },
      {
        h: 'Ideas worth building in',
        p: [
          'Outdoor fireplaces can be as individual as the homes they belong to. Built-in seating walls, integrated lighting, pizza ovens, and firewood storage are all straightforward to incorporate when they are planned from the start rather than added later.',
          'We will work through the options that suit your space and budget, including whether a traditional wood-burning design or a lower-maintenance gas build makes more sense for how you will actually use it.',
        ],
      },
      {
        h: 'Materials that survive the weather',
        p: [
          'We select materials that hold up to sustained heat and to weather, and we build the firebox and flue to work properly rather than just look right. A fireplace that draws badly is a problem you notice every single time you use it.',
        ],
      },
      {
        h: 'Fire features we build',
        p: [
          'A full masonry fireplace is not the right answer for every yard. What suits the space depends on how much room you have, how you will use it, and how much of the budget belongs above ground:',
        ],
        list: [
          ['Full masonry fireplaces', 'A built firebox, flue, hearth, and chimney: the largest and most permanent option, and the one that provides directional heat and shelter.'],
          ['Fire pits', 'Open, seen from all sides, and social in a way a fireplace is not. Far less structure and far less cost, at the price of no wind shelter.'],
          ['Built-in grills and outdoor kitchens', 'Masonry surrounds with counter space, storage, and utilities run in, built alongside the fire feature or on their own.'],
          ['Seating walls', 'Low walls that give the space its edge and seat people without furniture. Often the detail that makes an outdoor room feel like a room.'],
          ['Pizza ovens', 'Straightforward to incorporate when planned from the start, considerably harder to add afterward.'],
          ['Wood storage and lighting', 'Built-in storage that keeps wood dry and to hand, and low-level lighting so the space works once the fire dies down.'],
        ],
      },
      {
        h: 'Materials that take the heat',
        p: [
          'The inside of a firebox and the outside of a fireplace face completely different problems, and they are not built from the same things. The firebox needs firebrick set in refractory mortar; ordinary brick and standard mortar break down under sustained heat, and the failure shows up as cracking and spalling inside the box within a season or two of real use.',
          'The exterior faces weather rather than fire, so the choice there is about how the stone or brick sits against the house and how it handles freeze-thaw. Caps, hearths, and any horizontal surface get the most attention, because those are where water collects and where a poorly chosen material shows it first.',
        ],
      },
    ],
  },
  {
    slug: 'drainage',
    warranty: ['drainage'],
    reviewFrom: 'Patricia W.',
    process: [
      ['Find out where the water actually comes from', 'Before anything is priced we work out where the water arrives, how much of it there is, and where it is currently going. Roof area, driveway area, neighbouring grade, and downspout discharge all feed the same problem, and fixing one of four sources fixes nothing.'],
      ['Establish where it can go', 'Water has to end up somewhere legal and lower than where it started. We identify the outfall first (daylight at a slope, a dry well, or a street connection) because a drain with nowhere to discharge is a buried pipe full of standing water.'],
      ['Written scope and estimate', 'You get the route, the components, and the price in writing, with the drainage broken out as its own line rather than buried in a paving total.'],
      ['Excavation to grade', 'Trenches are dug to a consistent fall along the whole run. Fall is the entire mechanism: a pipe laid flat, or laid with a dip in the middle, collects sediment and stops working within a couple of seasons.'],
      ['Pipe, stone, and fabric', 'Perforated pipe bedded in washed stone and wrapped in filter fabric for a French drain; solid pipe for a downspout or trench-drain carry. Fabric goes around the stone, not around the pipe alone, or the stone silts up and the drain dies.'],
      ['Inlets, outlets, and cleanouts', 'Catch basins, channel drains, pop-up emitters, and cleanout access at the points where the system will one day need rodding. A drain you cannot clean is a drain with an expiry date.'],
      ['Backfill, restore, and test', 'Backfilled and compacted, surfaces made good, and the system run with a hose so you can see water arrive at the outfall before we leave.'],
    ],
    faq: [
      { q: 'What is a French drain, and do I need one?',
        a: ['A French drain is a perforated pipe laid in a stone-filled trench, wrapped in filter fabric, running downhill to somewhere the water can leave. It intercepts water moving through the ground and gives it a faster route than the one it was taking, which is usually through your foundation wall or under your patio.', 'You need one when water is arriving faster than the ground can absorb it and grading alone cannot redirect it: a yard that stays soggy for days, water against a basement wall, or a slope that sheets runoff toward the house.'] },
      { q: 'What is the difference between a French drain and a trench drain?',
        a: ['A French drain is buried and collects water from the soil around it. A trench drain, also called a channel drain, sits at the surface with a grate along its length, and catches water running across a hard surface before it reaches somewhere you do not want it.', 'A driveway that slopes toward a garage almost always wants a trench drain across the apron. A yard that will not dry out wants a French drain. Plenty of properties want both, connected to the same outfall.'] },
      { q: 'Where does the water actually go?',
        a: ['To daylight wherever the site allows it: a point lower than the collection area where the pipe can discharge onto the ground or into a swale. Where there is no fall to work with, the alternatives are a dry well that buffers the volume and lets it soak away, or, in some jurisdictions, a connection to the storm system.', 'We establish the outfall before we design the rest. A drainage system is only as good as the place it ends, and this is the question the cheap installations skip.'] },
      { q: 'Can you fix drainage without digging up my whole yard?',
        a: ['Often, yes. The trench for a French drain is narrow, and turf goes back over it. Sometimes the answer is not a drain at all: regrading a low spot, extending downspout discharge well away from the house, or correcting the pitch on an existing patio can solve the problem outright and cost a fraction of a piped system.', 'We would rather sell you the regrade if the regrade is what works.'] },
      { q: 'Why does my driveway or patio keep failing in the same spot?',
        a: ['Because the water that caused it is still arriving. Water under a paved surface washes fines out of the base, the base loses its support, and the surface settles or cracks in exactly the place it did before. Replacing the surface without addressing the source resets the clock and nothing else.', 'This is why we raise drainage on paving jobs whether or not it was in the enquiry. It goes in the estimate as a visible line item so you can see what it costs and decide with the number in front of you.'] },
      { q: 'Will a drainage system need maintenance?',
        a: ['Very little, but not none. Catch basins and channel grates collect leaves and want clearing a couple of times a year, particularly in autumn. Pop-up emitters occasionally need the grass cut back from them. A properly built French drain (washed stone, fabric around the stone, consistent fall) should run for decades without attention, which is precisely why those three details are not the place to save money.'] },
    ],
    href: '/drainage/',
    title: 'Drainage & Water Management',
    group: 'Drainage & Site Work',
    card: 'French drains, trench drains, downspout routing, grading, and drainage correction around driveways, patios, and retaining walls.',
    image: 'driveway-prep',
    feature: 'wall-build',
    gallery: ['driveway-prep', 'wall-build', 'patio-build', 'foundation-exterior', 'foundation-driveway', 'walkway-crew'],
    h1: 'Drainage, French Drains, and Grading Correction',
    intro: 'Water is the reason most hardscape fails early, and almost none of the damage happens where the water lands. It happens where the water collects, where it soaks in, and where it moves under the surface, which is why a drainage problem shows up as a sunken patio, a cracked driveway, or a wall leaning out of line.',
    sections: [
      {
        h: 'What we install',
        p: [
          'Most properties do not need one component, they need a route: somewhere for the water to be collected, a path for it to travel, and somewhere legal and lower for it to end. These are the pieces we build that route out of.',
        ],
        list: [
          ['French drains', 'Perforated pipe in washed stone, wrapped in filter fabric, laid to a consistent fall. Intercepts water moving through the ground and carries it away from foundations, patios, and low areas.'],
          ['Trench and channel drains', 'A surface grate that catches runoff before it reaches a garage, a walkout basement, or a low point in a driveway. The standard answer for a drive that slopes toward the house.'],
          ['Downspout drainage', 'Roof water piped underground and discharged well clear of the building. A single downspout can deliver thousands of gallons a year to one spot beside your foundation.'],
          ['Catch basins and dry wells', 'Collection points for a low area, and buffered storage where there is no fall to a daylight outfall.'],
          ['Grading and regrading', 'Re-establishing positive fall away from the house. Where it works, it is the cheapest fix available and it needs no pipe at all.'],
          ['Swales and surface routing', 'A shaped, planted channel that carries surface water across a property. Quieter than a pipe and it never silts up.'],
        ],
      },
      {
        h: 'Drainage and your driveway',
        p: [
          'A driveway is a large impermeable surface, usually sloped, often pointing at a garage or a house. Whatever falls on it has to go somewhere, and if the grading was set carelessly, that somewhere is your garage slab or the base under the paving.',
          'Water travelling under a driveway washes fine material out of the aggregate base. The base loses its support, the surface settles into it, and you get the depression, the alligator cracking, or the sunken paver field that prompted the call. Repaving without fixing the source produces the same failure in the same place on the same schedule.',
          'On any driveway job we look at where water arrives and where it currently leaves, and price the correction openly. Sometimes that is a change of pitch during construction and costs almost nothing. Sometimes it is a trench drain across the apron tied into a piped run to daylight.',
        ],
      },
      {
        h: 'Drainage and your patio',
        p: [
          'A patio that pools after rain has either lost its fall or never had it. On a paver patio the field can be lifted, the base corrected and recompacted, the grade re-established, and the same units reset; you generally do not need new material. On a poured slab the options are narrower, which is one of the arguments for pavers.',
          'The other patio drainage problem is what happens at the edges. A patio that sits below the surrounding grade collects everything the lawn sheds, and the fix is interception (a French drain along the uphill side, or a channel drain across the point where water arrives) rather than anything done to the patio itself.',
        ],
      },
      {
        h: 'Drainage and retaining walls',
        p: [
          'A retaining wall holds back soil, and saturated soil weighs dramatically more than dry soil and pushes considerably harder. Hydrostatic pressure behind a wall is the single most common reason walls lean, bulge, and eventually come down, and it is entirely preventable.',
          'Every wall we build gets drainage aggregate behind it, filter fabric to keep the soil out of that aggregate, and a drain at the base running to an outfall. Weep holes through the face where the construction suits them. None of it is visible in the finished wall, which is exactly why it is the part that gets left out by whoever built the wall you are now asking us to look at.',
        ],
      },
      {
        h: 'Water against the house',
        p: [
          'A damp basement wall, efflorescence on the block, or a persistent wet patch beside the foundation is a drainage symptom before it is a waterproofing problem. The usual causes are grade that has settled back toward the house over the years, downspouts discharging at the wall, and a patio or walk that was built pitching the wrong way.',
          'We start with the cheap answers, because they are often the right ones: extend the downspouts properly underground, re-establish positive grade for the first several feet out from the wall, and correct any hard surface that is delivering water to the foundation. Where that is genuinely not enough, a French drain along the affected side is the next step.',
        ],
      },
      {
        h: 'Why we raise it whether or not you asked',
        p: [
          'Most people call us about a surface: a driveway, a patio, a wall. A good proportion of those surfaces failed because of water, and rebuilding them without dealing with it means selling you the same job twice.',
          'So we look at drainage on every estimate, we tell you what we find, and we price it as a separate line so you can see exactly what it costs and choose. Sometimes the honest answer is that your drainage is fine and nothing needs doing. We would rather say that than add a French drain to a quote to make the number look thorough.',
        ],
      },
    ],
  },
  {
    slug: 'roofing',
    process: [
      ['Inspection from the roof, not just the ground', 'We check the surface, the flashing at walls, valleys, vents, and the chimney, the gutters, and the attic side where we can get to it. Most leaks start at a joint rather than in the middle of a slope.'],
      ['Written scope', 'You get an itemized estimate that separates what needs doing now from what can wait, and says plainly whether repair or replacement is the honest answer.'],
      ['Tear-off and deck check', 'On a replacement, the old roofing comes off down to the deck so we can see its condition. Soft or damaged decking is replaced before anything new goes on.'],
      ['Underlayment, flashing, and roofing', 'Underlayment and ice and water protection go down first, flashing is reset at every wall, valley, and penetration, and then the new roof is installed.'],
      ['Cleanup', 'Debris is cleared from the roof, the gutters, and the grounds at the end of every day.'],
    ],
    faq: [
      { q: 'Do I need a new roof or just a repair?',
        a: ['It depends on the age of the roof and whether the problem is local or widespread. A single leak at a flashing or a few damaged shingles is a repair. Curling, cracking, or granule loss across the whole surface usually means the roof is at the end of its life. We tell you which one we see.'] },
      { q: 'Where do most roof leaks start?',
        a: ['At the joints: flashing around chimneys, walls, and vents, and in the valleys where two slopes meet. The stain inside is often some distance from where the water actually gets in, which is why we trace it from the roof side.'] },
      { q: 'Can you repair the flashing around my chimney?',
        a: ['Yes. Because we do chimney masonry as well as roofing, we can repair the brick and reset the flashing in the same job, rather than you coordinating two trades at the one joint where they meet.'] },
    ],
    href: '/exterior/roofing/',
    title: 'Roofing',
    group: 'Roofing & Siding',
    card: 'Roof replacement and repair, including the flashing, valleys, and details where the roof meets walls and chimneys.',
    image: 'veneer-siding',
    feature: 'veneer-siding',
    gallery: ['veneer-siding'],
    h1: 'Roof Replacement and Repair',
    intro: 'A roof keeps water out of everything underneath it, and most roof problems are water problems long before they are visible ones. Whether you need a leak traced and repaired or a full replacement, we look at the whole roof before we price any of it.',
    sections: [
      {
        h: 'Signs your roof needs attention',
        p: ['Roofs fail gradually. These are the signs worth acting on before water reaches the ceiling:'],
        list: [
          ['Missing, cracked, or curling shingles', 'Damaged shingles expose the layers underneath to the weather.'],
          ['Granules in the gutters', 'Shingles shed their protective granules as they age. A lot of it in the gutters means the surface is wearing out.'],
          ['Stains on ceilings or in the attic', 'Water marks mean water is already getting in somewhere above.'],
          ['Lifted or rusted flashing', 'Flashing that has pulled away from a wall or chimney leaves a gap at exactly the point water collects.'],
          ['Sagging areas', 'A dip in the roof line can point to damaged decking or framing underneath.'],
        ],
      },
    ],
  },
  {
    slug: 'siding',
    process: [
      ['Walk the house', 'We look at every side of the house: the condition of the siding and trim, the joints around windows and doors, and anywhere water is getting behind the wall.'],
      ['Written scope', 'An itemized estimate that says whether a repair will match and hold, or whether a wall or the whole house is due for new siding.'],
      ['Remove and inspect', 'Old siding comes off where it is being replaced, so any damaged sheathing or wet framing is found and dealt with rather than covered over.'],
      ['Wrap, flash, and install', 'House wrap and flashing go on first, detailed around every window, door, and penetration. Then the new siding and trim are installed.'],
      ['Cleanup', 'Offcuts, nails, and old material are cleared from the site at the end of every day.'],
    ],
    faq: [
      { q: 'Can you match my existing siding for a repair?',
        a: ['Often, but not always. Siding fades and profiles get discontinued, so a patch on a sunny wall can stand out. We tell you before the work whether a close match is available, and whether residing one full wall would look better than patching it.'] },
      { q: 'Can you combine siding with stone veneer?',
        a: ['Yes. A stone veneer base or accent wall with siding above is a common combination, and since we do both, the transition between the two is detailed as one job.'] },
      { q: 'Why do the trim and flashing matter so much?',
        a: ['Most water damage behind siding starts at an opening rather than through the siding itself. Windows, doors, and the joints where walls meet the roof are where water finds its way in, so that is where the detailing has to be right.'] },
    ],
    href: '/exterior/siding/',
    title: 'Siding',
    group: 'Roofing & Siding',
    card: 'Siding replacement and repair, with the trim, flashing, and openings detailed so water stays on the outside of the wall.',
    image: 'chimney-home',
    feature: 'chimney-home',
    gallery: ['chimney-home'],
    h1: 'Siding Installation and Repair',
    intro: 'Siding is the weather skin of the house. When it cracks, warps, or comes loose, water gets behind it and into the wall. We replace damaged sections or reside the whole house, and pay the same attention to the trim and openings as to the siding itself.',
    sections: [
      {
        h: 'Signs your siding needs work',
        p: ['Siding problems usually show on the outside before the damage inside the wall becomes serious. Look for:'],
        list: [
          ['Cracked, warped, or loose panels', 'Damaged siding lets water reach the sheathing behind it.'],
          ['Soft spots or rot', 'Wood or trim that gives under pressure means moisture has been getting in for some time.'],
          ['Stains or peeling paint inside', 'Moisture coming through the wall shows up on interior walls near windows and corners.'],
          ['Gaps around windows and doors', 'Failed caulk and flashing at openings are the most common point of entry.'],
          ['Fading and chalking', 'Heavily weathered siding has lost much of its protection even if it is still in place.'],
        ],
      },
    ],
  },
];

/* --- Real customer reviews ----------------------------------------------
   Verbatim from the Onyx HomeAdvisor profile (5.0 / 13 reviews).
   Reviews sourced from Google are marked so.
   ------------------------------------------------------------------------ */
export const REVIEWS = [
  { name: 'Ann', where: 'Arlington', date: '', project: '', source: '',
    text: 'Their crews came when they said they would and they left a nice clean job site at the end of every day.', feature: false, hide: true },

  { name: 'Patricia W.', where: '', date: 'June 2026', project: 'Brick and stone patios, walks, and steps installation', source: 'HomeAdvisor',
    text: 'John and his team replaced our back brick stairs that were falling apart. They were able to create a new set of stairs that matched our old pavers much better than the previous stairs. They were able to re-grade/level our patio so that it now sits flat. The grading before prevented us from being able to sit our table flat without wobbling. Lastly they provided a new walkway into our backyard. We love the new look and functionality.' },

  { name: 'Nancy P.', where: '', date: 'June 2026', project: 'Brick, stone or block wall installation', source: 'HomeAdvisor',
    text: 'Mike and his crew did a terrific job! He gave us a good price on the job, explained everything ahead of time, and carried it out as promised (and even more, throwing in a couple of extras). They arrived on time, completed everything as promised, cleaned up as they went! Mike personally supervised and followed up on each stage. We have absolutely no hesitation in recommending Onyx, and certainly would call on them if we had another project.' , hide: true },

  { name: 'Michael G.', where: '', date: 'May 2026', project: '', source: 'HomeAdvisor',
    text: 'The Onyx team was a pleasure to deal with from start to finish. The owner showed up within an hour after my posting. The brick front stoop was a mess, made worse by an incomplete repair. Onyx quoted a good price. The work was completed skillfully and efficiently. Customer service was first-rate throughout. We now have the best-looking, best built brick steps to our front door that we could have hoped for. I recommend Onyx without reservation.' , hide: true },

  // `image` is the photo shown beside this quote when it leads the home page.
  // It illustrates the kind of work described — it is not this customer's own
  // project. Swap in their actual job photo if you have one.
  { name: 'Susan D.', where: '', date: 'March 2026', project: 'Paver walkway', source: 'Google',
    image: 'walkway-curved',
    text: 'I’m extremely happy with my new paver walkway! The workmanship is excellent, and the project turned out even better than I imagined. The crew was professional, timely, and paid attention to every detail — from the layout and leveling to the final cleanup. The walkway looks beautiful, adds great curb appeal, and feels very solid underfoot. I highly recommend Onyx to anyone looking for quality paver work.' , hide: true },

  { name: 'Bob R.', where: '', date: 'March 2026', project: 'Driveway replacement and front entry steps', source: 'Google',
    text: 'Had a great experience with Onyx replacing and widening our driveway. They also replaced our front entry steps. John Cash walked us through the process and then kept us informed of the next steps as the actual work was progressing. The crew was very professional and we are very happy with the finished product. Will definitely use again for any future projects.' , hide: true },

  { name: 'Dani S.', where: '', date: 'March 2026', project: 'Paver patio leveling and drainage repair', source: 'Google',
    text: 'Onyx leveled our paver patio for us after roots caused the pavers to lift up and be a danger to us. We are older and more likely to be injured if we fall. They dug out the roots and about 4 inches of dirt, repaired the broken drainage pipe underneath, leveled the foundation, added bluestone then put back our pavers and added a few new ones. They also built a small wall around the flower bed. The whole effect is quite stunning. They changed the pattern along the side as well making it more pleasing to the eye. We are quite happy with the result.' , hide: true },

  { name: 'Erin J.', where: '', date: 'March 2026', project: 'Front stoop, walkway and driveway', source: 'Google',
    text: 'Our work with Onyx was amazing. Our front stoop, walkway, driveway and back areas were a mess. Together we planned, worked, and accomplished amazing things. The team and work crew were very respectful and willing to listen to and address any and all concerns that we had. We are very pleased with their work.' , hide: true },

  { name: 'Larry D.', where: '', date: 'May 2026', project: 'Brick or stone tuckpointing', source: 'HomeAdvisor',
    text: 'We were very pleased with the work they did completely replacing the steps up to the front of our house. They also designed and installed pavers to create an attractive entrance into our home. Hard working crew and very personable, easy to talk to owners.' },

  { name: 'Jason S.', where: '', date: 'May 2026', project: 'Repointing and step repair', source: 'HomeAdvisor',
    text: 'After some discussion we decided to have all of it repointed as well as just the necessary repairs. I must say that was the right choice as it looks great. All of the mortar joints were redone, a few cracked bricks were replaced, and the steps are once again complete and solid. Great work.' },

  { name: 'Gemma V.', where: '', date: 'June 2026', project: '', source: 'HomeAdvisor',
    text: 'Onyx’s response was fast and professional. They came out and gave a very fair price and did a fantastic job. They were professional, expedient, friendly and punctual. Would highly recommend them.' , hide: true },

  { name: 'RJ C.', where: '', date: 'March 2026', project: 'Driveway repaving', source: 'Google',
    text: 'We had our driveway repaved and it looks great. These brothers are delightful. Highly recommend for your next project.' },

  { name: 'Eric O.', where: '', date: 'June 2026', project: 'Interlocking pavers for patios, walks & steps', source: 'HomeAdvisor',
    text: 'Beautiful work.' },

  { name: 'Michael C.', where: '', date: 'March 2026', project: '', source: 'HomeAdvisor',
    text: 'Great team!' },
];

/* The three shown on the home page: one lead quote plus two supporting. */
export const FEATURED_REVIEWS = ['Patricia W.', 'Larry D.', 'RJ C.'];

/* --- Service areas ------------------------------------------------------- */
export const AREAS = [
  'Alexandria, VA', 'Arlington, VA', 'Falls Church, VA', 'McLean, VA',
  'Vienna, VA', 'Fairfax, VA', 'Annandale, VA', 'Springfield, VA',
];

/* --- Portfolio ----------------------------------------------------------- */
/* Order matters — this is the sequence on the portfolio page. */
export const PORTFOLIO = [
  'driveway-circle', 'walkway-bluestone', 'patio-firepit', 'wall-curved',
  'walkway-brick', 'driveway-paver-grey', 'steps-stone', 'patio-cobble',
  'walkway-curved', 'driveway-asphalt-new', 'wall-steps', 'patio-backyard',
  'walkway-steps', 'driveway-paver-tan', 'fireplace-stone', 'patio-pool',
  'walkway-front', 'wall-build', 'steps-brick', 'veneer-siding',
  'driveway-paver-band', 'walkway-flowers', 'patio-stone', 'fireplace-bbq',
  'driveway-roller', 'walkway-crew', 'patio-build', 'wall-closeup',
  'steps-landing', 'driveway-paver-blue', 'walkway-banded', 'veneer-drive',
  'driveway-crew', 'walkway-side', 'steps-wide', 'fireplace-build',
];

/* Nine shown on the home page. */
export const HOME_PORTFOLIO = [
  'driveway-circle', 'walkway-bluestone', 'patio-firepit',
  'wall-curved', 'walkway-brick', 'driveway-paver-grey',
  'steps-stone', 'patio-cobble', 'walkway-curved',
];

/* --- Projects ------------------------------------------------------------
   Real completed jobs, each tied to the service it belongs under and the
   city it was built in. Project pages are generated at
   {service.href}{slug}/ — e.g. /masonry/driveway-paving/paver-driveway-
   arlington-va/ — so a project always sits beneath its own service.

   Every entry here must be an actual job. Titles and copy are written from
   the photograph, which is why several differ from the labels the old site
   carried: four of those labels described the wrong material entirely.

   To add a job: drop {slug}-1200.jpg and {slug}-760.jpg into
   assets/img/projects/, add an entry below, run `node build.mjs`. The page,
   its schema, the sitemap entry, and the links from both the service page
   and the city page are all generated from this one record.

   Optional fields:

     also    Extra service hrefs the job should also be listed under. The
             page itself still lives at {service}{slug}/ — this only adds
             cards on other service pages, so there is no duplicate URL.
     scope   Bullet list of what the job actually involved. Shown on the
             project page beneath the spec table.
     before  A "before" photograph, rendered as a before/after pair:
               before: { w: 1200, h: 900, alt: '…' }
             Needs {slug}-before-1200.jpg and {slug}-before-760.jpg in
             assets/img/projects/. Omit the field and only the finished
             photo is shown.
   ------------------------------------------------------------------------ */
export const PROJECTS = [
  {
    slug: 'paver-driveway-medallion-arlington-va',
    title: 'Paver Driveway with Circular Medallion',
    city: 'Arlington, VA',
    service: '/masonry/driveway-paving/',
    also: ['/masonry/paver-driveways/'],
    material: 'Interlocking pavers',
    scope: [
      'Full paver driveway in tumbled tan and grey units',
      'Running-bond field with a soldier course to the full perimeter',
      'Darker circular medallion set on axis with the garage bays',
    ],
    w: 1200, h: 900,
    alt: 'Tan paver driveway with a circular medallion inlay in front of a stone-faced Arlington home with two garage doors',
    summary: 'A full paver driveway in tumbled tan and grey units, laid to a running bond with a darker circular medallion set on the approach to the garages.',
    body: [
      'The field is laid in a running bond that keeps the eye moving toward the house, with a soldier course running the full perimeter to lock the edges. The circular medallion is the piece that does the work here: set on axis with the two garage bays, it breaks up what would otherwise read as a large uninterrupted expanse of paving and gives the approach a centre.',
      'Pavers earn their keep on a driveway of this size. Individual units lift out and go back without a patch mark, so a future utility trench or a settled area is a repair rather than a scar. The stone facade on the house set the colour direction: the paving picks up its warm tans without matching it exactly, which would have flattened both.',
    ],
  },
  {
    slug: 'stamped-concrete-driveway-annandale-va',
    title: 'Stamped Concrete Driveway',
    city: 'Annandale, VA',
    service: '/masonry/driveway-paving/',
    also: ['/masonry/concrete-driveways/'],
    material: 'Stamped concrete',
    scope: [
      'Single-width drive replaced from street to garage',
      'Large-format ashlar stamp, toned to the roof and shutters',
      'Graded to carry water off the surface and away from the house',
    ],
    w: 1200, h: 874,
    alt: 'Stamped concrete driveway in a large-format ashlar slate pattern running to the garage of a white Annandale colonial',
    summary: 'A single-width drive replaced in stamped concrete, textured in a large-format ashlar pattern and run the full length from street to garage.',
    body: [
      'A narrow lot leaves no room for a driveway that reads as a slab, so this one is stamped in a large-format ashlar pattern that gives the surface scale and grip without the maintenance of a jointed material. The tone was kept close to the grey of the roof and shutters rather than competing with the white brick.',
      'Stamped concrete suits a drive like this one: a single continuous pour with no joints for weeds to find, textured enough to keep its footing in a wet Northern Virginia winter. The run is graded to carry water off the surface and away from the house rather than toward the foundation.',
    ],
  },
  {
    slug: 'concrete-driveway-paver-border-springfield-va',
    title: 'Concrete Driveway with Paver Border',
    city: 'Springfield, VA',
    service: '/masonry/driveway-paving/',
    also: ['/masonry/concrete-driveways/'],
    material: 'Concrete with paver edging',
    scope: [
      'Broom-finished concrete drive curving from street to two-car garage',
      'Grey paver soldier course run down both edges',
      'Winter pour, scheduled into a clear window and kept covered while curing',
    ],
    w: 1200, h: 900,
    alt: 'Broom-finished concrete driveway edged with a grey paver soldier course, curving to the garage of a brick Springfield home in winter',
    summary: 'A broom-finished concrete drive with a grey paver soldier course run down both edges, curving from the street to a two-car garage.',
    body: [
      'The curve is the reason for the border. A concrete drive that sweeps rather than runs straight needs its edge defined, or the eye reads the sweep as a mistake; the paver soldier course does that, and it also gives the slab a clean termination against the lawn instead of a raw edge that grass creeps over.',
      'Poured in winter, which is a matter of watching the forecast rather than avoiding the season. Concrete needs its cure protected from freezing, so the pour was scheduled into a clear window and the surface kept covered. The broom finish across the driving surface is what gives it traction once the weather turns.',
    ],
  },
  {
    slug: 'asphalt-driveway-springfield-va',
    title: 'Asphalt Driveway Replacement',
    city: 'Springfield, VA',
    service: '/masonry/driveway-paving/',
    also: ['/masonry/asphalt-driveways/'],
    material: 'Asphalt',
    scope: [
      'Old surface torn out and hauled away',
      'Base regraded before any new material went down',
      'Full-width asphalt mat laid and roller-compacted hot',
    ],
    w: 1200, h: 722,
    alt: 'M&C crew compacting a freshly laid asphalt driveway with a ride-on roller at a Springfield home',
    summary: 'A full-width asphalt replacement, photographed mid-compaction with the roller working the fresh mat.',
    body: [
      'This is what the middle of an asphalt job looks like. The mat has been laid and the ride-on roller is compacting it while the material is still hot. Compaction is the step that decides how long the surface lasts, and it has a window measured in minutes, not hours. Get it right and the driveway sheds water for two decades; rush it and the surface ravels at the edges within a few winters.',
      'The old surface was torn out and the base regraded before any new material went down. That is the part no one photographs and the part that actually matters: asphalt laid over a failing base fails in exactly the same places the old one did, on roughly the same schedule.',
    ],
  },
  {
    slug: 'asphalt-driveway-paver-border-mclean-va',
    title: 'Asphalt Driveway with Paver Border',
    city: 'McLean, VA',
    service: '/masonry/driveway-paving/',
    also: ['/masonry/asphalt-driveways/'],
    material: 'Asphalt with paver edging',
    scope: [
      'Long asphalt drive laid and compacted',
      'Tan paver soldier course run the length of the edge',
      'Clean separation held between the paving and the planting beds',
    ],
    w: 1200, h: 934,
    alt: 'Freshly laid asphalt driveway edged with a tan paver border, running past clipped shrubs at a McLean home',
    summary: 'A long asphalt drive finished with a tan paver soldier course along its edge, separating the paving from the planting beds.',
    body: [
      'Asphalt on its own gives you a clean surface and a soft edge. The paver border is what turns it into a finished piece of hardscape; it holds the asphalt edge from crumbling under a tyre that strays, and it draws a deliberate line between the drive and the beds instead of letting mulch and blacktop meet in a ragged seam.',
      'On a run this long the border also does something for the eye: it follows the curve and makes the length feel intentional. The alternative, an unedged strip of asphalt disappearing between the shrubs, reads as utility rather than as part of the property.',
    ],
  },
  {
    slug: 'circular-fire-pit-patio-vienna-va',
    title: 'Circular Fire Pit Patio with Seating Wall',
    city: 'Vienna, VA',
    service: '/stone-work/patio-design/',
    also: ['/masonry/retaining-walls/'],
    material: 'Stone patio with block seating wall',
    scope: [
      'Free-standing circular patio set away from the house',
      'Central fire pit with seating for four in chairs',
      'Low perimeter wall retaining the raised pad and seating another six',
    ],
    w: 1200, h: 900,
    alt: 'Circular stone patio with a low seating wall and a central fire pit ringed by Adirondack chairs in a landscaped Vienna backyard',
    summary: 'A free-standing circular patio built around a fire pit, ringed by a low seating wall and set into an established lawn.',
    body: [
      'The circle is set away from the house rather than attached to it, which is the right call on a property that already had a pool terrace doing the job of an entertaining space. This is the other kind of outdoor room, the one you use in October, facing inward at the fire rather than outward at the yard.',
      'The low wall around the perimeter is structural and social at once: it retains the raised pad against the surrounding grade and it seats another half-dozen people when the four chairs are taken. Sized so that a person on the wall and a person in a chair are at roughly the same height, which is the detail that decides whether a fire pit space actually gets used.',
    ],
  },
  {
    slug: 'brick-herringbone-walkway-arlington-va',
    title: 'Brick Herringbone Walkway',
    city: 'Arlington, VA',
    service: '/stone-work/walkways-steps/',
    also: ['/masonry/brickwork/'],
    material: 'Clay brick pavers',
    scope: [
      'Red clay brick set in a herringbone bond',
      'Every unit laid by hand to a string line',
      'Perimeter cut to fit so the field meets its border cleanly',
    ],
    w: 1200, h: 900,
    alt: 'M&C mason setting red clay brick pavers in a herringbone pattern with a mallet during installation in Arlington',
    summary: 'Red clay brick set in a herringbone bond, photographed during installation with the field being closed unit by unit.',
    body: [
      'Herringbone is the strongest bond you can lay in a brick field, which is why it is worth the extra labour it costs. Every unit locks against its neighbours in two directions, so the surface distributes load instead of letting individual bricks work loose, the reason it has been the pattern of choice for paved surfaces since long before anyone was laying them by machine.',
      'Set by hand, one at a time, with a mallet and a string line. The cuts at the perimeter are what the work is judged on: a herringbone field meeting its border cleanly means every edge unit was measured and cut to fit, and there is no way to hurry that part.',
    ],
  },
  {
    slug: 'block-retaining-wall-steps-vienna-va',
    title: 'Segmental Block Retaining Wall with Steps',
    city: 'Vienna, VA',
    service: '/masonry/retaining-walls/',
    also: ['/stone-work/walkways-steps/'],
    material: 'Segmental block',
    scope: [
      'Curved segmental block wall terracing a sloped front yard',
      'Steps built into the wall rather than added beside it',
      'Paver landing and capping course, doubling as seating on the lower run',
    ],
    w: 1200, h: 900,
    alt: 'Curved cream segmental block retaining wall with integrated steps and a paver landing at the front entrance of a Vienna home',
    summary: 'A curved segmental block wall terracing a sloped front yard, with steps and a paver landing built into the run.',
    body: [
      'A front yard that falls away from the house gives you two bad options and one good one: live with an awkward slope, cut a raw bank into it, or terrace it properly. This is the third. The wall holds the grade back in a curve that follows the natural line of the approach, and the steps are built into the wall rather than bolted on beside it.',
      'Segmental block suits a wall like this because it flexes. Each course sets back slightly into the slope, so the wall leans into the load it is holding instead of standing straight up against it, and the curve is achieved by the geometry of the units rather than by cutting. The capping course finishes the top and, on the lower run, doubles as somewhere to sit.',
    ],
  },
  {
    slug: 'paver-walkway-soldier-border-fairfax-va',
    title: 'Paver Walkway with Soldier Border',
    city: 'Fairfax, VA',
    service: '/stone-work/walkways-steps/',
    also: ['/masonry/driveway-paving/'],
    material: 'Interlocking pavers',
    scope: [
      'Wide paver walk run from the public sidewalk to the house',
      'Running-bond field framed both sides by a contrasting soldier course',
      'Flush, level transition at the public sidewalk',
    ],
    w: 1200, h: 554,
    alt: 'Wide paver walkway with a contrasting soldier-course border running from the public sidewalk toward a Fairfax home',
    summary: 'A wide paver walk running from the public sidewalk to the house, bordered on both sides with a contrasting soldier course.',
    body: [
      'Wider than a standard front walk, and deliberately so: two people should be able to walk up to a front door side by side. The field is laid in a running bond with the contrasting border framing it the whole way, which keeps a long straight run from reading as a corridor.',
      'The walk meets the public sidewalk flush, with the transition set level so there is nothing to catch a toe or a wheel. Everything is pitched to shed water into the lawn on either side rather than letting it run the length of the walk and pool at the low end.',
    ],
  },
  {
    slug: 'concrete-driveway-broom-finish',
    title: 'Broom-Finished Concrete Driveway',
    // city: 'TODO',  ← add the town and this links from its service-area page
    service: '/masonry/driveway-paving/',
    also: ['/masonry/concrete-driveways/'],
    material: 'Poured concrete',
    w: 1200, h: 900,
    scope: [
      'Full-width concrete drive poured from the street apron to the garage',
      'Broom finish across the driving surface for wet-weather traction',
      'Control joint run down the centre so shrinkage cracks where we chose',
    ],
    alt: 'Freshly poured broom-finished concrete driveway running to a two-car garage, taped off while it cures',
    summary: 'A single pour running the full width of the drive to a two-car garage, broom-finished for grip and jointed down the centre.',
    body: [
      'Photographed the day it was placed, which is why the tape is still up. Concrete has to be left alone while it cures: a car driven onto a slab in its first week does damage that never comes out, so the tape stays and the homeowner parks on the street for a few days. That is the whole inconvenience of a concrete driveway, and it happens once.',
      'The line running down the centre is a control joint, not a crack. Concrete shrinks as it cures and the shrinkage has to go somewhere; a joint cut to about a quarter of the slab depth gives it a weak line to follow, so the crack forms inside the joint where nobody ever sees it. A drive this width without one would have cracked on its own terms, diagonally, within the first year.',
      'The broom finish is the texture dragged across the surface while it was still plastic. It is the least glamorous of the concrete finishes and the right one for a driveway on a slope in a climate that ices over; a smooth trowelled slab looks better in a photograph and is treacherous in February.',
    ],
  },
  {
    slug: 'paver-walkway-steps-front-entrance',
    title: 'Banded Paver Walkway with Entry Steps',
    // city: 'TODO',
    service: '/stone-work/walkways-steps/',
    material: 'Concrete pavers with bluestone-toned caps',
    w: 1200, h: 900,
    scope: [
      'Wide paver walk run from the public sidewalk to the front door',
      'Light field framed by a dark contrasting border on both sides',
      'Two entry steps built on a stone riser with full-width capped treads',
    ],
    alt: 'Wide light paver walkway with a dark contrasting border running from capped entry steps to the front door of a blue colonial',
    summary: 'A full-width front walk in light pavers with a dark border, rising over two capped steps at the sidewalk end and running straight to the door.',
    body: [
      'The width is the decision that makes this walk work. Two people can come up to the door side by side, which is what a front approach is actually for, and it costs surprisingly little more than rebuilding a narrow one. A three-foot path in front of a house this wide reads as an afterthought no matter what it is paved with.',
      'The dark border on both sides does two jobs. It frames a long straight run so it does not read as a corridor, and it gives the field a defined edge against the lawn rather than letting turf creep over the paving a season at a time.',
      'The steps at the sidewalk end are built on a stone riser with capped treads running the full width of the walk, so the tread you step onto is as wide as the path itself. Steps narrower than the walk they serve are the most common fault in a front entrance, and people find them in the dark with their feet.',
    ],
  },
  {
    slug: 'paver-patio-fire-table',
    title: 'Large-Format Paver Patio with Fire Table',
    // city: 'TODO',
    service: '/stone-work/patio-design/',
    also: ['/masonry/retaining-walls/'],
    material: 'Large-format concrete pavers',
    w: 1200, h: 748,
    scope: [
      'Large-format paver field laid to a banded rectangular layout',
      'Fire table set on the centre axis of the field',
      'Low perimeter walls with lit pillar caps framing the open side',
    ],
    alt: 'Large grey paver patio at dusk with a square fire table at its centre, framed by a contrasting border band and low walls with lit pillar caps',
    summary: 'A large-format paver terrace laid to a banded rectangular layout, with a fire table on the centre axis and lit pillars closing the open side.',
    body: [
      'A patio this size needs a centre or it reads as a car park. The banding does that geometrically (a contrasting border inside a contrasting border, drawing the eye to the middle) and the fire table sits exactly where those bands point. Without that structure the same square footage of paving would feel like surplus rather than like a room.',
      'The low walls and lit pillars around the open edge are what turn a terrace into an outdoor room. They give the space a boundary on the side that faces open lawn, and the lighting in the caps means the edge is still legible after dark, which is when a patio with a fire feature actually gets used.',
      'Large-format units suit an area this big. Fewer joints across the field means the eye reads the surface as a plane rather than as a pattern, and the pattern work is saved for the bands where it does something.',
    ],
  },
  {
    slug: 'bluestone-front-entrance-steps',
    title: 'Bluestone Front Entrance and Steps',
    // city: 'TODO',
    service: '/stone-work/walkways-steps/',
    also: ['/masonry/brickwork/'],
    material: 'Bluestone with stone riser walls',
    w: 1200, h: 896,
    scope: [
      'Irregular bluestone landing laid and fitted by hand',
      'Bluestone treads on stone riser walls rising to the door',
      'Stone-faced cheek walls carried up alongside the run',
    ],
    alt: 'Irregular bluestone landing and steps with stone riser walls rising to the front door of a brick house, with lanterns and planters on the treads',
    summary: 'A front entrance rebuilt in bluestone: an irregular flagstone landing, full-width treads on stone riser walls, and stone cheek walls carried up alongside.',
    body: [
      'Irregular bluestone is slower to lay than anything manufactured, because every piece is cut to its neighbours rather than dropped into a pattern. The landing here is the part that shows it: the joints run in no repeating direction and no two pieces are the same, which is the whole reason to use the material and the reason it cannot be hurried.',
      'The treads are full width and the risers are consistent from the bottom of the run to the top. That consistency is what your feet are reading as you climb, whether or not you notice it, and it is the thing that goes wrong when steps are patched rather than rebuilt.',
      'The cheek walls carried up alongside the steps are structural before they are decorative: they hold the grade back on either side of the run so the steps are not left standing free with soil washing against them. They also give you somewhere to stand a lantern.',
    ],
  },
  {
    slug: 'stone-retaining-wall-bluestone-steps',
    title: 'Curved Stone Retaining Wall with Steps',
    // city: 'TODO',
    service: '/masonry/retaining-walls/',
    also: ['/stone-work/walkways-steps/'],
    material: 'Stacked stone with bluestone caps and treads',
    w: 1200, h: 803,
    scope: [
      'Curved stacked-stone wall terracing a sloped front yard',
      'Capped steps rising between two wall runs rather than beside them',
      'Irregular flagstone landing at the foot of the steps',
    ],
    alt: 'Curved stacked stone retaining wall with capped steps rising between two wall runs to a flagstone landing in a sloped front yard',
    summary: 'A stacked stone wall curved to follow a sloped front yard, with capped steps built into the run and an irregular flagstone landing at its foot.',
    body: [
      'The steps rise between the two wall runs rather than being set beside them, which is the difference between a wall that has steps and a wall that was designed with steps in it. Both walls terminate cleanly into the step cheeks, so there is no awkward junction where a straight run meets a stair that was added later.',
      'The curve follows the natural line of the slope instead of cutting across it. A straight wall on ground like this leaves wedge-shaped scraps of lawn at each end that never look intentional and are miserable to mow.',
      'What you cannot see is the part that decides whether it stays standing. Behind the face there is drainage aggregate, filter fabric keeping the soil out of that aggregate, and a drain at the base running to an outfall. Saturated soil weighs dramatically more than dry soil and pushes considerably harder, and hydrostatic pressure is the single most common reason stone walls lean out and eventually come down.',
    ],
  },
];

/* --- FAQ ----------------------------------------------------------------- */
export const FAQ = [
  {
    q: 'Do you charge for estimates?',
    a: ['No. Estimates are free across our entire service area. We come out, look at the site, talk through what you are trying to accomplish, and give you a written price with no obligation.'],
  },
  {
    q: 'How long has M&C been in business?',
    a: ['We have been serving homeowners across Northern Virginia since 2010. M&C is family-operated: you deal with the owners directly, not a salesperson, and the same people who quote the job are on site while it is being built.'],
  },
  {
    q: 'What areas do you serve?',
    a: ['Alexandria, Arlington, Falls Church, McLean, Vienna, Fairfax, Annandale, and Springfield. If you are just outside that list, call and ask. We often can.'],
  },
  {
    q: 'How long does a typical project take?',
    a: ['It depends heavily on scope and weather. A front walkway or set of steps is often two to three days. A full driveway replacement usually runs three to five. Larger patios, retaining walls, and multi-part projects take longer, and we give you a realistic schedule with the estimate rather than an optimistic one.'],
  },
  {
    q: 'What affects the price of a masonry project?',
    a: ['Square footage, material choice, site access, how much excavation and base work is needed, and any drainage that has to be corrected. Access is the factor homeowners tend to underestimate: a backyard that equipment cannot reach changes the labor considerably. We break all of this out in the estimate so you can see where the money goes.'],
  },
  {
    q: 'Do you clean up at the end of each day?',
    a: ['Yes. Job site cleanliness is something we take seriously, and it comes up repeatedly in our reviews. You should be able to use your property while a project is in progress.'],
  },
  {
    q: 'Do you handle drainage as part of a project?',
    a: ['Yes, and in most cases we insist on it. Water is the reason most masonry and paving fails early. If your existing drainage is contributing to the problem we are being asked to fix, we will tell you and include the correction in the scope.'],
  },
];

/* --- Workmanship warranty -------------------------------------------------
   These terms are advertised on the warranty page and on each service page.
   They are contractual promises: change them here only to match what the
   written contract actually says, never to match what reads well.
   ------------------------------------------------------------------------ */
export const WARRANTY = {
  headline: 'Our Workmanship Warranty',
  lede: 'Every installation we complete is covered by a written workmanship warranty. The length depends on what was built, and the term is stated in your contract before you sign it.',
  terms: [
    { key: 'asphalt',  years: 3, label: 'Asphalt driveways and paving' },
    { key: 'concrete', years: 5, label: 'Concrete driveways, patios, and walkways' },
    { key: 'pavers',   years: 5, label: 'Paver patios, driveways, and walkways' },
    { key: 'masonry',  years: 5, label: 'Masonry, brick, and stonework' },
    { key: 'walls',    years: 5, label: 'Retaining walls' },
    { key: 'drainage', years: 3, label: 'Drainage and French drain installations' },
  ],
};

/* --- Homepage "why us" points -------------------------------------------- */
export const POINTS = [
  ['Family-operated since 2010', 'You deal with the owners directly. The people who quote your job are on site while it is being built.'],
  ['Base prep done properly', 'Excavation, compacted aggregate, and drainage before anything decorative goes down. It is the step that decides whether the work lasts.'],
  ['Clean sites, kept schedules', 'Our crews show up when they say they will and leave the site clean at the end of every day, the thing customers mention most.'],
  ['Free written estimates', 'Itemized, no obligation, and honest about what can wait. We would rather keep a customer than sell a job.'],
];

/* --- Retired URLs --------------------------------------------------------
   Landing pages from the old WordPress site that live Google Ads campaigns
   still point at. The rebuild dropped them, so every one of these was
   returning a 404 — which is what stopped the campaigns. Each maps to the
   closest equivalent page on the current site.

   Keep this list even after the ads' final URLs are updated: these URLs are
   also in whatever inbound links and citations the old pages accumulated. */
export const REDIRECTS = [];
