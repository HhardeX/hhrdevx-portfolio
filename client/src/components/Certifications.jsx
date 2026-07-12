import { useFadeIn } from '../hooks/useScroll';

const CERTS = [
  {
    num: '01',
    title: 'Python Programming Training',
    issuer: 'YBI Foundation',
    year: '2025',
    desc: 'Completed comprehensive Python programming training covering core concepts, data structures, and practical application development including a machine learning project.',
  },
  {
    num: '02',
    title: 'AI Tools & Technology',
    issuer: 'Online Certification',
    year: '2025',
    desc: 'Completed certification covering modern AI tools, prompting techniques, and practical applications of artificial intelligence in software development workflows.',
  },
];

const EXPERIENCE = [
  {
    role: 'Product Architect & Backend Developer',
    company: 'VENOM — AI Agent Security Assessment Platform',
    period: '2026 — Present',
    type: 'Software Group Project (SJP)',
    desc: 'Leading product architecture and backend development for VENOM v1. Responsible for system design, API development, technical documentation, and AI agent threat modeling.',
  },
];

export default function Certifications() {
  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();

  return (
    <section id="certifications">
      {/* EXPERIENCE */}
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 04 — EXPERIENCE & CERTS</div>
      <div ref={titleRef} className={`section-title fade-in${titleVis ? ' vis' : ''}`}>EXPERIENCE</div>
      <div ref={lineRef} className={`section-line${lineVis ? ' run' : ''}`} />

      <div style={{ marginBottom: '3rem' }}>
        {EXPERIENCE.map((e, i) => {
          const [ref, vis] = [null, true];
          return <ExperienceCard key={i} exp={e} />;
        })}
      </div>

      {/* CERTIFICATIONS */}
      <CertTitle />
      <div className="projects-grid">
        {CERTS.map((c, i) => (
          <CertCard key={c.num} cert={c} delay={0.05 * (i + 1)} />
        ))}
      </div>
    </section>
  );
}

function CertTitle() {
  const [ref, vis] = useFadeIn();
  return (
    <div ref={ref} className={`section-title fade-in${vis ? ' vis' : ''}`}
      style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>
      CERTIFICATIONS
    </div>
  );
}

function ExperienceCard({ exp }) {
  const [ref, vis] = useFadeIn();
  return (
    <div ref={ref} className={`project-card fade-in${vis ? ' vis' : ''}`} style={{ marginBottom: '1rem' }}>
      <div className="project-year">// {exp.type}</div>
      <div className="project-name">{exp.role}</div>
      <div style={{ fontSize: '.72rem', color: 'var(--amber)', marginBottom: '.6rem', letterSpacing: '.08em' }}>
        {exp.company}
      </div>
      <div style={{ fontSize: '.65rem', color: 'var(--green-dim)', marginBottom: '.8rem', letterSpacing: '.1em' }}>
        {exp.period}
      </div>
      <p className="project-desc">{exp.desc}</p>
    </div>
  );
}

function CertCard({ cert, delay }) {
  const [ref, vis] = useFadeIn();
  return (
    <div ref={ref} className={`project-card fade-in${vis ? ' vis' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="project-num">{cert.num}</div>
      <div className="project-year">// {cert.year}</div>
      <div className="project-name">{cert.title}</div>
      <div style={{ fontSize: '.7rem', color: 'var(--amber)', marginBottom: '.8rem', letterSpacing: '.08em' }}>
        {cert.issuer}
      </div>
      <p className="project-desc">{cert.desc}</p>
      <div className="project-tags">
        <span className="ptag">CERTIFIED ✓</span>
      </div>
    </div>
  );
}
