import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const animRing = () => {
      rx += (mx - rx) * 0.11; ry += (my - ry) * 0.11;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      rafId = requestAnimationFrame(animRing);
    };
    rafId = requestAnimationFrame(animRing);

    const growCursor = () => { cur.style.width = '5px'; cur.style.height = '5px'; ring.style.width = '50px'; ring.style.height = '50px'; ring.style.borderColor = 'var(--green)'; };
    const shrinkCursor = () => { cur.style.width = '10px'; cur.style.height = '10px'; ring.style.width = '34px'; ring.style.height = '34px'; ring.style.borderColor = 'rgba(0,255,136,.45)'; };

    const targets = document.querySelectorAll('a, button, .tag, .skill-item, .project-card, .stat-card, .key');
    targets.forEach(el => { el.addEventListener('mouseenter', growCursor); el.addEventListener('mouseleave', shrinkCursor); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
