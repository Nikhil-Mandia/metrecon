import construction from './assets/construction.jpg';
import furnace from './assets/furnace.jpg';
import steel from './assets/steel.jpg';
import paint from './assets/paint.jpg';

export const INDUSTRY_OPTIONS = ['Construction', 'Refractory', 'Steel', 'Paints and coatings', 'Other'];

export const INDUSTRIES = [
  {
    name: 'Construction',
    short: 'Concrete and building materials',
    cls: 't1',
    bar: '#10A8F8',
    img: construction,
    alt: 'Construction site with cranes and concrete frames',
    prefill: 'construction',
    text: 'High-performance additives and products that improve the strength, durability and eco-friendliness of concrete and other construction materials.',
    points: ['Stronger, denser concrete', 'Longer service life, fewer repairs', 'Reuses industrial by-products'],
  },
  {
    name: 'Refractory',
    short: 'Heat-resistant solutions',
    cls: 't2',
    bar: '#F5A524',
    img: furnace,
    alt: 'Molten metal being poured in a high-temperature furnace',
    prefill: 'refractory',
    text: 'Advanced heat-resistant solutions for industrial applications.',
    points: ['Built for high-temperature use', 'Longer lining life between replacements', 'Consistent quality, batch after batch'],
  },
  {
    name: 'Steel',
    short: 'Additives for steel production',
    cls: 't3',
    bar: '#7B52D6',
    img: steel,
    alt: 'Rolled steel coils in a steel plant',
    prefill: 'steel',
    text: 'Additives that improve the performance and sustainability of steel production.',
    points: ['Supports better process performance', 'Helps cut waste in production', 'Supplied to a steady specification'],
  },
  {
    name: 'Paints and coatings',
    short: 'Fillers and specialty minerals',
    cls: 't4',
    bar: '#F2547D',
    img: paint,
    alt: 'Open cans of paint in many colours',
    prefill: 'paint and coating',
    text: 'Lightweight fillers and specialty minerals for improved performance in paints and coatings.',
    points: ['Lightweight fillers', 'Specialty minerals for finish and performance', 'Cost-effective formulations'],
  },
];

export const NAV_LINKS = [
  ['Industries', '#industries'],
  ['Silcon', '#silcon'],
  ['Sustainability', '#sustainability'],
  ['About', '#about'],
  ['FAQ', '#faq'],
];

export const SUSTAIN_STEPS = [
  {
    short: 'Reuse by-products',
    title: 'Waste valorization',
    text: 'We transform industrial by-products into high-performance materials, so what other industries discard becomes something useful.',
  },
  {
    short: 'Process efficiently',
    title: 'Energy-efficient processes',
    text: 'Cutting-edge technology lets us reduce the energy used during manufacturing, batch after batch.',
  },
  {
    short: 'Deliver durability',
    title: 'Long-lasting materials',
    text: 'We enhance the durability of construction materials, which minimizes replacement cycles and reduces waste.',
  },
];

export const FAQS = [
  ['What is Silcon Microsilica?', 'Silcon™ Microsilica, also called silica fume, is a by-product of silicon or ferrosilicon alloy production. It is added to concrete to make it denser, stronger and more durable.'],
  ['Which industries do you supply?', 'We make chemicals and minerals for the construction, refractory, metallurgical, and paints and coatings industries, for clients in India and abroad.'],
  ['How much microsilica should I add?', 'It depends on your mix design and performance targets, and it is usually given as a percentage of cement weight. Use the calculator above for a starting estimate, then talk to our team to confirm the dosage.'],
  ['Is it safe to handle?', 'Silcon Microsilica is labelled non-hazardous on the pack. As with any fine powder, avoid breathing in dust, and ask us for the safety data sheet.'],
  ['How do I get a quote?', 'Send us the form below or call us. Tell us the product, quantity and delivery location, and we will reply with specifications and pricing.'],
];

export const CONTACT = {
  email: 'info@metreconindustries.com',
  email2: 'sbconindustries@gmail.com',
  phone: '+91 94343 12921',
  phoneHref: 'tel:+919434312921',
  phone2: '+91 97320 23453',
  phone2Href: 'tel:+919732023453',
  address: 'Village & P.O. Barakashiara, District Burdwan (near Haldi Bridge), West Bengal 713141',
  instagram: 'https://www.instagram.com/metreconindustries/',
  linkedin: 'https://www.linkedin.com/company/metrecon-industries-private-limited/',
};
