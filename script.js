document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  const form = document.getElementById('inquiryForm');
  const successMsg = document.getElementById('inquirySuccess');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 20);
  });

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('nav--open'));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!firstName) { form.firstName.classList.add('error'); valid = false; }
    if (!lastName) { form.lastName.classList.add('error'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { form.email.classList.add('error'); valid = false; }
    if (!message) { form.message.classList.add('error'); valid = false; }

    if (!valid) return;

    form.hidden = true;
    successMsg.hidden = false;
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});
