import dam from '../assets/dam.jpg';
import construction from '../assets/construction.jpg';
import bag from '../assets/bag.jpg';
import { INDUSTRIES } from '../data';
import { CheckSmall, StarIcon } from './Icons';

export default function Hero({ onPickIndustry }) {
  const chipClass = ['c1', 'c2', 'c3', 'c4'];
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <h1 id="hero-title">Strengthening infrastructure, building tomorrow</h1>
          <p className="lede">
            High-quality, innovative solutions that improve performance, durability and sustainability across construction, metallurgy, agro and refractories.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#silcon">Meet Silcon Microsilica</a>
            <a className="btn btn-line" href="#contact">Get a quote today</a>
          </div>
          <div className="quick">
            <span>I work in</span>
            {INDUSTRIES.map((ind, i) => (
              <a key={ind.name} className={`chip ${chipClass[i]}`} href="#industries" onClick={() => onPickIndustry(i)}>
                {ind.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mosaic">
          <figure className="m1"><img src={dam} alt="A large concrete spillway under construction with cranes" width="470" height="694" /></figure>
          <figure><img src={construction} alt="Construction site with tower cranes" width="736" height="490" /></figure>
          <figure><img src={bag} alt="A 25 kg bag of Silcon Microsilica" width="470" height="353" /></figure>
          <div className="badge b1">
            <span className="dot" style={{ background: '#EDE6FB' }}><CheckSmall /></span>
            <span><strong>ISO 9001:2015</strong>Certified company</span>
          </div>
          <div className="badge b2">
            <span className="dot" style={{ background: '#FFF1D6' }}><StarIcon /></span>
            <span><strong>Meets ASTM C-1240</strong>Silcon Microsilica</span>
          </div>
        </div>
      </div>

      <div className="waves" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0 50 C 240 6 430 84 720 46 C 1000 10 1210 70 1440 30 L1440 90 L0 90Z" fill="#10A8F8" opacity=".22" />
          <path d="M0 64 C 260 30 470 90 750 62 C 1030 36 1230 82 1440 54 L1440 90 L0 90Z" fill="#5028A0" opacity=".16" />
          <path d="M0 78 C 300 56 520 90 780 78 C 1040 62 1240 88 1440 74 L1440 90 L0 90Z" fill="#fff" />
        </svg>
      </div>
    </section>
  );
}
