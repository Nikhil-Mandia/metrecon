import dam from '../assets/dam.jpg';

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title" style={{ paddingTop: 40 }}>
      <div className="wrap about-grid">
        <div>
          <h2 id="about-title">About Metrecon</h2>
          <p>
            <strong style={{ color: 'var(--ink)' }}>Metrecon Industries Pvt. Ltd.</strong> is a leading manufacturer and supplier of chemicals and minerals for the construction, refractory, metallurgical, and paints and coatings industries. We deliver innovative, high-performance products that are cost effective and environmentally responsible.
          </p>
          <p>We pride ourselves on our commitment to quality and customer satisfaction, with solutions for clients both in India and around the world.</p>
          <div className="facts">
            <div className="fact f1"><strong>2008</strong><span>Established in West Bengal, India</span></div>
            <div className="fact f2"><strong>ISO 9001:2015</strong><span>Certified quality management</span></div>
            <div className="fact f3"><strong>4 industries</strong><span>Construction, refractory, steel, paints and coatings</span></div>
            <div className="fact f4"><strong>India and global</strong><span>Domestic and export clients</span></div>
          </div>
        </div>
        <figure className="pic">
          <img src={dam} alt="A large concrete spillway under construction with cranes" loading="lazy" width="470" height="694" />
          <figcaption>Infrastructure has to last. That is what we help strengthen.</figcaption>
        </figure>
      </div>
    </section>
  );
}
