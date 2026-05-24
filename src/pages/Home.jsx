import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { packages } from '../data/packages'

/* ─── Animation hook: IntersectionObserver scroll-reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = el.dataset.delay || '0'
            setTimeout(() => {
              el.classList.add('revealed')
            }, Number(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─── Parallax hook for hero ─── */
function useParallax(ref) {
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrolled = window.scrollY
      ref.current.style.backgroundPositionY = `calc(50% + ${scrolled * 0.35}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])
}

export default function Home() {
  useScrollReveal()
  const heroRef = useRef(null)
  useParallax(heroRef)

  return (
    <>
      {/* ── Global animation styles ── */}
      <style>{`
        /* Reveal base states */
        [data-reveal] {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                      transform 0.75s cubic-bezier(0.22,1,0.36,1);
        }
        [data-reveal="left"] { transform: translateX(-50px); }
        [data-reveal="right"] { transform: translateX(50px); }
        [data-reveal="scale"] { transform: scale(0.88) translateY(20px); }
        [data-reveal="fade"]  { transform: none; }
        [data-reveal].revealed {
          opacity: 1;
          transform: none;
        }

        /* Hero text keyframes */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroBadgePop {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroLineGrow {
          from { width: 0; }
          to   { width: 60px; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes pulseRing {
          0%   { box-shadow: 0 0 0 0   rgba(212,175,55,0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(212,175,55,0); }
          100% { box-shadow: 0 0 0 0   rgba(212,175,55,0); }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Hero children */
        .hero-badge   { animation: heroBadgePop 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both; }
        .hero-h1      { animation: heroFadeUp   0.9s 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-sub     { animation: heroFadeUp   0.9s 0.65s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-cta     { animation: heroFadeUp   0.9s 0.85s cubic-bezier(0.22,1,0.36,1) both; }

        /* Floating card decoration */
        .float-anim { animation: floatY 4s ease-in-out infinite; }

        /* Shimmer on section-label */
        .shimmer-label {
          background: linear-gradient(90deg, var(--gold) 0%, #fff5c0 50%, var(--gold) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* Why-us icon pulse */
        .pulse-icon { animation: pulseRing 2.2s cubic-bezier(0.455,0.03,0.515,0.955) infinite; }

        /* Package card lift */
        .pkg-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .pkg-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 24px 48px rgba(0,0,0,0.13);
        }
        .pkg-card img { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
        .pkg-card:hover img { transform: scale(1.08); }

        /* Testimonial card tilt */
        .testi-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);
          cursor: default;
        }
        .testi-card:hover {
          transform: translateY(-6px) rotate(-0.4deg);
          box-shadow: 0 20px 40px rgba(0,0,0,0.10);
        }

        /* Why-us card hover */
        .why-card {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      background 0.3s ease,
                      border-color 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          background: rgba(212,175,55,0.1) !important;
          border-color: var(--gold) !important;
        }

        /* Smooth btn */
        .btn-primary {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.25s ease,
                      filter 0.25s ease;
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
          filter: brightness(1.08);
        }
        .btn-primary:active { transform: scale(0.97); }

        /* Section divider grow on reveal */
        .section-divider {
          transition: width 0.9s cubic-bezier(0.22,1,0.36,1);
        }

        /* Scroll indicator */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50%       { transform: translateY(8px); opacity: 0.4; }
        }
        .scroll-indicator { animation: scrollBounce 1.8s ease-in-out infinite; }

        /* Number counter pop */
        .stat-num { animation: counterUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>

      <div style={{ marginTop: '68px' }}>

        {/* ════════════ HERO ════════════ */}
        <section
          ref={heroRef}
          className="relative flex items-center justify-center overflow-hidden"
          style={{
            height: '100vh', minHeight: '600px',
            background: `linear-gradient(to bottom, rgba(20,50,35,0.55) 0%, rgba(10,30,20,0.7) 100%),
              url('https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80') center/cover no-repeat`,
            willChange: 'background-position',
          }}
        >
          <div className="text-center text-white px-5 relative z-10">
            <div
              className="hero-badge inline-block mb-6 text-xs tracking-widest uppercase rounded-full px-5 py-1.5"
              style={{ background: 'rgba(212,175,55,0.25)', border: '1px solid var(--gold)', color: 'var(--gold)' }}
            >
              ✦ Uttarakhand Specialists ✦
            </div>
            <h1
              className="hero-h1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.25, textShadow: '0 2px 20px rgba(0,0,0,0.5)', marginBottom: '1.2rem' }}
            >
              Explore the Beauty of<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Uttarakhand</em> with<br />
              Trusted Travel Experts
            </h1>
            <p className="hero-sub text-white/90 font-light text-lg max-w-xl mx-auto mb-10">
              Sacred shrines, mighty Himalayas, and sacred rivers await. Let us take you there safely and beautifully.
            </p>
            <Link to="/packages" className="hero-cta btn-primary">Explore Packages &nbsp;→</Link>
          </div>

          {/* Scroll indicator */}
          <div
            className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', letterSpacing: '0.1em' }}
          >
            <span>SCROLL</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <rect x="6.5" y="2" width="3" height="6" rx="1.5" fill="currentColor"/>
              <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="currentColor" strokeOpacity="0.5"/>
            </svg>
          </div>
        </section>

        {/* ════════════ STATS BAR ════════════ */}
        <section className="py-10 px-[5%]" style={{ background: 'var(--green)' }}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center"
            data-reveal="fade"
          >
            {[
              { num: '500+', label: 'Happy Travelers' },
              { num: '50+',  label: 'Tour Packages' },
              { num: '10+',  label: 'Years Experience' },
              { num: '24/7', label: 'Support Available' },
            ].map((s, i) => (
              <div key={s.label} data-reveal="scale" data-delay={i * 100}>
                <div className="stat-num text-3xl font-bold" style={{ color: 'var(--gold)', fontFamily: "'Playfair Display', serif" }}>{s.num}</div>
                <div className="text-white/75 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ ABOUT ════════════ */}
        <section className="bg-white py-20 px-[5%]">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative" data-reveal="left">
              <img
                src="https://www.easeindiatrip.com/blog/wp-content/uploads/2024/12/Uttarakhand-travel-guide.jpg"
                alt="Uttarakhand landscape"
                className="w-full h-[420px] object-cover rounded"
                style={{ boxShadow: '12px 12px 0 var(--gold)', transition: 'box-shadow 0.4s ease' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '20px 20px 0 var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '12px 12px 0 var(--gold)'}
              />
              {/* floating badge */}
              <div
                className="float-anim absolute -bottom-5 -right-5 rounded-full w-28 h-28 flex flex-col items-center justify-center text-center font-bold shadow-xl"
                style={{ background: 'var(--green)', color: 'var(--gold)', border: '3px solid var(--gold)' }}
              >
                <span style={{ fontSize: '1.5rem', fontFamily: "'Playfair Display', serif" }}>10+</span>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Years of<br/>Trust</span>
              </div>
            </div>
            <div data-reveal="right">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">Your Local Uttarakhand<br />Travel Experts</h2>
              <span className="section-divider"></span>
              <p className="text-gray-500 leading-relaxed mb-4">
                Vishnu Tour & Travel is a locally rooted travel company based in the heart of Uttarakhand. We specialize in crafting safe, memorable, and affordable journeys through the Dev Bhoomi — the Land of Gods.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                From the ghats of Haridwar to the high-altitude shrines of Kedarnath and Badrinath, our experienced team knows every road, every pass, and every prayer bell.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {['Government Registered', 'Local Expert Guides', 'Verified Safe Vehicles', 'Transparent Pricing'].map((f, i) => (
                  <div
                    key={f}
                    data-reveal="scale"
                    data-delay={i * 80}
                    className="flex items-center gap-2 text-sm font-bold"
                    style={{ color: 'var(--text-mid)', transition: 'color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-mid)'}
                  >
                    <i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i> {f}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">Know More →</Link>
            </div>
          </div>
        </section>

        {/* ════════════ PACKAGES ════════════ */}
        <section className="py-20 px-[5%]" style={{ background: 'var(--sand)' }}>
          <div className="text-center mb-12" data-reveal="fade">
            <p className="section-label">Curated Journeys</p>
            <h2 className="section-title">Our Tour Packages</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.slice(0, 3).map((pkg, i) => (
              <div key={pkg.id} data-reveal="scale" data-delay={i * 130}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-reveal="fade" data-delay="200">
            <Link to="/packages" className="btn-primary">View All Packages →</Link>
          </div>
        </section>

        {/* ════════════ WHY US ════════════ */}
        <section className="py-20 px-[5%]" style={{ background: 'var(--green)' }}>
          <div className="text-center mb-12" data-reveal="fade">
            <p className="section-label shimmer-label">Our Commitment</p>
            <h2 className="section-title" style={{ color: '#fff' }}>Why Choose Us</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'fa-shield-alt', title: 'Safe Travel',   desc: 'Sanitized vehicles with trained mountain drivers.' },
              { icon: 'fa-tags',       title: 'Best Prices',   desc: 'Transparent pricing, no hidden costs.' },
              { icon: 'fa-route',      title: 'Expert Drivers', desc: 'Local experts knowing every Uttarakhand road.' },
              { icon: 'fa-headset',    title: '24/7 Support',  desc: 'Round-the-clock help via call or WhatsApp.' },
            ].map((w, i) => (
              <div
                key={w.title}
                className="why-card text-center p-8 rounded-lg border"
                data-reveal="scale"
                data-delay={i * 100}
                style={{ border: '1px solid rgba(212,175,55,0.3)' }}
              >
                <div
                  className="pulse-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                  style={{ background: 'rgba(212,175,55,0.15)', borderColor: 'var(--gold)', animationDelay: `${i * 0.5}s` }}
                >
                  <i className={`fas ${w.icon} text-2xl`} style={{ color: 'var(--gold)' }}></i>
                </div>
                <h3 className="font-playfair text-lg text-white mb-2">{w.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-reveal="fade" data-delay="200">
            <Link to="/why-us" className="btn-primary">Learn More →</Link>
          </div>
        </section>

        {/* ════════════ TESTIMONIALS ════════════ */}
        <section className="py-20 px-[5%] bg-white">
          <div className="text-center mb-12" data-reveal="fade">
            <p className="section-label">What Travelers Say</p>
            <h2 className="section-title">Testimonials</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { initials: 'RK', name: 'Rajesh Kumar', loc: 'Delhi',   text: 'Our Char Dham Yatra was absolutely seamless. The driver was knowledgeable, the accommodations were clean, and Vishnu Tour handled every detail. A truly blessed journey.' },
              { initials: 'PS', name: 'Priya Sharma',  loc: 'Mumbai',  text: 'First time in Rishikesh and I was nervous about planning. Vishnu Tour made everything so easy — river rafting, yoga retreats, temple visits. Highly recommend!' },
              { initials: 'AM', name: 'Arjun Mehta',   loc: 'Jaipur',  text: 'The customized Kedarnath package was worth every rupee. They arranged our helicopter booking, ponies, and stayed in touch throughout. Professional and caring team.' },
            ].map((t, i) => (
              <div
                key={t.initials}
                className="testi-card relative rounded-lg p-8"
                data-reveal="scale"
                data-delay={i * 120}
                style={{ background: 'var(--sand)', borderLeft: '4px solid var(--gold)' }}
              >
                {/* decorative quote mark */}
                <div
                  className="absolute top-4 right-5 text-6xl leading-none select-none pointer-events-none"
                  style={{ color: 'var(--gold)', opacity: 0.12, fontFamily: 'Georgia, serif' }}
                >"</div>
                <div className="text-yellow-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-playfair font-bold text-lg"
                    style={{ background: 'var(--green)', color: 'var(--gold)', transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.2) rotate(-5deg)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: 'var(--green)' }}>{t.name}</div>
                    <div className="text-xs text-gray-400">{t.loc}, India</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-reveal="fade" data-delay="150">
            <Link to="/testimonials" className="btn-primary">See All Reviews →</Link>
          </div>
        </section>

        {/* ════════════ CTA ════════════ */}
        <section className="py-16 px-[5%] text-center" style={{ background: 'var(--sand)' }} data-reveal="scale">
          <p className="section-label">Ready to Travel?</p>
          <h2 className="section-title mx-auto max-w-xl">Plan Your Dream Journey to Uttarakhand Today</h2>
          <span className="section-divider mx-auto"></span>
          <p className="text-gray-500 max-w-md mx-auto mb-8">Fill out a quick inquiry and our travel advisor will contact you within 24 hours with a personalized plan.</p>
          <Link to="/booking" className="btn-primary">Book Your Journey →</Link>
        </section>

      </div>
    </>
  )
}

function PackageCard({ pkg }) {
  return (
    <Link to={`/packages/${pkg.id}`} className="pkg-card no-underline block">
      <div className="h-48 overflow-hidden relative">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
        <span
          className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase"
          style={{ background: 'var(--green)', color: 'var(--gold)' }}
        >
          {pkg.days}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-playfair text-lg mb-2" style={{ color: 'var(--green)' }}>{pkg.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed">{pkg.shortDesc}</p>
      </div>
      <div className="px-5 py-3 flex justify-between items-center border-t" style={{ borderColor: '#f0e8e0' }}>
        <div className="font-bold text-sm" style={{ color: 'var(--blue)' }}>
          {pkg.price} <span className="text-gray-400 font-normal text-xs">{pkg.priceNote}</span>
        </div>
        <span className="btn-sm">Enquire</span>
      </div>
    </Link>
  )
}
