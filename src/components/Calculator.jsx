import { useState } from 'react';

const fmt = (n) => n.toLocaleString('en-IN', { maximumFractionDigits: 1 });

export default function Calculator({ onSend }) {
  const [vol, setVol] = useState(100);
  const [cem, setCem] = useState(400);
  const [pct, setPct] = useState(8);

  const v = Math.max(Number(vol) || 0, 0);
  const c = Math.max(Number(cem) || 0, 0);
  const perM3 = (c * pct) / 100;
  const total = Math.round(perM3 * v);
  const bags = Math.ceil((perM3 * v) / 25);

  const send = () =>
    onSend(
      `I would like a quote for Silcon Microsilica: about ${fmt(total)} kg (${fmt(bags)} bags of 25 kg) for ${fmt(v)} m3 of concrete at ${fmt(c)} kg/m3 cement and ${pct}% dosage. `
    );

  return (
    <div className="calc" id="calc">
      <div className="bar" />
      <div className="in">
        <div className="left">
          <h3>Estimate your microsilica quantity</h3>
          <p>Enter your concrete volume and cement content to see how much Silcon Microsilica you may need.</p>

          <div className="fld">
            <label htmlFor="vol">Concrete volume (m³)</label>
            <input type="number" id="vol" min="1" inputMode="decimal" value={vol} onChange={(e) => setVol(e.target.value)} />
          </div>
          <div className="fld">
            <label htmlFor="cem">Cement content (kg per m³)</label>
            <input type="number" id="cem" min="100" inputMode="decimal" value={cem} onChange={(e) => setCem(e.target.value)} />
          </div>
          <div className="fld">
            <label htmlFor="pct">Microsilica dosage <output htmlFor="pct">{pct}%</output></label>
            <input type="range" id="pct" min="3" max="15" step="0.5" value={pct} onChange={(e) => setPct(Number(e.target.value))} />
          </div>
          <p className="note">Estimate only. The right dosage depends on your mix design and performance targets, and our team will confirm it with you.</p>
        </div>

        <div className="right">
          <div className="res r1"><div><small>Per m³ of concrete</small><b>{fmt(perM3)}</b></div><span className="u">kg</span></div>
          <div className="res r2"><div><small>For your full volume</small><b>{fmt(total)}</b></div><span className="u">kg</span></div>
          <div className="res r3"><div><small>25 kg bags needed</small><b>{fmt(bags)}</b></div><span className="u">bags</span></div>
          <button className="btn btn-primary" type="button" onClick={send}>Request a quote for this quantity</button>
        </div>
      </div>
    </div>
  );
}
