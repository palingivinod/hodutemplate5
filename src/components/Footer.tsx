import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topGrid}>
          {/* Brand Identity */}
          <div className={styles.brandCol}>
            <span className={styles.brandName}>HODU</span>
            <span className={styles.brandTagline}>
              Bespoke Villa Design<br />& Construction
            </span>
            <p className={styles.brandDescription}>
              Specializing exclusively in designing, planning and constructing individual bespoke villas from concept to handover.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.footerLink}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>About HODU</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Services</Link>
              </li>
              <li>
                <Link href="/process" className={styles.footerLink}>The Process</Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>Start Your Villa</Link>
              </li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div>
            <h4 className={styles.colTitle}>Capabilities</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services" className={styles.footerLink}>Villa Architectural Design</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Structural & Civil Build</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Turnkey Project Execution</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Interiors & High Finishing</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Landscape Architecture</Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>Integrated Management</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>Headquarters</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Direct Consultation</span>
              <a href="tel:+919849012345" className={styles.contactValue}>+91 98490 12345</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Enquiries</span>
              <a href="mailto:enquiries@hoduvillas.com" className={styles.contactValue}>enquiries@hoduvillas.com</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Office Location</span>
              <span className={styles.contactValue}>Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Connect</span>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.25rem' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
                <span style={{ color: 'rgba(247,247,242,0.3)' }}>·</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
                <span style={{ color: 'rgba(247,247,242,0.3)' }}>·</span>
                <a href="https://wa.me/919849012345" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>© 2026 HODU. Bespoke Villa Design & Construction. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
