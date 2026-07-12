import { useRef } from 'react';
import { useFadeIn } from '../hooks/useScroll';

const PROJECTS = [
  {
    num: '01',
    year: '// 2026 — ONGOING',
    name: 'VENOM',
    role: 'Product Architect & Backend Developer',
    desc: 'Designing and developing VENOM v1, a white-box AI Agent Security Assessment Platform. Responsible for product planning, system architecture, backend API design, and technical documentation. Collaborating on AI agent threat modeling, capability discovery, permission analysis, and risk assessment to build a modular platform for evaluating AI agents before deployment.',
    tags: ['Python', 'FastAPI', 'Git', 'GitHub'],
  },
  {
    num: '02',
    year: '// 2025 — HACKATHON',
    name: 'DHANJI — PERSONAL FINANCE TRACKER',
    role: 'Frontend Developer & Presenter',
    desc: 'Developed during the 48-hour Hack the Future 2025 hackathon at DAIICT, Gandhinagar. Collaborated in a five-member team to build a personal finance tracking application. Contributed to frontend development using HTML, CSS, and JavaScript with AI-assisted development tools and designed the final project presentation.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
  },
  {
    num: '03',
    year: '// 2025',
    name: 'DIABETES PREDICTION SYSTEM',
    role: 'Developer',
    desc: 'Developed a machine learning application during a Python training program to predict diabetes using patient health records. Worked on data preprocessing, model training, and evaluation using Python.',
    tags: ['Python', 'Machine Learning'],
  },
];

function ProjectCard({ project, delay }) {
  const [ref, vis] = useFadeIn();
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const r = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    cardRef.current.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  };

  return (
    <div
      ref={(el) => { ref.current = el; cardRef.current = el; }}
      className={`project-card fade-in${vis ? ' vis' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
      onMouseMove={onMouseMove}
    >
      <div className="project-num">{project.num}</div>
      <div className="project-year">{project.year}</div>
      <div className="project-name">{project.name}</div>
      {project.role && (
        <div style={{ fontSize: '.68rem', color: 'var(--amber)', letterSpacing: '.08em', marginBottom: '.6rem' }}>
          ↳ {project.role}
        </div>
      )}
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.map(t => <span key={t} className="ptag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();

  return (
    <section id="projects">
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 03 — WHAT I'VE BUILT</div>
      <div ref={titleRef} className={`section-title fade-in${titleVis ? ' vis' : ''}`}>PROJECTS</div>
      <div ref={lineRef} className={`section-line${lineVis ? ' run' : ''}`} />
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} delay={0.05 * (i + 1)} />
        ))}
      </div>
    </section>
  );
}
