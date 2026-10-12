import { CONTACT, INDUSTRY_OPTIONS } from '../data';
import { PinIcon, MailIcon, PhoneIcon } from './Icons';

export default function Contact({ enquiry, setEnquiry }) {
  const [form, setForm] = [enquiry, setEnquiry];
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nIndustry: ${form.industry}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Quote enquiry from ' + form.name)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap grid">
        <div>
          <h2 id="contact-title">Get a quote today</h2>
          <p className="lede">Tell us what you make and what you need. Our team will reply with specifications and pricing.</p>
          <address className="details">
            <div className="drow">
              <span className="ic" style={{ background: '#fff' }}><PinIcon /></span>
              <div><small>Factory and office</small>{CONTACT.address}</div>
            </div>
            <div className="drow">
              <span className="ic" style={{ background: '#fff' }}><MailIcon /></span>
              <div><small>Email</small><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a><a href={`mailto:${CONTACT.email2}`}>{CONTACT.email2}</a></div>
            </div>
            <div className="drow">
              <span className="ic" style={{ background: '#fff' }}><PhoneIcon /></span>
              <div><small>Phone</small><a href={CONTACT.phoneHref}>{CONTACT.phone}</a><a href={CONTACT.phone2Href}>{CONTACT.phone2}</a></div>
            </div>
          </address>
        </div>

        <form className="quote" onSubmit={submit}>
          <div className="row">
            <label>Your name<input name="name" required autoComplete="name" value={form.name} onChange={update('name')} /></label>
            <label>Company<input name="company" autoComplete="organization" value={form.company} onChange={update('company')} /></label>
          </div>
          <div className="row">
            <label>Email<input type="email" name="email" required autoComplete="email" value={form.email} onChange={update('email')} /></label>
            <label>Phone<input type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={update('phone')} /></label>
          </div>
          <label>Industry
            <select name="industry" value={form.industry} onChange={update('industry')}>
              {INDUSTRY_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label>What do you need?
            <textarea name="message" required placeholder="Product, quantity, delivery location" value={form.message} onChange={update('message')} />
          </label>
          <button className="btn btn-primary" type="submit">Send enquiry by email</button>
          <small>This opens your email app with the enquiry filled in, addressed to {CONTACT.email}.</small>
        </form>
      </div>
    </section>
  );
}
