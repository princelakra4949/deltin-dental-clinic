import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact Us' };

const contactInfo = [
  {
    icon: '📍',
    title: 'Our Location',
    lines: ['Saipuram Colony, Sonipat,', 'Haryana, India'],
    link: 'https://www.google.com/maps/search/Saipuram+Colony+Sonipat',
    linkLabel: 'Get Directions',
  },
  {
    icon: '📞',
    title: 'Phone / WhatsApp',
    lines: ['+91 7090801004'],
    link: 'tel:7090801004',
    linkLabel: 'Call Now',
  },
  {
    icon: '🕐',
    title: 'Working Hours',
    lines: ['Monday – Sunday', '9:00 AM – 9:00 PM'],
    link: null,
    linkLabel: null,
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    lines: ['Chat with us instantly', 'for quick queries'],
    link: 'https://wa.me/917090801004?text=Hello%2C%20I%20have%20a%20question%20about%20Deltin%20Dental%20Clinic.',
    linkLabel: 'Open WhatsApp',
  },
];

export default function ContactPage() {
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
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-5">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out to book an appointment, ask a question, or find us on the map.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-navy -mb-1">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 50 L0 25 Q360 0 720 25 Q1080 50 1440 25 L1440 50 Z" fill="white"/>
        </svg>
      </div>

      {/* Contact cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map(info => (
              <div key={info.title} className="card text-center hover:shadow-xl border border-gray-100 hover:border-gold/20 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{info.icon}</div>
                <h3 className="font-heading font-bold text-navy mb-2">{info.title}</h3>
                {info.lines.map(line => (
                  <p key={line} className="text-gray-500 text-sm">{line}</p>
                ))}
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-gold font-semibold text-xs hover:underline"
                  >
                    {info.linkLabel} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map + Form grid */}
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Google Map embed */}
            <div>
              <h2 className="section-title text-2xl mb-4">Find Us</h2>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-80 lg:h-full min-h-[320px] bg-[#F4F6FB] flex items-center justify-center">
                <iframe
                  title="Deltin Dental Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112091.72399047!2d76.9241!3d28.9948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db07d000abf11%3A0x48bca4d0a2bb1c5!2sSonipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="section-title text-2xl mb-4">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Your Name</label>
                    <input type="text" className="input-field" placeholder="Rahul Sharma" />
                  </div>
                  <div>
                    <label className="label">Phone Number</label>
                    <input type="tel" className="input-field" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="label">Email Address (optional)</label>
                  <input type="email" className="input-field" placeholder="yourname@email.com" />
                </div>
                <div>
                  <label className="label">Subject</label>
                  <input type="text" className="input-field" placeholder="Query about teeth whitening" />
                </div>
                <div>
                  <label className="label">Your Message</label>
                  <textarea
                    className="input-field resize-none"
                    rows={5}
                    placeholder="Hello, I have a question about..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-base"
                >
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                </button>
                <p className="text-center text-gray-400 text-xs">
                  Or WhatsApp us directly at{' '}
                  <a href="https://wa.me/917090801004" className="text-gold font-semibold">+91 7090801004</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
