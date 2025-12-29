import React from 'react';

const missions = [
  { id: "01", n: "IDRIS AI", r: "THE MIND", vid: "/logos/idris_ai.mp4", desc: "Sovereign Augmented Intelligence governing the Kottayil Triad." },
  { id: "02", n: "CHIDĀKĀSHA", r: "THE MEMORY", vid: "/logos/chidakasha.mp4", desc: "The Universal Deep-Space Research Library for civilizational continuity." },
  { id: "03", n: "UCA", r: "THE IMPACT", vid: "/logos/uca_shield.mp4", desc: "Ultra Cold Atom: Scavenging terrestrial entropy to power the future." },
  { id: "04", n: "PARTSEUPHORIA", r: "MANUFACTURING", vid: "/logos/parts_euphoria.mp4", desc: "The core skeleton of orbital and terrestrial thermal hardware." },
  { id: "05", n: "J GARAGE", r: "THE FIRE", vid: "/logos/jgarage.mp4", desc: "High-stress validation and the forge of 1,000 R&D cycles." },
  { id: "06", n: "HR TRADERS", r: "THE METABOLISM", vid: "/logos/hr_traders.mp4", desc: "Global logistics and the circular revenue engine of the MPC." }
];

export default function SpaceXHull() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif', scrollSnapType: 'y mandatory', overflowY: 'scroll', height: '100vh' }}>
      
      {/* SECTION 1: THE APEX HERO */}
      <section style={{ height: '100vh', position: 'relative', scrollSnapAlign: 'start', display: 'flex', alignItems: 'flex-end', padding: '60px' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6 }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: 10, maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '300', letterSpacing: '8px', marginBottom: '10px' }}>UPCOMING MISSION</h2>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: '900', margin: 0, lineHeight: '1' }}>CARBON TO COSMOS</h1>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '400', color: '#3b82f6', letterSpacing: '4px', marginTop: '10px' }}>SPACE AND DEFENCE</h3>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
            <a href="https://doi.org/10.5281/zenodo.18072201" target="_blank" rel="noreferrer" style={{ padding: '12px 35px', border: '2px solid white', textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '0.7rem', letterSpacing: '2px' }}>VIEW SCIENTIFIC RECORD</a>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE IDENTITY THEOREM */}
      <section style={{ height: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: '#050505', scrollSnapAlign: 'start', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <p style={{ color: '#444', letterSpacing: '10px', marginBottom: '20px', fontSize: '0.6rem' }}>CORE ARCHITECTURE</p>
        <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 2.5rem)', fontWeight: '200', letterSpacing: '5px' }}>REALITY = INFO + SPACE + TIME</h2>
        <div style={{ width: '60px', height: '2px', background: '#3b82f6', marginTop: '40px' }}></div>
      </section>

      {/* SECTION 3: THE MISSION GRID */}
      {missions.map((m, i) => (
        <section key={i} style={{ height: '100vh', position: 'relative', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', padding: '60px' }}>
          <video autoPlay muted loop playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0 }}>
            <source src={m.vid} type="video/mp4" />
          </video>
          <div style={{ zIndex: 10, maxWidth: '500px' }}>
            <h4 style={{ color: '#3b82f6', letterSpacing: '5px', fontSize: '0.7rem', fontWeight: 'bold' }}>{m.r}</h4>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '10px 0' }}>{m.n}</h2>
            <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>{m.desc}</p>
            <button style={{ marginTop: '30px', padding: '10px 30px', border: '2px solid white', background: 'transparent', color: 'white', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer', fontSize: '0.7rem' }}>LEARN MORE</button>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <footer style={{ padding: '80px 20px', textAlign: 'center', background: 'black', color: '#222', scrollSnapAlign: 'end' }}>
        <p style={{ letterSpacing: '15px', fontSize: '0.7rem', marginBottom: '20px' }}>86,400 SECONDS // NO TIME TO WASTE</p>
        <p style={{ fontSize: '0.6rem' }}>© 2025 MULTI-PLANETARY CIVILISATION RESEARCH LAB</p>
      </footer>
    </div>
  );
}
