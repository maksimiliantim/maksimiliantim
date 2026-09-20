import { writeFileSync, mkdirSync } from 'node:fs';

const login = process.env.GH_LOGIN;
const token = process.env.GH_TOKEN;

const QUERY = `
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount } }
      }
    }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
      nodes {
        languages(first: 8, orderBy: { field: SIZE, direction: DESC }) {
          edges { size node { name color } }
        }
      }
    }
  }
}`;

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: QUERY, variables: { login } }),
});
const payload = await res.json();
if (payload.errors) {
  console.error(JSON.stringify(payload.errors, null, 2));
  process.exit(1);
}

const user = payload.data.user;
const weeks = user.contributionsCollection.contributionCalendar.weeks;
const total = user.contributionsCollection.contributionCalendar.totalContributions;
const days = weeks.flatMap((w) => w.contributionDays);

let longest = 0;
let run = 0;
for (const d of days) {
  run = d.contributionCount > 0 ? run + 1 : 0;
  if (run > longest) longest = run;
}

let current = 0;
for (let i = days.length - 1; i >= 0; i--) {
  if (days[i].contributionCount > 0) current++;
  else if (i !== days.length - 1) break;
}

const totals = new Map();
for (const repo of user.repositories.nodes) {
  for (const edge of repo.languages.edges) {
    const prev = totals.get(edge.node.name) ?? { size: 0, color: edge.node.color };
    totals.set(edge.node.name, { size: prev.size + edge.size, color: prev.color });
  }
}
const langSum = [...totals.values()].reduce((a, l) => a + l.size, 0) || 1;
const languages = [...totals.entries()]
  .map(([name, v]) => ({ name, color: v.color || '#8b949e', pct: (v.size / langSum) * 100 }))
  .sort((a, b) => b.pct - a.pct)
  .slice(0, 5);

const counts = days.map((d) => d.contributionCount).filter((c) => c > 0).sort((a, b) => a - b);
const at = (p) => (counts.length ? counts[Math.min(counts.length - 1, Math.floor(counts.length * p))] : 0);
const [t1, t2, t3] = [at(0.4), at(0.7), at(0.9)];
const level = (c) => (c === 0 ? 0 : c <= t1 ? 1 : c <= t2 ? 2 : c <= t3 ? 3 : 4);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const THEMES = {
  dark: {
    bg: '#0d1117', text: '#e6edf3', muted: '#8b949e', dim: '#6e7681',
    faint: '#484f58', border: '#21262d', accent: '#d29922',
    ramp: ['#161b22', '#4d3a14', '#7d5e1c', '#b08324', '#e3b341'],
  },
  light: {
    bg: '#ffffff', text: '#1f2328', muted: '#59636e', dim: '#818b98',
    faint: '#9198a1', border: '#d1d9e0', accent: '#9a6700',
    ramp: ['#f0f3f6', '#f7e3bb', '#dfb45e', '#bf8700', '#8a5f00'],
  },
};

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

const W = 900;
const H = 265;
const X0 = 52;
const PITCH = 15;
const CELL = 13;
const GRID_TOP = 56;

function render(t) {
  const parts = [];
  parts.push(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="${SANS}">`);
  parts.push(`<rect width="${W}" height="${H}" fill="${t.bg}"/>`);

  parts.push(`<text x="${X0}" y="34" font-size="11.5" font-family="${MONO}" fill="${t.dim}" letter-spacing="0.3">contribution activity · last 12 months</text>`);

  let lastMonth = -1;
  weeks.forEach((w, i) => {
    const d = new Date(w.contributionDays[0].date);
    const m = d.getUTCMonth();
    if (m !== lastMonth && d.getUTCDate() <= 7) {
      lastMonth = m;
      parts.push(`<text x="${X0 + i * PITCH}" y="48" font-size="10" font-family="${MONO}" fill="${t.faint}">${MONTHS[m]}</text>`);
    }
  });

  weeks.forEach((w, wi) => {
    w.contributionDays.forEach((d) => {
      const di = new Date(d.date).getUTCDay();
      const x = X0 + wi * PITCH;
      const y = GRID_TOP + di * PITCH;
      parts.push(`<rect x="${x}" y="${y}" width="${CELL}" height="${CELL}" rx="2.5" fill="${t.ramp[level(d.contributionCount)]}"/>`);
    });
  });

  parts.push(`<line x1="${X0}" y1="188" x2="848" y2="188" stroke="${t.border}" stroke-width="1"/>`);

  const stats = [
    [String(total), 'total contributions'],
    [String(current), 'current streak'],
    [String(longest), 'longest streak'],
  ];
  stats.forEach(([value, label], i) => {
    const x = X0 + i * 132;
    parts.push(`<text x="${x}" y="222" font-size="26" font-weight="600" fill="${t.text}">${value}</text>`);
    parts.push(`<text x="${x}" y="240" font-size="10.5" font-family="${MONO}" fill="${t.dim}">${label}</text>`);
  });

  const BAR_X = 490;
  const BAR_W = 358;
  parts.push(`<text x="${BAR_X}" y="206" font-size="10.5" font-family="${MONO}" fill="${t.dim}">language distribution</text>`);

  let cursor = BAR_X;
  languages.forEach((l) => {
    const w = Math.max(2, (l.pct / 100) * BAR_W);
    parts.push(`<rect x="${cursor.toFixed(1)}" y="214" width="${w.toFixed(1)}" height="8" fill="${l.color}"/>`);
    cursor += w;
  });
  let legendX = BAR_X;
  languages.forEach((l) => {
    parts.push(`<circle cx="${legendX + 3}" cy="238" r="3.5" fill="${l.color}"/>`);
    const label = `${esc(l.name)} ${l.pct.toFixed(0)}%`;
    parts.push(`<text x="${legendX + 12}" y="241" font-size="10.5" font-family="${MONO}" fill="${t.muted}">${label}</text>`);
    legendX += 14 + label.length * 6.3 + 12;
  });

  parts.push('</svg>');
  return parts.join('\n');
}

mkdirSync('dist', { recursive: true });
writeFileSync('dist/stats-dark.svg', render(THEMES.dark));
writeFileSync('dist/stats-light.svg', render(THEMES.light));
console.log(`rendered: ${total} contributions, ${languages.length} languages`);
