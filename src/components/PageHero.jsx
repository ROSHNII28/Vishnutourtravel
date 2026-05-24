export default function PageHero({ title, subtitle, image }) {
  return (
    <div
      className="relative flex items-center justify-center text-white text-center"
      style={{
        marginTop: '68px',
        minHeight: '320px',
        background: `linear-gradient(to bottom, rgba(20,50,35,0.7), rgba(10,30,20,0.82)), url('${image}') center/cover no-repeat`,
      }}
    >
      <div className="relative z-10 px-5 py-16 hero-animate">
        <div
          className="inline-block mb-4 text-xs tracking-widest uppercase rounded-full px-5 py-1.5"
          style={{ background: 'rgba(212,175,55,0.25)', border: '1px solid var(--gold)', color: 'var(--gold)' }}
        >
          ✦ Vishnu Tour & Travel ✦
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.25 }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-white/85 text-base max-w-xl mx-auto font-light">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
