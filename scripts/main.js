// Initialize ScrollReveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    delay: 200,
    reset: false, // Animations will only happen once
  });
  
  // Apply animations to specific sections
  sr.reveal('#about', { origin: 'bottom' });
  sr.reveal('#profile .section__pic-container', { origin: 'left', delay: 300 });
  sr.reveal('#profile .section__text', { origin: 'right', delay: 400 });
  sr.reveal('#about-me', { origin: 'bottom', delay: 300 });
  sr.reveal('#projects .bg-white', { origin: 'bottom', interval: 200 });