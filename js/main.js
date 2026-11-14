const initForms = () => {
  document.querySelectorAll('[data-form="lead-form"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const requiredFields = form.querySelectorAll('[required]');
      let valid = true;

      requiredFields.forEach((field) => {
        const value = field.value.trim();

        if (!value) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = '#d44848';
          return;
        }

        if (field.type === 'email' && value && !field.checkValidity()) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = '#d44848';
          return;
        }

        field.setAttribute('aria-invalid', 'false');
        field.style.borderColor = 'rgba(23, 61, 89, 0.15)';
      });

      const note = form.querySelector('.form-note');

      if (!valid) {
        if (note) {
          note.textContent = 'Please complete the required fields before submitting this enquiry form.';
          note.style.color = '#9d2b2b';
        }
        return;
      }

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

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!siteNav.contains(event.target) && !navToggle.contains(event.target)) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
};

const initFooterYear = () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initForms();
  initNavigation();
  initFooterYear();
});
