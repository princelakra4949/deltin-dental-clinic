import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'Deltin Dental Clinic | Saipuram Colony, Sonipat',
    template: '%s | Deltin Dental Clinic',
  },
  description:
    'Deltin Dental Clinic in Saipuram Colony, Sonipat. Expert dental care by Dr. Shubham & Dr. Sakshi — dental surgeons. Book your appointment today!',
  keywords: [
    'dental clinic Sonipat',
    'dentist Sonipat',
    'Deltin Dental',
    'Dr Shubham dentist',
    'Dr Sakshi dentist',
    'teeth whitening Sonipat',
    'root canal Sonipat',
    'Saipuram Colony dental',
  ],
  openGraph: {
    title: 'Deltin Dental Clinic | Saipuram Colony, Sonipat',
    description: 'Expert dental care by Dr. Shubham & Dr. Sakshi. Book your appointment today!',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="page-wrapper">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
