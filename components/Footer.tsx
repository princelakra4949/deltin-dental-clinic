import Link from 'next/link';

const services = [
  'Routine Dental Cleanings',
  'Cavity Fillings',
  'Scaling & Root Planing',
  'Tooth Extractions',
  'Teeth Whitening',
  'Root Canal Therapy',
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top strip */}
      <div className="bg-gold py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-navy font-heading font-bold text-lg">
            Ready for a healthier, brighter smile?
          </p>
          <Link href="/book-appointment" className="btn-navy text-sm shadow">
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              <path d="M15 10 H50 Q90 10 90 50 Q90 90 50 90 H15 Z" fill="#0D1B3E" stroke="#F5C518" strokeWidth="3"/>
              <path d="M28 35 Q28 25 40 25 Q50 25 52 32 Q54 25 62 25 Q72 25 72 35 Q72 50 62 70 Q58 80 52 80 Q46 80 42 70 Q32 50 28 35Z" fill="#F5C518" stroke="white" strokeWidth="2"/>
            </svg>
            <div>
              <span className="block text-white font-heading font-bold text-lg">Deltin</span>
              <span className="block text-gold text-xs font-semibold tracking-widest -mt-1">DENTAL CLINIC</span>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Expert dental care by Dr. Shubham &amp; Dr. Sakshi in Saipuram Colony, Sonipat. Your smile is our priority.
          </p>
          {/* Stars */}
          <div className="flex items-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="text-white/60 text-xs ml-1">5.0 on Google</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'Home',            href: '/' },
              { label: 'About Us',        href: '/about' },
              { label: 'Our Services',    href: '/services' },
              { label: 'Book Appointment', href: '/book-appointment' },
              { label: 'Contact Us',      href: '/contact' },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  <span className="text-gold text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest">Our Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s}>
                <Link href="/services" className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-2">
                  <span className="text-gold text-xs">›</span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-widest">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-gold mt-1">📍</span>
              <span className="text-white/70">Saipuram Colony, Sonipat, Haryana, India</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="text-gold">📞</span>
              <a href="tel:7090801004" className="text-white/70 hover:text-gold transition-colors">+91 7090801004</a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="text-gold">💬</span>
              <a href="https://wa.me/917090801004" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="text-gold">🕐</span>
              <span className="text-white/70">Mon–Sun: 9:00 AM – 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Deltin Dental Clinic. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Dr. Shubham &amp; Dr. Sakshi — Dental Surgeons
          </p>
        </div>
      </div>
    </footer>
  );
}
