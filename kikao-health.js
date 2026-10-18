const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

function closeMenu() {
  toggle.classList.remove('is-open');
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation');
}

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });

const slider = document.getElementById('slider');
document.getElementById('next').addEventListener('click', () => slider.scrollBy({ left: slider.clientWidth * .82, behavior: 'smooth' }));
document.getElementById('prev').addEventListener('click', () => slider.scrollBy({ left: -slider.clientWidth * .82, behavior: 'smooth' }));
slider.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') slider.scrollBy({ left: slider.clientWidth * .82, behavior: 'smooth' });
  if (event.key === 'ArrowLeft') slider.scrollBy({ left: -slider.clientWidth * .82, behavior: 'smooth' });
});

const projectDetails = {
  explainer: {
    eyebrow: 'VIDEO EXPLAINERS · PROJECT CONCEPT',
    title: 'Make complex health simple',
    description: 'A short-video concept that helps a healthcare professional explain a common health topic in clear, everyday language. The goal is to answer a real question, make reliable information easier to follow and give viewers a sensible next step.',
    deliverables: 'Possible deliverables: short video · captions · cut-down clips'
  },
  'brand-story': {
    eyebrow: 'BRAND STORIES · PROJECT CONCEPT',
    title: 'Put people behind the brand',
    description: 'A founder or clinician profile that introduces the people, purpose and experience behind a healthcare brand. Human stories can help audiences understand what the organisation stands for and what makes its approach distinctive.',
    deliverables: 'Possible deliverables: interview · social clips · brand profile'
  },
  'patient-education': {
    eyebrow: 'PATIENT EDUCATION · PROJECT CONCEPT',
    title: 'Help people take the next step',
    description: 'A patient-education content series built around common questions, prevention and when to seek professional care. Content should be reviewed by a qualified healthcare professional before publication.',
    deliverables: 'Possible deliverables: educational video · carousel · FAQ content'
  }
};
const dialog = document.getElementById('projectDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogEyebrow = document.getElementById('dialogEyebrow');
const dialogDescription = document.getElementById('dialogDescription');
const dialogDeliverables = document.getElementById('dialogDeliverables');
let lastProjectTrigger = null;

document.querySelectorAll('[data-project]').forEach(card => {
  card.addEventListener('click', () => {
    const details = projectDetails[card.dataset.project];
    if (!details) return;
    lastProjectTrigger = card;
    dialogEyebrow.textContent = details.eyebrow;
    dialogTitle.textContent = details.title;
    dialogDescription.textContent = details.description;
    dialogDeliverables.textContent = details.deliverables;
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  if (lastProjectTrigger) lastProjectTrigger.focus();
});
document.getElementById('dialogContact').addEventListener('click', () => dialog.close());

document.getElementById('year').textContent = new Date().getFullYear();
