import { CheckCircle, CalendarIcon, ShieldIcon, GlobeIcon } from './Icons';

const ITEMS = [
  { bg: '#EDE6FB', Icon: CheckCircle, title: 'ISO 9001:2015', sub: 'Certified quality' },
  { bg: '#E3F4FE', Icon: CalendarIcon, title: 'Since 2008', sub: 'Made in West Bengal' },
  { bg: '#FFF1D6', Icon: ShieldIcon, title: 'ASTM C-1240', sub: 'Silcon Microsilica' },
  { bg: '#E5F7EE', Icon: GlobeIcon, title: 'India and global', sub: 'Domestic and export clients' },
];

export default function Trust() {
  return (
    <section className="trust" aria-label="Why customers choose Metrecon">
      <div className="wrap row">
        {ITEMS.map(({ bg, Icon, title, sub }) => (
          <div className="tcard" key={title}>
            <span className="ic" style={{ background: bg }}><Icon /></span>
            <div><strong>{title}</strong><span>{sub}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
