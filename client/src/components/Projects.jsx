import { useRef } from 'react';
import { useFadeIn } from '../hooks/useScroll';

const PROJECTS = [
  {
    num: '01', year: '// 2025',
    name: 'GESTURE & FACE RECOGNITION',
    desc: 'Real-time gesture and face detection system using Java and OpenCV. Processes webcam input to detect facial features and hand gestures with a focus on accuracy and performance.',
    tags: ['Java', 'OpenCV', 'Computer Vision'],
  },
  {
    num: '02', year: '// 2025',
    name: 'ESPORTS ANALYTICS PLATFORM',
    desc: 'Performance analytics system for esports players. Analyses match statistics and player performance trends using data processing and visualisation techniques.',
    tags: ['Python', 'Pandas', 'Data Viz', 'Machine Learning'],
  },
  {
    num: '03', year: '// 2026 — IN PROGRESS',
    name: 'AI-POWERED THRIFT STORE',
    desc: 'Sustainable fashion platform with AI-based styling suggestions and intelligent product filtering. Designed to scale into a full e-commerce brand.',
    tags: ['React', 'Node.js', 'MongoDB', 'AI Tools'],
  },
  {
    num: '04', year: '// 2026',
    name: 'TRADING PREDICTION PROTOTYPE',
    desc: 'Experimental stock prediction model using historical data and ML algorithms to test and evaluate predictive trading strategies.',
    tags: ['Python', 'Scikit-learn', 'Pandas'],
  },
  {
    num: '05', year: '// 2026 — ONGOING',
    name: 'WEB3 / SOLANA DAPPS',
    desc: 'Building and experimenting with decentralised applications on the Solana blockchain. Learning smart contract development in Rust and wallet integration.',
    tags: ['Solana', 'Rust', 'Web3.js', 'JavaScript'],
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
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 02 — WHAT I'VE BUILT</div>
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
