import Link from 'next/link';

const doctors = [
  {
    name:        'Dr. Shubham',
    title:       'BDS, Dental Surgeon',
    speciality:  'Oral Surgery & Restorative Dentistry',
    experience:  '5+ Years Experience',
    highlights:  ['Root Canal Specialist', 'Oral Surgery', 'Cosmetic Dentistry', 'Painless Extractions'],
    initials:    'DS',
  },
  {
    name:        'Dr. Sakshi',
    title:       'BDS, Dental Surgeon',
    speciality:  'Preventive & Cosmetic Dentistry',
    experience:  '5+ Years Experience',
    highlights:  ['Teeth Whitening', 'Scaling & Cleaning', 'Cavity Fillings', 'Gum Treatment'],
    initials:    'DK',
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="section-subtitle">Meet The Team</p>
          <h2 className="section-title">Your Dental Experts</h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-3 text-base">
            Our experienced dental surgeons bring skill, care, and the latest techniques to every appointment.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="group relative bg-white rounded-3xl border border-gray-100 hover:border-gold/30 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Top navy band */}
              <div className="bg-navy h-28 relative flex items-end justify-center pb-0">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5 border border-white/10" />
                  <div className="absolute -bottom-4 left-8 w-32 h-32 rounded-full bg-gold/10" />
                </div>
                {/* Avatar */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-gold border-4 border-white shadow-xl flex items-center justify-center translate-y-12">
                  <span className="text-navy font-heading font-bold text-2xl">{doc.initials}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 pb-8 px-8 text-center">
                <h3 className="font-heading font-bold text-navy text-2xl">{doc.name}</h3>
                <p className="text-gold font-semibold text-sm mt-1">{doc.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{doc.speciality}</p>

                {/* Experience badge */}
                <div className="inline-block mt-3 px-3 py-1 bg-navy/5 rounded-full text-navy text-xs font-semibold">
                  {doc.experience}
                </div>

                {/* Highlights */}
                <div className="mt-5 flex flex-wrap gap-2 justify-center">
                  {doc.highlights.map(h => (
                    <span key={h} className="text-xs bg-gold/10 text-gold-700 px-3 py-1 rounded-full font-medium border border-gold/20">
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="/book-appointment"
                  className="mt-6 inline-flex btn-primary text-sm px-6 py-2.5 w-full justify-center"
                >
                  Book with {doc.name.split(' ')[1]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
