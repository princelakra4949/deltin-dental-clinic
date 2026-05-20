const stats = [
  { value: '500+',  label: 'Happy Patients',   icon: '😊' },
  { value: '2',     label: 'Expert Surgeons',   icon: '👨‍⚕️' },
  { value: '6+',    label: 'Treatments Offered', icon: '🦷' },
  { value: '12hrs', label: 'Open Daily',         icon: '🕐' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-navy-50 hover:bg-navy hover:text-white group transition-all duration-300 border border-gray-100 hover:border-navy"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-heading font-bold text-navy group-hover:text-gold transition-colors">
                {stat.value}
              </p>
              <p className="text-gray-500 group-hover:text-white/70 text-sm mt-1 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
