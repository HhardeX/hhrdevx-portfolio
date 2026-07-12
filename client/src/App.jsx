import { useEffect } from 'react';
import Cursor from './components/Cursor';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import { useScrollProgress } from './hooks/useScroll';

function ProgressBar() {
  const { progress } = useScrollProgress();
  return <div id="progress-bar" style={{ width: `${progress}%` }} />;
}

function BackToTop() {
  const { showBtt } = useScrollProgress();
  return (
    <button
      id="btt"
      className={showBtt ? 'show' : ''}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >↑</button>
  );
}

export default function App() {
  useEffect(() => {
    let k = '';
    const code = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRight';
    const handler = (e) => {
      k += e.key;
      if (k.length > code.length) k = k.slice(-code.length);
      if (k === code) {
        document.body.style.filter = 'hue-rotate(120deg) saturate(1.5)';
        setTimeout(() => (document.body.style.filter = ''), 2200);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <Cursor />
      <div id="crt" />
      <Particles />
      <ProgressBar />
      <BackToTop />
      <Navbar />

      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Certifications />
        <hr className="section-divider" />
        <Contact />
      </main>

      <footer>
        <div>Designed & Built by <span>Hardev Chudasama</span> &nbsp;//&nbsp; COPYRIGHT © 2026</div>
        <div className="footer-loc">📍 Ahmedabad, Gujarat, India</div>
      </footer>
    </>
  );
}
