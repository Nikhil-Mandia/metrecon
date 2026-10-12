const base = (size, vb = 26) => ({ width: size, height: size, viewBox: `0 0 ${vb} ${vb}`, 'aria-hidden': true });
const stroke = { fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };

export const CheckCircle = ({ size = 26, color = '#5028A0' }) => (
  <svg {...base(size)}><circle cx="13" cy="13" r="10" fill="none" stroke={color} strokeWidth="2.4" /><path d="M8.5 13.5l3 3 6-7" {...stroke} stroke={color} strokeWidth="2.6" /></svg>
);
export const CalendarIcon = ({ size = 26, color = '#0B6CAE' }) => (
  <svg {...base(size)}><rect x="4" y="6" width="18" height="16" rx="3" fill="none" stroke={color} strokeWidth="2.4" /><path d="M4 11h18M9 3v5M17 3v5" stroke={color} strokeWidth="2.4" strokeLinecap="round" /></svg>
);
export const ShieldIcon = ({ size = 26, color = '#8A5300' }) => (
  <svg {...base(size)}><path d="M13 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" {...stroke} stroke={color} strokeWidth="2.4" /></svg>
);
export const GlobeIcon = ({ size = 26, color = '#0C6F4B' }) => (
  <svg {...base(size)}><circle cx="13" cy="13" r="10" fill="none" stroke={color} strokeWidth="2.4" /><path d="M3 13h20M13 3c3.5 3.5 3.5 16.5 0 20M13 3c-3.5 3.5-3.5 16.5 0 20" fill="none" stroke={color} strokeWidth="2" /></svg>
);
export const HomeIcon = ({ size = 26, color = '#0B6CAE' }) => (
  <svg {...base(size)}><path d="M4 22V10l9-6 9 6v12M9 22v-7h8v7" {...stroke} stroke={color} strokeWidth="2.2" /></svg>
);
export const FlameIcon = ({ size = 26, color = '#8A5300' }) => (
  <svg {...base(size)}><path d="M13 3c1 5 7 7 7 13a7 7 0 0 1-14 0c0-3 2-5 3-7 1 2 2 3 3 3-1-3 0-6 1-9z" {...stroke} stroke={color} strokeWidth="2.2" /></svg>
);
export const TargetIcon = ({ size = 26, color = '#5028A0' }) => (
  <svg {...base(size)}><circle cx="13" cy="13" r="9" fill="none" stroke={color} strokeWidth="2.2" /><circle cx="13" cy="13" r="3.5" fill="none" stroke={color} strokeWidth="2.2" /></svg>
);
export const DropIcon = ({ size = 26, color = '#B3234A' }) => (
  <svg {...base(size)}><path d="M13 3c4 6 7 9 7 13a7 7 0 0 1-14 0c0-4 3-7 7-13z" {...stroke} stroke={color} strokeWidth="2.2" /></svg>
);
export const TabIcons = [HomeIcon, FlameIcon, TargetIcon, DropIcon];

export const TrendIcon = ({ size = 28 }) => (
  <svg {...base(size, 28)}><path d="M4 22l7-8 5 4 8-11" {...stroke} stroke="#5028A0" strokeWidth="2.6" /><path d="M18 7h6v6" {...stroke} stroke="#5028A0" strokeWidth="2.6" /></svg>
);
export const DropBigIcon = ({ size = 28 }) => (
  <svg {...base(size, 28)}><path d="M14 4c4 6 8 9 8 13a8 8 0 0 1-16 0c0-4 4-7 8-13z" {...stroke} stroke="#0B6CAE" strokeWidth="2.4" /></svg>
);
export const ShieldCheckIcon = ({ size = 28 }) => (
  <svg {...base(size, 28)}><path d="M14 3l9 3.5v7c0 6-4 10-9 12-5-2-9-6-9-12v-7z" {...stroke} stroke="#8A5300" strokeWidth="2.4" /><path d="M10 14l3 3 5-6" {...stroke} stroke="#8A5300" strokeWidth="2.4" /></svg>
);
export const RecycleIcon = ({ size = 28 }) => (
  <svg {...base(size, 28)}><path d="M7 14a8 8 0 0 1 13-6M21 14a8 8 0 0 1-13 6" fill="none" stroke="#0C6F4B" strokeWidth="2.4" strokeLinecap="round" /><path d="M20 4v5h-5M8 24v-5h5" {...stroke} stroke="#0C6F4B" strokeWidth="2.4" /></svg>
);

export const PinIcon = () => (
  <svg {...base(22, 22)}><path d="M11 20s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" fill="none" stroke="#5028A0" strokeWidth="2" /><circle cx="11" cy="9" r="2.5" fill="#5028A0" /></svg>
);
export const MailIcon = () => (
  <svg {...base(22, 22)}><rect x="3" y="5" width="16" height="12" rx="2" fill="none" stroke="#0B6CAE" strokeWidth="2" /><path d="M3 7l8 6 8-6" fill="none" stroke="#0B6CAE" strokeWidth="2" /></svg>
);
export const PhoneIcon = ({ color = '#0C6F4B', fill = 'none' }) => (
  <svg {...base(22, 22)}><path d="M5 3h3l2 5-2 1.5a10 10 0 0 0 5 5L14.5 12l5 2v3a2 2 0 0 1-2 2A14 14 0 0 1 3 5a2 2 0 0 1 2-2z" fill={fill} stroke={color} strokeWidth="2" strokeLinejoin="round" /></svg>
);
export const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M7 1v12M1 7h12" stroke="#17133A" strokeWidth="2.2" strokeLinecap="round" /></svg>
);
export const TickGreen = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9" fill="#E5F7EE" /><path d="M5.5 10.5l3 3 6-7" {...stroke} stroke="#0C6F4B" strokeWidth="2.2" /></svg>
);
export const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2l2.4 5 5.4.7-4 3.8 1 5.4L10 14.2 5.2 17l1-5.4-4-3.8L7.6 7z" fill="#F5A524" /></svg>
);
export const CheckSmall = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9" {...stroke} stroke="#5028A0" strokeWidth="2.6" /></svg>
);

export const StepIcons = [
  () => (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><path d="M11 24a13 13 0 0 1 21-10M37 24a13 13 0 0 1-21 10" fill="none" stroke="#0C6F4B" strokeWidth="3.5" strokeLinecap="round" /><path d="M33 6v8h-8M15 42v-8h8" {...stroke} stroke="#1FAF7A" strokeWidth="3.5" /></svg>
  ),
  () => (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><path d="M27 5L12 27h11l-2 16 15-23H25z" fill="#F5A524" stroke="#8A5300" strokeWidth="2.5" strokeLinejoin="round" /></svg>
  ),
  () => (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5l15 6v12c0 9-6 15-15 19C15 38 9 32 9 23V11z" fill="#E3F4FE" stroke="#0B6CAE" strokeWidth="3" strokeLinejoin="round" /><path d="M17 24l5 5 9-10" {...stroke} stroke="#0B6CAE" strokeWidth="3.5" /></svg>
  ),
];
