import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Packages', to: '/packages' },
  { label: 'Why Us', to: '/why-us' },
  { label: 'Our services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-2xl' : ''}`}
      style={{ background: 'var(--green)', height: '68px' }}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="no-underline">
          <div style={{ fontFamily: "'Playfair Display', serif", color: 'var(--gold)', fontSize: '1.45rem', letterSpacing: '0.5px', lineHeight: 1.2 }}>
            Vishnu Tour & Travel
            <span style={{ color: '#fff', fontStyle: 'italic', fontSize: '0.8rem', display: 'block', letterSpacing: '1px', opacity: 0.85 }}>
              Uttarakhand's Trusted Companion
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-7 list-none m-0 p-0 items-center">
          {navItems.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `no-underline text-sm tracking-wide transition-colors duration-200 ${isActive ? 'text-gold' : 'text-white/85 hover:text-gold'}`
                }
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/booking" className="btn-primary !py-2 !px-5 !text-sm">
              Book Now
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full py-4 px-6 flex flex-col gap-4"
          style={{ background: 'var(--green-light)' }}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `no-underline text-sm font-semibold ${isActive ? 'text-gold' : 'text-white/85'}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-primary text-center !py-2" onClick={() => setMenuOpen(false)}>
            Book Now
          </Link>
        </div>
      )}
    </nav>
  )
}
