import news from '../assets/news.jpg';

export default function CertNews({ onFill }) {
  return (
    <section className="cn" id="certificate" aria-labelledby="cert-title">
      <div className="wrap cn-grid">
        <div className="cert">
          <svg className="seal" viewBox="0 0 116 116" aria-hidden="true">
            <circle cx="58" cy="58" r="54" fill="#fff" stroke="#5028A0" strokeWidth="4" />
            <circle cx="58" cy="58" r="44" fill="none" stroke="#10A8F8" strokeWidth="2" strokeDasharray="4 6" />
            <text x="58" y="56" textAnchor="middle" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="24" fill="#17133A">ISO</text>
            <text x="58" y="76" textAnchor="middle" fontFamily="Instrument Sans, sans-serif" fontWeight="600" fontSize="13" fill="#575478">9001:2015</text>
          </svg>
          <h2 id="cert-title">An ISO 9001:2015 certified company</h2>
          <p>Metrecon Group of Industries Pvt Ltd works to an internationally recognised quality management standard.</p>
          <div>
            <a className="btn btn-primary" href="#contact" onClick={() => onFill(0, 'Please send a copy of your ISO 9001:2015 certificate. ')}>
              Request the certificate
            </a>
          </div>
        </div>

        <article className="news" id="news">
          <img src={news} alt="Fine blue-grey microsilica powder" loading="lazy" width="452" height="236" />
          <div className="body">
            <span className="date">11 January 2025</span>
            <h3>Applications of Silcon™ Microsilica in concrete</h3>
            <p>Silcon™ Microsilica, also known as silica fume, is a by-product of silicon or ferrosilicon alloy production. Find out where it makes the biggest difference in concrete work.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
