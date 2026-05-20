import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden flex items-center">

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-white/[0.03] border border-white/5" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-white/[0.03] border border-white/5" />
        {/* Gold accent blobs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
            <span className="text-gold text-xs font-semibold tracking-wide">Trusted Dental Care in Sonipat</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            Your Smile,{' '}
            <span className="text-gold relative">
              Our Priority
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10 Q75 2 150 6 Q225 10 298 2" stroke="#F5C518" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
              </svg>
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            Expert dental treatment by <strong className="text-white">Dr. Shubham</strong> &amp;{' '}
            <strong className="text-white">Dr. Sakshi</strong> — Dental Surgeons at Deltin Dental Clinic,
            Saipuram Colony, Sonipat. Compassionate care for the whole family.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/book-appointment" className="btn-primary text-base px-8 py-4 shadow-xl">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book Appointment
            </Link>
            <a href="tel:7090801004" className="btn-outline text-base px-8 py-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call Us Now
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex -space-x-2">
              {['S', 'R', 'A', 'P'].map((letter, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-navy flex items-center justify-center text-xs font-bold text-navy"
                  style={{ backgroundColor: i % 2 === 0 ? '#F5C518' : '#E8EBF3' }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-xs mt-0.5">500+ happy patients</p>
            </div>
          </div>
        </div>

        {/* Right — decorative card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            {/* Floating card: Clinic hours */}
            <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 z-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-navy text-xs font-semibold mb-1">Today&apos;s Hours</p>
              <p className="text-navy-800 font-heading font-bold text-sm">9:00 AM – 9:00 PM</p>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-600 text-xs font-semibold">Open Now</span>
              </div>
            </div>

            {/* Main visual card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm w-80">
              {/* Tooth SVG large */}
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-36">
                  <path d="M20 30 Q20 5 40 5 Q58 5 60 20 Q62 5 80 5 Q100 5 100 30 Q100 75 85 110 Q78 130 62 130 Q46 130 40 110 Q25 75 20 30Z"
                        fill="#F5C518" stroke="white" strokeWidth="3"/>
                  <path d="M47 55 L47 100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M60 50 L60 110" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M73 55 L73 100" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>

              <h3 className="text-white font-heading font-bold text-xl text-center mb-1">Deltin Dental</h3>
              <p className="text-white/50 text-sm text-center mb-6">Saipuram Colony, Sonipat</p>

              {/* Doctor badges */}
              <div className="space-y-3">
                {[
                  { name: 'Dr. Shubham', role: 'Dental Surgeon' },
                  { name: 'Dr. Sakshi',  role: 'Dental Surgeon' },
                ].map(doc => (
                  <div key={doc.name} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                    <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">
                      {doc.name.split(' ')[1][0]}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{doc.name}</p>
                      <p className="text-white/50 text-xs">{doc.role}</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating card: next appointment */}
            <div className="absolute -bottom-8 -right-8 bg-gold rounded-2xl shadow-2xl p-4 z-10">
              <p className="text-navy text-xs font-semibold">⚡ Quick Booking</p>
              <p className="text-navy-800 font-heading font-bold text-sm mt-0.5">Same-day slots available</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
