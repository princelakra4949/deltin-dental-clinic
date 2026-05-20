import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Our Services' };

const services = [
  {
    id: 1,
    title:   'Routine Dental Cleanings',
    icon:    '🪥',
    tagline: 'Keep your smile healthy & fresh',
    desc:    'Regular professional cleanings are the foundation of good oral health. Our hygienists remove built-up plaque and tartar that regular brushing can\'t reach, polishing your teeth and protecting against gum disease and cavities.',
    benefits: ['Removes plaque & tartar', 'Freshens breath', 'Prevents gum disease', 'Whitens surface stains'],
    duration: '30–45 min',
    frequency: 'Every 6 months',
    color: 'border-blue-200 bg-blue-50',
    iconBg: 'bg-blue-100',
  },
  {
    id: 2,
    title:   'Cavity Fillings',
    icon:    '🦷',
    tagline: 'Restore your tooth naturally',
    desc:    'We use tooth-coloured composite resin fillings that blend seamlessly with your natural teeth. The procedure is quick, painless, and restores the tooth\'s full function while protecting it from further decay.',
    benefits: ['Tooth-coloured & natural', 'Quick procedure', 'Durable & long-lasting', 'Prevents further decay'],
    duration: '45–60 min',
    frequency: 'As needed',
    color: 'border-amber-200 bg-amber-50',
    iconBg: 'bg-amber-100',
  },
  {
    id: 3,
    title:   'Scaling & Root Planing',
    icon:    '🔬',
    tagline: 'Deep clean below the gum line',
    desc:    'Scaling and root planing is a deep cleaning procedure that targets the area below the gum line. It removes bacteria, tartar, and infected tissue to treat gum disease and prevent tooth loss.',
    benefits: ['Treats gum disease', 'Removes deep tartar', 'Reduces gum inflammation', 'Prevents tooth loss'],
    duration: '60–90 min',
    frequency: 'As recommended',
    color: 'border-teal-200 bg-teal-50',
    iconBg: 'bg-teal-100',
  },
  {
    id: 4,
    title:   'Tooth Extractions',
    icon:    '⚕️',
    tagline: 'Safe, painless, and stress-free',
    desc:    'Whether it\'s a wisdom tooth or a severely damaged tooth, our dental surgeons perform extractions with precision and care. Using advanced anaesthesia, the procedure is virtually painless with fast recovery.',
    benefits: ['Painless procedure', 'Quick recovery', 'Relieves toothache', 'Prevents infection spread'],
    duration: '20–45 min',
    frequency: 'As needed',
    color: 'border-red-200 bg-red-50',
    iconBg: 'bg-red-100',
  },
  {
    id: 5,
    title:   'Teeth Whitening',
    icon:    '✨',
    tagline: 'Brighten your smile professionally',
    desc:    'Our professional-grade whitening treatments deliver dramatically brighter results compared to over-the-counter products. Safe, effective and supervised by experts — transform your smile in just one visit.',
    benefits: ['Visibly whiter teeth', 'Safe & supervised', 'Long-lasting results', 'Boosts confidence'],
    duration: '60–90 min',
    frequency: 'Every 6–12 months',
    color: 'border-yellow-200 bg-yellow-50',
    iconBg: 'bg-yellow-100',
  },
  {
    id: 6,
    title:   'Root Canal Therapy',
    icon:    '💉',
    tagline: 'Save your tooth, relieve pain',
    desc:    'Root canal therapy is one of the most misunderstood procedures in dentistry. With modern techniques and anaesthesia, it\'s no more uncomfortable than getting a filling — and it saves your natural tooth from extraction.',
    benefits: ['Saves natural tooth', 'Relieves severe pain', 'Modern painless technique', 'Prevents reinfection'],
    duration: '60–120 min',
    frequency: 'As needed',
    color: 'border-purple-200 bg-purple-50',
    iconBg: 'bg-purple-100',
  },
];

export default function ServicesPage() {
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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Our Dental Services
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive dental care under one roof — from routine checkups to advanced oral surgery.
            All procedures performed by qualified dental surgeons.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-navy -mb-1">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="white"/>
        </svg>
      </div>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`rounded-3xl border-2 p-8 ${svc.color} transition-all hover:shadow-xl`}
              >
                <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>
                  {/* Left: Icon + title */}
                  <div className="lg:w-1/3">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 ${svc.iconBg}`}>
                      {svc.icon}
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-navy mb-2">{svc.title}</h2>
                    <p className="text-gray-500 font-medium text-sm italic mb-4">{svc.tagline}</p>
                    <div className="flex gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        {svc.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {svc.frequency}
                      </span>
                    </div>
                  </div>

                  {/* Right: Description + benefits */}
                  <div className="lg:w-2/3">
                    <p className="text-gray-600 leading-relaxed mb-6">{svc.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {svc.benefits.map(b => (
                        <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-5 h-5 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/>
                            </svg>
                          </div>
                          {b}
                        </div>
                      ))}
                    </div>
                    <Link href="/book-appointment" className="btn-primary text-sm mt-6 inline-flex">
                      Book This Treatment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4F6FB]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-3">
            Not sure which treatment you need?
          </h2>
          <p className="text-gray-500 mb-6">Book a consultation with Dr. Shubham or Dr. Sakshi and get personalised advice.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-appointment" className="btn-primary px-8 py-3">Book Consultation</Link>
            <a href="tel:7090801004" className="btn-navy px-8 py-3">Call: 7090801004</a>
          </div>
        </div>
      </section>
    </div>
  );
}
