import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || '0'
            setTimeout(() => el.classList.add('revealed'), Number(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

const vehicles = [
  {
    id: 'sedan',
    emoji: '🚗',
    tag: '4 Seater',
    name: 'Sedan / Hatchback',
    examples: 'Swift Dzire · Honda Amaze · Toyota Etios',
    ideal: 'Couples & small families',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit'],
  },
  {
    id: 'suv',
    emoji: '🚙',
    tag: '7 Seater',
    name: 'SUV / Innova',
    examples: 'Innova Crysta · Ertiga · Scorpio',
    ideal: 'Families & groups of 5–7',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit', 'Extra Legroom'],
  },
  {
    id: 'traveller',
    emoji: '🚌',
    tag: '12+ Seater',
    name: 'Tempo Traveller',
    examples: 'Force Traveller · Winger · Maharaja',
    ideal: 'Large groups & pilgrimages',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit', 'Push-back Seats', 'Music System'],
  },
]

const otherServices = [
  {
    icon: 'fa-om',
    title: 'Char Dham Yatra',
    desc: 'Complete pilgrimage packages to Yamunotri, Gangotri, Kedarnath & Badrinath with accommodation, meals, and expert guides.',
    badge: 'Spiritual',
  },
  {
    icon: 'fa-helicopter',
    title: 'Helicopter Booking',
    desc: 'VIP helicopter transfers to Kedarnath & high-altitude shrines for senior citizens and premium travelers.',
    badge: 'Premium',
  },
  {
    icon: 'fa-bed',
    title: 'Hotel & Dharamshala',
    desc: 'Curated stays from budget dharamshalas to premium mountain resorts at every major Uttarakhand destination.',
    badge: 'Stay',
  },
  {
    icon: 'fa-map-marked-alt',
    title: 'Custom Tour Planning',
    desc: 'Tailor-made itineraries built around your schedule, group size, and budget — no cookie-cutter packages.',
    badge: 'Custom',
  },
  {
    icon: 'fa-user-tie',
    title: 'Expert Local Guides',
    desc: "Certified mountain guides with deep knowledge of routes, temples, and Uttarakhand's rich culture and history.",
    badge: 'Guided',
  },
  {
    icon: 'fa-horse',
    title: 'Pony & Doli Services',
    desc: 'Pony and doli (palanquin) arrangements for elderly or differently-abled pilgrims at Kedarnath & Yamunotri.',
    badge: 'Accessible',
  },
]

const whyUs = [
  { icon: 'fa-car', text: 'Well-maintained, sanitized fleet' },
  { icon: 'fa-id-card', text: 'Licensed & verified drivers' },
  { icon: 'fa-mountain', text: 'Mountain-route specialists' },
  { icon: 'fa-phone', text: '24/7 on-trip support' },
  { icon: 'fa-rupee-sign', text: 'No hidden charges' },
  { icon: 'fa-shield-alt', text: 'Fully insured vehicles' },
]

export default function Services() {
  useScrollReveal()
  const [activeVehicle, setActiveVehicle] = useState('sedan')

  return (
    <div>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal="scale"] { transform: scale(0.88) translateY(20px); }
        [data-reveal="fade"]  { transform: none; }
        [data-reveal].revealed { opacity: 1 !important; transform: none !important; }

        .section-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          font-family: 'Lato', sans-serif;
          margin-bottom: 0.5rem;
          display: block;
        }
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 700;
          color: var(--green);
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        .section-divider {
          display: block;
          width: 56px;
          height: 3px;
          background: var(--gold);
          border-radius: 2px;
          margin-top: 0.6rem;
        }

        /* Tabs */
        .vehicle-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .vehicle-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 50px;
          border: 2px solid rgba(212,175,55,0.3);
          background: #fff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #666;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .vehicle-tab:hover {
          border-color: var(--gold);
          color: var(--green);
          transform: translateY(-2px);
        }
        .vehicle-tab.active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
          box-shadow: 0 8px 28px rgba(30,80,55,0.3);
          transform: translateY(-3px);
        }
        .vehicle-tab .tab-emoji { font-size: 1.4rem; }
        .vehicle-tab .tab-seats {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.7;
        }
        .vehicle-tab.active .tab-seats { opacity: 0.8; color: var(--gold); }

        /* Panel */
        .vehicle-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          animation: panelIn 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes panelIn {
          from { opacity: 0; transform: scale(0.97) translateY(10px); }
          to   { opacity: 1; transform: none; }
        }
        @media (max-width: 768px) {
          .vehicle-panel { grid-template-columns: 1fr; }
        }

        .panel-left {
          background: linear-gradient(135deg, #1a4731 0%, #2d6b4a 100%);
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          position: relative;
          overflow: hidden;
        }
        .panel-left::after {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
        }

        .vehicle-emoji-big {
          font-size: 7rem;
          line-height: 1;
          margin-bottom: 1.8rem;
          display: block;
          animation: floatCar 3.5s ease-in-out infinite;
          filter: drop-shadow(0 12px 24px rgba(0,0,0,0.25));
        }
        @keyframes floatCar {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50%       { transform: translateY(-14px) rotate(3deg); }
        }

        .panel-right {
          background: #fff;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Feature tags */
        .feature-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem; }
        .feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(30,80,55,0.07);
          color: var(--green);
          border: 1px solid rgba(30,80,55,0.18);
          transition: all 0.2s;
          font-family: 'Lato', sans-serif;
        }
        .feature-tag:hover { background: var(--green); color: #fff; border-color: var(--green); }

        /* Seat badge */
        .seat-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 16px;
          border-radius: 999px;
          background: rgba(212,175,55,0.18);
          color: var(--gold);
          border: 1px solid rgba(212,175,55,0.4);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: 'Lato', sans-serif;
          margin-bottom: 1rem;
        }

        /* Service cards */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .service-card {
          position: relative;
          padding: 2rem;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(212,175,55,0.15);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: var(--gold);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .service-card:hover::before { transform: scaleY(1); }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.1);
          border-color: rgba(212,175,55,0.4);
        }
        .service-icon-wrap {
          width: 56px; height: 56px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--green), #2d7a4f);
          margin-bottom: 1.2rem;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 8px 20px rgba(30,80,55,0.25);
        }
        .service-card:hover .service-icon-wrap { transform: scale(1.15) rotate(-8deg); }
        .service-badge {
          position: absolute;
          top: 1.2rem; right: 1.2rem;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(212,175,55,0.12);
          color: var(--green);
          border: 1px solid rgba(212,175,55,0.3);
          font-family: 'Lato', sans-serif;
        }

        /* Why pills */
        .why-strip { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .why-pill {
          display: flex; align-items: center; gap: 10px;
          padding: 13px 22px;
          border-radius: 50px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(212,175,55,0.3);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: 'Lato', sans-serif;
          transition: all 0.25s ease;
          cursor: default;
        }
        .why-pill:hover { background: rgba(212,175,55,0.15); border-color: var(--gold); transform: translateY(-3px); }
        .why-pill i { color: var(--gold); }

        /* CTA */
        .cta-card {
          border-radius: 24px;
          padding: 4rem 3rem;
          background: linear-gradient(135deg, var(--green) 0%, #1a4731 100%);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '🏔️';
          position: absolute;
          font-size: 12rem;
          opacity: 0.04;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .btn-book {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          background: var(--gold); color: var(--green);
          font-weight: 800; font-family: 'Lato', sans-serif;
          font-size: 0.9rem; text-decoration: none;
          letter-spacing: 0.05em; border: none; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          flex: 1; justify-content: center;
        }
        .btn-book:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 12px 32px rgba(212,175,55,0.4); }

        .btn-wa {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          background: #25D366; color: #fff;
          font-weight: 800; font-family: 'Lato', sans-serif;
          font-size: 0.9rem; text-decoration: none;
          letter-spacing: 0.05em; border: none; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          flex: 1; justify-content: center;
        }
        .btn-wa:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 12px 32px rgba(37,211,102,0.35); }

        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 50px;
          background: transparent; color: #fff;
          font-weight: 800; font-family: 'Lato', sans-serif;
          font-size: 0.9rem; text-decoration: none;
          border: 2px solid rgba(255,255,255,0.4);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; transform: translateY(-3px); }
      `}</style>

      <PageHero
        title="Our Services"
        subtitle="From private car rentals to full Char Dham packages — everything you need for a perfect Uttarakhand journey."
        image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
      />

      {/* ── CAR RENTAL ── */}
      <section className="py-20 px-[5%]" style={{ background: '#fafaf8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-reveal="fade">
            <span className="section-label">Our Fleet</span>
            <h2 className="section-title">Car Rental Services</h2>
            <span className="section-divider mx-auto"></span>
            <p style={{ color: '#777', maxWidth: '520px', margin: '1.2rem auto 0', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'Lato, sans-serif' }}>
              Choose from our well-maintained fleet of mountain-ready vehicles — each with a trained local driver who knows Uttarakhand's roads inside out.
            </p>
          </div>

          {/* Tabs */}
          <div className="vehicle-tabs" data-reveal="fade" data-delay="100">
            {vehicles.map(v => (
              <button
                key={v.id}
                className={`vehicle-tab ${activeVehicle === v.id ? 'active' : ''}`}
                onClick={() => setActiveVehicle(v.id)}
              >
                <span className="tab-emoji">{v.emoji}</span>
                <div>
                  <div>{v.name}</div>
                  <div className="tab-seats">{v.tag}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Panel */}
          {vehicles.filter(v => v.id === activeVehicle).map(v => (
            <div key={v.id} className="vehicle-panel">
              {/* Left */}
              <div className="panel-left">
                <span className="vehicle-emoji-big">{v.emoji}</span>
                <span className="seat-badge-pill">
                  <i className="fas fa-user-friends"></i> {v.tag}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.2 }}>
                  {v.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontFamily: 'Lato, sans-serif', marginBottom: '1.5rem' }}>
                  {v.examples}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', fontFamily: 'Lato, sans-serif' }}>
                  <i className="fas fa-star" style={{ color: 'var(--gold)', marginRight: 6 }}></i>
                  Best for: <strong style={{ color: '#fff' }}>{v.ideal}</strong>
                </p>
              </div>

              {/* Right */}
              <div className="panel-right">
                <div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--green)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
                    What's Included
                  </h4>
                  <div className="feature-tags">
                    {v.features.map(f => (
                      <span key={f} className="feature-tag">
                        <i className="fas fa-check" style={{ fontSize: '0.55rem' }}></i> {f}
                      </span>
                    ))}
                  </div>

                  <p style={{ color: '#aaa', fontSize: '0.82rem', fontFamily: 'Lato, sans-serif', lineHeight: 1.7, marginBottom: '2rem' }}>
                    <i className="fas fa-info-circle" style={{ color: 'var(--gold)', marginRight: 6 }}></i>
                    Prices vary by route, season & duration. Contact us for a custom quote — we always offer the best rates.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link to="/booking" className="btn-book">
                    <i className="fas fa-calendar-check"></i> Book Now
                  </Link>
                  <a
                    href="https://wa.me/918218034104"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wa"
                  >
                    <i className="fab fa-whatsapp"></i> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-16 px-[5%]" style={{ background: 'var(--green)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10" data-reveal="fade">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Why Choose Our Fleet</span>
            <h2 className="section-title" style={{ color: '#fff' }}>Every Ride, Every Promise</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="why-strip" data-reveal="fade" data-delay="100">
            {whyUs.map(w => (
              <div key={w.text} className="why-pill">
                <i className={`fas ${w.icon}`}></i>
                {w.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ── */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-reveal="fade">
            <span className="section-label">Beyond Car Rentals</span>
            <h2 className="section-title">All Our Services</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="service-grid">
            {otherServices.map((s, i) => (
              <div key={s.title} className="service-card" data-reveal="scale" data-delay={i * 80}>
                <span className="service-badge">{s.badge}</span>
                <div className="service-icon-wrap">
                  <i className={`fas ${s.icon}`} style={{ color: 'var(--gold)', fontSize: '1.2rem' }}></i>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--green)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  {s.title}
                </h3>
                <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.75, fontFamily: 'Lato, sans-serif' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-[5%]" style={{ background: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <div className="cta-card" data-reveal="scale">
            <span className="section-label" style={{ color: 'var(--gold)', display: 'flex', justifyContent: 'center' }}>Ready to Book?</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, margin: '0.5rem 0 0.8rem', lineHeight: 1.2 }}>
              Plan Your Uttarakhand Journey Today
            </h2>
            <div style={{ width: 56, height: 3, background: 'var(--gold)', borderRadius: 2, margin: '0 auto 1.5rem' }}></div>
            <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '400px', margin: '0 auto 2.5rem', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'Lato, sans-serif' }}>
              Our team responds within 24 hours with the best options tailored to your needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/booking" className="btn-book" style={{ flex: 'unset' }}>
                <i className="fas fa-calendar-check"></i> Book a Vehicle
              </Link>
              <a href="https://wa.me/918218034104" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <i className="fab fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
