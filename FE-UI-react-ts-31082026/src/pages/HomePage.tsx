import { motion } from "framer-motion";
import { useState } from "react";
import Accordion from "../components/ui/Accordion";
import Alert from "../components/ui/Alert";
import AlertButton from "../components/ui/AlertButton";
import Button from "../components/ui/Button";

const points = ["A clear first step", "Useful momentum", "A finish you can feel"];
const faqItems = [
  { title: "What kinds of projects do you take on?", content: "We partner on focused digital projects: new product experiences, brand websites, and thoughtful improvements to products already in motion." },
  { title: "When should we get in touch?", content: "The earlier, the better. A short conversation while the idea is still forming helps us find the clearest scope and the right next step." },
  { title: "How do you work with internal teams?", content: "We work as an extension of your team, sharing progress often and leaving behind decisions, systems, and documentation that are easy to carry forward." },
];

function HomePage() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              Independent digital studio
            </p>
            <h1 className="hero-title">Make the next good thing.</h1>
            <p className="hero-description">Morrow helps considerate teams turn promising ideas into clear, confident digital experiences.</p>
            <div className="hero-actions">
              <Button to="/contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </Button>
              <Button variant="secondary" onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })}>
                Our approach <span aria-hidden="true">↓</span>
              </Button>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}>
            <div className="visual-glow" />
            <div className="visual-card">
              <div className="visual-feature">
                <div className="visual-label">
                  <span>Current focus</span>
                  <span className="visual-arrow">↗</span>
                </div>
                <p className="visual-title">Bringing clarity to what matters.</p>
                <div className="visual-bottom">
                  <div className="avatar-stack">
                    <span className="avatar-s">S</span>
                    <span className="avatar-m">M</span>
                    <span className="avatar-j">J</span>
                  </div>
                  <span className="visual-service">Strategy · Design</span>
                </div>
              </div>
              <div className="visual-steps">
                <div className="step-purple">
                  <p className="step-number">01</p>
                  <p className="step-title">Find the signal</p>
                </div>
                <div className="step-orange">
                  <p className="step-number">02</p>
                  <p className="step-title">Shape the story</p>
                </div>
                <div className="step-green">
                  <p className="step-number">03</p>
                  <p className="step-title">Make it real</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {showAlert && (
        <section className="home-alert-section">
          <div className="home-alert-inner">
            <Alert title="New project availability" variant="success" onClose={() => setShowAlert(false)}>
              We&apos;re currently booking focused product and website work for October.
              <AlertButton onClick={() => document.getElementById("approach")?.scrollIntoView({ behavior: "smooth" })}>See how we work</AlertButton>
            </Alert>
          </div>
        </section>
      )}
      <section className="approach-section" id="approach">
        <div className="approach-inner">
          <div className="approach-heading">
            <p className="section-kicker">How we work</p>
            <h2 className="section-title">A small team with a steady hand.</h2>
          </div>
          <div className="approach-copy">
            <p className="approach-description">We bring an outside perspective, a little healthy restraint, and the craft to move a good idea forward without losing its original spark.</p>
            <div className="point-list">
              {points.map((point, index) => (
                <div className="point-row" key={point}>
                  <span className="point-number">0{index + 1}</span>
                  <p className="point-text">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-heading">
            <p className="section-kicker">Questions, answered</p>
            <h2 className="section-title">A few useful things to know.</h2>
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-card">
          <p className="cta-kicker">A good place to begin</p>
          <h2 className="cta-title">Let&apos;s make space for the work that&apos;s worth doing.</h2>
          <Button to="/contact" variant="inverse">
            Tell us what&apos;s next <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
