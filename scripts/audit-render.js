// Rendered audit: walks every slide at phone and desktop width and
// measures what docs/brand-system.md section 4 calls floors, plus the
// colour, radius and shadow rules from section 2.
const { chromium } = require('/opt/node22/lib/node_modules/playwright');

const BASE = process.env.BASE || 'http://localhost:3400';
const MODULES = [
  ['intro', 4], ['m1', 32], ['m2', 35], ['m3', 27], ['m4', 20],
  ['m5', 21], ['m6', 20], ['m7', 21], ['m8', 20],
];

const seed = () => {
  const seen = {};
  for (const m of ['intro','m1','m2','m3','m4','m5','m6','m7','m8'])
    for (let i = 1; i <= 40; i++) seen[`${m}/${i}`] = true;
  localStorage.setItem('bymf.foundation.v1', JSON.stringify({
    version: 1, updatedAt: '2026-01-01T00:00:00Z',
    progress: { lastLocation: null, seenSlides: seen,
      completedModules: ['intro','m1','m2','m3','m4','m5','m6','m7'] },
    modules: {},
  }));
};

const audit = () => {
  // inline: page.evaluate serializes the function, not its closure
  const FORBIDDEN = [/^rgb\(255,\s*111,\s*97\)$/, /^rgb\(251,\s*213,\s*228\)$/, /^rgb\(218,\s*212,\s*245\)$/];
  const isCool = (r, g, b) => b > r + 18 && b > g + 10;   // blue / teal / cool green
  const out = { tiny: [], cool: [], radii: {}, shadows: {}, taps: [], overflow: null, darkSurface: false };
  const main = document.querySelector('main') || document.body;
  out.darkSurface = !/^rgb\(25[0-9]|^rgb\(2[45][0-9]/.test(getComputedStyle(document.body).backgroundColor);

  for (const el of main.querySelectorAll('*')) {
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
    const text = (el.textContent || '').trim();
    const leaf = el.children.length === 0 && text.length > 0;
    const size = parseFloat(cs.fontSize);

    if (leaf) {
      const upper = text === text.toUpperCase() && /[A-Z]/.test(text);
      const tracked = parseFloat(cs.letterSpacing) > 0.5;
      const isLabel = upper || tracked;
      const floor = isLabel ? 10 : 13.5;
      if (size < floor - 0.01) {
        out.tiny.push({ size: +size.toFixed(1), floor, label: isLabel,
          text: text.slice(0, 48), cls: (el.className || '').toString().slice(0, 60) });
      }
      const m = cs.color.match(/\d+/g);
      if (m) {
        const [r, g, b] = m.map(Number);
        if (isCool(r, g, b) || FORBIDDEN.some(re => re.test(cs.color)))
          out.cool.push({ color: cs.color, text: text.slice(0, 40) });
      }
    }

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (size < 16) out.tiny.push({ size: +size.toFixed(1), floor: 16, input: true,
        text: (el.getAttribute('placeholder') || el.name || 'input').slice(0, 40) });
    }
    if (el.tagName === 'BUTTON' || el.tagName === 'A') {
      const r = el.getBoundingClientRect();
      if (r.height > 0 && r.height < 40 && r.width > 0)
        out.taps.push({ h: Math.round(r.height), text: text.slice(0, 32) });
    }

    const br = cs.borderRadius;
    if (br && br !== '0px') out.radii[br] = (out.radii[br] || 0) + 1;
    const sh = cs.boxShadow;
    if (sh && sh !== 'none') out.shadows[sh] = (out.shadows[sh] || 0) + 1;
  }

  out.overflow = document.documentElement.scrollWidth > window.innerWidth + 1
    ? { scroll: document.documentElement.scrollWidth, win: window.innerWidth } : null;
  return out;
};

(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const results = { phone: [], desktop: [] };
  for (const [vp, width, height] of [['phone', 390, 844], ['desktop', 1456, 819]]) {
    const ctx = await b.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    await ctx.addInitScript(seed);
    const page = await ctx.newPage();
    for (const [mod, count] of MODULES) {
      for (let i = 1; i <= count; i++) {
        await page.goto(`${BASE}/foundation/${mod}/${i}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(90);
        const r = await page.evaluate(audit);
        results[vp].push({ slide: `${mod}/${i}`, ...r });
      }
    }
    await ctx.close();
    console.error(`  ${vp} done`);
  }
  await b.close();
  console.log(JSON.stringify(results));
})().catch(e => { console.error(e); process.exit(1); });
