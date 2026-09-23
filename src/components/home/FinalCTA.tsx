import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow eyebrow-sage">START YOUR VILLA</span>
        <h2 className={styles.heading}>
          HAVE A VILLA<br />
          IN MIND?
        </h2>
        <p className={styles.supportingText}>
          Tell us about your site, your requirements and the villa you want to build.
        </p>
        <div className={styles.buttonWrapper}>
          <Link href="/contact" className="btn-light">
            <span>START A CONVERSATION</span>
            <ArrowRight size={14} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
