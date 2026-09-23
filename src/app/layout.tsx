import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'HODU — Bespoke Villa Design & Construction',
  description:
    'HODU brings design, planning and construction together to create thoughtfully built individual villas with complete clarity from concept to completion.',
  keywords: [
    'Luxury Villa Construction',
    'Bespoke Villa Construction',
    'Villa Design & Construction',
    'Turnkey Villa Construction',
    'Custom Villa Builders',
    'Luxury Villa Builders',
    'Villa Construction Hyderabad',
  ],
  authors: [{ name: 'HODU' }],
  metadataBase: new URL('https://hoduvillas.com'),
  openGraph: {
    title: 'HODU — Bespoke Villa Design & Construction',
    description:
      'HODU brings design, planning and construction together to create thoughtfully built individual villas with complete clarity from concept to completion.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HODU',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: 'HODU',
  alternateName: 'HODU Bespoke Villa Design & Construction',
  description:
    'HODU specializes exclusively in designing, planning, and constructing individual bespoke villas from concept to final handover.',
  url: 'https://hoduvillas.com',
  telephone: '+919849012345',
  email: 'enquiries@hoduvillas.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Road No. 36, Jubilee Hills',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500033',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Hyderabad, Telangana & South India',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Header />
          <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
