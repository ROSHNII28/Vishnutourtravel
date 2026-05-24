import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

/* ── Scroll reveal hook ── */
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
      { threshold: 0.12 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Data ── */
const vehicles = [
  {
    id: 'sedan',
    tag: '4 Seater',
    name: 'Sedan / Hatchback',
    examples: 'Swift Dzire · Honda Amaze · Etios',
    icon: '🚗',
    seats: 4,
    luggage: '2 bags',
    ac: true,
    ideal: 'Couples & small families',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit'],
  },
  {
    id: 'suv',
    tag: 'Best Value',
    name: 'SUV / Innova',
    examples: 'Innova Crysta · Ertiga · Scorpio',
    icon: '🚙',
    seats: 7,
    luggage: '4 bags',
    ac: true,
    ideal: 'Families & groups of 5-7',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit', 'Extra Legroom'],
  },
  {
    id: 'traveller',
    tag: '12+ Seater',
    name: 'Tempo Traveller',
    examples: 'Force Traveller · Winger · Maharaja',
    icon: '🚌',
    seats: 12,
    luggage: '8+ bags',
    ac: true,
    ideal: 'Large groups & pilgrimages',
    features: ['AC Cabin', 'GPS Tracked', 'Trained Driver', 'First Aid Kit', 'Push-back Seats', 'Music System'],
    highlight: false,
  },
]

const otherServices = [
  {
    icon: 'fa-mountain',
    title: 'Char Dham Yatra',
    desc: 'Complete pilgrimage packages to Yamunotri, Gangotri, Kedarnath & Badrinath with accommodation, meals, and guides.',
  },
  {
    icon: 'fa-helicopter',
    title: 'Helicopter Booking',
    desc: 'VIP helicopter transfers to Kedarnath & other high-altitude shrines for senior citizens and premium travelers.',
  },
  {
    icon: 'fa-bed',
    title: 'Hotel & Dharamshala',
    desc: 'Curated stays from budget dharamshalas to premium mountain resorts at every major Uttarakhand destination.',
  },
  {
    icon: 'fa-map-marked-alt',
    title: 'Custom Tour Planning',
    desc: 'Tailor-made itineraries built around your schedule, group size, and budget — no cookie-cutter packages.',
  },
  {
    icon: 'fa-user-tie',
    title: 'Expert Local Guides',
    desc: 'Certified mountain guides with deep knowledge of routes, temples, and Uttarakhands rich culture and history',
  },
  {
    icon: 'fa-horse',
    title: 'Pony & Doli Services',
    desc: 'Pony and doli (palanquin) arrangements for elderly or differently-abled pilgrims at Kedarnath & Yamunotri.',
  },
]

const whyRentWithUs = [
  { icon: 'fa-car', text: 'Well-maintained, sanitized fleet' },
  { icon: 'fa-id-card', text: 'Licensed & verified drivers' },
  { icon: 'fa-mountain', text: 'Mountain-route specialists' },
  { icon: 'fa-phone', text: '24/7 on-trip support' },
  { icon: 'fa-rupee-sign', text: 'No hidden charges' },
  { icon: 'fa-shield-alt', text: 'Fully insured vehicles' },
]

export default function Services() {
  useScrollReveal()

  return (
    <div>
      <style>{`
        [data-reveal] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1),
                      transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal="left"]  { transform: translateX(-44px); }
        [data-reveal="right"] { transform: translateX(44px); }
        [data-reveal="scale"] { transform: scale(0.9) translateY(16px); }
        [data-reveal="fade"]  { transform: none; }
        [data-reveal].revealed { opacity: 1; transform: none; }

        /* Vehicle card */
        .vehicle-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid transparent;
          transition: transform 0.38s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.38s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s ease;
          background: #fff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
        }
        .vehicle-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 28px 56px rgba(0,0,0,0.14);
          border-color: var(--gold);
        }
        .vehicle-card.featured {
          border-color: var(--gold);
          box-shadow: 0 8px 40px rgba(212,175,55,0.22);
        }
        .vehicle-card.featured:hover {
          box-shadow: 0 32px 64px rgba(212,175,55,0.28);
        }

        /* Icon emoji bounce */
        @keyframes vehicleBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50%       { transform: translateY(-6px) scale(1.12); }
        }
        .vehicle-icon { animation: vehicleBounce 3s ease-in-out infinite; display: inline-block; }
        .vehicle-card:nth-child(2) .vehicle-icon { animation-delay: 0.5s; }
        .vehicle-card:nth-child(3) .vehicle-icon { animation-delay: 1s; }

        /* Feature pill */
        .feat-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(212,175,55,0.12);
          color: var(--green);
          border: 1px solid rgba(212,175,55,0.3);
          transition: background 0.2s, color 0.2s;
        }
        .feat-pill:hover { background: var(--gold); color: #fff; }

        /* Service card */
        .service-card {
          border-radius: 12px;
          padding: 2rem;
          background: var(--sand);
          border-left: 4px solid var(--gold);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s ease;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
        }
        .service-icon {
          width: 52px; height: 52px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: var(--green);
          margin-bottom: 1rem;
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .service-card:hover .service-icon { transform: scale(1.18) rotate(-5deg); }

        /* Why-us strip */
        .why-pill {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 20px;
          border-radius: 50px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(212,175,55,0.35);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 500;
          transition: background 0.25s, transform 0.25s;
          cursor: default;
        }
        .why-pill:hover {
          background: rgba(212,175,55,0.15);
          transform: translateY(-3px);
        }

        /* Seat badge */
        .seat-badge {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.78rem; font-weight: 700;
        }

        /* "Best Value" ribbon */
        .ribbon {
          position: absolute;
          top: 16px; right: -28px;
          background: var(--gold);
          color: var(--green);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 4px 36px;
          transform: rotate(35deg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }

        .btn-primary {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.25s ease;
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .price-shimmer {
          background: linear-gradient(90deg, var(--green) 0%, #1a6640 40%, var(--green) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <PageHero
        title="Our Services"
        subtitle="From private car rentals to full Char Dham packages — everything you need for a perfect Uttarakhand journey."
        image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
      />

      {/* ════════ CAR RENTAL SECTION ════════ */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-reveal="fade">
            <p className="section-label">Fleet & Pricing</p>
            <h2 className="section-title">Car Rental Services</h2>
            <span className="section-divider mx-auto"></span>
            <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed">
              Choose from our well-maintained fleet of mountain-ready vehicles. Every car comes with a trained local driver who knows Uttarakhand's roads inside out.
            </p>
          </div>

          {/* Vehicle cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((v, i) => (
              <div
                key={v.id}
                className={`vehicle-card ${v.highlight ? 'featured' : ''}`}
                data-reveal="scale"
                data-delay={i * 120}
              >
                {/* Ribbon */}
                {v.highlight && (
                  <div className="ribbon">{v.tag}</div>
                )}

                {/* Top coloured band */}
                <div
                  className="px-6 pt-8 pb-6 text-center"
                  style={{
                    background: v.highlight
                      ? 'linear-gradient(135deg, var(--green) 0%, #1a6640 100%)'
                      : 'linear-gradient(135deg, #f8f4ee 0%, #ede5d8 100%)',
                  }}
                >
                  {!v.highlight && (
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-widest uppercase"
                      style={{ background: 'rgba(212,175,55,0.18)', color: 'var(--green)', border: '1px solid var(--gold)' }}
                    >
                      {v.tag}
                    </span>
                  )}
                  <div className="text-5xl mb-3">
                    <span className="vehicle-icon">{v.icon}</span>
                  </div>
                  <h3
                    className="font-playfair text-xl font-bold mb-1"
                    style={{ color: v.highlight ? '#fff' : 'var(--green)' }}
                  >
                    {v.name}
                  </h3>
                  <p
                    className="text-xs mb-4"
                    style={{ color: v.highlight ? 'rgba(255,255,255,0.7)' : '#888' }}
                  >
                    {v.examples}
                  </p>

                  {/* Seat & luggage row */}
                  <div className="flex justify-center gap-5">
                    <div className="seat-badge" style={{ color: v.highlight ? 'var(--gold)' : 'var(--green)' }}>
                      <i className="fas fa-user-friends"></i>
                      <span>{v.seats} Seats</span>
                    </div>
                    <div className="seat-badge" style={{ color: v.highlight ? 'var(--gold)' : 'var(--green)' }}>
                      <i className="fas fa-suitcase"></i>
                      <span>{v.luggage}</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div
                  className="text-center py-5 border-b"
                  style={{ borderColor: '#f0e8e0' }}
                >
                  <span
                    className="font-playfair font-bold"
                    style={{
                      fontSize: '2.4rem',
                      color: v.highlight ? 'var(--green)' : 'var(--green)',
                    }}
                  >
                    <span className={v.highlight ? 'price-shimmer' : ''}>{v.price}</span>
                  </span>
                  <span className="text-gray-400 text-sm ml-1">{v.priceNote}</span>
                  <p className="text-xs text-gray-400 mt-1">{v.minKm}</p>
                </div>

                {/* Features */}
                <div className="px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Includes</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {v.features.map(f => (
                      <span key={f} className="feat-pill">
                        <i className="fas fa-check" style={{ fontSize: '0.6rem' }}></i> {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <i className="fas fa-star" style={{ color: 'var(--gold)' }}></i>
                    Ideal for: <strong className="ml-1 text-gray-600">{v.ideal}</strong>
                  </p>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    to="/booking"
                    className="btn-primary block text-center w-full"
                    style={v.highlight ? {} : { background: 'transparent', border: '2px solid var(--green)', color: 'var(--green)' }}
                  >
                    Book This Vehicle →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note strip */}
          <div
            className="mt-10 rounded-xl p-5 text-sm text-center"
            data-reveal="fade"
            data-delay="200"
            style={{ background: 'var(--sand)', border: '1px dashed rgba(212,175,55,0.5)' }}
          >
            <i className="fas fa-info-circle mr-2" style={{ color: 'var(--gold)' }}></i>
            Prices are indicative and may vary by season, route, and duration.
            <strong className="ml-1" style={{ color: 'var(--green)' }}>Contact us for a custom quote</strong> — we always offer the best rates.
          </div>
        </div>
      </section>

      {/* ════════ WHY RENT WITH US ════════ */}
      <section className="py-14 px-[5%]" style={{ background: 'var(--green)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10" data-reveal="fade">
            <p className="section-label" style={{ color: 'var(--gold)' }}>Why Choose Our Fleet</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Every Ride, Every Promise</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-reveal="fade" data-delay="100">
            {whyRentWithUs.map((w, i) => (
              <div key={w.text} className="why-pill" style={{ animationDelay: `${i * 0.08}s` }}>
                <i className={`fas ${w.icon}`} style={{ color: 'var(--gold)' }}></i>
                {w.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ OTHER SERVICES ════════ */}
      <section className="py-20 px-[5%]" style={{ background: '#fafaf8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-reveal="fade">
            <p className="section-label">Beyond Car Rentals</p>
            <h2 className="section-title">All Our Services</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <div key={s.title} className="service-card" data-reveal="scale" data-delay={i * 90}>
                <div className="service-icon">
                  <i className={`fas ${s.icon} text-xl`} style={{ color: 'var(--gold)' }}></i>
                </div>
                <h3 className="font-playfair text-lg font-bold mb-2" style={{ color: 'var(--green)' }}>{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-16 px-[5%] text-center" style={{ background: 'var(--sand)' }} data-reveal="scale">
        <p className="section-label">Ready to Book?</p>
        <h2 className="section-title max-w-md mx-auto">Plan Your Uttarakhand Journey Today</h2>
        <span className="section-divider mx-auto"></span>
        <p className="text-gray-500 max-w-sm mx-auto mb-8 text-sm">
          Send us an inquiry and our team will get back within 24 hours with the best available options.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/booking" className="btn-primary">Book a Vehicle →</Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="btn-primary"
            style={{ background: '#25D366' }}
          >
            <i className="fab fa-whatsapp mr-2"></i>WhatsApp Us
          </a>
        </div>
      </section>
    </div>
  )
}
