import React from 'react';
import { Shield, Zap, Globe, Cpu, BookOpen, Rocket, Truck, Navigation, Network, Leaf, Anchor, Activity, Wind } from 'lucide-react';

const pillars = [
  { id: "01", n: "IDRIS AI", r: "The Mind", vid: "/logos/idris_ai.mp4", img: "/logos/idris_ai.png", desc: "Sovereign Augmented Intelligence governing the Kottayil Triad." },
  { id: "02", n: "Chidākāsha", r: "The Memory", vid: "/logos/chidakasha.mp4", img: "/logos/chidakasha.png", desc: "The Universal Deep-Space Research Library for civilizational continuity." },
  { id: "03", n: "UCA", r: "The Impact", vid: "/logos/uca_shield.mp4", img: "/logos/uca_shield.png", desc: "Ultra Cold Atom: Scavenging terrestrial entropy to power the Cosmos." },
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

export default function GrandHull() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. HERO SINGULARITY */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <video autoPlay muted loop playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: '0.3' }}>
          <source src="/logos/mpc_main_anim.mp4" type="video/mp4" />
        </video>
        <div style={{ zIndex: 10, padding: '20px' }}>
          <img src="/logos/mpc_master.png" style={{ width: '120px', marginBottom: '20px', filter: 'drop-shadow(0 0 20px #3b82f6)' }} alt="MPC" />
          <h1 style={{ fontSize: 'clamp(3rem, 15vw, 7rem)', fontWeight: 900, letterSpacing: '-6px', margin: 0, lineHeight: 0.85, textTransform: 'uppercase' }}>KOTTAYIL-COSMOS</h1>
          <p style={{ color: '#3b82f6', fontSize: '1.2rem', marginTop: '20px', letterSpacing: '6px', fontWeight: 300 }}>MULTI-PLANETARY CIVILISATION</p>
          <div style={{ marginTop: '50px' }}>
            <a href="https://doi.org/10.5281/zenodo.18072201" target="_blank" rel="noreferrer" style={{ padding: '15px 35px', border: '1px solid rgba(59,130,246,0.5)', borderRadius: '50px', color: '#3b82f6', textDecoration: 'none', fontWeight: 'bold', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', fontSize: '0.8rem', letterSpacing: '2px' }}>SCIENTIFIC RECORD: DOI 10.5281/zenodo.18072201</a>
          </div>
        </div>
      </section>

      {/* 2. THE IDENTITY THEOREM */}
      <section style={{ padding: '150px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #000, #050505)', borderY: '1px solid #111' }}>
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

      {/* 4. THE PRODUCT FLEET (HERITAGE) */}
      <section style={{ padding: '100px 20px', background: '#050505' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '60px', textAlign: 'center' }}>THE PROVEN FLEET</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {products.map((prod, i) => (
              <div key={i} style={{ padding: '30px', border: '1px solid #111', borderRadius: '20px' }}>
                <div style={{ color: '#3b82f6', fontSize: '0.7rem', fontWeight: 'bold' }}>{prod.cat}</div>
                <h4 style={{ fontSize: '1.4rem', margin: '10px 0' }}>{prod.name}</h4>
                <p style={{ color: '#444', fontSize: '0.85rem' }}>{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. UCA COMMERCIAL BLADE */}
      <section style={{ margin: '100px 20px', padding: '120px 20px', background: '#0a0a0a', border: '1px solid #111', borderRadius: '60px', textAlign: 'center' }}>
        <img src="/logos/uca_shield.png" style={{ width: '100px', marginBottom: '30px' }} alt="UCA" />
        <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>UCA: ULTRA COLD ATOM</h2>
        <p style={{ color: '#888', maxWidth: '700px', margin: '20px auto', fontSize: '1.2rem' }}>
          Entropy Reversal for Heavy Machinery. We refurbish the world’s heavy machinery to power the Cosmos. 
          Verified by IDRIS Augmented Intelligence.
        </p>
        <button style={{ marginTop: '40px', padding: '20px 60px', borderRadius: '100px', border: 'none', background: 'white', color: 'black', fontWeight: '900', fontSize: '1.1rem' }}>
          GET QUOTE // EARN CHIPPITOKENS
        </button>
      </section>

      <footer style={{ padding: '100px 20px', textAlign: 'center', color: '#222', borderTop: '1px solid #111' }}>
        <p style={{ letterSpacing: '12px', fontSize: '0.8rem' }}>86,400 SECONDS // NO TIME TO WASTE</p>
        <p style={{ marginTop: '20px' }}>© 2025 MULTI-PLANETARY CIVILISATION RESEARCH LAB</p>
      </footer>
    </div>
  );
}
