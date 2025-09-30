// site/app.js
document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------
  // Scrollspy (active link highlight)
  // ------------------------------
  (function scrollSpy() {
    const menuLinks = Array.from(document.querySelectorAll('.menu a[href^="#"]'));
    if (!menuLinks.length) return;

    const sections = menuLinks
      .map(a => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);

    const linkFor = (id) => menuLinks.find(a => a.getAttribute('href') === `#${id}`);

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const link = linkFor(id);
        if (!link) return;
        if (entry.isIntersecting) {
          menuLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0.4 });

    sections.forEach(sec => io.observe(sec));
  })();

  // ------------------------------
  // Hero Greeting Modal
  // ------------------------------
  (function heroModal() {
    const modal = document.getElementById('introModal');
    const video = document.getElementById('introVideo');
    const openBtns = document.querySelectorAll('[data-open-intro]');
    if (!modal || !video) return;

    let lastFocused = null;

    const focusCloseBtn = () => {
      const btn = modal.querySelector('.modal-close');
      if (btn) btn.focus({ preventScroll: true });
    };

    const open = () => {
      lastFocused = document.activeElement;
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // lock background scroll

      try { video.currentTime = 0; } catch(_) {}
      video.play?.().catch(() => {});
      // give the DOM a tick, then focus the close button
      setTimeout(focusCloseBtn, 0);
    };

    const close = () => {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // restore scroll
      video.pause?.();

      // restore focus to the opener that triggered it
      if (lastFocused && typeof lastFocused.focus === 'function') {
        setTimeout(() => lastFocused.focus({ preventScroll: true }), 0);
      }
    };

    // Openers
    openBtns.forEach(btn => btn.addEventListener('click', (e) => {
      e.preventDefault();
      open();
    }));

    // Closers (X + backdrop) via explicit listeners
    modal.querySelectorAll('[data-close-intro]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); close(); });
    });

    // Also catch any dynamically-added element with data-close-intro
    document.addEventListener('click', (e) => {
      const el = e.target.closest('[data-close-intro]');
      if (el && modal.getAttribute('aria-hidden') === 'false') {
        e.preventDefault();
        close();
      }
    });

    // Esc key closes
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
        e.preventDefault();
        close();
      }
    });
  })();
});

