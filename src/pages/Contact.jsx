import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help you plan your perfect Uttarakhand journey. Reach out anytime."
        image="https://images.unsplash.com/photo-1580289143186-03f54224aad6?w=1200&q=80"
      />

      {/* Contact Info */}
      <section className="py-20 px-[5%]" style={{ background: 'var(--sand)' }}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {[
            { icon: 'fa-phone', title: 'Phone', lines: ['+91 98765 43210', '+91 98765 43211'], href: 'tel:+919876543210', fab: false },
            { icon: 'fa-whatsapp', title: 'WhatsApp', lines: ['+91 98765 43210', 'Available 24/7'], href: 'https://wa.me/919876543210', fab: true },
            { icon: 'fa-envelope', title: 'Email', lines: ['info@vishnutourtravels.com', 'booking@vishnutourtravels.com'], href: 'mailto:info@vishnutourtravels.com', fab: false },
            { icon: 'fa-map-marker-alt', title: 'Office', lines: ['Haridwar, Uttarakhand', 'PIN: 249401, India'], href: '#map', fab: false },
          ].map(c => (
            <a key={c.title} href={c.href}
              className="bg-white rounded-lg p-6 text-center shadow-sm no-underline block transition-shadow hover:shadow-md group">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--sand)', border: '2px solid var(--gold)' }}>
                <i className={`${c.fab ? 'fab' : 'fas'} ${c.icon} text-xl`} style={{ color: 'var(--gold)' }}></i>
              </div>
              <h3 className="font-playfair text-base mb-2 transition-colors group-hover:text-blue-dark"
                style={{ color: 'var(--green)' }}>{c.title}</h3>
              {c.lines.map(l => (
                <p key={l} className="text-sm text-gray-500">{l}</p>
              ))}
            </a>
          ))}
        </div>

        {/* Map */}
        <div id="map" className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111552.66220073012!2d78.0750!3d29.9457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390949a6f98d59c3%3A0x4cf0e84e2e2dc75f!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000"
            title="Office Location"
            className="w-full border-0"
            style={{ height: '400px', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">When to Reach Us</p>
            <h2 className="section-title">Office Hours</h2>
            <span className="section-divider mx-auto"></span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ background: 'var(--sand)' }}>
              <h3 className="font-playfair text-lg mb-4" style={{ color: 'var(--green)' }}>Office Timings</h3>
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
                { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
                { day: 'Sunday', time: '10:00 AM – 3:00 PM' },
                { day: 'Public Holidays', time: 'WhatsApp / Phone Only' },
              ].map(h => (
                <div key={h.day} className="flex justify-between items-center py-2 border-b last:border-0 text-sm"
                  style={{ borderColor: '#e0d8cc' }}>
                  <span className="font-semibold" style={{ color: 'var(--text-mid)' }}>{h.day}</span>
                  <span className="text-gray-500">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg p-6" style={{ background: 'var(--green)' }}>
              <h3 className="font-playfair text-lg mb-4 text-white">Emergency / Travel Support</h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Already on a trip with us? Our travel support line is available 24 hours a day, 7 days a week for any assistance.
              </p>
              <div className="flex flex-col gap-3">
                <a href="tel:+919876543210" className="flex items-center gap-3 text-sm no-underline hover:opacity-90" style={{ color: 'var(--gold)' }}>
                  <i className="fas fa-phone"></i> +91 98765 43210 (24/7)
                </a>
                <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-sm no-underline hover:opacity-90" style={{ color: 'var(--gold)' }}>
                  <i className="fab fa-whatsapp"></i> WhatsApp 24/7
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
