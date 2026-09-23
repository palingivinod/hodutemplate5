import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from '@/styles/WhyHoduSection.module.css';

interface Principle {
  num: string;
  title: string;
  desc: string;
}

export default function WhyHoduSection() {
  const principles: Principle[] = [
    {
      num: '01',
      title: 'CLEAR SCOPE',
      desc: 'Requirements and specifications are fully defined and priced before execution begins, eliminating mid-project ambiguity.',
    },
    {
      num: '02',
      title: 'COORDINATED TEAMS',
      desc: 'Design, structural engineering, MEP specialists, and site managers remain connected under one unified hierarchy.',
    },
    {
      num: '03',
      title: 'QUALITY CONTROL',
      desc: 'Key stages are systematically reviewed and tested against stringent benchmark tolerances throughout every phase.',
    },
    {
      num: '04',
      title: 'DIRECT COMMUNICATION',
      desc: 'Clients remain informed through single-point project accountability, transparent weekly reporting, and site documentation.',
    },
  ];

  return (
    <section className={styles.whySection}>
      <div className="container">
        {/* Spatial Engineering & Interior Refinement Row with Villa Interior Image */}
        <div className={styles.spatialRow}>
          <div className={styles.imageBox}>
            <Image
              src="/images/villa-interior.jpg"
              alt="HODU Bespoke Villa interior spatial engineering and custom joinery"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={styles.image}
              priority={false}
            />
            <div className={styles.imageCaption}>
              Living Volume — Spatial Integration, Flush Joinery &amp; Natural Light
            </div>
          </div>

          <div className={styles.spatialContent}>
            <span className="eyebrow">SPATIAL EXECUTION</span>
            <h3 className={styles.spatialTitle}>
              INTERIORS ENGINEERED WITH THE ARCHITECTURE.
            </h3>
            <p className={styles.spatialPara}>
              True luxury in villa living comes from flawless transitions:
              shadow gaps that align perfectly with ceiling planes, concealed HVAC
              grilles, acoustic separation, and floor-to-ceiling glass apertures
              that glide effortlessly.
            </p>
            <Link href="/services" className="link-editorial">
              <span>EXPLORE INTERIOR CAPABILITIES</span>
              <ArrowRight size={14} className="arrow" />
            </Link>
          </div>
        </div>

        {/* 4 Core Principles */}
        <div className={styles.headerBlock}>
          <span className="eyebrow">WHY HODU</span>
          <h2 className={styles.heading}>
            A MORE CLEAR<br />
            WAY TO BUILD.
          </h2>
          <p className={styles.subtext}>
            We have refined the villa construction process to deliver certainty,
            architectural integrity, and complete peace of mind.
          </p>
        </div>

        <div className={styles.principlesGrid}>
          {principles.map((item) => (
            <div key={item.title} className={styles.principleCol}>
              <span className={styles.colIndex}>{item.num}</span>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.description}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
