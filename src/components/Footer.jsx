import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--green)', color: 'rgba(255,255,255,0.8)', padding: '60px 5% 30px' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-12">
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', fontSize: '1.4rem', lineHeight: 1.2 }}>
            Vishnu Tour & Travel
            <span style={{ color: '#fff', fontStyle: 'italic', fontSize: '0.8rem', display: 'block', letterSpacing: '1px', opacity: 0.8 }}>
              Uttarakhand's Trusted Companion
            </span>
          </div>
          <p className="mt-4 text-sm leading-7 opacity-75">
            A local, government-registered travel company dedicated to bringing you closer to the beauty, spirituality, and adventure of Dev Bhoomi – the Land of Gods.
          </p>
          <div className="flex gap-2 mt-5">
            {[
              { icon: 'fa-facebook-f', href: '#' },
              { icon: 'fa-instagram', href: '#' },
              { icon: 'fa-whatsapp', href: 'https://wa.me/919876543210' },
              { icon: 'fa-youtube', href: '#' },
              { icon: 'fa-twitter', href: '#' },
            ].map(s => (
              <a key={s.icon} href={s.href}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm no-underline transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <i className={`fab ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', marginBottom: '1.2rem', fontSize: '1rem' }}>Quick Links</h4>
          <ul className="list-none p-0 flex flex-col gap-2">
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Tour Packages', to: '/packages' },
              { label: 'Why Choose Us', to: '/why-us' },
              { label: 'Testimonials', to: '/testimonials' },
              { label: 'Book Now', to: '/booking' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="no-underline text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tour Packages */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', marginBottom: '1.2rem', fontSize: '1rem' }}>Tour Packages</h4>
          <ul className="list-none p-0 flex flex-col gap-2">
            {['Haridwar Tour', 'Rishikesh Tour', 'Char Dham Yatra', 'Kedarnath & Badrinath', 'Customized Tours'].map(t => (
              <li key={t}>
                <Link to="/packages" className="no-underline text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', marginBottom: '1.2rem', fontSize: '1rem' }}>Contact Us</h4>
          <ul className="list-none p-0 flex flex-col gap-3">
            {[
              { icon: 'fa-phone', href: 'tel:+91 8218034104', text: '+91 8218034104', fab: false },
              { icon: 'fa-whatsapp', href: 'https://wa.me/918218034104', text: 'WhatsApp Us', fab: true },
              { icon: 'fa-envelope', href: 'mailto:info@vishnutourtravels.com', text: 'info@vishnutourtravels.com', fab: false },
              { icon: 'fa-map-marker-alt', href: '/contact', text: 'Haridwar, Uttarakhand', fab: false },
            ].map(c => (
              <li key={c.icon}>
                <a href={c.href} className="no-underline text-sm flex items-center gap-2 transition-colors duration-200 hover:text-gold"
                  style={{ color: 'rgba(255,255,255,0.7)' }}>
                  <i className={`${c.fab ? 'fab' : 'fas'} ${c.icon}`} style={{ color: 'var(--gold)', width: '16px' }}></i>
                  {c.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t max-w-6xl mx-auto pt-6 text-center text-xs opacity-60"
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
        © 2024 Vishnu Tour & Travel, Haridwar, Uttarakhand. All rights reserved. &nbsp;|&nbsp; Crafted with ♥ for the Land of Gods
      </div>
    </footer>
  )
}
