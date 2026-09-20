/* RÜYA.EXE live guestbook — Google Apps Script backend.
 *
 * 1. Paste your deployed web app URL below.
 * 2. Upload this file to the repo and add to index.html, after script.js:
 *      <script src="guestbook-live.js"></script>
 *
 * Until the URL is pasted in, this file does nothing (the page keeps its
 * placeholder behavior). Safe to deploy early.
 */
const GUESTBOOK_URL = 'https://script.google.com/macros/s/AKfycbznBh37TB7rZcg3aOTNilVeYXH-EQrAVvPaMr_Yg3ZI0hp1eEOSYnybLaJUewUuCuNy/exec';

(function () {
  if (!GUESTBOOK_URL || GUESTBOOK_URL.indexOf('PASTE_YOUR') === 0) return; // not configured yet

  const form = document.getElementById('guestbook-form');
  const status = document.getElementById('guestbook-status');
  const logBody = document.querySelector('#guestbook-log .dialog-body');

  function esc(s) {
    return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function fmtDate(ms) {
    const d = new Date(ms);
    const p = n => String(n).padStart(2, '0');
    return p(d.getMonth() + 1) + '.' + p(d.getDate()) + '.' + d.getFullYear();
  }

  async function loadEntries() {
    if (!logBody) return;
    try {
      const res = await fetch(GUESTBOOK_URL);
      const data = await res.json();
      if (!data.entries || !data.entries.length) {
        logBody.innerHTML = '<div class="guest-entry"><div>no signs yet. be the first!!</div></div>';
        return;
      }
      const total = data.entries.length;
      logBody.innerHTML = data.entries.map((e, i) =>
        '<div class="guest-entry"><div class="guest-meta"><span>#' +
        String(total - i).padStart(4, '0') + ' ' + esc(e.name) +
        '</span><span>' + fmtDate(e.date) + '</span></div><div>' + esc(e.message) + '</div></div>'
      ).join('');
    } catch (err) {
      logBody.innerHTML = '<div class="guest-entry"><div>guestbook is napping. try again later!!</div></div>';
    }
  }

  if (form) {
    // honeypot: invisible to humans, irresistible to spam bots
    const hp = document.createElement('input');
    hp.type = 'text'; hp.name = 'website'; hp.tabIndex = -1;
    hp.autocomplete = 'off'; hp.style.display = 'none';
    form.appendChild(hp);

    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const body = new URLSearchParams();
      for (const [k, v] of new FormData(form).entries()) body.append(k, v);
      if (status) status.textContent = 'signing...';
      // Apps Script answers POSTs through a redirect chain, so the response
      // isn't always readable — but the entry lands anyway. Optimistic UI:
      // fire, show success, reload the log (which is the real confirmation).
      try {
        await fetch(GUESTBOOK_URL, { method: 'POST', body });
      } catch (err) { /* network hiccup; the entry usually still landed */ }
      if (status) status.textContent = "signed!! it's in the log.";
      form.reset();
      setTimeout(loadEntries, 1500); // give the sheet a beat to commit
    });
  }

  if (status) status.textContent = 'live!! signs appear in the log.';
  loadEntries();
})();
