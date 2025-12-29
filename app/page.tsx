import React from 'react';
import { Shield, Zap, Globe, Cpu, BookOpen, Rocket, Truck, Navigation, Network, Leaf, Activity, Database, TrendingUp, ArrowRight } from 'lucide-react';

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

export default function GlassHull() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. APEX NAV - GLASS STYLE */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'fixed', width: '100%', top: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: '900', margin: 0, letterSpacing: '1px' }}>
            CARBON<span style={{ color: '#3b82f6' }}>TO</span>COSMOS
          </h1>
          <small style={{ fontSize: '0.6rem', color: '#3b82f6', letterSpacing: '3px', fontWeight: 'bold' }}>SPACE AND DEFENCE</small>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '0.6rem', fontWeight: '900', color: '#666', letterSpacing: '2px' }}>
          <span>GNOSIS</span><span>ENNEAGON</span><span>HULL</span>
        </div>
      </nav>

      {/* 2. HERO SECTION - HIGH DENSITY */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', padding: '0 20px' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.4', zIndex: 0 }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        
        <div style={{ zIndex: 10, background: 'rgba(0,0,0,0.4)', padding: '60px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 5rem)', fontWeight: 900, letterSpacing: '-3px', margin: 0, lineHeight: 1 }}>
            CARBON TO COSMOS
          </h1>
          <h2 style={{ fontSize: 'clamp(1rem, 4vw, 2.5rem)', fontWeight: 300, color: '#3b82f6', letterSpacing: '8px', marginTop: '10px' }}>
            SPACE AND DEFENCE
          </h2>
          <p style={{ marginTop: '30px', color: '#aaa', fontSize: '0.9rem', letterSpacing: '4px' }}>
            MULTI-PLANETARY CIVILISATION // IDRIS AI
          </p>
          <div style={{ marginTop: '40px', height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)' }}></div>
          <h2 style={{ color: '#fbbf24', fontSize: '1.2rem', fontWeight: '200', letterSpacing: '4px', marginTop: '30px' }}>
            REALITY = INFO (L) + SPACE (H) + TIME (F)
          </h2>
        </div>
      </section>

      {/* 3. THE ENNEAGON - BENTO BOX STYLE */}
      <section style={{ padding: '100px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: '40px', borderRadius: '24px', background: 'rgba(10,10,10,0.8)', border: '1px solid #111', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
              <div style={{ zIndex: 2 }}>
                <div style={{ color: '#3b82f6', fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '3px', marginBottom: '10px' }}>{p.r}</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0 }}>{p.n}</h3>
                <p style={{ color: '#666', marginTop: '15px', fontSize: '0.9rem', lineHeight: '1.5' }}>{p.desc}</p>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '150px', marginTop: '20px' }}>
                <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 }}>
                  <source src={p.vid} type="video/mp4" />
                </video>
              </div>
              <div style={{ color: '#111', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '20px' }}>NODE {p.id}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MASTER EQUATIONS - HUD STYLE */}
      <section style={{ padding: '100px 20px', background: '#050505', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ padding: '40px', border: '1px solid #222', borderRadius: '24px', background: 'black', textAlign: 'center' }}>
            <h4 style={{ color: '#3b82f6', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '20px' }}>THERMAL ENTROPY</h4>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#fff' }}>ΔS<sub>sys</sub> ≤ 0</h2>
          </div>
          <div style={{ padding: '40px', border: '1px solid #222', borderRadius: '24px', background: 'black', textAlign: 'center' }}>
            <h4 style={{ color: '#10b981', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '20px' }}>UTILITY INTEGRAL</h4>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '300', color: '#fff' }}>U = ∫ [L - F + H] dt</h2>
          </div>
          <div style={{ padding: '40px', border: '1px solid #222', borderRadius: '24px', background: 'black', textAlign: 'center' }}>
            <h4 style={{ color: '#fbbf24', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '20px' }}>THERMAL FLUX</h4>
            <h2 style={{ fontSize: '2rem', fontWeight: '300', color: '#fff' }}>Q = η · ΔT</h2>
          </div>
        </div>
      </section>

      {/* 5. UCA SECTION - THE SHIELD */}
      <section style={{ margin: '60px 20px', padding: '100px 20px', background: 'radial-gradient(circle at center, #0a0a0a, #000)', border: '1px solid #111', borderRadius: '40px', textAlign: 'center' }}>
        <img src="/logos/uca_shield.png" style={{ width: '120px', marginBottom: '30px' }} alt="UCA" />
        <h2 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-1px' }}>UCA: ULTRA COLD ATOM</h2>
        <p style={{ color: '#666', maxWidth: '600px', margin: '20px auto', fontSize: '1.1rem' }}>
          Scavenging terrestrial entropy to power the Cosmos. Verified by IDRIS.
        </p>
        <button style={{ marginTop: '40px', padding: '15px 50px', borderRadius: '50px', border: 'none', background: '#fff', color: '#000', fontWeight: '900', cursor: 'pointer' }}>
          GET QUOTE <ArrowRight style={{ display: 'inline', marginLeft: '10px' }} size={16} />
        </button>
      </section>

      <footer style={{ padding: '60px 20px', textAlign: 'center', color: '#222', borderTop: '1px solid #111' }}>
        <p style={{ letterSpacing: '10px', fontSize: '0.6rem' }}>86,400 SECONDS // NO TIME TO WASTE</p>
      </footer>
    </div>
  );
}
