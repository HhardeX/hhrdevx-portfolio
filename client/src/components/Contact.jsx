import { useState } from 'react';
import { useFadeIn } from '../hooks/useScroll';

const INIT = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errMsg, setErrMsg] = useState('');

  const [labelRef, labelVis] = useFadeIn();
  const [titleRef, titleVis] = useFadeIn();
  const [lineRef, lineVis] = useFadeIn();
  const [leftRef, leftVis] = useFadeIn();
  const [rightRef, rightVis] = useFadeIn();

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error'); setErrMsg('All fields are required.'); return;
    }
    setStatus('loading');
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success'); setForm(INIT);
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus('error'); setErrMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error'); setErrMsg('Network error. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div ref={labelRef} className={`section - label fade - in${labelVis ? ' vis' : ''} `}>// 04 — REACH OUT</div>
      <div ref={titleRef} className={`section - title fade - in${titleVis ? ' vis' : ''} `}>CONTACT</div>
      <div ref={lineRef} className={`section - line${lineVis ? ' run' : ''} `} />

      <div className="contact-inner">
        <div ref={leftRef} className={`fade - left${leftVis ? ' vis' : ''} `}>
          <div className="contact-text">
            <p>Always open to interesting projects, collaborations, internship opportunities, or just a good tech conversation.</p>
            <p style={{ color: 'var(--green-dim)' }}>Based in Ahmedabad, India. Open to remote work worldwide.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:hardevchudasama@example.com" className="contact-link">
              <div className="cl-icon">@</div>hardevchudasama@example.com
            </a>
            <a href="https://linkedin.com/in/hardevchudasama" target="_blank" rel="noreferrer" className="contact-link">
              <div className="cl-icon">in</div>linkedin.com/in/hardevchudasama
            </a>
            <a href="https://github.com/hardevchudasama" target="_blank" rel="noreferrer" className="contact-link">
              <div className="cl-icon">{'{}'}</div>github.com/hardevchudasama
            </a>
          </div>
        </div>

        <div ref={rightRef} className={`contact - form fade - right${rightVis ? ' vis' : ''} `}>
          <div className="form-row">
            <div className="form-field">
              <label>Name</label>
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input name="email" value={form.email} onChange={onChange} placeholder="your@email.com" />
            </div>
          </div>
          <div className="form-field">
            <label>Subject</label>
            <input name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" />
          </div>
          <div className="form-field">
            <label>Message</label>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project, idea, or just say hi..." />
          </div>

          {status === 'success' && (
            <div className="form-status success">✓ MESSAGE_SENT.exe — I'll get back to you soon!</div>
          )}
          {status === 'error' && (
            <div className="form-status error">✗ ERROR: {errMsg}</div>
          )}

          <button className="btn" style={{ alignSelf: 'flex-start' }} onClick={onSubmit} disabled={status === 'loading'}>
            {status === 'loading' ? 'SENDING...' : 'SEND_MESSAGE.exe'}
          </button>
        </div>
      </div>
    </section>
  );
}
