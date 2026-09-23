import React from 'react';
import styles from '@/styles/PageHeader.module.css';

interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
