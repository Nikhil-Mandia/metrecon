import { useState } from 'react';
import { INDUSTRY_OPTIONS } from './data';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Industries from './components/Industries';
import Silcon from './components/Silcon';
import Sustainability from './components/Sustainability';
import About from './components/About';
import CertNews from './components/CertNews';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

const EMPTY = { name: '', company: '', email: '', phone: '', industry: INDUSTRY_OPTIONS[0], message: '' };

export default function App() {
  const [tab, setTab] = useState(0);
  const [enquiry, setEnquiry] = useState(EMPTY);

  // Pre-fills the quote form from buttons elsewhere on the page.
  const fill = (industryIndex, text) =>
    setEnquiry((e) => ({
      ...e,
      industry: industryIndex != null && industryIndex >= 0 ? INDUSTRY_OPTIONS[industryIndex] : e.industry,
      message: text && !e.message.includes(text) ? (e.message ? e.message + '\n' : '') + text : e.message,
    }));

  const sendCalculation = (text) => {
    fill(0, text);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <main id="top">
        <Hero onPickIndustry={setTab} />
        <Trust />
        <Industries tab={tab} setTab={setTab} onQuote={fill} />
        <Silcon onFill={fill} onCalcSend={sendCalculation} />
        <Sustainability />
        <About />
        <CertNews onFill={fill} />
        <Faq />
        <Contact enquiry={enquiry} setEnquiry={setEnquiry} />
      </main>
      <Footer />
    </>
  );
}
