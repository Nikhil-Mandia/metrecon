import { INDUSTRIES } from '../data';
import { TabIcons, TickGreen } from './Icons';

export default function Industries({ tab, setTab, onQuote }) {
  const current = INDUSTRIES[tab];
  return (
    <section id="industries" aria-labelledby="ind-title">
      <div className="wrap">
        <div className="head">
          <h2 id="ind-title">Solutions for the industries that build everything else</h2>
          <p className="lede">Tailored products that improve performance, sustainability and efficiency. Pick your industry.</p>
        </div>

        <div className="ind">
          <div className="tabs" role="tablist" aria-label="Industries">
            {INDUSTRIES.map((ind, i) => {
              const Icon = TabIcons[i];
              return (
                <button key={ind.name} className={`tab ${ind.cls}`} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>
                  <span className="ico"><Icon /></span>
                  <span><strong>{ind.name}</strong><small>{ind.short}</small></span>
                </button>
              );
            })}
          </div>

          <div className="stage" role="tabpanel" aria-live="polite">
            <div className="photo" style={{ '--bar': current.bar }}>
              {INDUSTRIES.map((ind, i) => (
                <img key={ind.name} className={i === tab ? 'on' : ''} src={ind.img} alt={ind.alt} />
              ))}
            </div>
            <div className="info">
              <div>
                <h3>{current.name}</h3>
                <p>{current.text}</p>
              </div>
              <ul>
                {current.points.map((p) => (
                  <li key={p}><TickGreen /><span>{p}</span></li>
                ))}
              </ul>
              <div className="go">
                <a className="btn btn-primary" href="#contact" onClick={() => onQuote(tab, `I would like a quote for your ${current.prefill} products. `)}>
                  Get a quote
                </a>
                <a className="btn btn-line" href="#silcon">See Silcon Microsilica</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
