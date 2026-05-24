import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function Booking() {
  const location = useLocation()
  const preselected = location.state?.package || ''

  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    package: preselected, date: '', travelers: '', budget: '', message: ''
  })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    const required = ['name', 'phone', 'email', 'package']
    const allFilled = required.every(k => form[k])
    if (allFilled) {
      setStatus('success')
    } else {
      setStatus('error')
      setTimeout(() => setStatus(null), 2500)
    }
  }

  return (
    <div>
      <PageHero
        title="Book Your Journey"
        subtitle="Fill in your details and our travel advisor will reach out within 24 hours."
        image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
      />

      <section className="py-20 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-5xl mx-auto">
          {/* Info */}
          <div className="lg:col-span-2">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title">We'd Love to Plan Your Trip</h2>
            <span className="section-divider"></span>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Fill in your details and one of our travel advisors will reach out within 24 hours. We offer flexible payment options and free itinerary consultation.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: 'fa-phone', fab: false, text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: 'fa-whatsapp', fab: true, text: 'WhatsApp: +91 98765 43210', href: 'https://wa.me/919876543210' },
                { icon: 'fa-envelope', fab: false, text: 'info@vishnutourtravels.com', href: 'mailto:info@vishnutourtravels.com' },
                { icon: 'fa-map-marker-alt', fab: false, text: 'Haridwar, Uttarakhand – 249401', href: '#' },
              ].map(c => (
                <a key={c.text} href={c.href}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-sm no-underline text-sm transition-shadow hover:shadow-md"
                  style={{ color: 'var(--green)' }}>
                  <i className={`${c.fab ? 'fab' : 'fas'} ${c.icon} text-blue-500 w-5 text-center`}></i>
                  {c.text}
                </a>
              ))}
            </div>

            {/* Reassurances */}
            <div className="mt-8 p-5 rounded-lg" style={{ background: 'var(--green)' }}>
              <h4 className="font-playfair text-base mb-3 text-white">Why Book With Us?</h4>
              {['Free itinerary consultation', 'No advance payment required', 'Flexible cancellation policy', '24/7 travel support'].map(r => (
                <div key={r} className="flex items-center gap-2 text-sm text-white/80 mb-2">
                  <i className="fas fa-check-circle" style={{ color: 'var(--gold)' }}></i>
                  {r}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-xl">
            <h3 className="font-playfair text-xl mb-6" style={{ color: 'var(--green)' }}>Inquiry Form</h3>

            {status === 'success' ? (
              <div className="text-center py-12">
                <i className="fas fa-check-circle text-5xl mb-4 block" style={{ color: 'var(--green)' }}></i>
                <h3 className="font-playfair text-2xl mb-2" style={{ color: 'var(--green)' }}>Inquiry Sent!</h3>
                <p className="text-gray-500">Our travel advisor will contact you within 24 hours. Thank you for choosing Vishnu Tour & Travel!</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <FormGroup label="Full Name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  <FormGroup label="Phone Number" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
                <FormGroup label="Email Address" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--green)' }}>Tour Package *</label>
                    <select name="package" value={form.package} onChange={handleChange}
                      className="px-3 py-3 rounded border text-sm outline-none transition-colors focus:border-blue-500"
                      style={{ borderColor: '#e0d8cc', background: '#fafaf8', color: 'var(--text-dark)', fontFamily: 'Lato, sans-serif' }}>
                      <option value="">Select a package</option>
                      {['Haridwar Tour', 'Rishikesh Tour', 'Char Dham Yatra', 'Kedarnath & Badrinath', 'Customized Tour'].map(p => (
                        <option key={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <FormGroup label="Travel Date" name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <FormGroup label="No. of Travelers" name="travelers" type="number" placeholder="e.g. 4" value={form.travelers} onChange={handleChange} />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--green)' }}>Budget (per person)</label>
                    <select name="budget" value={form.budget} onChange={handleChange}
                      className="px-3 py-3 rounded border text-sm outline-none transition-colors focus:border-blue-500"
                      style={{ borderColor: '#e0d8cc', background: '#fafaf8', color: 'var(--text-dark)', fontFamily: 'Lato, sans-serif' }}>
                      <option value="">Select budget</option>
                      {['Under ₹5,000', '₹5,000 – ₹10,000', '₹10,000 – ₹20,000', '₹20,000+'].map(b => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 mb-6">
                  <label className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--green)' }}>Special Requests / Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Any special requirements, accessibility needs, or preferences..."
                    rows={4}
                    className="px-3 py-3 rounded border text-sm outline-none transition-colors focus:border-blue-500 resize-y"
                    style={{ borderColor: '#e0d8cc', background: '#fafaf8', color: 'var(--text-dark)', fontFamily: 'Lato, sans-serif', minHeight: '100px' }}
                  />
                </div>

                {status === 'error' && (
                  <div className="mb-4 text-xs text-red-600 font-semibold">Please fill in the required fields (Name, Phone, Email, Package).</div>
                )}

                <button onClick={handleSubmit} className="btn-primary w-full text-center">
                  Send Inquiry →
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function FormGroup({ label, name, type, placeholder, value, onChange, required }) {
  return (
    <div className="flex flex-col gap-1.5 mb-4">
      <label className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--green)' }}>
        {label} {required && '*'}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="px-3 py-3 rounded border text-sm outline-none transition-colors focus:border-blue-500"
        style={{ borderColor: '#e0d8cc', background: '#fafaf8', color: 'var(--text-dark)', fontFamily: 'Lato, sans-serif' }}
      />
    </div>
  )
}
