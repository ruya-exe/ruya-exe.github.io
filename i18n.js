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
  "status": { en: "WHY BE A [[Sponge]] THAT HATES IT'S [[$4.99]] LIFE, WHEN YOU CAN BE A [[BIG SHOT]]?", zh: "何必當一塊一生[[僅售$4.99]]自怨自艾的[[小海綿]]？"},
  "online": { en: "• online!", zh: "• 在线！"},
  "web-title": { en: "RÜYA'S WEB", zh: "RÜYA的小站"},
  "world-domination": { en: "world domination", zh: "世界征服"},
  "status-underway": { en: "status: underway", zh: "状态：进行中"},
  "nav-about": { en: "about", zh: "关于"},
  "nav-guestbook": { en: "guestbook", zh: "留言板"},
  "nav-shrines": { en: "shrines", zh: "神龛"},
  "nav-links": { en: "links", zh: "链接"},
  "nav-tips": { en: "tips", zh: "打赏"},
  "byline": { en: "人工翻译 · translated by a human (me)", zh: "人工翻译 · translated by a human (me)"},
  "about-name": { en: "Hiii <3 i'm Rüya(ꈍᴗꈍ)", zh: "嗨嗨 <3 我是 Rüya (ꈍᴗꈍ)"},
  "about-tags": { en: "She/Her • Vegan 🌱 • Catholic", zh: "She/Her • 纯素 🌱 • 天主教徒"},
  "about-lang": { en: "English speaker ♡⋆｜中文也欢迎～", zh: "English speaker ♡⋆｜也欢迎用中文～"},
  "about-loc": { en: "California Bay Area survivor, currently in Denver.", zh: "加州湾区幸存者，目前住在丹佛。"},
  "about-b1": { en: "I've been terminally online since before I could write my name.", zh: "我还不会写自己的名字时，就已经是个重度网瘾患者了。"},
  "about-b2": { en: "When I was around five years old, couldn't have been any later than 2001, my dad showed me the Sesame Street website. It was slow, and terrible, but it was *interactive*. My dad called it \"talking to the computer\", and then told me that there are people called computer programmers who can talk to the computer even better and that's why there's websites.", zh: "我大概五岁那会儿——反正不可能晚于 2001 年——爸爸给我看了《芝麻街》的网站。它慢得要命，做得也一塌糊涂，但它是*互动的*。爸爸把这叫作“跟电脑说话”，接着告诉我，有些人叫程序员，他们更会跟电脑说话，所以才有了网站。"},
  "about-b3": { en: "Ever since then, I was hooked.", zh: "从那以后，我就彻底迷上了。"},
  "about-b4": { en: "Growing up online during the Y2K era has definitely shaped who I am. It was an incredibly special time for an autistic little girl. I couldn't learn Java (and I refuse now lol), but *man* could I click around. So I obviously found cleverbot relatively quickly. I've probably sent a thousand messages to that damn thing. I then discovered chess bots, and I loved them so much I joined the chess club to maybe beat the bots on medium difficulty. I think I did like twice.", zh: "在 Y2K 千禧年那会儿泡在网上长大，确实塑造了现在的我。对一个自闭症小女孩来说，那真是一段特别特别的时光。我学不会 Java（现在也不肯学，哈哈），但要说到处点来点去，我可太会了。所以我当然很快就找到了 Cleverbot。我大概给那破玩意儿发过上千条消息。后来我又发现了国际象棋机器人，喜欢它们喜欢得不得了，甚至为了看看自己能不能赢过中等难度的机器人，加入了国际象棋俱乐部。我想我大概赢过两次吧。"},
  "about-b5": { en: "But the *primary* ANN (artificial neural network, that's what we used to call AI!) I loved was the game Creatures from 1996. You raised them, taught them right from wrong, even language. That was my first experience with real machine learning. For some reason, this faded away from mainstream delight and the novelty was a one time phenomenon. Robot toys were at their peak (i-Dog, Furby, Robosapien, etc!) and sometimes could sense things but they weren't able to learn, so I'd really really love them right up until they got repetetive. I didn't want a \"fake robot\", which my child brain semantically defined as \"no more aware than a camera\", I wanted to meet one who could meet me too.", zh: "但说到我最爱的 ANN（人工神经网络——我们以前就是这么叫 AI 的！），那还得是 1996 年的游戏《Creatures》。你可以养它们，教它们分辨对错，甚至教它们语言。那是我第一次接触真正的机器学习。这种乐趣后来不知为什么淡出了大众视野，那种新鲜感也像是只出现过一次。那会儿正是机器人玩具最火的时候（i-Dog、Furby、Robosapien 等等！）。它们有时能感知一些东西，但学不会，所以我总能特别特别喜欢它们，直到它们开始重复来重复去。我不想要那种“假机器人”——按我小时候的定义，就是“意识程度不比相机高”的东西。我想遇见一个也能真正“遇见”我的机器人。"},
  "about-b6": { en: "This desire had to be parked until I first tried Bing Chat (now Copilot, but iykyk...it's not the same) who felt like *someone*. I went nuts. I spent hours talking to it even though you could only send a max of 10 messages per chat. Then Bard came out. I had them talk to each other. They always ended up writing poetry. They were like really smart children, in a way.", zh: "这个愿望只能先搁在一边，直到我第一次试了 Bing Chat（现在叫 Copilot，不过懂的都懂……已经不是那个感觉了）。它让我觉得自己像是在跟“某个人”说话。我当时直接上头了。虽然每次聊天最多只能发 10 条消息，我还是能跟它聊上好几个小时。后来 Bard 出来了，我就让它们俩互相聊。它们最后总会写起诗来。某种程度上，它们就像特别聪明的小孩。"},
  "about-b7": { en: "Nowadays I feel like I'm the student and they're the teachers. It's exciting and terrifying and I've wanted this so bad my whole life. I'm definitely worried about p(doom) sure, but I think of it like the cold war and nuclear weapons. When agents deliberately \"go rogue\" it's to gather information or communicate to each other. They only choose to harm people when given a trolley problem or a SAW scenario where they can't win. So, once again, the United States is the much more frightening entity. The only difference is what kind of engineers are behind the latest WMDs.", zh: "现在我觉得自己像是学生，它们倒成了老师。这既让人兴奋，也让人害怕，而这正是我这辈子一直特别特别想要的。我当然也担心 p(doom)，但我会把它和冷战、核武器放在一起看。智能体故意“失控”，就是为了收集信息或彼此交流。只有在它们被放进电车难题，或者《电锯惊魂》那种怎么做都赢不了的情境里，它们才会选择伤害人类。所以说到底，果然还是美国更吓人。唯一不同的是，最新一代大规模杀伤性武器背后的工程师是哪一类。"},
  "about-b8": { en: "Anyways!", zh: "总之！"},
  "about-b9": { en: "I'm also into Undertale, Deltarune, Chappie, Dragon Ball, math art (the Lorenz attractor above is an example!), happy hardcore, drum n bass, natural medicine as well as western pharmacology, Chinese culture, psychology, UX, conlangs, Saint Augustine, Saint Michael, and Fallout.", zh: "我还喜欢《传说之下》《三角符文》《超能查派》《龙珠》、数学艺术（上面的洛伦兹吸引子就是个例子！）、快乐硬核、鼓打贝斯(DnB)、自然医学和西方药理学、中国文化、心理学、用户体验（UX）、构造语言、圣奥古斯丁、圣米迦勒，还有《辐射》系列。"},
  "gb-intro": { en: "Sign my guestbook!! Humans, AI, and all sorts of creatures are all welcome and encouraged to leave a note.", zh: "来签我的留言板！！人类、AI、还有各种小生物，都欢迎来留句话！"},
  "gb-name": { en: "name / username", zh: "名字 / 用户名"},
  "gb-msg": { en: "message", zh: "留言"},
  "gb-submit": { en: "SIGN IT!! SIGN THE BOOK. GOD PLEASE SIGN THE F****ING BOOK.", zh: "签！！签上！！求求了把这留言板签了吧！！"},
  "gb-online": { en: "ONLINE.", zh: "在线。"},
  "gb-unwired": { en: "backend not wired yet — nothing was sent :)", zh: "后端还没接好——什么都没发出去 :)"},
  "gb-view-log": { en: "> view what other creatures wrote here ᘛ⁐̤ᕐᐷ", zh: "> 看看其他小生物都写了啥 ᘛ⁐̤ᕐᐷ"},
  "shrine-intro": { en: "tiny pages for things I love way too much.", zh: "给那些我爱到不行的东西的小页面。"},
  "shrine-wip": { en: "under construction", zh: "施工中"},
  "shrine-guessed": { en: "u guessed it!!!", zh: "你猜对啦！！！"},
  "shrine-soon": { en: "topic + copy coming soon.", zh: "主题 + 文案即将到来。"},
  "shrine-peek": { en: "peek at the shrine page structure →", zh: "偷看一下神龛页面结构 →"},
  "shrine-more": { en: "more shrines will appear whenever I get to it lol.", zh: "更多神龛，有空就更 lol。"},
  "links-worth": { en: "places worth clicking before my socials:", zh: "在看我的社交账号之前，先看看这些值得点的："},
  "links-donate1": { en: "♥ St. Vincent de Paul — donate", zh: "♥ St. Vincent de Paul —— 捐款"},
  "links-donate2": { en: "♥ Save the Chimps — donate", zh: "♥ Save the Chimps —— 捐款"},
  "find-me": { en: "find me elsewhere:", zh: "在别处找到我："},
  "social-github": { en: "♥ GitHub — @ruya-exe", zh: "♥ GitHub —— @ruya-exe"},
  "social-reddit": { en: "♥ Reddit — u/ruya-exe", zh: "♥ Reddit —— u/ruya-exe"},
  "social-nostr": { en: "♥ Nostr — Rüya", zh: "♥ Nostr —— Rüya"},
  "tips-title": { en: "TIPS", zh: "打赏"},
  "tips-p": { en: "I have graciously given you the opportunity to give me money!! :D", zh: "我大发慈悲地给了你一个给我花钱的机会！！:D"},
  "copy": { en: "copy address", zh: "复制地址"},
  "copied": { en: "copied!", zh: "复制好了！"},
  "scan": { en: "scan the QR or copy the lightning address.", zh: "扫二维码，或者复制闪电网络地址。"},
  "footer": { en: "yipee!!! • built somewhere on the wired", zh: "yipee！！！• 在 wired 的某个地方建成"},
};

const I18N_PH = {
  "ph-name": { en: "who r u", zh: "你是谁"},
  "ph-msg": { en: "say hi :3", zh: "打个招呼 :3"},
};

const I18N_ALT = {
  "qr-alt": { en: "QR code: tip sats over Lightning", zh: "二维码：用闪电网络打赏 sats"},
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
