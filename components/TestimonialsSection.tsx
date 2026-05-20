'use client';

import { useState } from 'react';

const testimonials = [
  {
    name:    'Rahul Sharma',
    area:    'Sonipat',
    rating:  5,
    text:    'Absolutely fantastic experience! Dr. Shubham is very gentle and professional. My root canal was completely painless. Highly recommend Deltin Dental to everyone in Sonipat.',
    initials: 'RS',
  },
  {
    name:    'Priya Gupta',
    area:    'Saipuram Colony',
    rating:  5,
    text:    'Dr. Sakshi is amazing! She made my kids feel so comfortable during their cleaning. The clinic is very clean and modern. Best dentist we\'ve visited so far.',
    initials: 'PG',
  },
  {
    name:    'Amit Verma',
    area:    'Sonipat',
    rating:  5,
    text:    'Got my teeth whitening done here. The results are incredible — so white and natural looking! The whole team is very caring and professional.',
    initials: 'AV',
  },
  {
    name:    'Sunita Rani',
    area:    'Murthal Road',
    rating:  5,
    text:    'I was very nervous about my tooth extraction but Dr. Shubham made me feel at ease. No pain at all! Very affordable prices and excellent service.',
    initials: 'SR',
  },
  {
    name:    'Deepak Kumar',
    area:    'Sonipat',
    rating:  5,
    text:    'Online booking system is very convenient. Got appointment same day. Dr. Sakshi is highly knowledgeable and explained everything clearly. 10/10 experience.',
    initials: 'DK',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  const t = testimonials[active];

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12">
          What Our Patients Say
        </h2>

        {/* Big quote icon */}
        <div className="text-gold/20 text-8xl font-serif leading-none mb-4 select-none">"</div>

        {/* Testimonial card */}
        <div className="min-h-[180px] transition-all duration-300">
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
            {t.text}
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">
              {t.initials}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-white/50 text-sm">{t.area}</p>
            </div>
            <Stars count={t.rating} />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-navy transition-all flex items-center justify-center"
            aria-label="Previous"
          >
            ‹
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-gold w-6' : 'bg-white/30'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 text-white hover:bg-white hover:text-navy transition-all flex items-center justify-center"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Google rating badge */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5 py-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <Stars count={5} />
              <span className="text-white font-bold text-sm ml-1">5.0</span>
            </div>
            <p className="text-white/50 text-xs">Google Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
