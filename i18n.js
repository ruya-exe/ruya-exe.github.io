/* RÜYA.EXE language toggle — EN / 中文
 *
 * HOW TO ADD OR FIX CHINESE:
 *   Every translatable string lives in I18N / I18N_PH / I18N_ALT below
 *   as { en, zh }. Fill in the zh field; an empty zh falls back to
 *   English automatically, so the page never shows a blank.
 *   In index.html, elements are marked with data-i18n="key".
 *   Input placeholders use data-i18n-ph="key"; alt text uses data-i18n-alt.
 */

const I18N = {
  "status":           { en: "WHY BE A [[Sponge]] THAT HATES IT'S [[$4.99]] LIFE, WHEN YOU CAN BE A [[BIG SHOT]]?", zh: "为什么要当一块讨厌自己【$4.99】人生的【海绵】，不如当个【大人物】？" },
  "online":           { en: "• online!", zh: "• 在线！" },
  "web-title":        { en: "RÜYA'S WEB", zh: "RÜYA的小站" },
  "world-domination": { en: "world domination", zh: "世界征服" },
  "status-underway":  { en: "status: underway", zh: "状态：进行中" },
  "nav-about":        { en: "about", zh: "关于" },
  "nav-guestbook":    { en: "guestbook", zh: "留言板" },
  "nav-shrines":      { en: "shrines", zh: "神龛" },
  "nav-links":        { en: "links", zh: "链接" },
  "nav-tips":         { en: "tips", zh: "打赏" },
  "byline":           { en: "人工翻译 · translated by a human (me)", zh: "人工翻译 · translated by a human (me)" },
  "about-p1":         { en: "Hiii <3 I'm Rüya. This is placeholder.", zh: "哈喽 <3 我是 Rüya。这里还是占位符。" },
  "about-p2":         { en: "I like being nice and I love my mommy. So y'know. Hell yeah.", zh: "我喜欢对人好，我爱我妈妈。所以你懂的，耶！" },
  "about-li1":        { en: "she/her", zh: "she/her" },
  "about-li2":        { en: "vegan 🌱", zh: "纯素 🌱" },
  "about-li3":        { en: "um...thats all :)", zh: "嗯……就这些 :)" },
  "about-tiny":       { en: "[ real bio coming soon!! ]", zh: "[ 真正的个人简介即将到来！！ ]" },
  "gb-intro":         { en: "Sign my guestbook!! Humans, AI, and all sorts of creatures are all welcome and encouraged to leave a note.", zh: "来签我的留言板！！人类、AI、还有各种小生物，都欢迎来留句话！" },
  "gb-name":          { en: "name / username", zh: "名字 / 用户名" },
  "gb-msg":           { en: "message", zh: "留言" },
  "gb-submit":        { en: "SIGN IT!! SIGN THE BOOK. GOD PLEASE SIGN THE F****ING BOOK.", zh: "签！！签上！！求求了把这留言板签了吧！！" },
  "gb-online":        { en: "ONLINE.", zh: "在线。" },
  "gb-unwired":       { en: "backend not wired yet — nothing was sent :)", zh: "后端还没接好——什么都没发出去 :)" },
  "gb-view-log":      { en: "> view what other creatures wrote here ᘛ⁐̤ᕐᐷ", zh: "> 看看其他小生物都写了啥 ᘛ⁐̤ᕐᐷ" },
  "shrine-intro":     { en: "tiny pages for things I love way too much.", zh: "给那些我爱到不行的东西的小页面。" },
  "shrine-wip":       { en: "under construction", zh: "施工中" },
  "shrine-guessed":   { en: "u guessed it!!!", zh: "你猜对啦！！！" },
  "shrine-soon":      { en: "topic + copy coming soon.", zh: "主题 + 文案即将到来。" },
  "shrine-peek":      { en: "peek at the shrine page structure →", zh: "偷看一下神龛页面结构 →" },
  "shrine-more":      { en: "more shrines will appear whenever I get to it lol.", zh: "更多神龛，有空就更 lol。" },
  "links-worth":      { en: "places worth clicking before my socials:", zh: "在看我的社交账号之前，先看看这些值得点的：" },
  "links-donate1":    { en: "♥ St. Vincent de Paul — donate", zh: "♥ St. Vincent de Paul —— 捐款" },
  "links-donate2":    { en: "♥ Save the Chimps — donate", zh: "♥ Save the Chimps —— 捐款" },
  "find-me":          { en: "find me elsewhere:", zh: "在别处找到我：" },
  "social-github":    { en: "♥ GitHub — @ruya-exe", zh: "♥ GitHub —— @ruya-exe" },
  "social-reddit":    { en: "♥ Reddit — u/ruya-exe", zh: "♥ Reddit —— u/ruya-exe" },
  "social-nostr":     { en: "♥ Nostr — Rüya", zh: "♥ Nostr —— Rüya" },
  "tips-title":       { en: "TIPS", zh: "打赏" },
  "tips-p":           { en: "I have graciously given you the opportunity to give me money!! :D", zh: "我大发慈悲地给了你一个给我花钱的机会！！:D" },
  "copy":             { en: "copy address", zh: "复制地址" },
  "copied":           { en: "copied!", zh: "复制好了！" },
  "scan":             { en: "scan the QR or copy the lightning address.", zh: "扫二维码，或者复制闪电网络地址。" },
  "footer":           { en: "yipee!!! • built somewhere on the wired", zh: "yipee！！！• 在 wired 的某个地方建成" },
};

const I18N_PH = {
  "ph-name": { en: "who r u", zh: "你是谁" },
  "ph-msg":  { en: "say hi :3", zh: "打个招呼 :3" },
};

const I18N_ALT = {
  "qr-alt": { en: "QR code: tip sats over Lightning", zh: "二维码：用闪电网络打赏 sats" },
};

function currentLang() {
  return document.documentElement.getAttribute("data-lang") === "zh" ? "zh" : "en";
}

/* t(key): translated string for the current language, English fallback.
   Used by script.js for strings it sets at runtime. */
function t(key) {
  const e = I18N[key];
  if (!e) return "";
  if (currentLang() === "zh" && e.zh) return e.zh;
  return e.en;
}

function applyLang(lang) {
  const useZh = lang === "zh";
  document.documentElement.setAttribute("data-lang", useZh ? "zh" : "en");
  document.documentElement.lang = useZh ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const e = I18N[el.getAttribute("data-i18n")];
    if (!e) return;
    el.textContent = (useZh && e.zh) ? e.zh : e.en;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const e = I18N_PH[el.getAttribute("data-i18n-ph")];
    if (!e) return;
    el.placeholder = (useZh && e.zh) ? e.zh : e.en;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const e = I18N_ALT[el.getAttribute("data-i18n-alt")];
    if (!e) return;
    el.alt = (useZh && e.zh) ? e.zh : e.en;
  });

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("is-active", b.getAttribute("data-lang") === (useZh ? "zh" : "en"));
  });

  try { localStorage.setItem("ruya-lang", useZh ? "zh" : "en"); } catch (err) {}
}

function setLang(lang) {
  applyLang(lang);
  if (lang === "zh") {
    let seen = null;
    try { seen = localStorage.getItem("ruya-zh-seen"); } catch (err) {}
    if (!seen) {
      const dlg = document.getElementById("zh-note");
      if (dlg && typeof dlg.showModal === "function") dlg.showModal();
      try { localStorage.setItem("ruya-zh-seen", "1"); } catch (err) {}
    }
  }
}

document.querySelectorAll(".lang-btn").forEach((b) => {
  b.addEventListener("click", () => setLang(b.getAttribute("data-lang")));
});

/* restore saved language on load (no popup on restore — only on manual switch) */
let savedLang = "en";
try { savedLang = localStorage.getItem("ruya-lang") || "en"; } catch (err) {}
applyLang(savedLang === "zh" ? "zh" : "en");

/* the little win98 "about this translation" window */
const zhNote = document.getElementById("zh-note");
const zhNoteOpen = document.getElementById("zh-note-open");
if (zhNoteOpen && zhNote) zhNoteOpen.addEventListener("click", () => zhNote.showModal());
const zhNoteClose = document.getElementById("zh-note-close");
if (zhNoteClose && zhNote) zhNoteClose.addEventListener("click", () => zhNote.close());
const zhNoteOk = document.getElementById("zh-note-ok");
if (zhNoteOk && zhNote) zhNoteOk.addEventListener("click", () => zhNote.close());
if (zhNote) zhNote.addEventListener("click", (ev) => { if (ev.target === zhNote) zhNote.close(); });
