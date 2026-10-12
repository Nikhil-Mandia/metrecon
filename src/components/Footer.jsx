import logo from '../assets/logo.webp';
import { CONTACT } from '../data';
import { PhoneIcon } from './Icons';

export default function Footer() {
  return (
    <>
      <footer className="site">
        <div className="wrap">
          <div className="cols">
            <div>
              <a className="logo" href="#top" aria-label="Back to top"><img src={logo} alt="Silcon, Metrecon Industries" width="222" height="50" /></a>
              <p className="s">Chemicals and minerals for construction, refractory, metallurgical, and paints and coatings industries. Established in 2008 in West Bengal, India.</p>
            </div>
            <div>
              <h4>Quick links</h4>
              <ul>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#silcon">Silcon Microsilica</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#certificate">Certificate and news</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact us</h4>
              <ul>
                <li>Barakashiara, Burdwan, West Bengal 713141</li>
                <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
                <li><a href={CONTACT.instagram} rel="noopener">Instagram</a> &nbsp; <a href={CONTACT.linkedin} rel="noopener">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© {new Date().getFullYear()} Metrecon Industries Pvt Ltd. All rights reserved.</span>
            <span>An ISO 9001:2015 certified company</span>
          </div>
        </div>
      </footer>

      <div className="fab">
        <a className="btn btn-primary" href="#contact">Get a quote</a>
        <a className="btn call" href={CONTACT.phoneHref} aria-label="Call Metrecon"><PhoneIcon color="#fff" fill="#fff" /></a>
      </div>
    </>
  );
}
