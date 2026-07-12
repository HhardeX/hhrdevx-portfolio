import { useEffect, useRef, useState } from 'react';
import { useFadeIn } from '../hooks/useScroll';

const STATS = [
  { count: 3, label: 'Projects Built' },
  { count: 2, label: 'Hackathons' },
  { count: 2, label: 'Years Coding' },
  { count: null, label: 'Things to Learn' },
];

function StatCard({ count, label, delay }) {
  const [ref, vis] = useFadeIn();
  const [num, setNum] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (vis && count && !done.current) {
      done.current = true;
      let c = 0;
      const iv = setInterval(() => { c = Math.min(c + 1, count); setNum(c); if (c >= count) clearInterval(iv); }, 80);
    }
  }, [vis, count]);

  return (
    <div ref={ref} className={`stat-card fade-in${vis ? ' vis' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      <div className="stat-num">{count ? `${num}+` : '∞'}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

const TERMINAL_LINES = [
  { id: 'tl1', txt: 'hardev@ahmedabad ~ CSE Undergrad', delay: 500 },
  { id: 'tl2', txt: 'Backend Dev, AI, Cybersecurity', delay: 1200 },
  { id: 'tl3', txt: 'Open to learning & collaborations', delay: 2100, green: true },
];

function TerminalBlock({ run }) {
  const [lines, setLines] = useState({ tl1: '', tl2: '', tl3: '' });

  useEffect(() => {
    if (!run) return;
    TERMINAL_LINES.forEach(({ id, txt, delay }) => {
      setTimeout(() => {
        let i = 0;
        const iv = setInterval(() => {
          setLines(prev => ({ ...prev, [id]: txt.slice(0, i) }));
          i++;
          if (i > txt.length) clearInterval(iv);
        }, 32);
      }, delay);
    });
  }, [run]);

  return (
    <div className="terminal-block">
      <div className="terminal-bar">
        <div className="tb tb-r" /><div className="tb tb-y" /><div className="tb tb-g" />
      </div>
      <div className="terminal-line"><span className="prompt">$</span> <span className="cmd">whoami</span></div>
      <div className="terminal-line out">{lines.tl1}</div>
      <div className="terminal-line"><span className="prompt">$</span> <span className="cmd">cat interests.txt</span></div>
      <div className="terminal-line out">{lines.tl2}</div>
      <div className="terminal-line"><span className="prompt">$</span> <span className="cmd">echo $STATUS</span></div>
      <div className="terminal-line out" style={{ color: 'var(--green)' }}>{lines.tl3}</div>
      <div className="terminal-line"><span className="prompt">$</span> <span className="c-blink" /></div>
    </div>
  );
}

export default function About() {
  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();
  const [leftRef, leftVis] = useFadeIn();
  const [rightRef, rightVis] = useFadeIn();
  const [twRun, setTwRun] = useState(false);

  useEffect(() => { if (leftVis) setTwRun(true); }, [leftVis]);

  return (
    <section id="about">
      <div ref={labelRef} className={`section-label fade-in${labelVis ? ' vis' : ''}`}>// 01 — WHO AM I</div>
      <div ref={titleRef} className={`section-title fade-in${titleVis ? ' vis' : ''}`}>ABOUT_ME</div>
      <div ref={lineRef} className={`section-line fade-in${lineVis ? ' vis run' : ''}`} />

      <div className="about-grid">
        <div ref={leftRef} className={`about-text fade-left${leftVis ? ' vis' : ''}`}>
          <p>I believe in <strong>learning by building</strong>. Every project helps me strengthen my understanding of software engineering, problem solving, and modern technologies.</p>
          <p>My focus is on <strong>Python</strong>, <strong>backend development</strong>, <strong>AI</strong>, and <strong>cybersecurity</strong>. I enjoy collaborating on projects that solve real-world problems and continuously improving my technical skills.</p>
          <p>Currently studying at <strong>Indus Institute of Technology & Engineering</strong>, Ahmedabad — graduating 2027.</p>
          <TerminalBlock run={twRun} />
        </div>

        <div ref={rightRef} className={`fade-right${rightVis ? ' vis' : ''}`}>
          <div className="retro-computer">
            <div className="computer-body">
              <div className="computer-screen-bezel">
                <div className="computer-screen">
                  <div className="screen-scanlines" />
                  <div className="screen-text">
                    HARDEV-OS v1.0<br />AHMEDABAD, INDIA<br />─────────────────<br />
                    [ CORE SYSTEMS  ]<br />▶ PYTHON ....... OK<br />▶ AI/ML ........ OK<br />
                    ▶ BACKEND .. ACTIVE<br />▶ CYBERSEC .. LEARNING<br />─────────────────<br />
                    READY.<span className="c-blink" />
                  </div>
                </div>
              </div>
            </div>
            <div className="computer-base"><div className="drive-slot" /></div>
            <div className="computer-keyboard">
              {[0, 1, 2, 3].map((rowIdx) => (
                <div key={rowIdx} className="keyboard-row">
                  {rowIdx === 3 ? (
                    <><div className="key key-wide" /><div className="key key-space" /><div className="key key-wide" /></>
                  ) : Array.from({ length: rowIdx === 0 ? 13 : rowIdx === 1 ? 11 : 10 }).map((__, i) => (
                    <div key={i} className={`key${i === (rowIdx === 0 ? 12 : rowIdx === 2 ? 9 : -1) ? ' key-wide' : ''}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {STATS.map((s, i) => (
              <StatCard key={s.label} count={s.count} label={s.label} delay={0.1 * (i + 1)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
