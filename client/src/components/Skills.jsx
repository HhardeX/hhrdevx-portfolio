import { useFadeIn } from '../hooks/useScroll';

const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    items: [['Python'], ['Java'], ['C++'], ['SQL (Basic)']],
  },
  {
    title: 'Web Technologies',
    items: [['HTML5'], ['CSS3'], ['JavaScript']],
  },
  {
    title: 'Core Computer Science',
    items: [['Object-Oriented Programming'], ['Data Structures'], ['DBMS']],
  },
  {
    title: 'Developer Tools',
    items: [['Git'], ['GitHub'], ['VS Code'], ['Postman']],
  },
  {
    title: 'Operating Systems',
    items: [['Windows'], ['Linux']],
  },
  {
    title: 'Areas of Interest',
    items: [['Backend Development'], ['Artificial Intelligence'], ['Cybersecurity']],
  },
];

const SKILL_BARS = [
  { label: 'Python', pct: 75 },
  { label: 'Java', pct: 70 },
  { label: 'C++', pct: 60 },
  { label: 'HTML5 / CSS3 / JavaScript', pct: 65 },
  { label: 'Backend Development', pct: 55 },
  { label: 'Artificial Intelligence', pct: 50 },
  { label: 'Cybersecurity', pct: 40 },
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

export default function Skills() {
  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();

  return (
    <section id="skills">
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 02 — WHAT I KNOW</div>
      <div ref={titleRef} className={`section-title fade-in${titleVis ? ' vis' : ''}`}>SKILLS</div>
      <div ref={lineRef} className={`section-line${lineVis ? ' run' : ''}`} />

      <div className="skills-grid">
        {SKILL_GROUPS.map((g, i) => (
          <SkillGroup key={g.title} group={g} delay={0.05 * (i + 1)} />
        ))}
      </div>

      <div className="skill-bars">
        <div className="sb-label">// CORE PROFICIENCY</div>
        {SKILL_BARS.map((b, i) => (
          <SkillBar key={b.label} label={b.label} pct={b.pct} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
