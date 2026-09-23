import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Terms of Engagement — HODU',
  description: 'Terms of engagement and contractual standards for HODU villa construction.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="LEGAL & CONTRACTUAL"
        title="TERMS OF ENGAGEMENT"
        description="Our transparent framework for bespoke villa design, planning, and construction contracts."
      />
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-warm-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--brand-deep-forest)' }}>Contractual Transparency</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-slate-grey)' }}>
            All construction works undertaken by HODU are governed by formal, itemized turnkey contracts detailing scope of work, technical specifications, payment milestones linked to physical site inspections, and established completion schedules.
          </p>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: 'var(--brand-deep-forest)' }}>Quality Standards & Warranties</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--text-slate-grey)' }}>
            We guarantee that all materials used meet or exceed the specified Indian and international engineering standards. Every villa delivered is covered by our comprehensive structural warranty and 12-month defect liability coverage.
          </p>
        </div>
      </section>
    </>
  );
}
