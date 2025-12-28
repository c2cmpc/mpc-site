import React from 'react';

const pillars = [
  { id: "01", n: "IDRIS AI", r: "The Mind", vid: "/logos/idris_ai.mp4", img: "/logos/idris_ai.png", desc: "Sovereign Augmented Intelligence governing the LFH Triad." },
  { id: "02", n: "Chidākāsha", r: "The Memory", vid: "/logos/chidakasha.mp4", img: "/logos/chidakasha.png", desc: "The Universal Deep-Space Research Library for humanity." },
  { id: "03", n: "UCA", r: "The Impact", vid: "/logos/uca_shield.mp4", img: "/logos/uca_shield.png", desc: "Ultra Cold Atom: Scavenging entropy to power the future." },
  { id: "04", n: "PartsEuphoria", r: "Manufacturing", vid: "/logos/parts_euphoria.mp4", img: "/logos/parts_euphoria.png", desc: "The core skeleton of orbital and terrestrial thermal hardware." },
  { id: "05", n: "J Garage", r: "The Fire", vid: "/logos/jgarage.mp4", img: "/logos/jgarage.png", desc: "High-stress validation and the forge of Garage Gnosis." },
  { id: "06", n: "HR Traders", r: "The Metabolism", vid: "/logos/hr_traders.mp4", img: "/logos/hr_traders.png", desc: "Global logistics and the circular revenue metabolism." },
  { id: "07", n: "Voyager-OS", r: "The Pilot", vid: "/logos/voyager_os.mp4", img: "/logos/voyager_os.png", desc: "Engine-independent navigational logic for the vacuum." },
  { id: "08", n: "Smart-Network", r: "The Connection", vid: "/logos/smart_network.mp4", img: "/logos/smart_network.png", desc: "Decentralized neural mesh for distributed sovereignty." },
  { id: "09", n: "Retrofits", r: "The Environment", vid: "/logos/retrofits.mp4", img: "/logos/retrofits.png", desc: "Translating space-grade efficiency back to Earth machinery." }
];

export default function GrandManifestation() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.35' }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: '10', padding: '20px' }}>
          <img src="/logos/mpc_master.png" style={{ width: '140px', marginBottom: '20px' }} alt="MPC" />
          <h1 style={{ fontSize: 'clamp(2.5rem, 12vw, 6rem)', fontWeight: '900', letterSpacing: '-5px', margin: '0', lineHeight: '0.9', textTransform: 'uppercase' }}>Kottayil-Cosmos</h1>
          <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '20px', letterSpacing: '4px', fontWeight: '300' }}>MULTI-PLANETARY CIVILISATION // IDRIS AUGMENTED INTELLIGENCE</p>
          <div style={{ marginTop: '60px' }}>
            <a href="https://doi.org/10.5281/zenodo.18072201" target="_blank" style={{ padding: '18px 40px', border: '1px solid #3b82f6', borderRadius: '50px', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(15px)', fontSize: '0.9rem', letterSpacing: '2px' }}>DOI: 10.5281/zenodo.18072201</a>
          </div>
        </div>
      </section>
      <center style={{ padding: '120px 20px', background: 'linear-gradient(to bottom, #000, #080808)', borderY: '1px solid #111' }}>
        <h2 style={{ color: '#fbbf24', fontSize: 'clamp(1rem, 5vw, 2.2rem)', fontWeight: '200', letterSpacing: '8px', textTransform: 'uppercase' }}>REALITY = INFORMATION (L) + SPACE (H) + TIME (F)</h2>
      </center>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px', maxWidth: '1400px', margin: '0 auto', padding: '100px 20px' }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ padding: '70px 50px', border: '1px solid #111', borderRadius: '50px', background: 'radial-gradient(circle at top left, #0a0a0a, #000)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 40px' }}>
              <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0, zIndex: 2 }}>
                <source src={p.vid} type="video/mp4" />
              </video>
              <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.2, zIndex: 1 }} alt={p.n} />
            </div>
            <div style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '10px' }}>{p.r}</div>
            <h3 style={{ fontSize: '2.2rem', margin: '0', fontWeight: '800' }}>{p.n}</h3>
            <p style={{ color: '#666', marginTop: '20px', fontSize: '1rem', lineHeight: '1.5' }}>{p.desc}</p>
          </div>
        ))}
      </div>
      <footer style={{ padding: '150px 20px', textAlign: 'center', color: '#222', borderTop: '1px solid #111' }}>
        <p style={{ letterSpacing: '15px', fontSize: '0.9rem', marginBottom: '30px', fontWeight: 'bold' }}>86,400 SECONDS // NO TIME TO WASTE</p>
        <p>© 2025 MULTI-PLANETARY CIVILISATION RESEARCH LAB</p>
      </footer>
    </div>
  );
}
