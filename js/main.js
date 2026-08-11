/* =========================================================================
   GaMa clinic — інтерактив, морфінг, курсор-шприц
   ========================================================================= */
(function () {
'use strict';

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

let LANG = localStorage.getItem('gama-lang') || 'ua';
const t = k => (I18N[LANG] && I18N[LANG][k]) || (I18N.ua[k] || '');
const L = (o, key) => LANG === 'en' ? (o[key + 'En'] || o[key + 'Ua'] || o.en || o.ua) : (o[key + 'Ua'] || o.ua);


/* ═══════════════════════════════════════════════════════════════
   1. МОРФ-ГЕОМЕТРІЯ — плавні органічні форми
   ═══════════════════════════════════════════════════════════════ */

/* Замкнута крива Катмулла–Рома, переведена в кубічні безьє.
   dp — знаків після коми: 1 достатньо для координат у сотнях одиниць,
   але для маски в частках 0…1 потрібно 4, інакше форма «застигає». */
function smoothClosed(p, dp) {
  const n = p.length, f = v => v.toFixed(dp);
  let d = 'M' + f(p[0][0]) + ',' + f(p[0][1]);
  for (let i = 0; i < n; i++) {
    const a = p[(i - 1 + n) % n], b = p[i], c = p[(i + 1) % n], e = p[(i + 2) % n];
    const c1x = b[0] + (c[0] - a[0]) / 6, c1y = b[1] + (c[1] - a[1]) / 6;
    const c2x = c[0] - (e[0] - b[0]) / 6, c2y = c[1] - (e[1] - b[1]) / 6;
    d += 'C' + f(c1x) + ',' + f(c1y) + ' ' + f(c2x) + ',' + f(c2y) + ' ' + f(c[0]) + ',' + f(c[1]);
  }
  return d + 'Z';
}

/* Набір «зерен» задає індивідуальний характер кожної форми */
function seedRing(n, rnd) {
  const s = [];
  for (let i = 0; i < n; i++) {
    s.push({
      s1: 0.30 + rnd() * 0.45, p1: rnd() * Math.PI * 2,
      s2: 0.55 + rnd() * 0.70, p2: rnd() * Math.PI * 2
    });
  }
  return s;
}
function lcg(seed) { let x = seed; return () => (x = (x * 1103515245 + 12345) % 2147483648) / 2147483648; }

function blobPath(cx, cy, R, seeds, time, amp, dp) {
  const n = seeds.length, pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2, s = seeds[i];
    const w = Math.sin(time * s.s1 + s.p1) * 0.62 + Math.sin(time * s.s2 + s.p2) * 0.38;
    const r = R * (1 + amp * w);
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return smoothClosed(pts, dp === undefined ? 1 : dp);
}

/* Хвиля-перехід між секціями */
function wavePath(time, phase, amp) {
  const steps = 10, pts = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * 1440;
    const y = 62 + Math.sin(i * 0.78 + time * 0.30 + phase) * amp
                 + Math.sin(i * 1.63 - time * 0.19 + phase) * amp * 0.42;
    pts.push([x, y]);
  }
  let d = 'M0,120 L0,' + pts[0][1].toFixed(1);
  for (let i = 0; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ' Q' + pts[i][0].toFixed(1) + ',' + pts[i][1].toFixed(1) + ' ' + mx.toFixed(1) + ',' + my.toFixed(1);
  }
  d += ' L1440,' + pts[pts.length - 1][1].toFixed(1) + ' L1440,120 Z';
  return d;
}

/* --- реєстр анімованих фігур -------------------------------------------- */
const BLOBS = [
  { el: $('[data-blob="a"]'),    seeds: seedRing(9,  lcg(7)),   amp: 0.115, spin: 6  },
  { el: $('[data-blob="b"]'),    seeds: seedRing(8,  lcg(31)),  amp: 0.150, spin: -9 },
  { el: $('[data-blob="c"]'),    seeds: seedRing(10, lcg(59)),  amp: 0.130, spin: 7  },
  { el: $('[data-blob="d"]'),    seeds: seedRing(9,  lcg(113)), amp: 0.145, spin: -6 }
].filter(b => b.el);

const CLIP  = { el: $('[data-blob="clip"]'), seeds: seedRing(8, lcg(211)), amp: 0.070 };
const WAVES = [
  { el: $('[data-wave="top"]'),  ph: 0.0 }, { el: $('[data-wave="bot"]'),  ph: 1.9 },
  { el: $('[data-wave="top2"]'), ph: 3.4 }, { el: $('[data-wave="bot2"]'), ph: 5.1 },
  { el: $('[data-wave="top3"]'), ph: 2.2 }
].filter(w => w.el);

let scrollY = window.scrollY, vh = innerHeight;
addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
addEventListener('resize', () => { vh = innerHeight; }, { passive: true });

function tick(ms) {
  const time = ms / 1000;
  /* прокрутка підмішується у форму — фігури «дихають» під час скролу */
  const sp = scrollY / (vh || 1);

  BLOBS.forEach((b, i) => {
    const amp = b.amp * (1 + Math.min(sp * 0.30, 0.45));
    b.el.setAttribute('d', blobPath(300, 300, 205, b.seeds, time + i * 1.7, amp));
    b.el.parentNode.style.transform =
      'translate3d(0,' + (sp * b.spin * 9).toFixed(1) + 'px,0) rotate(' + (sp * b.spin).toFixed(2) + 'deg)';
  });

  if (CLIP.el) {
    /* маска героя рахується в частках 0…1 (clipPathUnits="objectBoundingBox") */
    CLIP.el.setAttribute('d', blobPath(0.5, 0.5, 0.487, CLIP.seeds, time * 0.62, CLIP.amp, 4));
  }

  WAVES.forEach(w => w.el.setAttribute('d', wavePath(time, w.ph, 11)));

  requestAnimationFrame(tick);
}

if (REDUCED) {
  /* статичні, але однаково органічні форми */
  BLOBS.forEach((b, i) => b.el.setAttribute('d', blobPath(300, 300, 205, b.seeds, i * 3.1, b.amp)));
  if (CLIP.el) CLIP.el.setAttribute('d', blobPath(0.5, 0.5, 0.487, CLIP.seeds, 1.4, CLIP.amp, 4));
  WAVES.forEach(w => w.el.setAttribute('d', wavePath(0, w.ph, 11)));
} else {
  requestAnimationFrame(tick);
}


/* ═══════════════════════════════════════════════════════════════
   2. КУРСОР-ШПРИЦ — вістря голки точно в точці вказівника
   ═══════════════════════════════════════════════════════════════ */
(function cursor() {
  const cur = $('#cur');
  if (!cur || REDUCED || !matchMedia('(pointer:fine) and (hover:hover)').matches) return;

  document.documentElement.classList.add('has-cur');

  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, shown = false;

  addEventListener('mousemove', e => {
    x = e.clientX; y = e.clientY;
    if (!shown) { rx = x; ry = y; shown = true; cur.classList.remove('is-hidden'); }
  }, { passive: true });

  addEventListener('mouseleave', () => cur.classList.add('is-hidden'));
  addEventListener('mouseenter', () => cur.classList.remove('is-hidden'));
  addEventListener('mousedown',  () => cur.classList.add('is-down'));
  addEventListener('mouseup',    () => cur.classList.remove('is-down'));

  /* стан курсора визначає найближчий інтерактивний предок */
  addEventListener('mouseover', e => {
    const el = e.target instanceof Element ? e.target : null;
    if (!el) return;
    const field = el.closest('input, textarea, select, [contenteditable="true"]');
    cur.classList.toggle('is-hidden', !!field);
    if (field) { cur.classList.remove('is-link', 'is-cta'); return; }

    const hit = el.closest('[data-cursor], a, button');
    const kind = hit ? (hit.getAttribute('data-cursor') || 'link') : null;
    cur.classList.toggle('is-cta',  kind === 'cta');
    cur.classList.toggle('is-link', kind === 'link');
  });

  /* голка йде точно за пікселем, кільце наздоганяє з невеликою інерцією.
     Кільце зміщуємо властивістю translate — вона не конфліктує з CSS-scale. */
  const ring = cur.querySelector('.cur__ring');
  (function loop() {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;
    cur.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
    if (ring) ring.style.translate = (rx - x).toFixed(1) + 'px ' + (ry - y).toFixed(1) + 'px';
    requestAnimationFrame(loop);
  })();
})();


/* ═══════════════════════════════════════════════════════════════
   3. РЕНДЕР КОНТЕНТУ
   ═══════════════════════════════════════════════════════════════ */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nf  = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function priceText(v) {
  return (typeof v === 'number' ? nf(v) : v) + ' ' + t('services.currency');
}

/* --- бігучий рядок брендів ---------------------------------------------- */
function renderMarquee() {
  const row = '<span>' + BRANDS.join('</span><span>') + '</span>';
  $('#marquee').innerHTML = row + row;
}

/* --- статистика ---------------------------------------------------------- */
function countProcedures() {
  return CATEGORIES.reduce((sum, c) =>
    sum + c.groups.reduce((s, g) => s + g.items.length, 0), 0);
}

function renderStats() {
  const total = Math.floor(countProcedures() / 10) * 10;
  const years = CONFIG.sinceYear ? (new Date().getFullYear() - CONFIG.sinceYear) : null;

  const data = [
    { v: total + '+', l: t('stats.procedures'), s: t('stats.proceduresSub'), num: total },
    { v: '4 500+',    l: t('stats.community'),  s: t('stats.communitySub'),  num: 4500 },
    { v: '2',         l: t('stats.doctors'),    s: t('stats.doctorsSub'),    num: 2 },
    years
      ? { v: years + '+', l: t('stats.years'),  s: t('stats.yearsSub'), num: years }
      : { v: 'МОЗ',       l: t('stats.license'), s: t('stats.licenseSub'), num: null }
  ];

  $('#stats').innerHTML = data.map((d, i) =>
    '<div class="stat reveal" data-d="' + (i + 1) + '">' +
      '<b data-count="' + (d.num === null ? '' : d.num) + '">' + esc(d.v) + '</b>' +
      '<u>' + esc(d.l) + '</u><i>' + esc(d.s) + '</i>' +
    '</div>').join('');
}

/* --- спеціалісти --------------------------------------------------------- */
function renderTeam() {
  $('#team-grid').innerHTML = MASTERS.map((m, i) => {
    const srv = (LANG === 'en' ? m.servicesEn : m.servicesUa)
      .map(s => '<li>' + esc(s) + '</li>').join('');
    return '<article class="tcard reveal' + (m.lead ? ' tcard--lead' : '') + '" data-d="' + (i + 1) + '">' +
      /* поки фото немає — картка стає компактнішою і показує монограму */
      '<div class="tcard__pic is-mono">' +
        '<span class="tcard__mono" aria-hidden="true">' +
          esc(LANG === 'en' ? (m.monogramEn || m.monogram) : m.monogram) + '</span>' +
        '<img src="' + m.photo + '" alt="' + esc(LANG === 'en' ? m.nameEn : m.nameUa) + '" loading="lazy" ' +
             'decoding="async" onload="this.parentNode.classList.remove(\'is-mono\')" onerror="this.remove()">' +
        (m.lead ? '<span class="tcard__tag">' + esc(t('lead.eyebrow')) + '</span>' : '') +
      '</div>' +
      '<div class="tcard__body">' +
        '<h3 class="tcard__name">' + esc(LANG === 'en' ? m.nameEn : m.nameUa) + '</h3>' +
        '<p class="tcard__role">' + esc(LANG === 'en' ? m.roleEn : m.roleUa) + '</p>' +
        '<p class="tcard__title">' + esc(LANG === 'en' ? m.titleEn : m.titleUa) + '</p>' +
        '<p class="tcard__bio">' + esc(LANG === 'en' ? m.bioEn : m.bioUa) + '</p>' +
        '<p class="tcard__srvh">' + esc(t('team.services')) + '</p>' +
        '<ul class="tcard__srv">' + srv + '</ul>' +
        '<a class="btn btn--ghost btn--sm tcard__btn" href="#booking" data-cursor="cta">' +
          esc(t('team.book')) + '</a>' +
      '</div></article>';
  }).join('');
}

/* --- технології ---------------------------------------------------------- */
function renderTech() {
  $('#tech-grid').innerHTML = TECH.map((x, i) =>
    '<article class="techcard reveal" data-d="' + ((i % 3) + 1) + '">' +
      '<div class="techcard__pic"><img src="' + x.img + '" alt="" loading="lazy" decoding="async"></div>' +
      '<div class="techcard__body">' +
        (x.tag ? '<span class="techcard__tag">' + esc(x.tag) + '</span>' : '') +
        '<h3>' + esc(LANG === 'en' ? x.nameEn : x.nameUa) + '</h3>' +
        '<p>' + esc(LANG === 'en' ? x.descEn : x.descUa) + '</p>' +
      '</div></article>').join('');
}

/* --- стрічка Instagram --------------------------------------------------- */
function renderFeed() {
  $('#feed-grid').innerHTML = FEED.map((f, i) =>
    '<a class="fcard reveal' + (i === 0 ? ' fcard--big' : '') + '" data-d="' + ((i % 4) + 1) + '" ' +
       'href="' + CONFIG.instagram + '" target="_blank" rel="noopener" data-cursor="cta">' +
      '<img src="' + f.img + '" alt="' + esc(LANG === 'en' ? f.en : f.ua) + '" loading="lazy" decoding="async">' +
      '<figcaption>' + esc(LANG === 'en' ? f.en : f.ua) + '</figcaption>' +
    '</a>').join('');
}

/* --- прайс-лист ---------------------------------------------------------- */
function tierRow(price) {
  const map = [
    ['base',  t('services.tierBase')],
    ['olha',  t('services.tierOlha')],
    ['marta', t('services.tierMarta')]
  ];
  return '<span class="row__tiers">' + map.filter(m => price[m[0]] != null).map(m =>
    '<span class="tier tier--' + m[0] + '"><em>' + esc(m[1]) + '</em><b>' + priceText(price[m[0]]) + '</b></span>'
  ).join('') + '</span>';
}

function itemRow(it, ctx) {
  const name = LANG === 'en' ? it.en : it.ua;
  const desc = LANG === 'en' ? it.dEn : it.dUa;
  const q    = (name + ' ' + (ctx || '')).toLowerCase();
  const tiered = it.price && typeof it.price === 'object';

  const priceHtml = tiered ? tierRow(it.price)
    : '<span class="row__price">' + priceText(it.price) +
      (it.was ? '<s>' + esc(t('services.was')) + ' ' + priceText(it.was) + '</s>' : '') + '</span>';

  const nameHtml = '<span class="row__name">' + esc(name) +
    (it.addon ? '<span class="row__addon">' + esc(t('services.addon')) + '</span>' : '') + '</span>';

  if (!desc) {
    return '<div class="row" data-q="' + esc(q) + '">' +
      '<div class="row__btn" style="cursor:default"><span class="row__ic" style="opacity:0"></span>' +
      nameHtml + priceHtml + '</div></div>';
  }

  return '<div class="row" data-q="' + esc(q) + '">' +
    '<button class="row__btn" type="button" aria-expanded="false" data-cursor="link">' +
      '<span class="row__ic" aria-hidden="true"></span>' + nameHtml + priceHtml +
    '</button>' +
    '<div class="row__panel"><div><p class="row__desc">' + esc(desc) + '</p></div></div>' +
  '</div>';
}

function zoneTable(items, ctx) {
  return '<div class="ztable">' + items.map(it => {
    const name = LANG === 'en' ? it.en : it.ua;
    const q    = (name + ' ' + (ctx || '')).toLowerCase();
    return '<div data-q="' + esc(q) + '"><span>' + esc(name) + '</span>' +
           '<i></i><b>' + priceText(it.price) + '</b></div>';
  }).join('') + '</div>';
}

function renderPrice() {
  $('#tabs').innerHTML = CATEGORIES.map((c, i) =>
    '<button class="tab' + (i === 0 ? ' is-on' : '') + '" type="button" role="tab" ' +
      'data-tab="' + c.id + '" data-cursor="link"><small>' + c.num + '</small>' +
      esc(LANG === 'en' ? c.en : c.ua) + '</button>').join('');

  $('#price').innerHTML = CATEGORIES.map((c, i) => {
    const catName = LANG === 'en' ? c.en : c.ua;
    const groups = c.groups.map(g => {
      const title = LANG === 'en' ? g.en : g.ua;
      /* контекст додається у пошуковий індекс: «ботулінотерапія» знаходить «Чоло + міжбрівʼя» */
      const ctx   = catName + ' ' + (title || '');
      const note  = g.note ? '<p class="grp__note">' + esc(LANG === 'en' ? g.note.en : g.note.ua) + '</p>' : '';
      const head  = title ? '<div class="grp__h"><h3>' + esc(title) + '</h3><span></span></div>' : '';
      const body  = g.layout === 'table'
        ? zoneTable(g.items, ctx)
        : g.items.map(it => itemRow(it, ctx)).join('');
      return '<div class="grp">' + head + note + body + '</div>';
    }).join('');

    return '<section class="cat' + (i === 0 ? ' is-on' : '') + '" data-cat="' + c.id + '">' +
      '<p class="cat__lede">' + esc(LANG === 'en' ? c.leadEn : c.leadUa) + '</p>' +
      (c.tiered ? '<p class="grp__note">' + esc(t('services.tierHint')) + '</p>' : '') +
      groups + '</section>';
  }).join('') + '<p class="empty" hidden>' + esc(t('services.nothing')) + '</p>';
}

/* --- контакти, карта, форма --------------------------------------------- */
function renderContacts() {
  const addr  = LANG === 'en' ? CONFIG.addressEn : CONFIG.addressUa;
  const hours = LANG === 'en' ? CONFIG.hoursEn   : CONFIG.hoursUa;
  const tel   = 'tel:' + CONFIG.phone;
  const q     = encodeURIComponent(CONFIG.mapQuery);

  const set = (sel, fn) => { const el = $(sel); if (el) fn(el); };

  set('#footTel',   el => { el.href = tel; el.textContent = CONFIG.phoneLabel; });
  set('#footIg',    el => { el.href = CONFIG.instagram; el.textContent = CONFIG.instagramHandle; });
  set('#feedCta',   el => { el.href = CONFIG.instagram; });
  set('#addrTxt',   el => { el.textContent = addr; });
  set('#footAddr',  el => { el.textContent = addr; });
  set('#hoursTxt',  el => { el.textContent = hours; });
  set('#footHours', el => { el.textContent = hours; });
  set('#year',      el => { el.textContent = new Date().getFullYear(); });

  /* блок запису — дві великі кнопки замість форми */
  set('#bookCallBtn',   el => { el.href = tel; });
  set('#bookCallValue', el => { el.textContent = CONFIG.phoneLabel; });
  set('#bookDirectBtn',   el => { el.href = CONFIG.instagramDirect; });
  set('#bookDirectValue', el => { el.textContent = CONFIG.instagramHandle; });

  set('#routeBtn',  el => { el.href = 'https://www.google.com/maps/dir/?api=1&destination=' + q; });
  set('#openMapBtn',el => { el.href = 'https://www.google.com/maps/search/?api=1&query=' + q; });
  set('#mapFrame',  el => {
    const src = 'https://www.google.com/maps?q=' + q + '&hl=' + (LANG === 'en' ? 'en' : 'uk') + '&z=16&output=embed';
    if (el.getAttribute('src') !== src) el.setAttribute('src', src);
  });
}


/* ═══════════════════════════════════════════════════════════════
   4. МОВА
   ═══════════════════════════════════════════════════════════════ */
function applyLang() {
  document.documentElement.lang = LANG === 'en' ? 'en' : 'uk';
  document.title = t('meta.title');

  $$('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
  $$('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
  $$('[data-i18n-content]').forEach(el => { el.content = t(el.getAttribute('data-i18n-content')); });

  const btn = $('#langBtn');
  if (btn) {
    btn.querySelector('.lang__on').textContent  = LANG === 'ua' ? 'UA' : 'EN';
    btn.querySelector('.lang__off').textContent = LANG === 'ua' ? 'EN' : 'UA';
  }

  renderStats(); renderTeam(); renderTech(); renderFeed(); renderPrice(); renderContacts();
  bindPrice();
  observeReveals();
}

$('#langBtn').addEventListener('click', () => {
  LANG = LANG === 'ua' ? 'en' : 'ua';
  localStorage.setItem('gama-lang', LANG);
  applyLang();
});


/* ═══════════════════════════════════════════════════════════════
   5. ПРАЙС: вкладки, розкриття опису, пошук
   ═══════════════════════════════════════════════════════════════ */
function runSearch(q) {
  const cats = $$('#price .cat'), empty = $('#price .empty');
  q = q.trim().toLowerCase();
  const searching = q.length > 1;
  let hits = 0;

  cats.forEach(cat => {
    let catHits = 0;
    $$('.grp', cat).forEach(grp => {
      let grpHits = 0;
      $$('[data-q]', grp).forEach(row => {
        const ok = !searching || row.dataset.q.indexOf(q) > -1;
        row.hidden = !ok;
        if (ok) grpHits++;
      });
      grp.hidden = searching && grpHits === 0;
      catHits += grpHits;
    });
    const lede = $('.cat__lede', cat);
    if (lede) lede.hidden = searching;
    if (searching) { cat.classList.toggle('is-on', catHits > 0); hits += catHits; }
  });

  if (!searching) {
    const on = $('#tabs .tab.is-on');
    cats.forEach(c => c.classList.toggle('is-on', !!on && c.dataset.cat === on.dataset.tab));
  }
  if (empty) empty.hidden = !(searching && hits === 0);
}

/* делеговані обробники — вішаються один раз на сталі контейнери */
$('#price').addEventListener('click', e => {
  const btn = e.target.closest('.row__btn');
  if (!btn || btn.tagName !== 'BUTTON') return;
  const open = btn.closest('.row').classList.toggle('is-open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});

$('#tabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  const input = $('#search');
  if (input.value.trim()) input.value = '';
  $$('#tabs .tab').forEach(x => x.classList.toggle('is-on', x === tab));
  $$('#price .cat').forEach(c => c.classList.toggle('is-on', c.dataset.cat === tab.dataset.tab));
  runSearch('');
});

$('#search').addEventListener('input', e => runSearch(e.target.value));

function bindPrice() { if ($('#search').value) runSearch($('#search').value); }


/* ═══════════════════════════════════════════════════════════════
   6. НАВІГАЦІЯ, ПОЯВА БЛОКІВ, ЛІЧИЛЬНИКИ
   ═══════════════════════════════════════════════════════════════ */
const nav = $('#nav');
const stick = () => nav.classList.toggle('is-stuck', window.scrollY > 40);
addEventListener('scroll', stick, { passive: true });
stick(); /* якщо сторінку відкрито одразу з якорем */

/* мобільне меню */
const burger = $('#burger'), links = $('#navLinks');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
links.addEventListener('click', e => {
  if (e.target.closest('a')) { links.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); }
});

/* активний пункт меню */
const navMap = {};
$$('#navLinks a').forEach(a => { navMap[a.getAttribute('href').slice(1)] = a; });

const navObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const a = navMap[en.target.id];
    if (!a) return;
    Object.keys(navMap).forEach(k => navMap[k].classList.remove('is-active'));
    a.classList.add('is-active');
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('section[id]').forEach(s => { if (navMap[s.id]) navObs.observe(s); });

/* поява блоків при скролі */
let revealObs;
function observeReveals() {
  if (!revealObs) {
    revealObs = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        revealObs.unobserve(en.target);
        const counter = en.target.querySelector('[data-count]');
        if (counter && counter.dataset.count) countUp(counter);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  }
  $$('.reveal:not(.is-in)').forEach(el => revealObs.observe(el));
}

function countUp(el) {
  if (REDUCED) return;
  const target = parseInt(el.dataset.count, 10);
  if (!target) return;
  const suffix = el.textContent.replace(/[\d\s ]/g, '');
  const dur = 1100, t0 = performance.now();
  (function step(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = nf(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}


/* ═══════════════════════════════════════════════════════════════
   7. СТАРТ
   ═══════════════════════════════════════════════════════════════ */
renderMarquee();
applyLang();

})();
