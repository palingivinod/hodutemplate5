'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const terracottaLineRef = useRef<HTMLDivElement>(null);
  const pipelineLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1,
      })
        .to(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          '-=0.5'
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .to(
          terracottaLineRef.current,
          {
            width: 72,
            duration: 0.9,
            ease: 'power2.inOut',
          },
          '-=0.4'
        )
        .to(
          pipelineLabelRef.current,
          {
            opacity: 1,
            duration: 0.6,
          },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        {/* Left Column: Eyebrow + Headline */}
        <div className={styles.leftCol}>
          <p ref={eyebrowRef} className={styles.eyebrow}>
            Bespoke Villa Design & Construction
          </p>

          <h1 className={styles.headline}>
            <span className={styles.headlineLine}>
              <span ref={line1Ref} className={styles.headlineSpan}>
                VILLAS
              </span>
            </span>
            <span className={styles.headlineLine}>
              <span ref={line2Ref} className={styles.headlineSpan}>
                BUILT AROUND
              </span>
            </span>
            <span className={styles.headlineLine}>
              <span ref={line3Ref} className={styles.headlineSpan}>
                YOUR <span className={styles.accentLife}>LIFE<span className={styles.accentLifeHighlight}>.</span></span>
              </span>
            </span>
          </h1>

          {/* Restrained Visual Detail: Short Terracotta Line + Pipeline */}
          <div className={styles.anchorDetail}>
            <div ref={terracottaLineRef} className={styles.terracottaLine} />
            <span ref={pipelineLabelRef} className={styles.pipelineLabel}>
              DESIGN · PLAN · BUILD · HANDOVER
            </span>
          </div>
        </div>

        {/* Right Column: Supporting narrative + CTAs */}
        <div className={styles.rightCol}>
          <p ref={textRef} className={styles.supportingText}>
            HODU brings design, planning and construction together to create
            thoughtfully built villas with clarity from concept to completion.
          </p>

          <div ref={ctaRef} className={styles.ctaGroup}>
            <Link href="/contact" className="btn-primary">
              <span>START YOUR VILLA</span>
              <ArrowRight size={14} className="btn-arrow" />
            </Link>

            <Link href="/process" className="btn-secondary">
              <span>OUR PROCESS</span>
              <ArrowRight size={14} className="btn-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
