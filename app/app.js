// ======== CAMBIAR NAVBAR AL HACER SCROLL ========
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ======== ANIMACIONES DE APARICIÓN ========
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 150) {
      sec.classList.add('visible');
    }
  });
});

// ======== EFECTO DE APARICIÓN CON CSS DINÁMICO ========
const style = document.createElement('style');
style.innerHTML = `
  section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s ease;
  }
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
