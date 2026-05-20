'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home',        href: '/' },
  { label: 'About Us',    href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Contact',     href: '/contact' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg py-2' : 'bg-navy/95 backdrop-blur-sm py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* SVG Logo mark */}
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
              {/* D shape */}
              <path d="M15 10 H50 Q90 10 90 50 Q90 90 50 90 H15 Z" fill="#0D1B3E" stroke="white" strokeWidth="2"/>
              {/* Tooth */}
              <path d="M28 35 Q28 25 40 25 Q50 25 52 32 Q54 25 62 25 Q72 25 72 35 Q72 50 62 70 Q58 80 52 80 Q46 80 42 70 Q32 50 28 35Z" fill="#F5C518" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-white font-heading font-bold text-lg tracking-wide">
              Deltin
            </span>
            <span className="block text-gold text-xs font-semibold tracking-widest -mt-1">
              DENTAL CLINIC
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-gold text-navy-900'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book Appointment CTA */}
        <Link
          href="/book-appointment"
          className="hidden md:inline-flex btn-primary text-sm shadow-lg"
        >
          Book Appointment
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-1 border-t border-white/10 mt-2 pt-2">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                pathname === link.href
                  ? 'bg-gold text-navy-900'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book-appointment"
            className="btn-primary mt-2 justify-center text-sm"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
