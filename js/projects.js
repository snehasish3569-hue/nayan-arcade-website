const project = {
  name: 'Nayan Arcade',
  location: 'Barabari, Khandagiri, Bhubaneswar, Odisha',
  type: 'Residential complex',
  blocks: 'Block A and Block B',
  floors: 'Stilt + 4 floors (as shown in brochure)',
  configurations: [
    { block: 'Block A', type: '3 BHK', detail: 'The brochure shows a typical Stilt + 4 floor plan.' },
    { block: 'Block B', type: '3 BHK', detail: 'The brochure shows a typical Stilt + 4 floor plan.' },
    { block: 'Block B', type: '2 BHK', detail: 'The brochure identifies plans for the first through fourth floors, with a separate stilt-floor plan.' }
  ],
  amenities: [
    '24-hour water supply',
    'DG connection for power supply',
    'CCTV surveillance in the building',
    'Two lifts for both blocks',
    'Sewage treatment facility',
    'Earthing arrester',
    'Transformer for both blocks',
    'Designed boundary wall',
    'Rooftop parapet wall'
  ],
  specifications: [
    { title: 'Structure & walls', detail: 'RCC framed structure; brochure states a 10-inch finished external wall. Internal Birla White putty or equivalent; external tile and weather-coat acrylic paint combination.' },
    { title: 'Flooring', detail: 'Premium vitrified tiles in living, dining and bedrooms; optional premium laminated wooden flooring in the master bedroom; granite or step tiles at staircase; heavy-duty driveway tiles.' },
    { title: 'Kitchen', detail: 'Anti-skid floor tiles, ceramic wall tiles up to 2 feet above the working platform, granite counter and stainless-steel sink.' },
    { title: 'Toilets', detail: 'Premium ceramic wall tiles stated up to 7 feet, anti-skid floor tiles, and Jaquar, Hindware or equivalent fixtures/fittings.' },
    { title: 'Balcony, windows & doors', detail: 'Balcony floor tiles and safety steel railing; uPVC glass windows; sal wood frame with flush doors. Brochure states teak wood main door.' }
  ],
  landmarks: [
    ['Khandagiri', '500 m'], ['Baramunda Bus Stand', '1 km'], ['St. Xavier School', '1 km'],
    ['SOA ITR', '1 km'], ['Biju Patnaik Airport', '2 km'], ['Capital Hospital', '2 km'],
    ['Sum Hospital', '2.5 km'], ['DAV School', '3 km'], ['Central School', '3 km'],
    ['Kalinga Studio', '3 km'], ['AIIMS Hospital', '4 km'], ['Kalinga Stadium', '4 km'],
    ['Railway Station', '5 km']
  ]
};

const listItems = (items) => items.map((item) => `<li>${item}</li>`).join('');

const renderProjectDetails = () => {
  const root = document.getElementById('project-details-content');
  if (!root) return;

  root.innerHTML = `
    <section class="page-hero"><div class="container narrow"><p class="eyebrow">Project details</p><h1>Nayan Arcade</h1><p class="page-lede">A residential complex at Barabari, Khandagiri, Bhubaneswar.</p></div></section>
    <section class="section"><div class="container detail-intro"><div><p class="eyebrow">At a glance</p><h2>Designed around<br><em>everyday living.</em></h2><p>Project information below is based on the supplied brochure. Its specifications are tentative and should be confirmed with the developer.</p></div><div class="glance-grid"><div><span>Location</span><strong>${project.location}</strong></div><div><span>Project type</span><strong>${project.type}</strong></div><div><span>Blocks</span><strong>${project.blocks}</strong></div><div><span>Building form</span><strong>${project.floors}</strong></div></div></div></section>
    <section class="section alt-bg" id="configurations"><div class="container"><div class="section-heading"><div><p class="eyebrow">Apartment plans</p><h2>Find your fit.</h2></div><p class="section-copy">The brochure shows plans for 2 BHK and 3 BHK apartments. Refer to approved drawings for dimensions, layout and orientation.</p></div><div class="config-detail-grid">${project.configurations.map((item, index) => `<article class="config-detail-card"><span class="card-number">0${index + 1} / ${item.block.toUpperCase()}</span><h3>${item.type}</h3><p>${item.detail}</p><a href="contact.html#enquiry">Ask about this plan <span>↗</span></a></article>`).join('')}</div></div></section>
    <section class="section"><div class="container detail-split"><div><p class="eyebrow">Building facilities</p><h2>Details for<br><em>everyday comfort.</em></h2><p class="section-copy">Facilities listed here are stated in the brochure; confirm their current availability, operation and scope.</p></div><ul class="detail-list">${listItems(project.amenities)}</ul></div></section>
    <section class="section alt-bg"><div class="container"><div class="section-heading"><div><p class="eyebrow">Specifications</p><h2>Materials &amp; finishes.</h2></div><p class="section-copy">A concise guide to finish details described in the brochure. Brands are noted as stated, or equivalent where specified.</p></div><div class="spec-grid">${project.specifications.map((item) => `<article><span class="spec-rule"></span><h3>${item.title}</h3><p>${item.detail}</p></article>`).join('')}</div></div></section>
    <section class="section" id="location"><div class="container"><div class="section-heading"><div><p class="eyebrow">Around the neighbourhood</p><h2>Khandagiri, connected.</h2></div><p class="section-copy">Distances shown are reproduced from the brochure, are approximate and have not been independently verified. The brochure location map is not to scale.</p></div><div class="landmark-grid">${project.landmarks.map(([name, distance]) => `<div><span>${name}</span><strong>${distance}</strong></div>`).join('')}</div></div></section>
    <section class="section alt-bg"><div class="container notice-panel"><span class="notice-symbol">i</span><div><h2>Important project information</h2><p>The brochure is promotional, not a legal document. Specifications and details are tentative, may change without notice, and are subject to confirmation by the developer. Apartment areas, prices, availability, project status and RERA information are not published here because verified details were not supplied.</p></div></div></section>
    <section class="section"><div class="container cta-banner"><div><p class="eyebrow">Want to know more?</p><h2>Let’s talk about<br><em>Nayan Arcade.</em></h2></div><a class="btn btn-primary" href="contact.html#enquiry">Make an enquiry <span>→</span></a></div></section>
  `;
};

document.addEventListener('DOMContentLoaded', renderProjectDetails);
