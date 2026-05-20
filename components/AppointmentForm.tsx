'use client';

import { useState } from 'react';

const services = [
  'Routine Dental Cleaning',
  'Cavity Filling',
  'Scaling & Root Planing',
  'Tooth Extraction',
  'Teeth Whitening',
  'Root Canal Therapy',
  'General Checkup / Consultation',
  'Other',
];

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
  '2:00 PM',  '2:30 PM',  '3:00 PM',  '3:30 PM',
  '4:00 PM',  '4:30 PM',  '5:00 PM',  '5:30 PM',
  '6:00 PM',  '6:30 PM',  '7:00 PM',  '7:30 PM',
  '8:00 PM',  '8:30 PM',
];

type FormData = {
  name: string;
  phone: string;
  email: string;
  doctor: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', doctor: '', service: '', date: '', time: '', notes: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const today = new Date().toISOString().split('T')[0];

  const update = (field: keyof FormData, value: string) =>
    setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', phone: '', email: '', doctor: '', service: '', date: '', time: '', notes: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-12 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-2xl font-heading font-bold text-navy mb-3">Appointment Requested!</h2>
        <p className="text-gray-500 mb-6">
          Thank you! We&apos;ll confirm your appointment via WhatsApp or call within a few hours.
        </p>
        <div className="bg-[#F4F6FB] rounded-2xl p-4 mb-6 text-sm text-gray-600">
          <p>📞 For urgent queries, call us at <strong className="text-navy">+91 7090801004</strong></p>
        </div>
        <button onClick={() => setStatus('idle')} className="btn-primary">
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8">
      <h2 className="font-heading font-bold text-navy text-2xl mb-1">Appointment Details</h2>
      <p className="text-gray-400 text-sm mb-8">Fill in your details and we&apos;ll confirm the slot.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal info */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Full Name *</label>
            <input
              type="text"
              required
              className="input-field"
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={e => update('name', e.target.value)}
            />
          </div>
          <div>
            <label className="label">Phone Number *</label>
            <input
              type="tel"
              required
              className="input-field"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="label">Email Address (optional)</label>
          <input
            type="email"
            className="input-field"
            placeholder="yourname@email.com"
            value={form.email}
            onChange={e => update('email', e.target.value)}
          />
        </div>

        {/* Doctor selection */}
        <div>
          <label className="label">Preferred Doctor *</label>
          <div className="grid grid-cols-3 gap-3">
            {['Dr. Shubham', 'Dr. Sakshi', 'No Preference'].map(doc => (
              <button
                key={doc}
                type="button"
                onClick={() => update('doctor', doc)}
                className={`py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all ${
                  form.doctor === doc
                    ? 'border-navy bg-navy text-white'
                    : 'border-gray-200 text-gray-600 hover:border-navy/30'
                }`}
              >
                {doc}
              </button>
            ))}
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="label">Service Required *</label>
          <select
            required
            className="input-field"
            value={form.service}
            onChange={e => update('service', e.target.value)}
          >
            <option value="">Select a service...</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* Date + Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label">Preferred Date *</label>
            <input
              type="date"
              required
              min={today}
              className="input-field"
              value={form.date}
              onChange={e => update('date', e.target.value)}
            />
          </div>
          <div>
            <label className="label">Preferred Time *</label>
            <select
              required
              className="input-field"
              value={form.time}
              onChange={e => update('time', e.target.value)}
            >
              <option value="">Select a time...</option>
              {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="label">Additional Notes (optional)</label>
          <textarea
            className="input-field resize-none"
            rows={3}
            placeholder="Any specific concern or information you'd like to share..."
            value={form.notes}
            onChange={e => update('notes', e.target.value)}
          />
        </div>

        {/* Error */}
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
            Something went wrong. Please try again or call us at{' '}
            <a href="tel:7090801004" className="font-bold">7090801004</a>.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Booking...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Confirm Appointment
            </>
          )}
        </button>

        <p className="text-center text-gray-400 text-xs">
          By booking, you agree to receive a confirmation call/WhatsApp from our team.
        </p>
      </form>
    </div>
  );
}
