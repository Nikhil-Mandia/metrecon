import { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';
import { NAV_LINKS, CONTACT } from '../data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="util">
        <div className="wrap">
          <div className="l">
            <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </div>
          <div className="r">
            <span>An ISO 9001:2015 certified company</span>
            <a href="#contact">Request data sheet</a>
          </div>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <a className="logo" href="#top" aria-label="Silcon by Metrecon Industries, home">
            <img src={logo} alt="Silcon, Metrecon Industries" width="222" height="50" />
          </a>
          <button className="menu-btn" aria-expanded={open} aria-controls="mainNav" onClick={() => setOpen((o) => !o)}>
            Menu
          </button>
          <nav className={`main${open ? ' open' : ''}`} id="mainNav" aria-label="Main" onClick={(e) => e.target.tagName === 'A' && setOpen(false)}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a className="btn btn-primary" href="#contact">Get a quote</a>
          </nav>
        </div>
      </header>
    </>
  );
}
