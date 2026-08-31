import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useState } from "react";
import Button from "../components/ui/Button";
import FieldInput from "../components/ui/FieldInput";
import FieldTextarea from "../components/ui/FieldTextarea";
import Loader from "../components/ui/Loader";

function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    window.setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 800);
  }

  return (
    <section className="contact-page">
      <motion.div className="contact-intro" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="section-kicker">Get in touch</p>
        <h1 className="contact-title">A good hello goes a long way.</h1>
        <p className="contact-description">Tell us a little about the work in front of you. We&apos;ll read every note and get back to you within two working days.</p>
        <div className="contact-details">
          <a className="contact-detail-link" href="mailto:hello@morrow.studio">
            <span className="email-icon">✦</span>
            <span className="detail-content">
              <span className="detail-label">Email us</span>
              <span className="detail-value">hello@morrow.studio</span>
            </span>
          </a>
          <div className="contact-detail">
            <span className="availability-icon">●</span>
            <span className="detail-content">
              <span className="detail-label">Availability</span>
              <span className="detail-value">Taking on work for October</span>
            </span>
          </div>
        </div>
      </motion.div>
      <motion.div className="contact-form-card" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <FieldInput label="Your name" id="name" name="name" autoComplete="name" placeholder="Jane Smith" required />
            <FieldInput label="Email address" id="email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" required />
          </div>
          <FieldInput label="Company or organisation" id="company" name="company" autoComplete="organization" placeholder="Where do you work?" />
          <FieldTextarea label="How can we help?" id="message" name="message" placeholder="A little context about your idea, timeline, and what a great outcome looks like." required />
          <div className="form-submit">
            <p className="form-note">By sending this form, you&apos;re happy for us to reply to your email.</p>
            <Button type="submit" disabled={isSending}>
              {isSending ? (
                <Loader />
              ) : isSent ? (
                "Message sent"
              ) : (
                <>
                  Send message <span aria-hidden="true">↗</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactPage;
