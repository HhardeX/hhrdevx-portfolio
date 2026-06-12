import { useEffect, useState } from 'react';

const TAGS = ['React.js', 'Node.js', 'Python', 'Machine Learning', 'Solana', 'Docker', 'Java', 'TypeScript'];

export default function Hero() {
  const [typed, setTyped] = useState('');
  const txt = 'INITIALIZING_PORTFOLIO.exe';

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= txt.length) { setTyped(txt.slice(0, i)); i++; }
      else clearInterval(t);
    }, 55);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home">
      <div className="hero-grid-bg" />
      <div className="hero-inner">
        <div className="hero-prompt">{typed}</div>
        <div className="hero-name">
          <div className="glitch" data-text="HARDEV">HARDEV</div>
          <div className="glitch" data-text="CHUDASAMA">CHUDASAMA</div>
        </div>
        <div className="hero-role">
          Full Stack Developer &nbsp;/&nbsp; AI & Data Science &nbsp;/&nbsp; Web3 Learner &nbsp;/&nbsp; DevOps Explorer
        </div>
        <div className="hero-tags">
          {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="hero-bio">
          Computer Science Engineering student passionate about building scalable web apps,
          AI-driven systems, and decentralised technologies. Currently expanding into{' '}
          <strong>Web3 on Solana</strong> and <strong className="a">DevOps practices</strong>.
          Goal: impactful tech products combining AI, Web3, and modern cloud systems.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
