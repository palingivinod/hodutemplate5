'use client';

import React, { useState } from 'react';

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* =========================================================================
           HEADER
           ========================================================================= */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#" className="brand-logo" aria-label="HODU Villa Construction Home">
            <span className="logo-main">HODU</span>
            <span className="logo-tag">
              Villa Construction
              <br />
              &amp; Design
            </span>
          </a>

          <nav className="main-nav" aria-label="Primary Navigation">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>

          <div className="header-action">
            <a href="tel:+919849012345" className="header-phone">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+91 98490 12345</span>
            </a>
            <a href="#contact" className="btn btn-primary">
              GET A QUOTE
            </a>
            <button
              id="menu-toggle"
              className="menu-toggle"
              aria-label="Toggle navigation"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-nav" className={`mobile-nav ${mobileNavOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            <li>
              <a href="#home" onClick={() => setMobileNavOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-nav-cta">
            <a href="tel:+919849012345" className="btn btn-secondary">
              Call: +91 98490 12345
            </a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)} className="btn btn-primary">
              GET A QUOTE
            </a>
          </div>
        </div>
      </header>

      {/* =========================================================================
           HERO SECTION
           ========================================================================= */}
      <section id="home" className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-label">VILLA CONSTRUCTION &amp; DESIGN</span>
            <h1 className="hero-title">
              BUILDING HOMES
              <br />
              BUILT FOR LIFE.
            </h1>
            <p className="hero-desc">
              From architectural planning and construction to interiors and final handover, we provide complete villa
              construction solutions designed around your requirements.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                START YOUR PROJECT
              </a>
              <a href="tel:+919849012345" className="btn btn-secondary">
                CALL US
              </a>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="check">&#10003;</span>
                <span>Complete Construction</span>
              </div>
              <div className="trust-item">
                <span className="check">&#10003;</span>
                <span>Quality Materials</span>
              </div>
              <div className="trust-item">
                <span className="check">&#10003;</span>
                <span>Experienced Team</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Modern residential villa built by HODU"
              className="hero-image"
              width={1000}
              height={750}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 2 — ABOUT
           ========================================================================= */}
      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1000&q=80"
              alt="Civil engineer and construction supervisor reviewing villa plans"
              className="about-image"
              width={1000}
              height={750}
            />
          </div>

          <div className="about-content">
            <span className="section-label">ABOUT OUR COMPANY</span>
            <h2 className="about-title">
              BUILDING WITH EXPERIENCE.
              <br />
              DELIVERING WITH CARE.
            </h2>
            <p>
              HODU is a professional villa construction company specializing in individual luxury homes. We believe
              building a private residence requires disciplined engineering, practical architectural design, and
              dependable on-site workmanship.
            </p>
            <p>
              Our team unites experienced civil engineers, architects, project supervisors, and trusted trade specialists
              under single-point responsibility. We handle municipal approvals, material procurement, structural
              casting, and finishings with transparent milestone reporting.
            </p>
            <p>
              By maintaining strict quality inspections and direct communication at every phase, we ensure your home is
              built safely, on schedule, and exactly according to approved specifications.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Professionals</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 3 — HOW OUR TECHNICAL EXPERTS WORK
           ========================================================================= */}
      <section id="experts" className="section section-experts">
        <div className="container">
          {/* Section Header */}
          <div className="section-header experts-main-header">
            <span className="expert-brand-label">OUR EXPERT TEAM</span>
            <h2 className="section-title">Technical Expertise You Can Trust</h2>
            <p className="section-subtitle">
              Experienced technicians working at every stage of your villa construction.
            </p>
            <p className="section-desc-sub">
              Our experienced engineers, supervisors and skilled technicians work together to ensure every stage of
              construction is planned, executed and inspected with care.
            </p>
          </div>

          {/* Main Two-Column Layout */}
          <div className="experts-grid">
            {/* Left Side: Large Clean Text Area */}
            <div className="experts-intro-card">
              <div className="experts-intro-content">
                <span className="experts-sub-tag">OUR TECHNICAL TEAM</span>
                <h3 className="experts-intro-title">
                  From the foundation to the final finishing, our technical experts make sure every detail is handled correctly.
                </h3>
                <p className="experts-intro-text">
                  Our team coordinates civil works, structural construction, electrical systems, plumbing, finishing and
                  site supervision to maintain quality throughout the project.
                </p>
                <div className="experts-intro-action">
                  <a href="#contact" className="btn btn-meet-team">
                    MEET OUR TEAM &rarr;
                  </a>
                </div>
              </div>
              {/* Very subtle line-art construction illustration in background */}
              <svg
                className="experts-watermark"
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M20 180 L180 180 M30 180 L30 80 L100 25 L170 80 L170 180" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M60 180 L60 120 L90 120 L90 180 M120 100 L150 100 L150 140 L120 140 Z" strokeWidth="1.5" />
                <path d="M20 190 L180 190" strokeWidth="1" />
              </svg>
            </div>

            {/* Right Side: 3 Professional Cards */}
            <div className="experts-cards-stack">
              {/* CARD 01 */}
              <div className="expert-card">
                <div className="expert-card-header">
                  <div className="expert-icon-wrap" aria-hidden="true">
                    {/* Simple Engineer / Helmet SVG line icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 18h20" />
                      <path d="M5 18v-4a7 7 0 0 1 14 0v4" />
                      <path d="M10 10V5a2 2 0 0 1 4 0v5" />
                    </svg>
                  </div>
                  <h4 className="expert-card-title">Experienced Site Engineers</h4>
                </div>
                <p className="expert-card-desc">
                  Our site engineers supervise construction activities and ensure that work follows approved plans, measurements and construction standards.
                </p>
                <a href="#contact" className="expert-card-link">
                  LEARN MORE &rarr;
                </a>
              </div>

              {/* CARD 02 */}
              <div className="expert-card">
                <div className="expert-card-header">
                  <div className="expert-icon-wrap" aria-hidden="true">
                    {/* Simple Tools / Technician SVG line icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h4 className="expert-card-title">Skilled Technicians</h4>
                </div>
                <p className="expert-card-desc">
                  Our skilled technicians handle electrical, plumbing, civil and finishing works with attention to quality and detail.
                </p>
                <a href="#contact" className="expert-card-link">
                  LEARN MORE &rarr;
                </a>
              </div>

              {/* CARD 03 */}
              <div className="expert-card">
                <div className="expert-card-header">
                  <div className="expert-icon-wrap" aria-hidden="true">
                    {/* Simple Supervisor / Checklist SVG line icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="expert-card-title">Dedicated Site Supervisors</h4>
                </div>
                <p className="expert-card-desc">
                  Our supervisors regularly monitor the site, coordinate teams and keep the project moving according to the planned schedule.
                </p>
                <a href="#contact" className="expert-card-link">
                  LEARN MORE &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Small Bottom Strip: 4 simple trust points */}
          <div className="experts-bottom-strip">
            <div className="strip-item">
              <span className="strip-check">&#10003;</span>
              <span className="strip-text">Experienced Professionals</span>
            </div>
            <div className="strip-item">
              <span className="strip-check">&#10003;</span>
              <span className="strip-text">Regular Site Supervision</span>
            </div>
            <div className="strip-item">
              <span className="strip-check">&#10003;</span>
              <span className="strip-text">Quality Checks</span>
            </div>
            <div className="strip-item">
              <span className="strip-check">&#10003;</span>
              <span className="strip-text">Coordinated Work</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 4 — HOW WE BUILD
           ========================================================================= */}
      <section id="process" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">HOW WE WORK</span>
            <h2 className="section-title">OUR CONSTRUCTION PROCESS</h2>
            <p className="section-subtitle">
              A structured step-by-step approach to keep your build clear and predictable.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3 className="process-title">Consultation</h3>
              <p className="process-desc">Understand your requirements, plot and budget.</p>
            </div>

            <div className="process-card">
              <div className="process-number">02</div>
              <h3 className="process-title">Planning</h3>
              <p className="process-desc">Prepare the project scope and construction plan.</p>
            </div>

            <div className="process-card">
              <div className="process-number">03</div>
              <h3 className="process-title">Design</h3>
              <p className="process-desc">Architecture, layouts and detailed drawings.</p>
            </div>

            <div className="process-card">
              <div className="process-number">04</div>
              <h3 className="process-title">Estimation</h3>
              <p className="process-desc">Transparent project estimation and material planning.</p>
            </div>

            <div className="process-card">
              <div className="process-number">05</div>
              <h3 className="process-title">Construction</h3>
              <p className="process-desc">Civil, structural and finishing works.</p>
            </div>

            <div className="process-card">
              <div className="process-number">06</div>
              <h3 className="process-title">Handover</h3>
              <p className="process-desc">Final inspection and project handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 5 — WHY CHOOSE US
           ========================================================================= */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR STANDARDS</span>
            <h2 className="section-title">WHY CHOOSE US</h2>
            <p className="section-subtitle">Consistent standards and honest practices across every build.</p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">&#9670;</div>
              <h3 className="why-title">QUALITY MATERIALS</h3>
              <p className="why-desc">We focus on reliable materials and proper construction practices.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">&#9670;</div>
              <h3 className="why-title">TRANSPARENT PROCESS</h3>
              <p className="why-desc">Clear communication throughout the project.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">&#9670;</div>
              <h3 className="why-title">EXPERIENCED TEAM</h3>
              <p className="why-desc">Experienced engineers, supervisors and construction professionals.</p>
            </div>

            <div className="why-card">
              <div className="why-icon">&#9670;</div>
              <h3 className="why-title">TIMELY DELIVERY</h3>
              <p className="why-desc">Structured planning and project monitoring.</p>
            </div>
          </div>

          <div className="why-cta-wrap">
            <a href="#contact" className="btn btn-primary">
              DISCUSS YOUR PROJECT
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 6 — FEATURED PROJECTS
           ========================================================================= */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">PORTFOLIO</span>
            <h2 className="section-title">FEATURED PROJECTS</h2>
            <p className="section-subtitle">Selected residential villa projects built for individual homeowners.</p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Family Villa built in Hyderabad"
                  className="project-image"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <span className="project-location">Hyderabad</span>
                <h3 className="project-name">Modern Family Villa</h3>
                <p className="project-spec">4 BHK | 3,200 Sq.ft</p>
                <a href="#contact" className="project-link">
                  VIEW PROJECT &rarr;
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                  alt="Contemporary Residence built in Vijayawada"
                  className="project-image"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <span className="project-location">Vijayawada</span>
                <h3 className="project-name">Contemporary Residence</h3>
                <p className="project-spec">4 BHK | 2,850 Sq.ft</p>
                <a href="#contact" className="project-link">
                  VIEW PROJECT &rarr;
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
                  alt="Premium Urban Villa built in Bengaluru"
                  className="project-image"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <span className="project-location">Bengaluru</span>
                <h3 className="project-name">Premium Urban Villa</h3>
                <p className="project-spec">5 BHK | 4,100 Sq.ft</p>
                <a href="#contact" className="project-link">
                  VIEW PROJECT &rarr;
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="Courtyard Residence built in Hyderabad"
                  className="project-image"
                  width={800}
                  height={533}
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <span className="project-location">Hyderabad</span>
                <h3 className="project-name">Courtyard Residence</h3>
                <p className="project-spec">3 BHK | 2,600 Sq.ft</p>
                <a href="#contact" className="project-link">
                  VIEW PROJECT &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 7 — QUALITY & MATERIALS
           ========================================================================= */}
      <section id="materials" className="section section-light">
        <div className="container quality-grid">
          <div className="quality-text-side">
            <span className="section-label">SPECIFICATIONS</span>
            <h2>
              QUALITY THAT STARTS
              <br />
              WITH THE RIGHT MATERIALS
            </h2>
            <p>
              Long-lasting villa construction depends on uncompromised material selection and strict on-site adherence
              to civil engineering norms.
            </p>
            <p>
              We source high-grade cement, tested Fe550D primary steel, certified plumbing lines, and branded fire-resistant
              electrical wiring. From foundation waterproofing to final wall coatings, our team verifies every consignment
              delivered to your site.
            </p>
            <p>
              Doors, windows, vitrified tiles, and sanitary fittings are selected from established, warrantied manufacturers
              with proven durability for Indian conditions.
            </p>
          </div>

          <div className="quality-list-side">
            <div className="material-card">
              <h4 className="material-category">STRUCTURE</h4>
              <p className="material-details">
                Premium-grade materials (Tata Tiscon / JSW Fe550D primary steel, Ultratech / ACC certified cement, M25/M30
                grade concrete).
              </p>
            </div>

            <div className="material-card">
              <h4 className="material-category">ELECTRICAL</h4>
              <p className="material-details">
                Reliable branded components (Finolex / Polycab FRLS concealed copper wiring, Legrand / Schneider modular
                switches and MCBs).
              </p>
            </div>

            <div className="material-card">
              <h4 className="material-category">PLUMBING</h4>
              <p className="material-details">
                Quality plumbing systems (Astral / Ashirvad CPVC &amp; SWR pipes, Grohe / Kohler / Jaquar sanitary fittings
                and pressure testing).
              </p>
            </div>

            <div className="material-card">
              <h4 className="material-category">FINISHING</h4>
              <p className="material-details">
                Selected materials and fittings (Teakwood frames, premium vitrified &amp; natural stone, Asian Paints Apex
                Ultima exterior coatings).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 8 — TESTIMONIALS
           ========================================================================= */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">CLIENT FEEDBACK</span>
            <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
            <p className="section-subtitle">Real experiences from homeowners who trusted us with their construction.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="testimonial-quote">
                  &ldquo;Professional team and good communication throughout the construction.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                &mdash; Rajesh K. <span className="testimonial-city">| Hyderabad</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="testimonial-quote">
                  &ldquo;They handled the complete construction process professionally.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                &mdash; Srinivas M. <span className="testimonial-city">| Vijayawada</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="testimonial-quote">
                  &ldquo;The team delivered a quality home and kept us updated throughout.&rdquo;
                </p>
              </div>
              <div className="testimonial-author">
                &mdash; Anil R. <span className="testimonial-city">| Bengaluru</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 9 — FREQUENTLY ASKED QUESTIONS (FAQ)
           ========================================================================= */}
      <section className="section section-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">HELP &amp; INFORMATION</span>
            <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="section-subtitle">Clear answers to common questions about our villa construction services.</p>
          </div>

          <div className="faq-wrapper">
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 0}
                onClick={() => toggleFaq(0)}
              >
                <span>How long does villa construction take?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  A standard villa between 3,000 and 5,000 sq.ft typically takes between 12 and 18 months from
                  foundation excavation to final key handover, depending on plot conditions, design complexity, and
                  material selections.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 1}
                onClick={() => toggleFaq(1)}
              >
                <span>Do you provide architectural design?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. We have in-house architectural designers who prepare functional floor layouts, elevations, 3D
                  views, and working structural drawings tailored to your plot dimensions and lifestyle needs.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 2}
                onClick={() => toggleFaq(2)}
              >
                <span>Do you handle complete turnkey construction?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. Our turnkey service covers the full lifecycle: soil inspection, civil framing, brick masonry,
                  waterproofing, electrical, plumbing, flooring, joinery, and interior painting until handover.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 3}
                onClick={() => toggleFaq(3)}
              >
                <span>Can I choose my own materials?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. While we provide defined, tested material packages, homeowners are completely free to upgrade or
                  select preferred brands for flooring, sanitary ware, kitchen fittings, and paint finishes.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 4}
                onClick={() => toggleFaq(4)}
              >
                <span>Do you provide project estimates?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. We provide a detailed Bill of Quantities (BOQ) with itemized specifications and milestone-based
                  payment schedules before signing any construction agreement, ensuring no hidden charges.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeFaq === 5 ? 'active' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={activeFaq === 5}
                onClick={() => toggleFaq(5)}
              >
                <span>Do you work with existing architectural plans?</span>
                <span className="faq-icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="faq-answer">
                <p>
                  Yes. If you already have drawings and sanctions from an independent architect, our engineering team can
                  execute pure civil and structural construction with strict fidelity to your blueprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
           SECTION 10 — FINAL CTA
           ========================================================================= */}
      <section id="contact" className="final-cta-section">
        <div className="container final-cta-inner">
          <span className="section-label" style={{ color: '#f59e0b' }}>
            GET IN TOUCH
          </span>
          <h2 className="final-cta-title">READY TO BUILD YOUR HOME?</h2>
          <p className="final-cta-text">
            Tell us about your plot, requirements and vision. Our team will help you plan the next step.
          </p>
          <div className="final-cta-buttons">
            <a href="tel:+919849012345" className="btn btn-primary">
              GET A FREE CONSULTATION
            </a>
            <a href="tel:+919849012345" className="btn btn-outline-white">
              CALL US: +91 98490 12345
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
           FOOTER
           ========================================================================= */}
      <footer className="site-footer">
        <div className="container footer-grid">
          {/* Col 1 */}
          <div>
            <div className="footer-logo-title">HODU</div>
            <p className="footer-desc">
              Professional villa design and turnkey construction company. We build quality residential homes with
              dependable engineering, transparent planning, and dedicated supervision across South India.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#process">Our Process</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Villa Construction</a>
              </li>
              <li>
                <a href="#services">Architecture</a>
              </li>
              <li>
                <a href="#services">Structural Works</a>
              </li>
              <li>
                <a href="#services">Interior Works</a>
              </li>
              <li>
                <a href="#services">Turnkey Construction</a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>
              <strong>Offices:</strong> Hyderabad &amp; Vijayawada, India
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+919849012345" style={{ color: '#cbd5e1' }}>
                +91 98490 12345
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@example.com" style={{ color: '#cbd5e1' }}>
                info@example.com
              </a>
            </p>
            <p>
              <strong>Working Hours:</strong> Mon &ndash; Sat, 9:30 AM &ndash; 6:30 PM
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>&copy; 2026 HODU Construction Pvt Ltd. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#contact">Privacy Policy</a>
            <span>|</span>
            <a href="#contact">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
