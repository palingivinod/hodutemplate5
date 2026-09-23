import React from 'react';
import styles from '@/styles/ExpertiseSection.module.css';

interface Discipline {
  num: string;
  title: string;
  desc: string;
}

export default function ExpertiseSection() {
  const disciplines: Discipline[] = [
    {
      num: '01',
      title: 'STRUCTURE',
      desc: 'Engineered footings, seismic load calculations, high-grade concrete mixes, and reinforced structural frameworks.',
    },
    {
      num: '02',
      title: 'WATERPROOFING',
      desc: 'Multi-layer subterranean tanking, elastomeric podium membranes, and precision wet-area seal systems.',
    },
    {
      num: '03',
      title: 'ELECTRICAL',
      desc: 'Smart home distribution panels, harmonic filtration, low-voltage automation cabling, and surge protection.',
    },
    {
      num: '04',
      title: 'PLUMBING',
      desc: 'Hydro-pneumatic booster pumping, acoustic insulation on soil stacks, solar thermals, and water conditioning.',
    },
    {
      num: '05',
      title: 'HVAC',
      desc: 'Concealed VRV/VRF climate control systems, conditioned fresh-air recovery, and whisper-quiet acoustic ducting.',
    },
    {
      num: '06',
      title: 'FINISHES',
      desc: 'Bookmatched imported marble, lime plastering, shadow-line skirting profiles, and flawless planar alignments.',
    },
    {
      num: '07',
      title: 'INTERIORS',
      desc: 'Custom cabinetry, specialized acoustic paneling, concealed door hardware, and integrated architectural lighting.',
    },
    {
      num: '08',
      title: 'LANDSCAPE',
      desc: 'Sub-soil drainage networks, hardscape stonework, mood lighting integration, and automated irrigation lines.',
    },
  ];

  return (
    <section className={`section-wrapper ${styles.expertiseSection}`}>
      <div className="container">
        <div className={styles.headerBlock}>
          <span className="eyebrow eyebrow-forest">CONSTRUCTION EXPERTISE</span>
          <h2 className={styles.heading}>
            A VILLA IS MORE THAN<br />
            WHAT YOU SEE.
          </h2>
          <p className={styles.subtext}>
            Behind every finished villa are many coordinated systems working
            together seamlessly to ensure lifelong comfort and structural durability.
          </p>
        </div>

        <div className={styles.disciplinesGrid}>
          {disciplines.map((item) => (
            <div key={item.title} className={styles.disciplineItem}>
              <span className={styles.disciplineNumber}>{item.num}</span>
              <h3 className={styles.disciplineTitle}>{item.title}</h3>
              <p className={styles.disciplineText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
