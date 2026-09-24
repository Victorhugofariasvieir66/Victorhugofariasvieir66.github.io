// ===== PROFILE =====
const PROFILE = {
  email: 'fariasvieira-2023@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/victorhugo-cybersecurity',
  github: 'https://github.com/Victorhugofariasvieir66',
  whatsapp: '5519978195173'
};
// ===================

document.getElementById('year').textContent = new Date().getFullYear();

const emailLink = document.getElementById('emailLink');
const linkedinLink = document.getElementById('linkedinLink');
const githubLink = document.getElementById('githubLink');
const whatsappLink = document.getElementById('whatsappLink');

emailLink.href = `mailto:${PROFILE.email}`;
linkedinLink.href = PROFILE.linkedin;
githubLink.href = PROFILE.github;

whatsappLink.href =
  `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(
    'Hello Victor, I found your portfolio and would like to talk about an opportunity.'
  )}`;


// Tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(item =>
      item.classList.toggle('active', item === tab)
    );

    panels.forEach(panel =>
      panel.classList.toggle('active', panel.dataset.panel === target)
    );
  });
});


// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});


// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.08
});

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
});


// Feedback form
const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(feedbackForm);

  const name = data.get('name');
  const company = data.get('company') || 'Not informed';
  const senderEmail = data.get('email');
  const message = data.get('message');

  const subject = `Portfolio feedback from ${name}`;

  const body = [
    `Name: ${name}`,
    `Company / Role: ${company}`,
    `Email: ${senderEmail}`,
    '',
    message
  ].join('\n');

  window.location.href =
    `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
