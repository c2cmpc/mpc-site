import React from 'react';
import { Shield, Zap, Globe, Cpu, BookOpen, Rocket, Truck, Navigation, Network, Leaf, Anchor, Activity, Wind, Database, TrendingUp } from 'lucide-react';

const pillars = [
  { id: "01", n: "IDRIS AI", r: "The Mind", vid: "/logos/idris_ai.mp4", img: "/logos/idris_ai.png", desc: "Sovereign Augmented Intelligence governing the Kottayil Triad." },
  { id: "02", n: "Chidākāsha", r: "The Memory", vid: "/logos/chidakasha.mp4", img: "/logos/chidakasha.png", desc: "The Universal Deep-Space Research Library for civilizational continuity." },
  { id: "03", n: "UCA", r: "The Impact", vid: "/logos/uca_shield.mp4", img: "/logos/uca_shield.png", desc: "Ultra Cold Atom: Scavenging terrestrial entropy to power the future." },
  { id: "04", n: "PartsEuphoria", r: "Manufacturing", vid: "/logos/parts_euphoria.mp4", img: "/logos/parts_euphoria.png", desc: "The core skeleton of orbital and terrestrial thermal hardware." },
  { id: "05", n: "J Garage", r: "The Fire", vid: "/logos/jgarage.mp4", img: "/logos/jgarage.png", desc: "High-stress validation and the forge of 1,000 R&D cycles." },
  { id: "06", n: "HR Traders", r: "The Metabolism", vid: "/logos/hr_traders.mp4", img: "/logos/hr_traders.png", desc: "Global logistics and the circular revenue engine of the MPC." },
  { id: "07", n: "Voyager-OS", r: "The Pilot", vid: "/logos/voyager_os.mp4", img: "/logos/voyager_os.png", desc: "Engine-independent navigational logic for the vacuum." },
  { id: "08", n: "Smart-Network", r: "The Connection", vid: "/logos/smart_network.mp4", img: "/logos/smart_network.png", desc: "Decentralized neural mesh for distributed sovereignty." },
  { id: "09", n: "Retrofits", r: "The Environment", vid: "/logos/retrofits.mp4", img: "/logos/retrofits.png", desc: "Translating space-grade efficiency back to Earth machinery." }
];

const products = [
  { name: "Octa-26", cat: "Compressor", desc: "Modular electric lung for life support." },
  { name: "T-Rex", cat: "Fleet AC", desc: "Independent cooling for long-haul logistics." },
  { name: "Garuda", cat: "Tactical", desc: "Micro-climate systems for armored vehicles." },
  { name: "Poseidon", cat: "Marine", desc: "Salt-resistant thermal management." },
  { name: "Vayu Neer", cat: "Water", desc: "Integrated Water-from-Air generation." }
];

export default function UltimatePortal() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. HERO SINGULARITY */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.3' }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: 10, padding: '20px' }}>
          <img src="/logos/mpc_master.png" style={{ width: '120px', marginBottom: '20px', filter: 'drop-shadow(0 0 20px #3b82f6)' }} alt="MPC" />
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5.5rem)', fontWeight: 900, letterSpacing: '-4px', margin: 0, lineHeight: 0.9, textTransform: 'uppercase' }}>
            CARBON TO COSMOS<br/>
            <span style={{ fontSize: 'clamp(1.5rem, 6vw, 3.5rem)', color: '#3b82f6' }}>SPACE AND DEFENCE</span>
          </h1>
          <p style={{ color: '#aaa', fontSize: '1.1rem', marginTop: '25px', letterSpacing: '6px', fontWeight: 300 }}>MULTI-PLANETARY CIVILISATION // IDRIS AI</p>
          <div style={{ marginTop: '60px' }}>
            <a href="https://doi.org/10.5281/zenodo.18072201" target="_blank" rel="noreferrer" style={{ padding: '15px 35px', border: '1px solid rgba(59,130,246,0.5)', borderRadius: '50px', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', fontSize: '0.8rem', letterSpacing: '2px' }}>SCIENTIFIC RECORD: DOI 10.5281/zenodo.18072201</a>
          </div>
        </div>
      </section>

      {/* 2. THE IDENTITY THEOREM */}
      <section style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #000, #050505)', borderY: '1px solid #111' }}>
        <p style={{ color: '#444', fontSize: '0.8rem', letterSpacing: '0.6em', marginBottom: '30px' }}>THE FUNDAMENTAL IDENTITY</p>
        <h2 style={{ color: '#fbbf24', fontSize: 'clamp(1.2rem, 6vw, 2.5rem)', fontWeight: 200, letterSpacing: '4px' }}>REALITY = INFORMATION (L) + SPACE (H) + TIME (F)</h2>
      </section>

      {/* 3. THE ENNEAGON GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', maxWidth: '1400px', margin: '0 auto', padding: '100px 20px' }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ padding: '60px 40px', border: '1px solid #111', borderRadius: '40px', background: 'radial-gradient(circle at top left, #0a0a0a, #000)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '140px', height: '140px', margin: '0 auto 30px' }}>
              <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, position: 'relative' }}>
                <source src={p.vid} type="video/mp4" />
              </video>
              <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.1, position: 'absolute', top: 0, left: 0, zIndex: 1 }} alt={p.n} />
            </div>
            <div style={{ color: '#3b82f6', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>{p.r}</div>
            <h3 style={{ fontSize: '2rem', margin: 0, fontWeight: 800 }}>{p.n}</h3>
            <p style={{ color: '#555', marginTop: '15px', fontSize: '0.95rem', lineHeight: '1.5' }}>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* 4. FIELD EXECUTION PROOF */}
      <section style={{ padding: '100px 20px', background: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '80px' }}>FIELD EXECUTION PROOF</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#3b82f6' }}>1,000+</div>
              <p style={{ color: '#888', letterSpacing: '2px' }}>R&D CYCLES COMPLETED</p>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#10b981' }}>210+</div>
              <p style={{ color: '#888', letterSpacing: '2px' }}>TONS CARBON SAVED / YR</p>
            </div>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#fbbf24' }}>0</div>
              <p style={{ color: '#888', letterSpacing: '2px' }}>SYSTEM FAILURES (24 MO)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE IMMUTABLE LEDGER */}
      <section style={{ padding: '150px 20px', background: 'black' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', mdGridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '30px' }}>THE IMMUTABLE LEDGER</h2>
            <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We turn efficiency into currency. Every unit of negative entropy generated by our thermal systems is verified by IDRIS and minted as a <strong>Chippi Token</strong>.
            </p>
            <ul style={{ marginTop: '30px', color: '#3b82f6', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>• Real-time Emission Tracking</li>
              <li style={{ marginBottom: '10px' }}>• Cryptographic Proof of Survival</li>
              <li>• Decentralized Resource Governance</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
             <video autoPlay muted loop playsInline style={{ width: '100%', maxWidth: '400px', borderRadius: '30px', filter: 'drop-shadow(0 0 50px rgba(59,130,246,0.3))' }}>
                <source src="/logos/smart_network.mp4" type="video/mp4" />
             </video>
          </div>
        </div>
      </section>

      {/* 6. TRAJECTORY & ROADMAP */}
      <section style={{ padding: '100px 20px', background: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>TRAJECTORY & ROADMAP</h2>
          <div style={{ borderLeft: '2px solid #222', paddingLeft: '40px', position: 'relative' }}>
            <div style={{ marginBottom: '60px' }}>
              <div style={{ position: 'absolute', left: '-11px', width: '20px', height: '20px', background: '#3b82f6', borderRadius: '50%' }}></div>
              <h4 style={{ color: '#3b82f6', fontWeight: 'bold' }}>PHASE 1: TERRESTRIAL ANCHOR (NOW)</h4>
              <p style={{ color: '#666' }}>Scaling UCA and PartsEuphoria retrofits. Establishing the Earth Revenue Engine.</p>
            </div>
            <div style={{ marginBottom: '60px' }}>
              <div style={{ position: 'absolute', left: '-11px', width: '20px', height: '20px', background: '#10b981', borderRadius: '50%' }}></div>
              <h4 style={{ color: '#10b981', fontWeight: 'bold' }}>PHASE 2: ANALOG HABITATS (12-18 MO)</h4>
              <p style={{ color: '#666' }}>PRĀṆADHĀRA MK-II ground trials. Integration with Saudi Space Agency analogs.</p>
            </div>
            <div>
              <div style={{ position: 'absolute', left: '-11px', width: '20px', height: '20px', background: '#fbbf24', borderRadius: '50%' }}></div>
              <h4 style={{ color: '#fbbf24', fontWeight: 'bold' }}>PHASE 3: ORBITAL INSERTION (36 MO)</h4>
              <p style={{ color: '#666' }}>Deployment of first flight-ready thermal loops for Space Data Centers.</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '100px 20px', textAlign: 'center', color: '#222', borderTop: '1px solid #111' }}>
        <p style={{ letterSpacing: '12px', fontSize: '0.8rem', marginBottom: '30px', fontWeight: 'bold' }}>86,400 SECONDS // NO TIME TO WASTE</p>
        <p>© 2025 MULTI-PLANETARY CIVILISATION RESEARCH LAB</p>
      </footer>
    </div>
  );
}
