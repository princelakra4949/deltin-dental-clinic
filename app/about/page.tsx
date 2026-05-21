import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About Us' };

const values = [
  { icon: '💙', title: 'Patient-First Care',   desc: 'Every decision is made with your comfort, safety and wellbeing in mind.' },
  { icon: '🔬', title: 'Modern Technology',    desc: 'We use the latest dental equipment and techniques for the best outcomes.' },
  { icon: '😌', title: 'Pain-Free Treatment',  desc: 'Our gentle approach and advanced anaesthesia make procedures comfortable.' },
  { icon: '💰', title: 'Affordable Pricing',   desc: 'High-quality dental care at transparent, fair prices for everyone.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Caring for Sonipat's Smiles
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Deltin Dental Clinic is a trusted dental practice in Saipuram Colony, Sonipat, led by two dedicated
            dental surgeons committed to providing exceptional, patient-centred care.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-navy -mb-1">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="white"/>
        </svg>
      </div>

      {/* About clinic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title">About Deltin Dental Clinic</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mt-4">
              <p>
                Deltin Dental Clinic was founded with a single mission — to deliver world-class dental care to the
                community of Sonipat at accessible prices. Located in Saipuram Colony, our clinic serves patients
                from across the city and surrounding areas.
              </p>
              <p>
                Under the expert guidance of <strong className="text-navy">Dr. Shubham</strong> and{' '}
                <strong className="text-navy">Dr. Sakshi</strong>, our clinic offers a full spectrum of dental
                treatments — from routine cleanings and fillings to complex oral surgeries and cosmetic procedures.
              </p>
              <p>
                We believe that a healthy smile is the foundation of confidence. Our state-of-the-art equipment,
                combined with a warm and welcoming environment, ensures that every visit is as comfortable
                and stress-free as possible.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-navy">500+</p>
                <p className="text-gray-500 text-sm">Patients Treated</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-navy">6+</p>
                <p className="text-gray-500 text-sm">Treatments Available</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-navy">5★</p>
                <p className="text-gray-500 text-sm">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-[#F4F6FB] rounded-3xl p-10 text-center relative">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48 mx-auto">
                <circle cx="100" cy="100" r="90" fill="#0D1B3E" opacity="0.05"/>
                <path d="M50 70 Q50 30 80 30 Q105 30 108 52 Q111 30 136 30 Q166 30 166 70 Q166 130 146 165 Q136 185 108 185 Q80 185 70 165 Q50 130 50 70Z"
                      fill="white" stroke="#CBD5E1" strokeWidth="3"/>
                <path d="M88 100 L88 155" stroke="#0D1B3E" strokeWidth="4" strokeLinecap="round"/>
                <path d="M108 95 L108 165" stroke="#0D1B3E" strokeWidth="4" strokeLinecap="round"/>
                <path d="M128 100 L128 155" stroke="#0D1B3E" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3 className="text-navy font-heading font-bold text-xl mt-4">Deltin Dental Clinic</h3>
              <p className="text-gray-500 text-sm mt-1">Saipuram Colony, Sonipat</p>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gold rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-navy font-bold text-sm">Open 7 Days</p>
                <p className="text-navy/70 text-xs">9AM – 9PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">The Experts</p>
            <h2 className="section-title">Meet Dr. Shubham & Dr. Sakshi</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Dr. Shubham',
                qual: 'BDS — Dental Surgeon',
                bio:  'Dr. Shubham is a highly skilled dental surgeon with expertise in oral surgery, root canal therapy and restorative dentistry. His gentle technique and patient-first approach have earned him the trust of hundreds of patients in Sonipat.',
                initials: 'DS',
                skills: ['Oral Surgery', 'Root Canal Therapy', 'Restorative Dentistry', 'Painless Extractions'],
              },
              {
                name: 'Dr. Sakshi',
                qual: 'BDS — Dental Surgeon',
                bio:  'Dr. Sakshi specialises in preventive and cosmetic dentistry, bringing warmth and precision to every appointment. Her expertise in teeth whitening, scaling and gum treatments has transformed countless smiles across Sonipat.',
                initials: 'DK',
                skills: ['Cosmetic Dentistry', 'Teeth Whitening', 'Scaling & Cleaning', 'Gum Treatment'],
              },
            ].map(doc => (
              <div key={doc.name} className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center">
                    <span className="text-gold font-heading font-bold text-xl">{doc.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-xl">{doc.name}</h3>
                    <p className="text-gold text-sm font-semibold">{doc.qual}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{doc.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {doc.skills.map(s => (
                    <span key={s} className="text-xs bg-navy/5 text-navy px-3 py-1 rounded-full font-medium">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="card text-center hover:border-gold/30 border border-transparent group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                <h3 className="font-heading font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4">
            Ready to experience the Deltin Dental difference?
          </h2>
          <Link href="/book-appointment" className="btn-navy text-base px-8 py-4 shadow-lg">
            Book Your Appointment Now
          </Link>
        </div>
      </section>
    </div>
  );
}
