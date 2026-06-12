import { useFadeIn } from '../hooks/useScroll';

const SKILL_GROUPS = [
  { title: 'Languages', items: [['Java'], ['Python'], ['JavaScript'], ['TypeScript'], ['C++'], ['Rust', true]] },
  { title: 'Web Development', items: [['React.js'], ['Node.js'], ['Express.js'], ['HTML5'], ['CSS3'], ['MongoDB']] },
  { title: 'AI & Data Science', items: [['Pandas'], ['NumPy'], ['Scikit-learn'], ['Matplotlib'], ['Seaborn'], ['ML Basics']] },
  { title: 'Web3 / Blockchain', items: [['Solana'], ['Web3.js'], ['Smart Contracts', true], ['Wallet Integration', true]] },
  { title: 'DevOps (Learning)', items: [['Docker', true], ['GitHub Actions', true], ['CI/CD', true], ['Linux'], ['Cloud Deploy', true]] },
  { title: 'Tools', items: [['Git & GitHub'], ['VS Code'], ['IntelliJ IDEA'], ['Jupyter'], ['Postman']] },
];

const SKILL_BARS = [
  { label: 'JavaScript / TypeScript', pct: 85 },
  { label: 'Python', pct: 80 },
  { label: 'React.js / Node.js', pct: 78 },
  { label: 'Java', pct: 75 },
  { label: 'Machine Learning', pct: 60 },
  { label: 'Web3 / Solana', pct: 35 },
  { label: 'DevOps / Docker', pct: 30 },
];

function SkillBar({ label, pct, delay }) {
  const [ref, vis] = useFadeIn();
  return (
    <div className="sb-item">
      <div className="sb-head"><span>{label}</span><span>{pct}%</span></div>
      <div className="sb-track">
        <div
          ref={ref}
          className={`sb-fill${vis ? ' run' : ''}`}
          style={{ '--w': `${pct}%`, transitionDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();

  return (
    <section id="skills">
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 03 — WHAT I KNOW</div>
      <div ref={titleRef} className={`section-title fade-in${titleVis ? ' vis' : ''}`}>SKILLS</div>
      <div ref={lineRef} className={`section-line${lineVis ? ' run' : ''}`} />

      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => {
          const [ref, vis] = [null, true]; // inline fade handled below
          return (
            <SkillGroup key={g.title} group={g} delay={0.05 * (i + 1)} />
          );
        })}
      </div>

      <div className="skill-bars">
        <div className="sb-label">// CORE PROFICIENCY</div>
        {SKILL_BARS.map((b, i) => (
          <SkillBar key={b.label} label={b.label} pct={b.pct} delay={i * 0.1} />
        ))}
      </div>
      <p style={{ marginTop: '1.5rem', fontSize: '.65rem', color: '#444', letterSpacing: '.1em' }}>~ = currently learning</p>
    </section>
  );
}

function SkillGroup({ group, delay }) {
  const [ref, vis] = useFadeIn();
  return (
    <div ref={ref} className={`skill-group fade-in${vis ? ' vis' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="skill-group-title">{group.title}</div>
      <div className="skill-items">
        {group.items.map(([name, learning]) => (
          <span key={name} className={`skill-item${learning ? ' learning' : ''}`}>{name}</span>
        ))}
      </div>
    </div>
  );
}
