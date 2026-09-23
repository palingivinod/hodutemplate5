import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/Introduction.module.css';

export default function Introduction() {
  return (
    <section className={styles.introSection}>
      <div className={`container ${styles.introGrid}`}>
        {/* Left: Heading & Narrative */}
        <div className={styles.leftCol}>
          <span className="eyebrow">ABOUT HODU</span>
          <h2 className={styles.heading}>
            BUILDING A VILLA<br />
            SHOULD FEEL AS<br />
            CONSIDERED AS<br />
            LIVING IN ONE.
          </h2>
          <p className={styles.narrative}>
            HODU manages the journey from initial requirements through design
            coordination, construction, finishing and handover, keeping the
            process clear and connected.
          </p>
          <div>
            <Link href="/about" className="link-editorial">
              <span>LEARN MORE</span>
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>
        </div>

        {/* Right: Villa Architectural Exterior Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/villa-exterior.jpg"
              alt="HODU Bespoke Villa architectural exterior and integrated living volume"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.image}
              priority={false}
            />
          </div>
          <div className={styles.imageCaption}>
            Bespoke Residence — Architectural Form &amp; Material Cohesion
          </div>
        </div>
      </div>
    </section>
  );
}
