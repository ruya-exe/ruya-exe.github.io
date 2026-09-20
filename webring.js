/* ============================================================
   THE WEBRING — drop-in snippet
   ------------------------------------------------------------
   1. Name your ring below (RING_NAME).
   2. Add member sites to RING_MEMBERS: { name, url }.
      Put YOUR site first. Order = ring order.
   3. On any page that should show the ring nav, paste:
        <div id="webring"></div>
        <script src="webring.js"></script>
      (adjust the src path if the page lives in a subfolder)
   4. To join: a site adds YOUR url to their copy, you add
      theirs to yours. That's the whole protocol. It's 1998.
   ============================================================ */

var RING_NAME = "the webring"; // <-- name your ring here

var RING_MEMBERS = [
  { name: "RÜYA.EXE", url: "https://ruya-exe.github.io/" }
  // { name: "FRIEND'S SITE", url: "https://example.com/" },
];

(function () {
  var box = document.getElementById('webring');
  if (!box) return;

  function norm(u) { return u.replace(/\/+$/, ''); }
  var here = norm(location.href);

  var i = 0;
  for (var k = 0; k < RING_MEMBERS.length; k++) {
    if (here.indexOf(norm(RING_MEMBERS[k].url)) === 0) { i = k; break; }
  }
  var n = RING_MEMBERS.length;
  var prev = RING_MEMBERS[(i - 1 + n) % n];
  var next = RING_MEMBERS[(i + 1) % n];
  var rand = RING_MEMBERS[Math.floor(Math.random() * n)];

  box.innerHTML =
    '<nav aria-label="webring" style="font-family:monospace;font-size:13px;color:#888;">' +
    '← <a href="' + prev.url + '" style="color:#ffd83d;">' + prev.name + '</a>' +
    ' | <a href="' + rand.url + '" style="color:#ffd83d;">random</a>' +
    ' | <a href="' + next.url + '" style="color:#ffd83d;">' + next.name + '</a> →' +
    ' <span style="color:#555;">— member of ' + RING_NAME + '</span>' +
    '</nav>';
})();
