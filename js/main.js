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

const initForms = () => {
  document.querySelectorAll('[data-form="lead-form"]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const note = form.querySelector('.form-note');
      if (!form.checkValidity()) {
        form.reportValidity();
        if (note) note.textContent = 'Please check the required name and phone fields.';
        return;
      }
      if (note) note.textContent = 'Your details have not been sent. This prototype is not connected to an enquiry service yet.';
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initForms();
  document.querySelectorAll('#year').forEach((el) => { el.textContent = new Date().getFullYear(); });
});
