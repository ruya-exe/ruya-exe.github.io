const buttons = [...document.querySelectorAll(".nav-button")];
const drawers = [...document.querySelectorAll(".drawer-shell")];

function closeAll(exceptId = null) {
  drawers.forEach((drawer) => {
    if (drawer.id !== exceptId) drawer.classList.remove("open");
  });

  buttons.forEach((button) => {
    const target = button.dataset.target;
    if (target !== exceptId) button.setAttribute("aria-expanded", "false");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.target;
    const drawer = document.getElementById(id);
    const opening = !drawer.classList.contains("open");

    closeAll(opening ? id : null);
    drawer.classList.toggle("open", opening);
    button.setAttribute("aria-expanded", String(opening));

    if (opening) {
      setTimeout(() => {
        drawer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    }
  });
});

const guestbookDialog = document.getElementById("guestbook-log");
const openGuestbook = document.getElementById("open-guestbook-log");
const closeGuestbook = document.getElementById("close-guestbook-log");

openGuestbook?.addEventListener("click", () => guestbookDialog?.showModal());
closeGuestbook?.addEventListener("click", () => guestbookDialog?.close());

guestbookDialog?.addEventListener("click", (event) => {
  if (event.target === guestbookDialog) guestbookDialog.close();
});

const guestbookForm = document.getElementById("guestbook-form");
const guestbookStatus = document.getElementById("guestbook-status");

guestbookForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  guestbookStatus.textContent = "backend not wired yet — nothing was sent :)";
});

// Tiny dependency-free Lorenz attractor renderer.
// We can replace the projection, palette, and animation style later.
const canvas = document.getElementById("lorenz-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function renderLorenz() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const width = rect.width;
    const height = rect.height;
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--text")
      .trim() || "#f2f2f2";

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = accent;
    ctx.globalAlpha = 0.72;
    ctx.lineWidth = 0.62;

    let x = 0.1;
    let y = 0;
    let z = 0;
    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const dt = 0.005;

    const points = [];
    for (let i = 0; i < 15500; i += 1) {
      const dx = sigma * (y - x);
      const dy = x * (rho - z) - y;
      const dz = x * y - beta * z;

      x += dx * dt;
      y += dy * dt;
      z += dz * dt;

      if (i > 900) points.push([x, z]);
    }

    const xs = points.map((p) => p[0]);
    const zs = points.map((p) => p[1]);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minZ = Math.min(...zs);
    const maxZ = Math.max(...zs);

    const pad = 28;
    const scaleX = (width - pad * 2) / (maxX - minX);
    const scaleZ = (height - pad * 2) / (maxZ - minZ);
    const scale = Math.min(scaleX, scaleZ) * 0.95;

    const offsetX = width / 2 - ((minX + maxX) / 2) * scale;
    const offsetY = height / 2 + ((minZ + maxZ) / 2) * scale;

    const drawTo = reduceMotion ? points.length : 0;
    let cursor = drawTo;
    const batch = 180;

    function frame() {
      const target = reduceMotion ? points.length : Math.min(points.length, cursor + batch);

      if (cursor === 0) {
        ctx.beginPath();
        const [px, pz] = points[0];
        ctx.moveTo(offsetX + px * scale, offsetY - pz * scale);
        cursor = 1;
      }

      for (; cursor < target; cursor += 1) {
        const [px, pz] = points[cursor];
        ctx.lineTo(offsetX + px * scale, offsetY - pz * scale);
      }

      ctx.stroke();

      if (!reduceMotion && cursor < points.length) {
        requestAnimationFrame(frame);
      }
    }

    if (reduceMotion) {
      ctx.beginPath();
      points.forEach(([px, pz], index) => {
        const sx = offsetX + px * scale;
        const sy = offsetY - pz * scale;
        if (index === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      });
      ctx.stroke();
    } else {
      frame();
    }
  }

  renderLorenz();
  window.addEventListener("resize", renderLorenz);
}
