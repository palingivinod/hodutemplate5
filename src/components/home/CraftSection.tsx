import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/CraftSection.module.css';

export default function CraftSection() {
  return (
    <section className={`section-wrapper ${styles.craftSection}`}>
      <div className={`container ${styles.craftGrid}`}>
        {/* Left: Architectural Material Image */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/craft-detail.jpg"
              alt="HODU architectural material craft detail showing honed limestone and fluted timber joinery"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles.image}
              priority={false}
            />
          </div>
          <div className={styles.imageCaption}>
            Limestone Masonry & Custom Fluted Timber Detail
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.contentCol}>
          <span className="eyebrow">CRAFT & MATERIALS</span>
          <h2 className={styles.heading}>
            DETAIL MAKES<br />
            THE DIFFERENCE.
          </h2>
          <p className={styles.text}>
            Material selection, workmanship and finishing are treated as part of
            the construction process from the beginning. We coordinate stone
            quarries, precision timber millwork, and custom metalwork directly
            on-site to achieve absolute fidelity to the architectural intent.
          </p>
          <Link href="/about" className="btn-secondary">
            <span>OUR APPROACH</span>
            <ArrowRight size={14} className="btn-arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
