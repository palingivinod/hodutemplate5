import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/home/FinalCTA';
import styles from '@/styles/ServicesPage.module.css';

export const metadata: Metadata = {
  title: 'Villa Construction Services — HODU',
  description:
    'Comprehensive end-to-end villa construction capabilities: Architectural Design, Structural Engineering, Turnkey Construction, High Interiors, Landscape, and Project Management.',
};

interface DetailedService {
  number: string;
  title: string;
  lead: string;
  deliverables: string[];
}

export default function ServicesPage() {
  const services: DetailedService[] = [
    {
      number: '01',
      title: 'Villa Design & Planning',
      lead: 'Comprehensive architectural concepts, spatial planning, structural calculations, and building permit coordination developed specifically for private individual estates.',
      deliverables: [
        'Site topographical and solar orientation analysis',
        'Conceptual architectural geometry & master layout',
        'Seismic-resistant structural engineering calculations',
        'Statutory building permission documentation',
        'Coordinated MEP schematics and load estimations',
        'High-precision 3D digital massing and spatial models',
      ],
    },
    {
      number: '02',
      title: 'Villa Civil Construction',
      lead: 'Uncompromising structural execution utilizing engineered formwork, high-performance concrete mixes, and precision subterranean waterproofing systems.',
      deliverables: [
        'Engineered excavation, retaining walls & soil stabilization',
        'Foundation rafting with subterranean tanking systems',
        'Reinforced concrete columns, beams, and slabs',
        'Precision autoclaved aerated concrete (AAC) & clay block masonry',
        'Integrated seismic expansion joints and structural reveals',
        'Multi-barrier roof and podium waterproofing assemblies',
      ],
    },
    {
      number: '03',
      title: 'Turnkey Project Execution',
      lead: 'A single point of accountability covering end-to-end site operations, material supply chains, trade management, and rigorous quality governance.',
      deliverables: [
        'Single-source contractual accountability and liability',
        'Direct procurement of certified raw materials & fixtures',
        'On-site resident engineering and trade superintendence',
        'Integrated supply chain logistics and warehouse staging',
        'Comprehensive health, safety, and environmental protocols',
        'Zero-gap coordination between civil and finishing phases',
      ],
    },
    {
      number: '04',
      title: 'Interiors & High Finishing',
      lead: 'Meticulous execution of bespoke architectural millwork, imported natural stone claddings, precision fenestration, and seamless planar surfaces.',
      deliverables: [
        'Bookmatched Italian marble and natural granite installation',
        'Custom architectural timber wall paneling and cabinetry',
        'Concealed frameless acoustic internal doors and hardware',
        'Thermal-break aluminum and slim-profile structural glazing',
        'Lime wash, micro-cement, and acoustic ceiling treatments',
        'Architectural recessed lighting integration and shadow trims',
      ],
    },
    {
      number: '05',
      title: 'Landscape & Civil Hardscaping',
      lead: 'Harmonious integration of outdoor courtyards, swimming pools, sunken seating, vehicular pavers, and subterranean irrigation networks.',
      deliverables: [
        'Water-retaining reinforced concrete swimming pools & water bodies',
        'Natural basalt, granite, and porphyry stone vehicular driveways',
        'Sub-surface French drains and stormwater harvesting sumps',
        'Architectural perimeter boundary walls and security screening',
        'Integrated low-voltage landscape lighting circuits',
        'Automated multi-zone micro-drip irrigation systems',
      ],
    },
    {
      number: '06',
      title: 'Project Management & Governance',
      lead: 'Transparent cost control, critical-path scheduling, multi-tier inspection protocols, and scheduled milestone updates.',
      deliverables: [
        'Critical path method (CPM) timeline scheduling and tracking',
        'Detailed itemized bill of quantities (BOQ) cost control',
        'Multi-tier quality checksheets and third-party lab testing',
        'Bi-weekly digital site progress reports with photo logs',
        'Vendor payment reconciliation and statutory compliance',
        'Final commissioning, testing certificates & warranty handover',
      ],
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="CAPABILITIES & DISCIPLINES"
        title={
          <>
            END-TO-END VILLA<br />
            CONSTRUCTION EXPERTISE.
          </>
        }
        description="Every aspect of villa construction is managed under a single, unified engineering standard to ensure structural permanence and architectural fidelity."
      />

      <section className={styles.servicesPageSection}>
        <div className="container">
          <div className={styles.serviceList}>
            {services.map((service) => (
              <div key={service.number} className={styles.serviceItem}>
                <div className={styles.leftHeader}>
                  <span className={styles.index}>{service.number}</span>
                  <h2 className={styles.title}>{service.title}</h2>
                </div>

                <div className={styles.rightContent}>
                  <p className={styles.lead}>{service.lead}</p>

                  <div>
                    <h3 className={styles.deliverablesTitle}>Key Deliverables &amp; Engineering Scope</h3>
                    <ul className={styles.deliverablesGrid}>
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className={styles.deliverableItem}>
                          <span className={styles.bullet} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/contact" className="link-editorial">
                      <span>DISCUSS THIS CAPABILITY</span>
                      <ArrowRight size={14} className="arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
