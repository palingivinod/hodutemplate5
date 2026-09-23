import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Privacy Policy — HODU',
  description: 'Privacy policy and client data confidentiality standards of HODU.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL & CONFIDENTIALITY"
        title="PRIVACY POLICY"
        description="We protect the privacy and confidentiality of our villa clients with utmost diligence."
      />
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-warm-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--brand-deep-forest)' }}>Client Information Protection</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-slate-grey)' }}>
            HODU respects the privacy of every client. All architectural drawings, site specifications, budget allocations, and personal details shared with HODU remain strictly confidential and are protected under non-disclosure agreements.
          </p>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--brand-deep-forest)' }}>Data Collection & Usage</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-slate-grey)' }}>
            Information submitted via our consultation enquiry forms is used solely to respond to project enquiries, conduct site feasibility assessments, and structure construction proposals. We never sell, lease, or share client information with third-party advertisers.
          </p>
        </div>
      </section>
    </>
  );
}
