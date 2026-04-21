import { useEffect } from 'react';

export default function IFranchisePartner() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add('visible');
            observer.unobserve(el.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        :root {
          --ink: #1A1A2E;
          --paper: #F5F0E8;
          --gold: #C9A84C;
          --gold-light: #e8d5a3;
          --gold-pale: #f7f0de;
          --muted: #7a7570;
          --rule: #d4cfc7;
          --col-width: 660px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
          background: var(--paper);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 18px;
          line-height: 1.75;
          -webkit-font-smoothing: antialiased;
        }

        .ifp-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 2rem 4rem;
          position: relative;
        }

        .ifp-wrap::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at 50% 20%, rgba(201,168,76,0.07), transparent 65%);
          pointer-events: none;
          z-index: 0;
        }

        .ifp-inner {
          position: relative;
          z-index: 1;
          max-width: var(--col-width);
          width: 100%;
        }

        /* ── Header ── */
        .ifp-header {
          text-align: center;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 3.5rem;
        }

        .ifp-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2rem;
          display: block;
        }

        .ifp-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.6rem, 6vw, 4rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .ifp-subheader {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          opacity: 0.65;
          margin-bottom: 2.5rem;
        }

        .ifp-rule {
          width: 48px;
          height: 1px;
          background: var(--gold);
          margin: 0 auto;
        }

        /* ── Intro ── */
        .ifp-intro {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #1A1A2E;
          margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--rule);
        }

        /* ── Section ── */
        .ifp-section {
          margin-bottom: 3.5rem;
          padding-bottom: 3.5rem;
          border-bottom: 1px solid var(--rule);
        }

        .ifp-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 1.75rem;
        }

        .ifp-section h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin-bottom: 2rem;
        }

        /* ── Pillars list ── */
        .ifp-pillars {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ifp-pillar {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          padding: 1.4rem 0;
          border-bottom: 1px solid var(--rule);
        }

        .ifp-pillar:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .ifp-pillar-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: var(--gold);
          opacity: 0.7;
          flex-shrink: 0;
          width: 28px;
          padding-top: 0.2rem;
        }

        .ifp-pillar-text {
          font-size: 1rem;
          line-height: 1.7;
          color: #1A1A2E;
        }

        /* ── Investment block ── */
        .ifp-investment {
          background: var(--ink);
          padding: 3.5rem;
          margin-bottom: 3.5rem;
          position: relative;
          overflow: hidden;
        }

        .ifp-investment::before {
          content: '';
          position: absolute;
          top: -60%;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201,168,76,0.09), transparent 60%);
          pointer-events: none;
        }

        .ifp-investment-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          display: block;
          margin-bottom: 1.75rem;
        }

        .ifp-investment h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          color: var(--paper);
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }

        .ifp-investment p {
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(245,240,232,0.72);
          position: relative;
        }

        .ifp-investment-amount {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 900;
          color: var(--gold);
          letter-spacing: -0.02em;
          display: block;
          margin-bottom: 1.5rem;
          position: relative;
        }

        /* ── CTA button ── */
        .ifp-cta-wrap {
          text-align: center;
          margin-bottom: 4rem;
        }

        .ifp-cta {
          display: inline-block;
          background: var(--gold);
          color: var(--ink);
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 1.1rem 2.75rem;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }

        .ifp-cta:hover {
          background: var(--gold-light);
          transform: translateY(-2px);
        }

        /* ── Footer line ── */
        .ifp-footer {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--rule);
        }

        .ifp-footer p {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          line-height: 1.6;
        }

        /* ── Fade-up animation ── */
        .fade-up {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .ifp-investment { padding: 2.5rem 1.75rem; }
          .ifp-title { font-size: 2.4rem; }
        }
      `}</style>

      <div className="ifp-wrap">
        <div className="ifp-inner">

          {/* Header */}
          <header className="ifp-header fade-up">
            <span className="ifp-eyebrow">The Exit Index &mdash; Founding Architecture</span>
            <h1 className="ifp-title">A Private Invitation</h1>
            <p className="ifp-subheader">iFranchise Group &nbsp;&middot;&nbsp; Results Tier &nbsp;&middot;&nbsp; Founding Partner</p>
            <div className="ifp-rule"></div>
          </header>

          {/* Intro */}
          <p className="ifp-intro fade-up">
            This page was built for one firm. You are looking at the only franchise consulting
            spot in the Results tier of The Exit Index founding architecture. There are 5 Results
            spots globally. This is the only one reserved for a franchise consulting firm.
          </p>

          {/* What this means */}
          <section className="ifp-section fade-up">
            <span className="ifp-section-label">What this means for iFranchise</span>
            <ul className="ifp-pillars">
              <li className="ifp-pillar">
                <span className="ifp-pillar-num">01</span>
                <p className="ifp-pillar-text">
                  Your firm appears directly alongside a business owner&rsquo;s Exit Gap Calculator score
                  at the moment of highest intent.
                </p>
              </li>
              <li className="ifp-pillar">
                <span className="ifp-pillar-num">02</span>
                <p className="ifp-pillar-text">
                  No other franchise consulting firm will occupy this position. Ever.
                </p>
              </li>
              <li className="ifp-pillar">
                <span className="ifp-pillar-num">03</span>
                <p className="ifp-pillar-text">
                  Public recognition as a founding Results tier partner from day one.
                </p>
              </li>
              <li className="ifp-pillar">
                <span className="ifp-pillar-num">04</span>
                <p className="ifp-pillar-text">
                  First mover positioning before the platform scales globally.
                </p>
              </li>
            </ul>
          </section>

          {/* The founding partnership */}
          <div className="ifp-investment fade-up">
            <span className="ifp-investment-label">The Founding Partnership</span>
            <h2>The terms are simple.</h2>
            <span className="ifp-investment-amount">&pound;1,000,000 / year</span>
            <p>
              The founding investment is &pound;1,000,000 per year. In return we are asking for one quote
              from you on why exit intelligence matters in franchising, and permission to reference
              iFranchise publicly as a founding Results tier partner.
            </p>
          </div>

          {/* CTA */}
          <div className="ifp-cta-wrap fade-up">
            <a
              href="https://buy.stripe.com/cNi14o8QK2c48Id8Upe3e01"
              className="ifp-cta"
            >
              Join the Dream Team
            </a>
          </div>

          {/* Footer line */}
          <footer className="ifp-footer fade-up">
            <p>
              This page was created exclusively for iFranchise Group.<br />
              It will not be shared publicly.
            </p>
          </footer>

        </div>
      </div>
    </>
  );
}
