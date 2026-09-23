import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import styles from '@/styles/ContactPage.module.css';

export const metadata: Metadata = {
  title: 'Contact HODU — Start Your Bespoke Villa',
  description:
    'Share details regarding your site and requirements. Connect directly with HODU for bespoke villa design, planning, and turnkey construction consultation.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT HODU"
        title={
          <>
            LET&apos;S TALK<br />
            ABOUT YOUR VILLA.
          </>
        }
        description="Share a few details about your site and requirements. Our team will get in touch to understand the project and discuss the next steps."
      />

      <section className={styles.contactSection}>
        <div className={`container ${styles.contactGrid}`}>
          {/* Left: 40% Contact Information */}
          <div className={styles.infoCol}>
            <span className={styles.brandHeading}>HODU</span>
            <span className={styles.brandSub}>
              Bespoke Villa Design &amp; Construction
            </span>

            <div className={styles.infoBlockList}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Direct Telephone</span>
                <a href="tel:+919849012345" className={`${styles.infoValue} ${styles.infoValueLink}`}>
                  +91 98490 12345
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Direct Email</span>
                <a href="mailto:enquiries@hoduvillas.com" className={`${styles.infoValue} ${styles.infoValueLink}`}>
                  enquiries@hoduvillas.com
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>WhatsApp Consultation</span>
                <a
                  href="https://wa.me/919849012345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.infoValue} ${styles.infoValueLink}`}
                >
                  +91 98490 12345 (Instant Message)
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Office Location</span>
                <p className={styles.infoValue}>
                  Level 4, Signature Towers, Road No. 36,<br />
                  Jubilee Hills, Hyderabad, Telangana 500033
                </p>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Hours of Consultation</span>
                <p className={styles.infoValue}>
                  Monday to Saturday: 09:30 AM – 06:30 PM<br />
                  (Prior appointment recommended)
                </p>
              </div>
            </div>

            <div className={styles.noteBox}>
              <p className={styles.noteText}>
                <strong>Consultation Note:</strong> We undertake a limited number
                of bespoke villa projects annually to ensure dedicated site leadership
                and uncompromised construction precision.
              </p>
            </div>
          </div>

          {/* Right: 60% Project Enquiry Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
