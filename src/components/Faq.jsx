import { FAQS } from '../data';
import { PlusIcon } from './Icons';

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="head"><h2 id="faq-title">Questions buyers ask us</h2></div>
        <div className="faq">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>{q}<span className="pm"><PlusIcon /></span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
