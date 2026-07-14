import { useEffect, useState, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --dark: #0d0d0d;
    --dark2: #141414;
    --dark3: #1c1c1c;
    --gold: #c9a84c;
    --gold-light: #e8c97a;
    --gold-dim: rgba(201,168,76,0.15);
    --white: #f5f5f0;
    --grey: #888880;
    --red: #c0392b;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--dark);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
  }

  .landing {
    background: var(--dark);
    min-height: 100vh;
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 24px 60px;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%),
      radial-gradient(ellipse 40% 30% at 80% 80%, rgba(201,168,76,0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  .grain {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.035;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-size: 256px;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 760px;
    margin: 0 auto;
  }

  .eyebrow {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 48px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.2s;
  }

  .big-number {
    font-family: 'Playfair Display', serif;
    font-size: clamp(120px, 22vw, 220px);
    font-weight: 900;
    line-height: 0.85;
    color: var(--white);
    letter-spacing: -0.02em;
    opacity: 0;
    animation: fadeUp 1s ease forwards 0.4s;
    position: relative;
    display: inline-block;
  }

  .big-number::after {
    content: '%';
    font-size: 0.35em;
    vertical-align: super;
    color: var(--gold);
    margin-left: 4px;
  }

  .number-sub {
    margin-top: 28px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.9s;
  }

  .number-sub p {
    font-size: clamp(15px, 2vw, 18px);
    color: var(--grey);
    line-height: 1.7;
    font-weight: 300;
  }

  .number-sub p strong {
    color: var(--white);
    font-weight: 400;
  }

  .hero-headline {
    margin-top: 52px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 1.2s;
  }

  .hero-headline h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.25;
    color: var(--white);
    letter-spacing: -0.01em;
  }

  .hero-sub {
    margin-top: 20px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 1.4s;
  }

  .hero-sub p {
    font-size: clamp(15px, 1.8vw, 17px);
    color: var(--grey);
    line-height: 1.7;
    max-width: 560px;
    margin: 0 auto;
  }

  .hero-cta {
    margin-top: 44px;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 1.6s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .cta-btn {
    display: inline-block;
    background: var(--gold);
    color: var(--dark);
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.05em;
    padding: 18px 44px;
    text-decoration: none;
    transition: background 0.2s ease, transform 0.2s ease;
    cursor: pointer;
    border: none;
  }

  .cta-btn:hover {
    background: var(--gold-light);
    transform: translateY(-1px);
  }

  .cta-trust {
    font-size: 12px;
    color: var(--grey);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .scroll-hint span {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--grey);
  }

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scrollPulse 2s ease infinite;
  }

  /* ── TENSION SECTION ── */
  .section {
    padding: 100px 24px;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
  }

  .section-divider {
    width: 1px;
    height: 80px;
    background: linear-gradient(to bottom, transparent, var(--gold), transparent);
    margin: 0 auto 80px;
  }

  .tension-block {
    text-align: center;
  }

  .tension-block .trillion {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 700;
    color: var(--white);
    letter-spacing: -0.02em;
    margin-bottom: 32px;
  }

  .tension-block .trillion span {
    color: var(--gold);
  }

  .tension-text {
    font-size: clamp(16px, 2vw, 19px);
    line-height: 1.85;
    color: var(--grey);
    margin-bottom: 20px;
  }

  .tension-text strong {
    color: var(--white);
    font-weight: 400;
  }

  .tension-quote {
    margin: 56px auto;
    max-width: 600px;
    padding: 40px;
    border-left: 2px solid var(--gold);
    background: var(--gold-dim);
    text-align: left;
  }

  .tension-quote p {
    font-family: 'Playfair Display', serif;
    font-size: clamp(18px, 2.5vw, 24px);
    line-height: 1.6;
    color: var(--white);
    font-style: italic;
    font-weight: 400;
  }

  .tension-quote cite {
    display: block;
    margin-top: 16px;
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    font-style: normal;
  }

  /* ── ASYMMETRY SECTION ── */
  .asymmetry {
    background: var(--dark2);
    padding: 100px 24px;
  }

  .asymmetry-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 32px;
  }

  .asymmetry h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    line-height: 1.2;
    color: var(--white);
    margin-bottom: 40px;
    letter-spacing: -0.01em;
  }

  .buyer-list {
    list-style: none;
    margin: 32px 0;
  }

  .buyer-list li {
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size: clamp(15px, 1.8vw, 17px);
    color: var(--grey);
    display: flex;
    align-items: flex-start;
    gap: 16px;
    line-height: 1.6;
  }

  .buyer-list li::before {
    content: '—';
    color: var(--gold);
    flex-shrink: 0;
    margin-top: 2px;
  }

  .buyer-list li strong {
    color: var(--white);
    font-weight: 400;
  }

  .gap-statement {
    margin-top: 48px;
    padding: 40px;
    border: 1px solid rgba(201,168,76,0.3);
    background: var(--gold-dim);
  }

  .gap-statement p {
    font-family: 'Playfair Display', serif;
    font-size: clamp(18px, 2.5vw, 24px);
    line-height: 1.6;
    color: var(--white);
    font-weight: 400;
  }

  .gap-statement p span {
    color: var(--gold);
    font-style: italic;
  }

  /* ── BINARY SECTION ── */
  .binary {
    padding: 120px 24px;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
  }

  .binary h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4.5vw, 48px);
    font-weight: 700;
    line-height: 1.2;
    color: var(--white);
    margin-bottom: 48px;
    letter-spacing: -0.02em;
  }

  .two-paths {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    margin: 0 auto 56px;
    max-width: 600px;
  }

  .path {
    padding: 36px 28px;
    text-align: left;
  }

  .path-a {
    background: var(--dark3);
    border-top: 2px solid var(--gold);
  }

  .path-b {
    background: var(--dark2);
    border-top: 2px solid rgba(255,255,255,0.1);
  }

  .path-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 16px;
    display: block;
  }

  .path-a .path-label { color: var(--gold); }
  .path-b .path-label { color: var(--grey); }

  .path p {
    font-size: 15px;
    line-height: 1.7;
  }

  .path-a p { color: var(--white); }
  .path-b p { color: var(--grey); }

  .binary-closer {
    font-size: clamp(15px, 2vw, 18px);
    color: var(--grey);
    line-height: 1.8;
    margin-bottom: 48px;
  }

  .binary-closer strong {
    color: var(--white);
    font-weight: 400;
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 1.15em;
    margin-top: 8px;
  }

  /* ── WHAT YOU'LL KNOW ── */
  .know {
    background: var(--dark2);
    padding: 100px 24px;
  }

  .know-inner {
    max-width: 800px;
    margin: 0 auto;
  }

  .know h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 3.5vw, 38px);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 48px;
    letter-spacing: -0.01em;
  }

  .know-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .know-item {
    background: var(--dark3);
    padding: 32px;
  }

  .know-item:nth-child(odd) {
    background: rgba(201,168,76,0.04);
  }

  .know-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 700;
    color: var(--gold);
    opacity: 0.7;
    line-height: 1;
    margin-bottom: 12px;
  }

  .know-item h3 {
    font-size: 15px;
    font-weight: 500;
    color: var(--white);
    margin-bottom: 8px;
    letter-spacing: 0.02em;
  }

  .know-item p {
    font-size: 14px;
    color: var(--grey);
    line-height: 1.6;
  }

  .know-footer {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    align-items: center;
  }

  .know-tags {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .tag {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    padding: 6px 14px;
    border: 1px solid rgba(201,168,76,0.3);
  }

  /* ── INFRASTRUCTURE ── */
  .infra {
    padding: 100px 24px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .infra h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 3.5vw, 40px);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 32px;
    letter-spacing: -0.01em;
  }

  .infra p {
    font-size: clamp(15px, 1.8vw, 18px);
    color: var(--grey);
    line-height: 1.85;
    margin-bottom: 20px;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
  }

  .infra p strong {
    color: var(--white);
    font-weight: 400;
  }

  .infra-closer {
    margin-top: 56px;
    padding: 40px;
    background: var(--dark2);
    border-top: 1px solid rgba(201,168,76,0.2);
  }

  .infra-closer p {
    font-size: clamp(14px, 1.6vw, 16px);
    color: var(--grey);
    line-height: 1.8;
  }

  .infra-closer strong {
    color: var(--white);
    font-weight: 400;
  }

  /* ── ADVISORS ── */
  .advisors {
    background: var(--dark2);
    padding: 80px 24px;
  }

  .advisors-inner {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .advisors h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 32px);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 20px;
    letter-spacing: -0.01em;
  }

  .advisors p {
    font-size: 15px;
    color: var(--grey);
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .advisors a {
    font-size: 13px;
    color: var(--gold);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(201,168,76,0.3);
    padding-bottom: 2px;
    transition: border-color 0.2s;
  }

  .advisors a:hover {
    border-color: var(--gold);
  }

  .advisors-stat {
    text-align: center;
    padding: 48px;
    background: var(--dark3);
    border: 1px solid rgba(201,168,76,0.15);
  }

  .advisors-stat .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 8vw, 80px);
    font-weight: 900;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 12px;
  }

  .advisors-stat p {
    font-size: 13px;
    color: var(--grey);
    line-height: 1.6;
    letter-spacing: 0.05em;
  }

  /* ── FINAL CTA ── */
  .final-cta {
    padding: 120px 24px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .final-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .final-cta h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 700;
    color: var(--white);
    margin-bottom: 20px;
    letter-spacing: -0.02em;
    position: relative;
  }

  .final-cta p {
    font-size: clamp(15px, 1.8vw, 18px);
    color: var(--grey);
    margin-bottom: 44px;
    line-height: 1.7;
    position: relative;
  }

  /* ── FOOTER ── */
  .footer {
    background: var(--dark);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 40px 24px;
  }

  .footer-inner {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer-brand {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: var(--gold);
    letter-spacing: 0.05em;
  }

  .footer-disclaimer {
    font-size: 12px;
    color: var(--grey);
    line-height: 1.7;
    max-width: 640px;
  }

  .footer-copy {
    font-size: 11px;
    color: var(--grey);
    letter-spacing: 0.05em;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 640px) {
    .two-paths { grid-template-columns: 1fr; }
    .know-grid { grid-template-columns: 1fr; }
    .advisors-inner { grid-template-columns: 1fr; gap: 40px; }
    .tension-quote { padding: 28px; }
  }
`;

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function LandingPage() {
  useReveal();

  return (
    <>
      <style>{styles}</style>
      <main className="landing">
        <div className="grain" />

        {/* ── HERO ── */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">The Exit Index</p>

            <div className="big-number">92</div>

            <div className="number-sub">
              <p>
                That's the percentage of businesses that exit <strong>without selling.</strong>
              </p>
              <p>Not because they weren't worth buying.</p>
              <p>Because the owner ran out of time to find out.</p>
            </div>

            <div className="hero-headline">
              <h1>The businesses that sell are the ones that knew their number.</h1>
            </div>

            <div className="hero-sub">
              <p>
                The Exit Gap Calculator shows you the difference between what your
                business is worth today and what a buyer will actually pay.
              </p>
            </div>

            <div className="hero-cta">
              <a className="cta-btn" href="/calculator">
                Find Out My Number →
              </a>
              <span className="cta-trust">
                Free · 2 minutes · No email required to see your results
              </span>
            </div>
          </div>

          <div className="scroll-hint">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ── TENSION ── */}
        <div className="section">
          <div className="section-divider" />

          <div className="tension-block reveal">
            <p className="tension-trillion trillion">
              <span>$10 trillion</span> in business value<br />will change hands this decade.
            </p>
            <p className="tension-text">
              Most of it won't go to the people who built it.
            </p>
            <p className="tension-text">
              Not because those owners didn't work hard enough.<br />
              Not because their businesses weren't valuable.
            </p>
            <p className="tension-text">
              Because at some point — quietly, without fanfare —<br />
              they reached the moment every business owner reaches eventually.
            </p>
          </div>

          <div className="tension-quote reveal">
            <p>
              "Do I still have what it takes to do what needs to be done?"
            </p>
            <cite>The question every business owner asks. Usually too late.</cite>
          </div>

          <div className="tension-block reveal">
            <p className="tension-text">
              Without knowing their number,<br />
              they had no way to answer that question.
            </p>
            <p className="tension-text">
              So they waited.<br />
              <strong>And the window closed.</strong>
            </p>
          </div>
        </div>

        {/* ── ASYMMETRY ── */}
        <section className="asymmetry">
          <div className="asymmetry-inner reveal">
            <p className="section-label">The information gap</p>
            <h2>Before a buyer makes you an offer,<br />they already know your number.</h2>

            <ul className="buyer-list">
              <li>Your <strong>revenue concentration</strong> — and what happens if your top client leaves</li>
              <li>Your <strong>owner dependency score</strong> — whether the business survives without you</li>
              <li>Your <strong>documentation gaps</strong> — every process that lives only in your head</li>
              <li>Your <strong>margin relative to your sector</strong> — and how it compresses their offer</li>
              <li>Your <strong>online reputation</strong> as a proxy for client retention risk</li>
            </ul>

            <div className="gap-statement reveal">
              <p>
                That information gap is not accidental. It is structural.
                It is <span>the Exit Gap</span> — the difference between what you
                think your business is worth and what a buyer will actually pay.
                For most business owners, it runs into six figures.
              </p>
            </div>
          </div>
        </section>

        {/* ── BINARY ── */}
        <section style={{ padding: "100px 24px" }}>
          <div className="binary reveal" style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <h2>Two kinds of business owners<br />will read this page.</h2>

            <div className="two-paths">
              <div className="path path-a">
                <span className="path-label">Path one</span>
                <p>
                  Find out their number today. Know exactly where they stand.
                  Fix what's fixable before going to market. Exit on their terms.
                </p>
              </div>
              <div className="path path-b">
                <span className="path-label">Path two</span>
                <p>
                  Find out too late. In a negotiation, with a buyer who already
                  knows the number. Accept what they're offered.
                </p>
              </div>
            </div>

            <p className="binary-closer">
              The 92% were not uninformed. They were undecided.
              <strong>Until the window closed.</strong>
            </p>

            <a className="cta-btn" href="/calculator">
              Find Out My Number →
            </a>
          </div>
        </section>

        {/* ── WHAT YOU'LL KNOW ── */}
        <section className="know">
          <div className="know-inner reveal">
            <p className="section-label">The calculator</p>
            <h2>What you'll know in two minutes</h2>

            <div className="know-grid">
              {[
                ["Your estimated value", "What a buyer is likely to pay for your business today — not what you hope for."],
                ["Your Exit Gap", "The difference between your expectation and what the market will deliver."],
                ["Your Exit Index Score", "A 0–100 rating of how exit-ready your business actually is."],
                ["What's holding you back", "The specific factors suppressing your score — and your sale price."],
              ].map(([title, desc], i) => (
                <div className="know-item" key={i}>
                  <div className="know-num">0{i + 1}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            <div className="know-footer">
              <div className="know-tags">
                <span className="tag">Free</span>
                <span className="tag">2 minutes</span>
                <span className="tag">No email required</span>
                <span className="tag">UK · USA · Australia</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── INFRASTRUCTURE ── */}
        <section className="infra reveal">
          <p className="section-label">The Exit Index</p>
          <h2>This is bigger than one calculator.</h2>
          <p>
            The Exit Gap Calculator is the front door to{" "}
            <strong>The Exit Index</strong> — a global ranking system for
            exit-ready businesses.
          </p>
          <p>
            We are building the infrastructure that gives business owners the
            same information buyers have had all along. Think of it as the
            credit score for business exits.
          </p>
          <p>
            Not a valuation service. Not a consultancy.{" "}
            <strong>Infrastructure.</strong>
          </p>

          <div className="infra-closer reveal">
            <p>
              The businesses that know their number early are the ones that exit
              on their terms.
            </p>
            <p>
              <strong>The ones that don't become part of the 92%.</strong>
            </p>
          </div>
        </section>

        {/* ── ADVISORS ── */}
        <section className="advisors">
          <div className="advisors-inner reveal">
            <div>
              <p className="section-label">For advisors</p>
              <h2>If you work with business owners preparing to exit</h2>
              <p>
                The Exit Gap Calculator surfaces gaps before formal valuation
                begins — before they become deal-breakers in due diligence.
              </p>
              <p>
                We are working with a founding group of M&amp;A advisors, exit
                specialists, and business coaches who share this tool with
                their networks.
              </p>
              <a href="mailto:david@theexitindex.com">
                Find out about the Founding Partner programme →
              </a>
            </div>
            <div className="advisors-stat">
              <div className="stat-num">92%</div>
              <p>
                of businesses that exit<br />close rather than sell.<br />
                <br />
                Your clients deserve<br />to know before it's too late.
              </p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="final-cta">
          <h2>Find out your number<br />before they do.</h2>
          <p>
            Free. Two minutes. No email required to see your results.
          </p>
          <a className="cta-btn" href="/calculator">
            Find Out My Number →
          </a>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">The Exit Index</div>
            <p className="footer-disclaimer">
              This calculator provides educational estimates based on common
              business valuation factors. It does not constitute financial,
              legal, tax, or professional advice. Results are approximations for
              informational purposes only. For formal valuation, M&amp;A
              advisory, or exit planning, consult qualified professionals.
            </p>
            <p className="footer-copy">
              © 2026 The Exit Index. All rights reserved. · www.theexitindex.com
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
