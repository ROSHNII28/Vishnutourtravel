import { Link, Navigate, useParams } from 'react-router-dom'
import { packages } from '../data/packages'

export default function PackageDetail() {
  const { id } = useParams()
  const pkg = packages.find(p => p.id === id)

  if (!pkg) return <Navigate to="/packages" replace />

  return (
    <div style={{ marginTop: '68px' }}>
      {/* Hero */}
      <div className="relative flex items-end text-white" style={{ height: '420px' }}>
        <img src={pkg.image} alt={pkg.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,30,20,0.9), rgba(10,30,20,0.3))' }}></div>
        <div className="relative z-10 p-10 max-w-4xl">
          <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase"
            style={{ background: 'var(--green)', color: 'var(--gold)' }}>{pkg.days}</span>
          <h1 className="font-playfair text-4xl md:text-5xl mb-2">{pkg.name}</h1>
          <p className="text-white/80 font-light text-base max-w-xl">{pkg.shortDesc}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5%] py-16 grid lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Overview */}
          <div className="mb-10">
            <p className="section-label">Overview</p>
            <h2 className="section-title text-2xl">About This Package</h2>
            <span className="section-divider"></span>
            <p className="text-gray-500 leading-relaxed">{pkg.fullDesc}</p>
          </div>

          {/* Highlights */}
          <div className="mb-10">
            <h3 className="font-playfair text-2xl mb-4" style={{ color: 'var(--green)' }}>Package Highlights</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {pkg.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                  <i className="fas fa-check-circle mt-0.5 flex-shrink-0" style={{ color: 'var(--gold)' }}></i>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div className="mb-10">
            <h3 className="font-playfair text-2xl mb-6" style={{ color: 'var(--green)' }}>Itinerary</h3>
            <div className="flex flex-col gap-4">
              {pkg.itinerary.map((day, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ background: 'var(--green)' }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex gap-2 items-center mb-1">
                      <span className="text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded"
                        style={{ background: 'var(--sand)', color: 'var(--green)' }}>{day.day}</span>
                      <h4 className="font-bold text-sm" style={{ color: 'var(--green)' }}>{day.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500">{day.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Includes */}
          <div>
            <h3 className="font-playfair text-2xl mb-4" style={{ color: 'var(--green)' }}>What's Included</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {pkg.includes.map(inc => (
                <li key={inc} className="flex items-center gap-2 text-sm text-gray-600 bg-white rounded px-3 py-2 shadow-sm">
                  <i className="fas fa-circle-check" style={{ color: 'var(--blue)' }}></i>
                  {inc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-6 pb-6 border-b" style={{ borderColor: '#f0e8e0' }}>
              <div className="text-3xl font-bold mb-1" style={{ color: 'var(--blue)' }}>{pkg.price}</div>
              <div className="text-xs text-gray-400">{pkg.priceNote || 'price on request'}</div>
              <div className="mt-2 text-sm font-semibold" style={{ color: 'var(--green)' }}>{pkg.days}</div>
            </div>
            <Link to="/booking" state={{ package: pkg.name }} className="btn-primary block text-center mb-3">
              Book This Package →
            </Link>
            <a href="https://wa.me/8218034104" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: '#25D366', color: '#fff' }}>
              <i className="fab fa-whatsapp text-lg"></i> Chat on WhatsApp
            </a>

            <div className="mt-6 pt-6 border-t flex flex-col gap-3" style={{ borderColor: '#f0e8e0' }}>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--green)' }}>
                <i className="fas fa-phone" style={{ color: 'var(--gold)' }}></i>
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--green)' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--gold)' }}></i>
                info@vishnutourtravels.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other packages */}
      <section className="py-16 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="text-center mb-10">
          <h2 className="section-title">Explore Other Packages</h2>
          <span className="section-divider mx-auto"></span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
          {packages.filter(p => p.id !== id).map(p => (
            <Link key={p.id} to={`/packages/${p.id}`} className="btn-sm !text-sm !px-5 !py-2.5">{p.name}</Link>
          ))}
        </div>
      </section>
    </div>
  )
}
