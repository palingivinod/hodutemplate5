'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '@/styles/ContactPage.module.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    plotSize: '',
    builtUpArea: '',
    villaType: '',
    budget: '',
    stage: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate reliable submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={styles.successBox}>
        <CheckCircle2 size={48} color="var(--brand-deep-forest)" style={{ marginBottom: '1.5rem' }} />
        <h2 className={styles.successHeading}>THANK YOU.</h2>
        <p className={styles.successMessage}>
          Your villa enquiry has been received. Our leadership and engineering
          team will review your requirements and get in touch with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              location: '',
              plotSize: '',
              builtUpArea: '',
              villaType: '',
              budget: '',
              stage: '',
              message: '',
            });
          }}
          className="btn-secondary"
        >
          <span>SUBMIT ANOTHER ENQUIRY</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formCol}>
      <h2 className={styles.formHeading}>PROJECT ENQUIRY</h2>
      <p className={styles.formIntro}>
        Please provide initial details regarding your plot and envisioned villa.
      </p>

      <div className={styles.formGrid}>
        {/* Full Name */}
        <div className={styles.fieldGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="e.g. Rajesh Varma"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Phone Number */}
        <div className={styles.fieldGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+91 98490 00000"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Email Address */}
        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="name@domain.com"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Project Location */}
        <div className={styles.fieldGroup}>
          <label htmlFor="location" className={styles.label}>
            Project Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            placeholder="e.g. Jubilee Hills / Kokapet, Hyderabad"
            value={formData.location}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Plot Size */}
        <div className={styles.fieldGroup}>
          <label htmlFor="plotSize" className={styles.label}>
            Plot Size (Sq. Yards / Acres)
          </label>
          <input
            type="text"
            id="plotSize"
            name="plotSize"
            placeholder="e.g. 800 Sq. Yards"
            value={formData.plotSize}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Approximate Built-up Area */}
        <div className={styles.fieldGroup}>
          <label htmlFor="builtUpArea" className={styles.label}>
            Approx. Built-up Area (Sq. Ft.)
          </label>
          <input
            type="text"
            id="builtUpArea"
            name="builtUpArea"
            placeholder="e.g. 7,500 Sq. Ft."
            value={formData.builtUpArea}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        {/* Villa Type */}
        <div className={styles.fieldGroup}>
          <label htmlFor="villaType" className={styles.label}>
            Villa Style / Typology
          </label>
          <select
            id="villaType"
            name="villaType"
            value={formData.villaType}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Villa Style</option>
            <option value="Contemporary Minimalist">Contemporary Minimalist</option>
            <option value="Modernist Courtyard Villa">Modernist Courtyard Villa</option>
            <option value="Classic Architectural Estate">Classic Architectural Estate</option>
            <option value="Tropical Biophilic Villa">Tropical Biophilic Villa</option>
            <option value="Custom Bespoke Concept">Custom Bespoke Concept</option>
          </select>
        </div>

        {/* Budget Range */}
        <div className={styles.fieldGroup}>
          <label htmlFor="budget" className={styles.label}>
            Estimated Construction Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Range</option>
            <option value="₹4 Cr – ₹7 Cr">₹4 Cr – ₹7 Cr</option>
            <option value="₹7 Cr – ₹12 Cr">₹7 Cr – ₹12 Cr</option>
            <option value="₹12 Cr – ₹20 Cr">₹12 Cr – ₹20 Cr</option>
            <option value="₹20 Cr+">₹20 Cr+</option>
          </select>
        </div>

        {/* Project Stage */}
        <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
          <label htmlFor="stage" className={styles.label}>
            Current Project Stage
          </label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="">Select Current Status</option>
            <option value="Land Acquired — Seeking Architectural Design & Turnkey Build">
              Land Acquired — Seeking Architectural Design & Turnkey Build
            </option>
            <option value="Architectural Drawings in Progress — Seeking Contractor">
              Architectural Drawings in Progress — Seeking Contractor
            </option>
            <option value="Ready with Approved Drawings — Ready for Construction">
              Ready with Approved Drawings — Ready for Construction
            </option>
            <option value="Exploring Feasibility / Land Due Diligence">
              Exploring Feasibility / Land Due Diligence
            </option>
          </select>
        </div>

        {/* Message */}
        <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
          <label htmlFor="message" className={styles.label}>
            Project Vision & Specific Requirements
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Please mention any special architectural requirements, timelines, or preferences..."
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
      </div>

      <button type="submit" disabled={loading} className={styles.submitBtn}>
        <span>{loading ? 'TRANSMITTING ENQUIRY...' : 'REQUEST A CONSULTATION'}</span>
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
