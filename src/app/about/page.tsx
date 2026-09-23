import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import FinalCTA from '@/components/home/FinalCTA';
import styles from '@/styles/AboutPage.module.css';

export const metadata: Metadata = {
  title: 'About HODU — Bespoke Villa Design & Construction',
  description:
    'Learn how HODU exclusively structures, engineers, and delivers individual bespoke villas with unified architectural execution and total construction discipline.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT HODU"
        title={
          <>
            AN EXCLUSIVE FOCUS ON<br />
            INDIVIDUAL VILLAS.
          </>
        }
        description="We created HODU with a single purpose: to eliminate the disconnect between architectural vision and on-site construction execution."
      />

      <section className={styles.aboutSection}>
        <div className="container">
          {/* Top 2-Column Story */}
          <div className={styles.twoCol}>
            <div>
              <span className="eyebrow">OUR PHILOSOPHY</span>
              <h2 className={styles.headingLarge}>
                CONSTRUCTION AS CONSIDERED AS ARCHITECTURE.
              </h2>
            </div>
            <div className={styles.textBlock}>
              <p className={styles.textLead}>
                Building an individual villa is fundamentally different from commercial
                or multi-unit residential construction. It requires microscopic attention
                to custom details, specialized materials, and continuous engineering alignment.
              </p>
              <p className={styles.textPara}>
                Traditional villa builds often suffer from fragmented responsibilities:
                architects produce drawings in isolation, structural consultants work on
                abstract calculations, and general contractors make ad-hoc decisions on site.
                The result is delays, compromise, and cost escalation.
              </p>
              <p className={styles.textPara}>
                HODU unifies this entire spectrum under one rigorous standard. From site
                topography evaluation and structural design through to custom millwork,
                acoustic engineering, and key handover, our team coordinates every trade
                with absolute clarity.
              </p>
            </div>
          </div>

          {/* Featured Villa Architecture Image */}
          <div className={styles.aboutHeroImage}>
            <Image
              src="/images/villa-exterior.jpg"
              alt="HODU Bespoke Villa structural volume and natural light integration"
              fill
              sizes="(max-width: 1024px) 100vw, 85vw"
              className={styles.image}
              priority={false}
            />
            <div className={styles.imageCaption}>
              Architectural Execution — Coordinated Structural Volume &amp; Environmental Orientation
            </div>
          </div>
        </div>

        {/* 3 Core Pillars in Sage Band */}
        <div className={styles.sageBand}>
          <div className="container">
            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCol}>
                <span className={styles.pillarNum}>01 / FOCUS</span>
                <h3 className={styles.pillarTitle}>Villas Exclusively</h3>
                <p className={styles.pillarDesc}>
                  We do not build apartment complexes or commercial office shells.
                  Our entire engineering methodology, procurement network, and supervisory
                  cadre are tailored exclusively to individual private villas.
                </p>
              </div>

              <div className={styles.pillarCol}>
                <span className={styles.pillarNum}>02 / RIGOR</span>
                <h3 className={styles.pillarTitle}>Engineered Precision</h3>
                <p className={styles.pillarDesc}>
                  Every architectural element—from subterranean moisture barriers to
                  flush-to-ceiling door jambs—is backed by comprehensive shop drawings,
                  structural calculations, and rigorous on-site tolerance checks.
                </p>
              </div>

              <div className={styles.pillarCol}>
                <span className={styles.pillarNum}>03 / CLARITY</span>
                <h3 className={styles.pillarTitle}>Transparent Governance</h3>
                <p className={styles.pillarDesc}>
                  Clients receive structured milestone documentation, clear bill of
                  quantities, scheduled site reviews, and proactive risk mitigation
                  throughout the lifecycle of their residence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Material & Workmanship Commitment (with Craft Image) */}
        <div className="container">
          <div className={styles.materialMoment}>
            <div className={styles.imageBox}>
              <Image
                src="/images/craft-detail.jpg"
                alt="HODU architectural material craft detail"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className={styles.image}
              />
            </div>

            <div className={styles.materialContent}>
              <span className="eyebrow">OUR CRAFT COMMITMENT</span>
              <h2 className={styles.headingLarge} style={{ marginBottom: '1.5rem' }}>
                DIRECT SOURCING &amp; SPECIALIZED TRADES.
              </h2>
              <p className={styles.textPara} style={{ marginBottom: '2rem' }}>
                We work directly with certified natural stone quarries, certified
                timber suppliers, advanced glazing fabricators, and master masons.
                By supervising trade execution directly rather than sub-contracting
                to arbitrary third parties, HODU ensures that the tactile quality
                of your villa will endure for generations.
              </p>
              <Link href="/services" className="link-editorial">
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight size={14} className="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
