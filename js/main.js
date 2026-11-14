const initNavigation = () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
};

const revealElements = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
};

const initForms = () => {
  document.querySelectorAll('[data-form="lead-form"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('.form-note');

      if (!form.checkValidity()) {
        form.reportValidity();
        if (note) note.textContent = 'Please complete the required name, phone and consent fields.';
        return;
      }

      if (note) {
        note.textContent = 'Your enquiry has been captured in this prototype. Connect the form to your preferred enquiry service to receive live submissions.';
      }

      form.reset();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  revealElements();
  initForms();
  document.querySelectorAll('#year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
