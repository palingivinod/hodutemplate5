import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/home/FinalCTA';
import styles from '@/styles/ProcessPage.module.css';

export const metadata: Metadata = {
  title: 'Our Construction Process — HODU',
  description:
    'Discover the five-stage villa construction methodology of HODU: Consultation, Planning, Construction, Quality Review, and Final Handover.',
};

interface ProcessStage {
  num: string;
  title: string;
  duration: string;
  desc: string;
  gate: string;
  points: string[];
}

export default function ProcessPage() {
  const stages: ProcessStage[] = [
    {
      num: '01',
      title: 'CONSULTATION',
      duration: 'Phase 1 · Site & Vision Discovery',
      desc: 'Understanding the site geography, local solar paths, family lifestyle patterns, and spatial program. We establish early feasibility, zoning limitations, and clear budget boundaries.',
      gate: 'Stage 1 Quality Gate: Comprehensive Site Feasibility Document & Client Program Sign-off.',
      points: [
        'Topographical & soil condition analysis',
        'Zoning & statutory setback verification',
        'Spatial requirements & lifestyle mapping',
        'Preliminary project budget modeling',
      ],
    },
    {
      num: '02',
      title: 'PLANNING',
      duration: 'Phase 2 · Architecture & Engineering Specification',
      desc: 'Developing fully coordinated architectural drawings, structural engineering calculations, 3D clash-detection models, MEP schematics, and an itemized Bill of Quantities.',
      gate: 'Stage 2 Quality Gate: 100% Frozen Construction Drawings & GFC (Good-For-Construction) Issue.',
      points: [
        'Architectural, structural & MEP drawing coordination',
        'Detailed material schedule & source identification',
        'Comprehensive itemized BOQ with fixed line items',
        'Baseline critical-path construction schedule',
      ],
    },
    {
      num: '03',
      title: 'CONSTRUCTION',
      duration: 'Phase 3 · Civil Superstructure & Specialized Systems',
      desc: 'Groundbreaking, deep foundation casting, reinforced concrete frame construction, specialized subterranean waterproofing, wall masonry, and rough-in MEP installation under continuous resident engineering.',
      gate: 'Stage 3 Quality Gate: Structural Concrete Cube Strength Reports & Hydrostatic Waterproofing Tests.',
      points: [
        'Excavation, raft foundation & retaining systems',
        'Seismic-resistant RCC column and slab pours',
        'Concealed conduit, piping & HVAC duct routing',
        'Exterior weather-resistant masonry & primary plastering',
      ],
    },
    {
      num: '04',
      title: 'QUALITY REVIEW',
      duration: 'Phase 4 · Tolerances, Finishing & Stage Audits',
      desc: 'Rigorous multi-point quality audits conducted across all finishing trades: marble and stone alignment, custom millwork fittings, fenestration seals, pressure testing of pipelines, and smart automation commissioning.',
      gate: 'Stage 4 Quality Gate: Zero-Snag Verification Audit & Pre-Commissioning Certificate.',
      points: [
        'Optical level planar alignment inspection on flooring',
        'Acoustic decibel leakage checks on doors and windows',
        'Multi-day pressure testing of all plumbing risers',
        'Smart lighting, HVAC balancing & power audit',
      ],
    },
    {
      num: '05',
      title: 'HANDOVER',
      duration: 'Phase 5 · Commissioning, Certification & Handover',
      desc: 'Deep cleaning, final white-glove walk-through with the client, delivery of comprehensive digital as-built drawings, operational manuals, equipment warranty certificates, and formal key handover.',
      gate: 'Stage 5 Quality Gate: Formal Handover Dossier, Statutory Occupancy Documentation & Care Guide.',
      points: [
        'Complete digital & physical As-Built drawings package',
        'Equipment manuals, warranty documents & maintenance log',
        'Home automation & MEP system client training',
        'Dedicated 12-month post-handover support warranty',
      ],
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="FIVE-STAGE METHODOLOGY"
        title={
          <>
            FROM FIRST CONVERSATION<br />
            TO FINAL HANDOVER.
          </>
        }
        description="A disciplined, step-by-step construction journey that delivers absolute transparency, milestone certainty, and uncompromised build quality."
      />

      <section className={styles.processPageSection}>
        <div className="container">
          <div className={styles.stageList}>
            {stages.map((stage) => (
              <div key={stage.num} className={styles.stageCard}>
                <div className={styles.stageNumCol}>
                  <span className={styles.stageNumber}>{stage.num}</span>
                  <h2 className={styles.stageName}>{stage.title}</h2>
                  <span className={styles.stageDuration}>{stage.duration}</span>
                </div>

                <div className={styles.stageDetails}>
                  <p className={styles.stageDescription}>{stage.desc}</p>

                  <div className={styles.gateBox}>
                    <p className={styles.gateTitle}>Quality Assurance Gate</p>
                    <p className={styles.gateText}>{stage.gate}</p>
                  </div>

                  <div>
                    <ul className={styles.pointsList}>
                      {stage.points.map((pt, i) => (
                        <li key={i} className={styles.pointItem}>
                          <span className={styles.bullet} />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginTop: '0.5rem' }}>
                    <Link href="/contact" className="link-editorial">
                      <span>PLAN THIS STAGE FOR YOUR VILLA</span>
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
