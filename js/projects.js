const projects = [
  {
    id: 'sunrise-vista',
    name: 'Sunrise Vista',
    location: 'Bhubaneswar, Odisha',
    type: 'Residential Apartment',
    config: '2 BHK / 3 BHK',
    price: 'Premium range',
    status: 'New Launch',
    category: 'new-launch',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A contemporary residential address crafted for families seeking modern, balanced city living with practical comforts and neighborhood convenience.',
    overview: 'Sunrise Vista is designed for homebuyers looking for an elegant, family-oriented lifestyle in Bhubaneswar. The project emphasizes efficient planning, natural light and an easy connection to daily essentials.',
    specifications: ['Modern apartment planning', 'Well-designed living spaces', 'Secure access and common areas', 'Natural light and ventilation'],
    amenities: ['Landscaped community spaces', 'Children play area', '24/7 security', 'Power backup', 'Visitor seating', 'Car parking'],
    locationAdvantages: ['Close to schools and daily essentials', 'Accessible by major city roads', 'Suitable for family living', 'Balanced urban convenience'],
    connectivity: ['Easy commute across Bhubaneswar', 'Nearby retail and service hubs', 'Accessible residential zone', 'Connected to local transport routes'],
    btnLabel: 'Schedule a Site Visit'
  },
  {
    id: 'meadow-heights',
    name: 'Meadow Heights',
    location: 'Near NH-16, Bhubaneswar',
    type: 'Family Apartments',
    config: '1 BHK / 2 BHK / 3 BHK',
    price: 'Affordable to mid-range',
    status: 'Upcoming',
    category: 'upcoming',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A thoughtfully laid-out residential community ideal for growing families and professionals seeking a practical home investment in Bhubaneswar.',
    overview: 'Meadow Heights showcases streamlined apartment planning and livable spaces that begin with practical family needs and end with a comfortable urban lifestyle.',
    specifications: ['Smart interior planning', 'Flexible apartment sizes', 'Premium yet comfortable finishes', 'Efficient circulation planning'],
    amenities: ['Green open areas', 'Community seating zones', 'Security monitoring', 'Elevators', 'Water management', 'Open parking'],
    locationAdvantages: ['Near daily conveniences', 'Family-oriented neighborhood', 'Good access to transportation', 'Well-connected residential zone'],
    connectivity: ['Close to main roads', 'Local commercial activity nearby', 'Convenient access to key city nodes', 'Commuter friendly'],
    btnLabel: 'Request Details'
  },
  {
    id: 'harbour-crest',
    name: 'Harbour Crest',
    location: 'South Bhubaneswar',
    type: 'Premium Residences',
    config: '2 BHK / 3 BHK / 4 BHK',
    price: 'Premium range',
    status: 'Ready to Move',
    category: 'ready-to-move',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
    ],
    description: 'A refined residential project for buyers who value elevated space planning, community living and a strong address in the city.',
    overview: 'Harbour Crest reflects a premium residential outlook while staying rooted in the practical needs of urban families and professionals in Bhubaneswar.',
    specifications: ['Spacious apartment layouts', 'Elevated urban appeal', 'Comfort-first planning', 'Modern family spaces'],
    amenities: ['Clubhouse access', 'Landscaped deck', 'Security systems', 'Power support', 'Dedicated parking', 'Leisure zones'],
    locationAdvantages: ['Strong city connectivity', 'Near key amenities', 'Strategic residential address', 'Convenient family lifestyle'],
    connectivity: ['Well-connected within Bhubaneswar', 'Near public transport routes', 'Access to nearby services', 'Suitable for daily commuting'],
    btnLabel: 'Schedule a Visit'
  }
];

const renderFeaturedProjects = () => {
  const container = document.getElementById('featured-projects');
  if (!container) return;

  const featured = projects.slice(0, 3);
  container.innerHTML = featured
    .map(
      (project) => `
        <article class="project-card">
          <img src="${project.image}" alt="Illustrative placeholder image for ${project.name}" />
          <div class="card-body">
            <div class="card-meta">
              <span class="tag">${project.status}</span>
              <span>${project.location}</span>
            </div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="card-footer">
              <strong>${project.config}</strong>
              <a href="project-details.html?project=${project.id}" class="btn btn-secondary">View Details</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
};

const renderProjectList = () => {
  const container = document.getElementById('project-list');
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card" data-category="${project.category}">
          <img src="${project.image}" alt="Illustrative placeholder image for ${project.name}" />
          <div class="card-body">
            <div class="card-meta">
              <span class="tag">${project.status}</span>
              <span>${project.type}</span>
            </div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="card-footer">
              <strong>${project.price}</strong>
              <a href="project-details.html?project=${project.id}" class="btn btn-secondary">View Details</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  bindProjectFilters();
};

const bindProjectFilters = () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('#project-list .project-card');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      buttons.forEach((btn) => btn.classList.toggle('active', btn === button));

      cards.forEach((card) => {
        const shouldShow = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !shouldShow);
      });
    });
  });
};

const getProjectFromQuery = () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('project');
  return projects.find((project) => project.id === projectId) || projects[0];
};

const renderProjectDetails = () => {
  const container = document.getElementById('project-details-content');
  if (!container) return;

  const project = getProjectFromQuery();

  const html = `
    <section class="page-hero">
      <div class="container narrow">
        <span class="eyebrow">Project details</span>
        <h1>${project.name}</h1>
      </div>
    </section>

    <section class="section project-showcase">
      <div class="container">
        <div class="project-main-image">
          <img src="${project.image}" alt="Illustrative placeholder image for ${project.name}" />
        </div>

        <div class="gallery-grid">
          ${project.gallery
            .map(
              (image) => `<img src="${image}" alt="Illustrative placeholder image for ${project.name}" />`
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container detail-layout">
        <div>
          <span class="eyebrow">Overview</span>
          <h2>${project.name}</h2>
          <p>${project.overview}</p>

          <div class="project-meta">
            <div class="summary-row"><span>Location</span><strong>${project.location}</strong></div>
            <div class="summary-row"><span>Property Type</span><strong>${project.type}</strong></div>
            <div class="summary-row"><span>Configuration</span><strong>${project.config}</strong></div>
            <div class="summary-row"><span>Price Range</span><strong>${project.price}</strong></div>
            <div class="summary-row"><span>Status</span><strong>${project.status}</strong></div>
          </div>

          <div class="cta-row">
            <a href="projects.html" class="btn btn-secondary">Back to Projects</a>
            <a href="contact.html" class="btn btn-primary">Schedule a Site Visit</a>
          </div>
        </div>

        <aside class="property-summary">
          <span class="eyebrow">Quick details</span>
          <h3>Property highlights</h3>
          <ul class="spec-list">
            ${project.specifications.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </aside>
      </div>
    </section>

    <section class="section">
      <div class="container split-layout">
        <div>
          <span class="eyebrow">Amenities</span>
          <h2>Comfort and lifestyle features</h2>
          <ul class="amenity-list">
            ${project.amenities.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div>
          <span class="eyebrow">Location advantages</span>
          <h2>Why this location works</h2>
          <ul class="amenity-list">
            ${project.locationAdvantages.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container split-layout">
        <div>
          <span class="eyebrow">Connectivity</span>
          <h2>Easy access to the city</h2>
          <ul class="amenity-list">
            ${project.connectivity.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div>
          <span class="eyebrow">Request a callback</span>
          <form class="enquiry-form" data-form="lead-form" novalidate>
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="Optional" />
            </label>
            <label>
              Preferred configuration
              <input type="text" name="configuration" value="${project.config}" />
            </label>
            <button type="submit" class="btn btn-primary">${project.btnLabel}</button>
            <p class="form-note" aria-live="polite">This demo form validates input and is ready to be connected to a preferred backend or form service.</p>
          </form>
        </div>
      </div>
    </section>
  `;

  container.innerHTML = html;
};

const initForms = () => {
  document.querySelectorAll('[data-form="lead-form"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = '#d44848';
        } else {
          field.setAttribute('aria-invalid', 'false');
          field.style.borderColor = 'rgba(23, 61, 89, 0.15)';
        }
      });

      if (!valid) {
        const note = form.querySelector('.form-note');
        if (note) {
          note.textContent = 'Please complete the required fields before submitting this enquiry form.';
          note.style.color = '#9d2b2b';
        }
        return;
      }

      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Form validation passed. Connect this form to your preferred backend or form service to receive enquiries.';
        note.style.color = '#173D59';
      }

      form.reset();
    });
  });
};

const initNavigation = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!navToggle || !siteNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
};

const initFooterYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

renderFeaturedProjects();
renderProjectList();
renderProjectDetails();
initForms();
initNavigation();
initFooterYear();
