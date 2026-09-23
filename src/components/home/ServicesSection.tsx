import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/ServicesSection.module.css';

interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export default function ServicesSection() {
  const leftServices: ServiceItem[] = [
    {
      number: '01',
      title: 'Villa Design',
      description: 'Architectural planning, spatial geometry, and structural coordination tailored precisely to individual lifestyle needs.',
    },
    {
      number: '02',
      title: 'Villa Construction',
      description: 'End-to-end civil engineering, reinforced concrete superstructure, and strict adherence to structural tolerances.',
    },
    {
      number: '03',
      title: 'Turnkey Execution',
      description: 'Single-source responsibility managing statutory approvals, material procurement, site logistics, and trade coordination.',
    },
  ];

  const rightServices: ServiceItem[] = [
    {
      number: '04',
      title: 'Interiors & Finishing',
      description: 'Custom joinery, bespoke stone masonry, fenestration integration, and flawless surface treatments.',
    },
    {
      number: '05',
      title: 'Landscape',
      description: 'Seamless indoor-outdoor transitions, architectural hardscaping, private courtyards, and integrated drainage systems.',
    },
    {
      number: '06',
      title: 'Project Management',
      description: 'Rigorous schedule oversight, transparent milestone reporting, cost control, and comprehensive quality assurance.',
    },
  ];

  return (
    <section className={`section-wrapper ${styles.servicesSection}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className="eyebrow">WHAT WE DO</span>
          <h2 className={styles.heading}>
            END-TO-END<br />
            VILLA CONSTRUCTION.
          </h2>
          <p className={styles.subtext}>
            From design to handover, every detail is managed by a coordinated
            team committed to quality and clarity.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {/* Left Column */}
          <div className={styles.serviceCol}>
            {leftServices.map((service) => (
              <Link href="/services" key={service.number} className={styles.serviceRow}>
                <div className={styles.rowHeader}>
                  <div className={styles.titleWrapper}>
                    <span className={styles.index}>{service.number}</span>
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>
                  <ArrowRight size={18} className={styles.arrow} />
                </div>
                <p className={styles.description}>{service.description}</p>
              </Link>
            ))}
          </div>

          {/* Right Column */}
          <div className={styles.serviceCol}>
            {rightServices.map((service) => (
              <Link href="/services" key={service.number} className={styles.serviceRow}>
                <div className={styles.rowHeader}>
                  <div className={styles.titleWrapper}>
                    <span className={styles.index}>{service.number}</span>
                    <h3 className={styles.title}>{service.title}</h3>
                  </div>
                  <ArrowRight size={18} className={styles.arrow} />
                </div>
                <p className={styles.description}>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
