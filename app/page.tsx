import React from 'react';

const LogicCards = [
  { 
    title: "LOVE (L): Cohesion & Integrity", 
    subtitle: "Quantity 0 (Proof Erasure)", 
    desc: "The non-negotiable adherence to structural invariants (e.g., Hull Seal). Enforces safety proofs with zero runtime overhead. This is rigorous methodology encoded into the system architecture.",
    color: "#3b82f6"
  },
  { 
    title: "FEAR (F): Entropy & Constraint", 
    subtitle: "Quantity 1 (Linear Resource)", 
    desc: "Enforces perfect resource conservation. Every Joule and every liter must be accounted for and consumed exactly once. Prevents resource collapse through cryptographic tracking.",
    color: "#ef4444"
  },
  { 
    title: "HOPE (H): Potential & Vector", 
    subtitle: "Quantity ω (Unrestricted)", 
    desc: "The engine of growth, R&D, and predictive modeling. Utilizes unlimited telemetry to define the optimal path toward future states. The expansion vector to the cosmos.",
    color: "#10b981"
  }
];

export default function ProSovereignHull() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* HEADER NAVIGATION */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #111', position: 'fixed', width: '100%', top: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}>
        <div>
          <h1 style={{ fontSize: '1.2rem', fontWeight: '900', margin: 0, letterSpacing: '1px' }}>
            CARBON<span style={{ color: '#3b82f6' }}>TO</span>COSMOS
          </h1>
          <small style={{ fontSize: '0.6rem', color: '#555', letterSpacing: '2px' }}>SPACE AND DEFENCE</small>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '0.7rem', fontWeight: 'bold', color: '#888', letterSpacing: '1px' }}>
          <span>00. BEACON</span><span>01. CORE</span><span>02. HERITAGE</span><span>03. PRODUCTS</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: 10 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 12vw, 6rem)', fontWeight: 900, letterSpacing: '-5px', margin: 0 }}>KOTTAYIL-COSMOS</h1>
          <p style={{ color: '#3b82f6', letterSpacing: '8px', marginTop: '10px' }}>IDRIS AUGMENTED INTELLIGENCE</p>
        </div>
      </section>

      {/* LOGIC DECK SECTION */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '60px', textAlign: 'center', letterSpacing: '2px' }}>THE NON-NEGOTIABLE LOGIC</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* MASTER EQUATION BOX (CENTERED OR SIDE) */}
          <div style={{ gridColumn: 'span 1', padding: '40px', border: '1px solid #111', borderRadius: '20px', background: '#050505' }}>
             <h3 style={{ color: '#3b82f6', fontSize: '1rem', marginBottom: '30px' }}>THE MASTER EQUATION</h3>
             <div style={{ textAlign: 'center', margin: '40px 0' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '300' }}>ΔS<sub>system</sub> ≤ 0</h2>
                <p style={{ color: '#444', fontSize: '0.8rem' }}>(Entropy must be controlled or reversed)</p>
                <div style={{ height: '40px' }}></div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '300' }}>Q<sub>managed</sub> = η · (T<sub>ext</sub> - T<sub>tar</sub>)</h2>
                <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '10px' }}>Verified thermal efficiency coefficient derived from 10,000+ field hours.</p>
             </div>
          </div>

          {/* THE THREE AXIOM CARDS */}
          <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {LogicCards.map((card, i) => (
              <div key={i} style={{ padding: '30px', border: `1px solid ${card.color}33`, borderRadius: '20px', background: '#080808' }}>
                <h4 style={{ color: card.color, fontSize: '0.9rem', fontWeight: 'bold' }}>{card.title}</h4>
                <h2 style={{ fontSize: '1.8rem', margin: '10px 0', fontWeight: '300' }}>{card.subtitle}</h2>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UTILITY INTEGRAL BAR */}
      <section style={{ padding: '60px 20px', background: 'linear-gradient(90deg, #000, #050505, #000)', borderY: '1px solid #111', textAlign: 'center' }}>
        <h2 style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: '200', letterSpacing: '2px' }}>
          Maximize U(Reality) = ∫ [L - F + H] dV dt
        </h2>
        <p style={{ color: '#333', fontSize: '0.7rem', marginTop: '10px', fontStyle: 'italic' }}>
          The Objective Function: Structural integrity minus entropy plus expansion potential, integrated across all spacetime.
        </p>
      </section>

      <footer style={{ padding: '100px 20px', textAlign: 'center', color: '#222' }}>
        <p style={{ letterSpacing: '10px', fontSize: '0.7rem' }}>86,400 SECONDS // NO TIME TO WASTE</p>
      </footer>
    </div>
  );
}
