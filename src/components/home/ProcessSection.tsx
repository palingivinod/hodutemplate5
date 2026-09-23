'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/ProcessSection.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      number: '01',
      title: 'CONSULTATION',
      description:
        'Understanding the site topography, family requirements, lifestyle preferences, and long-term architectural vision.',
    },
    {
      number: '02',
      title: 'PLANNING',
      description:
        'Defining detailed drawings, structural calculations, material specifications, itemized BOQ, and baseline schedules.',
    },
    {
      number: '03',
      title: 'CONSTRUCTION',
      description:
        'Managing excavation, reinforced concrete superstructure, MEP rough-ins, waterproofing, and fine masonry.',
    },
    {
      number: '04',
      title: 'QUALITY REVIEW',
      description:
        'Reviewing critical milestones through multi-point engineering inspections and resolving micro-tolerances.',
    },
    {
      number: '05',
      title: 'HANDOVER',
      description:
        'Final inspection, comprehensive as-built documentation, operational manuals, warranty certifications, and key handover.',
    },
  ];

  return (
    <section className={styles.processSection} id="process">
      <div className="container">
        <div className={styles.headerBlock}>
          <span className="eyebrow eyebrow-sage" style={{ marginBottom: '0.75rem' }}>
            OUR PROCESS
          </span>
          <h2 className={styles.heading}>
            FROM FIRST CONVERSATION TO FINAL HANDOVER.
          </h2>
          <p className={styles.subtext}>
            A disciplined five-stage methodology engineered to eliminate uncertainty and deliver architectural excellence.
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                className={`${styles.timelineStep} ${isActive ? styles.stepActive : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className={styles.indicatorCol}>
                  <div className={styles.node} />
                </div>

                <div className={styles.contentCol}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.ctaRow}>
          <p className={styles.ctaPrompt}>
            Explore detailed stage deliverables and quality assurance gates.
          </p>
          <Link href="/process" className="btn-light" style={{ padding: '0.85rem 1.6rem' }}>
            <span>EXPLORE DETAILED METHODOLOGY</span>
            <ArrowRight size={14} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
