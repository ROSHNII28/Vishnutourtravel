import { Link } from 'react-router-dom'
import { packages } from '../data/packages'
import PageHero from '../components/PageHero'

export default function Packages() {
  return (
    <div>
      <PageHero
        title="Our Tour Packages"
        subtitle="From sacred pilgrimages to Himalayan adventures — we have the perfect journey for you."
        image="https://images.unsplash.com/photo-1609557927087-f9cf8e88342c?w=1200&q=80"
      />

      <section className="py-20 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="text-center mb-12">
          <p className="section-label">Curated Journeys</p>
          <h2 className="section-title">Choose Your Perfect Package</h2>
          <span className="section-divider mx-auto"></span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map(pkg => (
            <Link key={pkg.id} to={`/packages/${pkg.id}`} className="pkg-card no-underline block">
              <div className="h-52 overflow-hidden relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase"
                  style={{ background: 'var(--green)', color: 'var(--gold)' }}>{pkg.days}</span>
              </div>
              <div className="p-5">
                <h3 className="font-playfair text-xl mb-2" style={{ color: 'var(--green)' }}>{pkg.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{pkg.shortDesc}</p>
                <ul className="flex flex-col gap-1">
                  {pkg.highlights.slice(0, 3).map(h => (
                    <li key={h} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-mid)' }}>
                      <i className="fas fa-check-circle mt-0.5" style={{ color: 'var(--gold)' }}></i>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-5 py-3 flex justify-between items-center border-t" style={{ borderColor: '#f0e8e0' }}>
                <div className="font-bold" style={{ color: 'var(--blue)' }}>
                  {pkg.price} <span className="text-gray-400 font-normal text-xs">{pkg.priceNote}</span>
                </div>
                <span className="btn-sm">View Details</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] text-center bg-white">
        <p className="section-label">Can't Find What You're Looking For?</p>
        <h2 className="section-title max-w-lg mx-auto">We Build Custom Packages Just for You</h2>
        <span className="section-divider mx-auto"></span>
        <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm">Tell us your dates, group size, and interests — and we'll craft the perfect Uttarakhand itinerary.</p>
        <Link to="/booking" className="btn-primary">Request Custom Tour →</Link>
      </section>
    </div>
  )
}
