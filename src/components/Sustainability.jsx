import { useState } from 'react';
import { SUSTAIN_STEPS } from '../data';
import { StepIcons } from './Icons';

export default function Sustainability() {
  const [i, setI] = useState(0);
  const step = SUSTAIN_STEPS[i];
  const Icon = StepIcons[i];

  return (
    <section className="green" id="sustainability" aria-labelledby="green-title">
      <div className="wrap">
        <div className="head">
          <h2 id="green-title">Building a greener future with Metrecon</h2>
          <p className="lede">Our products are designed to reduce the environmental impact of the construction and refractory industries. Tap each step to see how.</p>
        </div>

        <div className="steps" role="tablist" aria-label="How we work">
          <div className="fill" style={{ width: `${(i / 2) * 66.667}%` }} />
          {SUSTAIN_STEPS.map((s, k) => (
            <button key={s.short} className={`step${k < i ? ' done' : ''}`} role="tab" aria-selected={k === i} onClick={() => setI(k)}>
              <span className="n">{k + 1}</span>
              <strong>{s.short}</strong>
            </button>
          ))}
        </div>

        <div className="detail" role="tabpanel" aria-live="polite">
          <div className="big"><Icon /></div>
          <div><h3>{step.title}</h3><p>{step.text}</p></div>
        </div>

        <div className="pillars">
          <div className="pillar"><h3>Waste valorization</h3><p>Transforming industrial by-products into high-performance materials.</p></div>
          <div className="pillar"><h3>Energy-efficient processes</h3><p>Using cutting-edge technology to reduce energy consumption during manufacturing.</p></div>
          <div className="pillar"><h3>Long-lasting materials</h3><p>Enhancing durability, minimizing replacement cycles and reducing waste.</p></div>
        </div>
      </div>
    </section>
  );
}
