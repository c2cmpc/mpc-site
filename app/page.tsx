import React from 'react';
import { Shield, Zap, Globe, Cpu, BookOpen, Rocket, Truck, Navigation, Network, Leaf, Activity, Database } from 'lucide-react';

const pillars = [
  { id: "01", n: "IDRIS AI", r: "THE MIND", vid: "/logos/idris_ai.mp4", img: "/logos/idris_ai.png", desc: "Sovereign Augmented Intelligence governing the Kottayil Triad." },
  { id: "02", n: "CHIDĀKĀSHA", r: "THE MEMORY", vid: "/logos/chidakasha.mp4", img: "/logos/chidakasha.png", desc: "The Universal Deep-Space Research Library for civilizational continuity." },
  { id: "03", n: "UCA", r: "THE IMPACT", vid: "/logos/uca_shield.mp4", img: "/logos/uca_shield.png", desc: "Ultra Cold Atom: Scavenging terrestrial entropy to power the Cosmos." },
  { id: "04", n: "PARTSEUPHORIA", r: "MANUFACTURING", vid: "/logos/parts_euphoria.mp4", img: "/logos/parts_euphoria.png", desc: "The core skeleton of orbital and terrestrial thermal hardware." },
  { id: "05", n: "J GARAGE", r: "THE FIRE", vid: "/logos/jgarage.mp4", img: "/logos/jgarage.png", desc: "High-stress validation and the forge of 1,000 R&D cycles." },
  { id: "06", n: "HR TRADERS", r: "THE METABOLISM", vid: "/logos/hr_traders.mp4", img: "/logos/hr_traders.png", desc: "Global logistics and the circular revenue engine of the MPC." },
  { id: "07", n: "VOYAGER-OS", r: "THE PILOT", vid: "/logos/voyager_os.mp4", img: "/logos/voyager_os.png", desc: "Engine-independent navigational logic for the vacuum." },
  { id: "08", n: "SMART-NETWORK", r: "THE CONNECTION", vid: "/logos/smart_network.mp4", img: "/logos/smart_network.png", desc: "Decentralized neural mesh for distributed sovereignty." },
  { id: "09", n: "RETROFITS", r: "THE ENVIRONMENT", vid: "/logos/retrofits.mp4", img: "/logos/retrofits.png", desc: "Translating space-grade efficiency back to Earth machinery." }
];

export default function GrandHull() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. APEX NAVIGATION */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '25px 50px', borderBottom: '1px solid #111', position: 'fixed', width: '100%', top: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(20px)' }}>
        <div>
          <h1 style={{ fontSize: '1.4rem', fontWeight: '900', margin: 0, letterSpacing: '2px' }}>
            CARBON<span style={{ color: '#3b82f6' }}>TO</span>COSMOS
          </h1>
          <small style={{ fontSize: '0.6rem', color: '#3b82f6', letterSpacing: '3px', fontWeight: 'bold' }}>SPACE AND DEFENCE</small>
        </div>
        <div style={{ display: 'flex', gap: '30px', fontSize: '0.7rem', fontWeight: '900', color: '#444', letterSpacing: '2px' }}>
          <span>01. GNOSIS</span><span>02. ENNEAGON</span><span>03. HULL</span><span>04. VECTORS</span>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: 10, padding: '0 20px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 15vw, 8rem)', fontWeight: 900, letterSpacing: '-6px', margin: 0, lineHeight: 0.8, textTransform: 'uppercase' }}>
            CARBON TO COSMOS
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 4rem)', fontWeight: 300, color: '#3b82f6', letterSpacing: '10px', marginTop: '20px', textTransform: 'uppercase' }}>
            SPACE AND DEFENCE
          </h2>
          <div style={{ marginTop: '60px', height: '2px', width: '100px', background: 'white', marginInline: 'auto' }}></div>
          <p style={{ marginTop: '30px', color: '#888', fontSize: '1.1rem', letterSpacing: '4px', fontWeight: '300' }}>
            MULTI-PLANETARY CIVILISATION // IDRIS AUGMENTED INTELLIGENCE
          </p>
        </div>
      </section>

      {/* 3. THE IDENTITY THEOREM */}
      <section style={{ padding: '150px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #000, #080808)', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <p style={{ color: '#3b82f6', fontSize: '0.8rem', letterSpacing: '0.8em', marginBottom: '40px', fontWeight: 'bold' }}>THE FUNDAMENTAL IDENTITY</p>
        <h2 style={{ color: '#fbbf24', fontSize: 'clamp(1.2rem, 6vw, 2.8rem)', fontWeight: 200, letterSpacing: '6px' }}>
          REALITY = INFORMATION (L) + SPACE (H) + TIME (F)
        </h2>
      </section>

      {/* 4. THE KINETIC ENNEAGON GRID */}
      <section style={{ padding: '100px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '100px', textAlign: 'center', letterSpacing: '4px' }}>THE 9 PILLARS OF SOVEREIGNTY</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '60px' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: '80px 50px', border: '1px solid #111', borderRadius: '60px', background: 'radial-gradient(circle at top left, #0a0a0a, #000)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '180px', height: '180px', margin: '0 auto 40px' }}>
                <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2, position: 'relative' }}>
                  <source src={p.vid} type="video/mp4" />
                </video>
                <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.15, position: 'absolute', top: 0, left: 0, zIndex: 1 }} alt={p.n} />
              </div>
              <div style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '15px' }}>{p.r}</div>
              <h3 style={{ fontSize: '2.4rem', margin: 0, fontWeight: 800, letterSpacing: '-1px' }}>{p.n}</h3>
              <p style={{ color: '#555', marginTop: '25px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '300' }}>{p.desc}</p>
              <div style={{ color: '#1a1a1a', fontSize: '0.9rem', marginTop: '40px', fontStyle: 'italic', letterSpacing: '2px' }}>NODE {p.id} // VERIFIED</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE MASTER EQUATIONS (ENGINEERING SPEC) */}
      <section style={{ padding: '150px 20px', background: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '80px', textAlign: 'center' }}>TECHNICAL SPECIFICATION</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '50px', border: '1px solid #222', borderRadius: '30px', background: 'black' }}>
              <h4 style={{ color: '#3b82f6', marginBottom: '20px', fontWeight: 'bold' }}>THERMAL ENTROPY</h4>
              <h2 style={{ fontSize: '3rem', fontWeight: '300' }}>ΔS<sub>sys</sub> ≤ 0</h2>
              <p style={{ color: '#444', marginTop: '20px' }}>Deterministic reversal of entropy in closed-loop life support systems.</p>
            </div>
            <div style={{ padding: '50px', border: '1px solid #222', borderRadius: '30px', background: 'black' }}>
              <h4 style={{ color: '#10b981', marginBottom: '20px', fontWeight: 'bold' }}>UTILITY INTEGRAL</h4>
              <h2 style={{ fontSize: '2rem', fontWeight: '300' }}>U = ∫ [L - F + H] dt</h2>
              <p style={{ color: '#444', marginTop: '20px' }}>Maximizing reality utility across the 4D manifold of the mission.</p>
            </div>
            <div style={{ padding: '50px', border: '1px solid #222', borderRadius: '30px', background: 'black' }}>
              <h4 style={{ color: '#fbbf24', marginBottom: '20px', fontWeight: 'bold' }}>THERMAL FLUX</h4>
              <h2 style={{ fontSize: '2rem', fontWeight: '300' }}>Q = η · ΔT</h2>
              <p style={{ color: '#444', marginTop: '20px' }}>Verified efficiency coefficient derived from 1,000+ R&D cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. UCA COMMERCIAL BLADE */}
      <section style={{ margin: '100px 20px', padding: '150px 20px', background: '#0a0a0a', border: '1px solid #111', borderRadius: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', zIndex: 0 }}></div>
        <img src="/logos/uca_shield.png" style={{ width: '150px', marginBottom: '40px', zIndex: 1, position: 'relative' }} alt="UCA" />
        <h2 style={{ fontSize: '4rem', fontWeight: 900, zIndex: 1, position: 'relative', letterSpacing: '-2px' }}>UCA: ULTRA COLD ATOM</h2>
        <p style={{ color: '#888', maxWidth: '800px', margin: '30px auto', fontSize: '1.4rem', lineHeight: '1.6', zIndex: 1, position: 'relative', fontWeight: '300' }}>
          Entropy Reversal for the Heavy Industries. We refurbish Tier-1 hardware to exceed OEM standards. 
          Verified by IDRIS Augmented Intelligence.
        </p>
        <button style={{ marginTop: '50px', padding: '25px 80px', borderRadius: '100px', border: 'none', background: 'white', color: 'black', fontWeight: '900', fontSize: '1.2rem', zIndex: 1, position: 'relative', cursor: 'pointer', transition: '0.3s' }}>
          REQUEST QUOTE // EARN CHIPPITOKENS
        </button>
      </section>

      {/* 7. FOOTER */}
      <footer style={{ padding: '150px 20px', textAlign: 'center', color: '#222', borderTop: '1px solid #111' }}>
        <p style={{ letterSpacing: '20px', fontSize: '1rem', marginBottom: '40px', fontWeight: 'bold' }}>86,400 SECONDS // NO TIME TO WASTE</p>
        <p style={{ color: '#111' }}>© 2025 MULTI-PLANETARY CIVILISATION RESEARCH LAB</p>
      </footer>
    </div>
  );
}
