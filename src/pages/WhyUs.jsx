import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const whyCards = [
  {
    icon: 'fa-shield-alt',
    title: 'Safe & Comfortable Travel',
    desc: 'Well-maintained, sanitized vehicles with trained drivers familiar with mountain terrain and weather conditions. All vehicles are GPS-tracked and fully insured.',
  },
  {
    icon: 'fa-tags',
    title: 'Affordable Packages',
    desc: 'Transparent pricing with no hidden costs. We offer the best value for every budget without compromising quality. Get detailed invoices before booking.',
  },
  {
    icon: 'fa-route',
    title: 'Experienced Drivers',
    desc: 'Our drivers know every mountain road in Uttarakhand — safe, punctual, and fluent in local routes and customs. Average 10+ years of mountain driving experience.',
  },
  {
    icon: 'fa-headset',
    title: '24/7 Support',
    desc: 'Round-the-clock assistance throughout your journey. We\'re just a call or WhatsApp message away, anytime, anywhere in Uttarakhand.',
  },
  {
    icon: 'fa-certificate',
    title: 'Government Registered',
    desc: 'Fully licensed and registered with the Uttarakhand Tourism Board. Travel with complete peace of mind knowing you\'re in trusted, legal hands.',
  },
  {
    icon: 'fa-users',
    title: 'Local Expertise',
    desc: 'Born and raised in Uttarakhand, our team carries generations of knowledge about local culture, hidden gems, best routes, and seasonal conditions.',
  },
  {
    icon: 'fa-star',
    title: '5000+ Happy Travelers',
    desc: 'Over a decade of creating unforgettable journeys. Our track record speaks for itself — 5,000+ satisfied travelers from across India and beyond.',
  },
  {
    icon: 'fa-hand-holding-heart',
    title: 'Personalized Attention',
    desc: 'Every traveler is unique. We take time to understand your group, preferences, and requirements to craft an experience that feels tailor-made.',
  },
]

export default function WhyUs() {
  return (
    <div>
      <PageHero
        title="Why Choose Vishnu Tour & Travel?"
        subtitle="We don't just plan trips — we create lifelong memories with care, safety, and expertise."
        image="https://images.unsplash.com/photo-1580289143186-03f54224aad6?w=1200&q=80"
      />

      {/* Cards */}
      <section className="py-20 px-[5%]" style={{ background: 'var(--green)' }}>
        <div className="text-center mb-12">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Our Commitment</p>
          <h2 className="section-title" style={{ color: '#fff' }}>8 Reasons to Travel With Us</h2>
          <span className="section-divider mx-auto"></span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyCards.map(w => (
            <div key={w.title}
              className="text-center p-8 rounded-lg transition-all duration-300 cursor-default"
              style={{ border: '1px solid rgba(212,175,55,0.3)' }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(212,175,55,0.08)'
                e.currentTarget.style.borderColor = 'var(--gold)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2"
                style={{ background: 'rgba(212,175,55,0.15)', borderColor: 'var(--gold)' }}>
                <i className={`fas ${w.icon} text-2xl`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="font-playfair text-base mb-3 text-white">{w.title}</h3>
              <p className="text-xs text-white/75 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {[
            { num: '12+', label: 'Years Experience', icon: 'fa-calendar' },
            { num: '5000+', label: 'Happy Travelers', icon: 'fa-users' },
            { num: '50+', label: 'Tour Routes', icon: 'fa-route' },
            { num: '4.9★', label: 'Average Rating', icon: 'fa-star' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-lg p-6 shadow-sm">
              <i className={`fas ${s.icon} text-2xl mb-3 block`} style={{ color: 'var(--gold)' }}></i>
              <div className="font-playfair text-3xl font-bold mb-1" style={{ color: 'var(--green)' }}>{s.num}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-[5%] bg-white">
        <div className="text-center mb-12">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Simple 4-Step Booking Process</h2>
          <span className="section-divider mx-auto"></span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: '01', icon: 'fa-phone', title: 'Contact Us', desc: 'Call, WhatsApp, or fill our inquiry form with your travel requirements.' },
            { step: '02', icon: 'fa-clipboard-list', title: 'Get Itinerary', desc: 'We prepare a custom itinerary and pricing within 24 hours.' },
            { step: '03', icon: 'fa-handshake', title: 'Confirm & Pay', desc: 'Review the plan, make changes, confirm, and pay a small advance.' },
            { step: '04', icon: 'fa-mountain', title: 'Enjoy Your Trip', desc: 'Travel with our expert team. We handle everything end-to-end.' },
          ].map(p => (
            <div key={p.step} className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: 'var(--sand)', border: '2px solid var(--gold)' }}>
                  <i className={`fas ${p.icon} text-xl`} style={{ color: 'var(--green)' }}></i>
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: 'var(--gold)', color: 'var(--green)' }}>{p.step}</span>
              </div>
              <h3 className="font-playfair text-base mb-2" style={{ color: 'var(--green)' }}>{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] text-center" style={{ background: 'var(--sand)' }}>
        <h2 className="section-title max-w-md mx-auto">Ready to Experience the Difference?</h2>
        <span className="section-divider mx-auto"></span>
        <p className="text-gray-500 max-w-sm mx-auto mb-8 text-sm">Let us show you why thousands of travelers trust us with their most sacred and cherished journeys.</p>
        <Link to="/booking" className="btn-primary">Book Your Journey →</Link>
      </section>
    </div>
  )
}
