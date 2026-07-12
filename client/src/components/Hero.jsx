import { useEffect, useState } from 'react';

const TAGS = ['Python', 'Java', 'C++', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'Linux'];

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
          Python Developer &nbsp;/&nbsp; Computer Science Undergraduate
        </div>
        <div className="hero-tags">
          {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <p className="hero-bio">
          I'm a Computer Science undergraduate at <strong>Indus Institute of Technology & Engineering</strong> with
          a strong interest in <strong>backend development</strong>, <strong>artificial intelligence</strong>, and{' '}
          <strong className="a">cybersecurity</strong>. I enjoy building practical software solutions through
          academic projects, hackathons, and continuous learning. Currently working as{' '}
          <strong>Product Architect & Backend Developer</strong> for VENOM, an AI Agent Security Assessment Platform.
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
