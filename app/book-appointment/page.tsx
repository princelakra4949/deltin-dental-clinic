import type { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';

export const metadata: Metadata = { title: 'Book Appointment' };

export default function BookAppointmentPage() {
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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Online Booking</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Book Your Appointment
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose your preferred doctor, date and time. We&apos;ll confirm your appointment via WhatsApp or call.
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {['Fill the form', 'We confirm', 'Visit the clinic', 'Smile!'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-white text-xs font-semibold">
                  <span className="w-5 h-5 rounded-full bg-gold text-navy flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </div>
                {i < 3 && <span className="text-white/30 text-lg">›</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-navy -mb-1">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="white"/>
        </svg>
      </div>

      {/* Form section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-navy rounded-3xl p-6 text-white">
              <h3 className="font-heading font-bold text-lg mb-4 text-gold">Clinic Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">📍</span>
                  <span className="text-white/80">Saipuram Colony, Sonipat, Haryana</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">📞</span>
                  <a href="tel:7090801004" className="text-white/80 hover:text-gold transition-colors">+91 7090801004</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-gold">🕐</span>
                  <span className="text-white/80">Mon–Sun: 9:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F4F6FB] rounded-3xl p-6">
              <h3 className="font-heading font-bold text-navy text-lg mb-4">Our Doctors</h3>
              {[
                { name: 'Dr. Shubham', role: 'Oral Surgery, Root Canal', initials: 'DS' },
                { name: 'Dr. Sakshi',  role: 'Cosmetic, Preventive',     initials: 'DK' },
              ].map(doc => (
                <div key={doc.name} className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <span className="text-gold font-bold text-xs">{doc.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{doc.name}</p>
                    <p className="text-gray-500 text-xs">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-3xl p-6">
              <p className="text-gold font-semibold text-sm mb-1">⚡ Same-Day Slots</p>
              <p className="text-navy text-sm">Call or WhatsApp us for urgent appointments — we&apos;ll do our best to accommodate you.</p>
              <a
                href="https://wa.me/917090801004?text=I%20need%20an%20urgent%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp for urgent slots →
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}
