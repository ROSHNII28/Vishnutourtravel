import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <div>
      <PageHero
        title="About Vishnu Tour & Travel"
        subtitle="Locally rooted, traveler-first. Serving pilgrims and adventurers since 2012."
        image="https://www.ayodhyacarhire.com/wp-content/uploads/2024/05/Rishikesh-Uttarakhand-India.jpg"
      />

      {/* Story */}
      <section className="py-20 px-[5%] bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="https://www.tourmyindia.com/states/uttarakhand/image/uttarakhand-banner.webp"
              alt="Uttarakhand"
              className="w-full h-[420px] object-cover rounded"
              style={{ boxShadow: '12px 12px 0 var(--gold)' }}
            />
            
          </div>
          <div>
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Born in the Himalayas,<br />Serving the World</h2>
            <span className="section-divider"></span>
            <p className="text-gray-500 leading-relaxed mb-4">
              Vishnu Tour & Travel was founded in 2012 in Haridwar, Uttarakhand, by a family of mountain enthusiasts who had spent generations exploring these sacred lands. What began as a small car rental service has grown into one of the region's most trusted travel companies.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Over the years, we've had the privilege of guiding thousands of pilgrims on Char Dham Yatras, adventure seekers through Rishikesh rapids, and families discovering the magic of the Himalayas for the first time.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Our deep roots in Uttarakhand mean we know every road, every shrine, every shortcut, and every hidden gem. We don't just arrange tours — we craft experiences that stay with you for life.
            </p>
            <Link to="/booking" className="btn-primary">Plan Your Trip →</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="text-center mb-12">
          <p className="section-label">What Sets Us Apart</p>
          <h2 className="section-title">Our Commitments to You</h2>
          <span className="section-divider mx-auto"></span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: 'fa-certificate', title: 'Government Registered', desc: 'Fully licensed and registered with the Uttarakhand Tourism Board.' },
            { icon: 'fa-user-tie', title: 'Expert Local Guides', desc: 'Guides born and raised in Uttarakhand who speak the land\'s language.' },
            { icon: 'fa-car', title: 'Safe Vehicles', desc: 'All vehicles are well-maintained, insured, and GPS-equipped.' },
            { icon: 'fa-rupee-sign', title: 'Transparent Pricing', desc: 'What you see is what you pay — no surprises, no hidden charges.' },
          ].map(f => (
            <div key={f.title} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--sand)', border: '2px solid var(--gold)' }}>
                <i className={`fas ${f.icon} text-xl`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="font-playfair text-base mb-2" style={{ color: 'var(--green)' }}>{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-[5%]" style={{ background: 'var(--green)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center text-white">
          {[
            { num: '12+', label: 'Years Experience' },
            { num: '5000+', label: 'Happy Travelers' },
            { num: '50+', label: 'Tour Packages' },
            { num: '100%', label: 'Satisfaction Rate' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-playfair text-4xl font-bold mb-1" style={{ color: 'var(--gold)' }}>{s.num}</div>
              <div className="text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-[5%] bg-white">
        <div className="text-center mb-12">
          <p className="section-label">The People Behind the Journey</p>
          <h2 className="section-title">Meet Our Team</h2>
          <span className="section-divider mx-auto"></span>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { initials: 'VK', name: 'Vishnu Kumar', role: 'Founder & CEO', desc: 'Born and raised in Haridwar, Vishnu has 15+ years of experience in Himalayan travel.' },
            { initials: 'RD', name: 'Ramesh Dobhal', role: 'Head Guide', desc: 'Expert in Char Dham routes with deep knowledge of local culture and traditions.' },
            { initials: 'SM', name: 'Sunita Mehta', role: 'Customer Relations', desc: 'Ensures every traveler receives personalized care from booking to return.' },
          ].map(m => (
            <div key={m.initials} className="text-center p-6 rounded-lg border" style={{ borderColor: '#f0e8e0' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair font-bold text-2xl"
                style={{ background: 'var(--green)', color: 'var(--gold)' }}>{m.initials}</div>
              <h3 className="font-playfair text-lg mb-1" style={{ color: 'var(--green)' }}>{m.name}</h3>
              <p className="text-xs font-bold tracking-wide uppercase mb-3" style={{ color: 'var(--gold)' }}>{m.role}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
