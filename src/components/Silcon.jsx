import powder from '../assets/powder.jpg';
import bag from '../assets/bag.jpg';
import Calculator from './Calculator';
import { TrendIcon, DropBigIcon, ShieldCheckIcon, RecycleIcon } from './Icons';
import { CONTACT } from '../data';

const BENEFITS = [
  { bg: '#EDE6FB', Icon: TrendIcon, title: 'Higher strength', text: 'Denser packing gives concrete more strength for demanding structures.' },
  { bg: '#E3F4FE', Icon: DropBigIcon, title: 'Less porous', text: 'Fewer gaps means less room for water to get in.' },
  { bg: '#FFF1D6', Icon: ShieldCheckIcon, title: 'Better durability', text: 'Structures last longer and need fewer repairs.' },
  { bg: '#E5F7EE', Icon: RecycleIcon, title: 'Reuses a by-product', text: 'Gives industrial by-product a second life in construction.' },
];

export default function Silcon({ onFill, onCalcSend }) {
  return (
    <section className="silcon" id="silcon" aria-labelledby="sil-title">
      <div className="wrap">
        <div className="sil-grid">
          <div className="photos">
            <img className="a" src={powder} alt="A mound of grey microsilica powder" loading="lazy" width="470" height="341" />
            <img className="b" src={bag} alt="Silcon Microsilica 25 kg bag" loading="lazy" width="470" height="353" />
          </div>
          <div className="sil-copy">
            <h2 id="sil-title">Silcon™ Microsilica</h2>
            <p>
              Silcon™ Microsilica, also known as silica fume, is a by-product of silicon or ferrosilicon alloy production. Added to concrete, it fills the microscopic gaps between cement grains, so the finished structure is denser and lasts longer.
            </p>
            <div className="specs">
              <div className="spec s1"><small>Product type</small><b>Non-hazardous</b></div>
              <div className="spec s2"><small>Use</small><b>High-performance concrete</b></div>
              <div className="spec s3"><small>Standard</small><b>Meets ASTM C-1240</b></div>
              <div className="spec s4"><small>Pack size</small><b>25 kg bag</b></div>
            </div>
            <div className="actions">
              <a className="btn btn-primary" href="#contact" onClick={() => onFill(0, 'Please send the specifications and data sheet for Silcon Microsilica. ')}>
                Request specifications
              </a>
              <a className="btn btn-line" href={CONTACT.article} rel="noopener">Read about applications</a>
            </div>
          </div>
        </div>

        <div className="benefits">
          {BENEFITS.map(({ bg, Icon, title, text }) => (
            <div className="bf" key={title}>
              <span className="ic" style={{ background: bg }}><Icon /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <Calculator onSend={onCalcSend} />
      </div>
    </section>
  );
}
