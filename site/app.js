function toggleNav(){
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("app.js loaded ✅ v17");

  // Update year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Ensure banner starts hidden
  const banner = document.getElementById("thank-you-banner");
  if (banner && !banner.classList.contains("hidden")) {
    banner.classList.add("hidden");
  }

  // Clear any leftover status text on load
  const status = document.getElementById('form-status');
  if (status) status.textContent = '';

  // If you still want the querystring-triggered banner:
  if (window.location.search.includes("sent=1")) {
    showBannerFor5s();
  }

  // AJAX submit to Getform
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (status) status.textContent = 'Sending…';

    const endpoint = form.getAttribute('action');
    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      // Treat 200/201/204 as success; some providers return 200 with JSON
      if (!res || (res.status && res.status >= 400)) {
        throw new Error('Bad response');
      }

      showBannerFor5s();
      if (status) status.textContent = 'Thanks! We got your message.';
      form.reset();
    } catch (err) {
      if (status) status.textContent = 'Network error — please try again.';
    }
  });

  function showBannerFor5s(){
    const b = document.getElementById("thank-you-banner");
    if (!b) return;
    b.classList.remove("hidden");
    setTimeout(() => b.classList.add("hidden"), 5000);
  }
});

