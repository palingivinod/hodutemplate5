'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandLogo}>HODU</span>
            <span className={styles.brandSubtitle}>
              BESPOKE VILLA DESIGN<br />& CONSTRUCTION
            </span>
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navLinks}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link href="/contact" className={styles.ctaBtn}>
              <span>START YOUR VILLA</span>
              <ArrowRight size={14} />
            </Link>

            <button
              className={styles.mobileToggle}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <span className={styles.mobileBrandLogo}>HODU</span>
          <button
            className={styles.mobileCloseBtn}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.mobileCtaWrapper}>
          <Link
            href="/contact"
            className={styles.mobileCtaBtn}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>START YOUR VILLA</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
