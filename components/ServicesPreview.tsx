import Link from 'next/link';

const services = [
  {
    title: 'Routine Dental Cleanings',
    desc:  'Professional cleaning to remove plaque and tartar, keeping your gums healthy and your breath fresh.',
    icon:  '🪥',
    color: 'bg-blue-50 group-hover:bg-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    title: 'Cavity Fillings',
    desc:  'Tooth-coloured composite fillings that restore your tooth\'s shape and function seamlessly.',
    icon:  '🦷',
    color: 'bg-amber-50 group-hover:bg-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    title: 'Scaling & Root Planing',
    desc:  'Deep-cleaning procedure that removes bacteria from below the gum line to treat gum disease.',
    icon:  '🔬',
    color: 'bg-teal-50 group-hover:bg-teal-100',
    iconBg: 'bg-teal-100',
  },
  {
    title: 'Tooth Extractions',
    desc:  'Safe, painless removal of damaged or problematic teeth using advanced techniques.',
    icon:  '⚕️',
    color: 'bg-red-50 group-hover:bg-red-100',
    iconBg: 'bg-red-100',
  },
  {
    title: 'Teeth Whitening',
    desc:  'Professional-grade whitening treatments that give you a brighter, more confident smile.',
    icon:  '✨',
    color: 'bg-yellow-50 group-hover:bg-yellow-100',
    iconBg: 'bg-yellow-100',
  },
  {
    title: 'Root Canal Therapy',
    desc:  'Pain-free root canal treatment to save your natural tooth and relieve severe dental pain.',
    icon:  '💉',
    color: 'bg-purple-50 group-hover:bg-purple-100',
    iconBg: 'bg-purple-100',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-[#F4F6FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-subtitle">What We Offer</p>
          <h2 className="section-title">Our Dental Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-base">
            From routine check-ups to advanced procedures, our skilled dental surgeons provide comprehensive
            care tailored to every patient.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`group card border border-transparent hover:border-gold/20 cursor-pointer ${svc.color} transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${svc.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                {svc.icon}
              </div>
              <h3 className="font-heading font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                {svc.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-navy text-sm px-8 py-3">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
