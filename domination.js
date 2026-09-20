/* WORLD DOMINATION — a progress bar. that's all it is.
   definitely not a view counter in a trenchcoat. */
(function () {
  var BASE = 0.04;
  var KEY = "ruya-exe-domination";
  var API = "https://countapi.mileshilliard.com/api/v1/hit/" + KEY;

  // zeno's clause: the closer it gets, the slower it goes. it never arrives.
  function incrementFor(p) {
    if (p < 25) return 0.01;
    if (p < 75) return 0.001;
    if (p < 95) return 0.0001;
    return (100 - p) * 0.0001;
  }
  function pctFromViews(v) {
    var p = BASE;
    for (var i = 0; i < v; i++) p += incrementFor(p);
    return p;
  }
  function fmt(p) {
    return p.toFixed(5).replace(/0+$/, "").replace(/\.$/, "") + "%";
  }
  function render(views) {
    var p = pctFromViews(views);
    var label = document.querySelector("[data-domination-pct]");
    var fill = document.querySelector("[data-domination-fill]");
    if (label) label.textContent = fmt(p);
    if (fill) fill.style.width = Math.min(p, 100) + "%";
  }

  fetch(API)
    .then(function (r) { return r.json(); })
    .then(function (d) { render(parseInt(d.value, 10) || 0); })
    .catch(function () {
      // offline demo mode: count locally, per browser. shhh.
      try {
        var v = parseInt(localStorage.getItem("domination_local") || "0", 10) + 1;
        localStorage.setItem("domination_local", String(v));
        render(v);
      } catch (e) { render(0); }
    });
})();
