// --- Footer year ---
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// --- Hero modal logic ---
document.addEventListener('DOMContentLoaded', () => {
  const openBtns = document.querySelectorAll('[data-open-intro]');
  const modal = document.getElementById('introModal');
  const video = document.getElementById('introVideo');
  const closeEls = modal ? modal.querySelectorAll('[data-close-intro]') : [];

  if (!modal || !video) return;

  const open = () => {
    modal.setAttribute('aria-hidden', 'false');
    video.currentTime = 0;
    video.play().catch(() => {});
  };
  const close = () => {
    modal.setAttribute('aria-hidden', 'true');
    video.pause();
  };

  openBtns.forEach(btn => btn.addEventListener('click', open));
  closeEls.forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') close();
  });
});

// --- Scrollspy ---
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.menu a[href^="#"]'));
  if (!navLinks.length) return;

  const linkById = new Map(
    navLinks
      .map(a => [a.getAttribute('href').trim().replace(/^#/, ''), a])
      .filter(([id]) => !!document.getElementById(id))
  );

  const sections = Array.from(document.querySelectorAll('main section[id]'))
    .filter(sec => linkById.has(sec.id));

  const setActive = (id) => {
    navLinks.forEach(a => {
      a.classList.remove('active');
      a.removeAttribute('aria-current');
    });
    const link = linkById.get(id);
    if (link) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible.length) setActive(visible[0].target.id);
  }, {
    root: null,
    rootMargin: '-80px 0px -40% 0px',
    threshold: [0.25, 0.5, 0.75, 0.9]
  });

  sections.forEach(sec => io.observe(sec));

  window.addEventListener('hashchange', () => {
    const id = (location.hash || '').replace(/^#/, '');
    if (id && linkById.has(id)) setActive(id);
  });
});

