import { useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

  .checklist-page {
    --black: #0d0d0b;
    --gold: #c9a84c;
    --gold-light: #d4b96a;
    --cream: #f0ebe0;
    --cream-dim: #b8b0a0;
    --olive-block: #1e1e14;
    --olive-border: #2e2e1a;
    --text-muted: #7a756a;
    --max-width: 780px;
    background-color: var(--black);
    color: var(--cream);
    font-family: 'EB Garamond', Georgia, serif;
    line-height: 1.75;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .cl-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 24px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, rgba(13,13,11,0.98) 0%, transparent 100%);
  }

  .cl-nav-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.72rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    text-decoration: none;
  }

  .cl-nav-link {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--cream-dim);
    text-decoration: none;
    transition: color 0.2s;
  }

  .cl-nav-link:hover { color: var(--gold); }

  .cl-hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 40px 80px;
    position: relative;
  }

  .cl-hero::after {
    content: '';
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 1px; height: 60px;
    background: linear-gradient(to bottom, var(--gold), transparent);
  }

  .cl-section-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 48px;
  }

  .cl-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.4rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.15;
    color: var(--cream);
    max-width: 680px;
    opacity: 0;
    animation: clFadeUp 0.9s ease forwards 0.3s;
  }

  .cl-hero-sub {
    margin-top: 28px;
    font-size: 1.1rem;
    color: var(--cream-dim);
    max-width: 520px;
    line-height: 1.8;
    opacity: 0;
    animation: clFadeUp 0.9s ease forwards 0.5s;
  }

  .cl-hero-sub strong { color: var(--cream); font-weight: 500; }

  .cl-hero-note {
    margin-top: 16px;
    font-size: 0.95rem;
    color: var(--text-muted);
    opacity: 0;
    animation: clFadeUp 0.9s ease forwards 0.7s;
  }

  @keyframes clFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .cl-section {
    padding: 100px 40px;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .cl-section-label-inline {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 32px;
    display: block;
  }

  .cl-display-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    font-weight: 800;
    line-height: 1.2;
    color: var(--cream);
    margin-bottom: 40px;
  }

  .cl-display-heading .gold { color: var(--gold); }

  .cl-body p {
    font-size: 1.15rem;
    color: var(--cream-dim);
    line-height: 1.85;
    margin-bottom: 1.4em;
  }

  .cl-body strong { color: var(--cream); font-weight: 500; }

  .cl-quote {
    background: var(--olive-block);
    border-left: 3px solid var(--gold);
    padding: 40px 48px;
    margin: 60px 0;
    border-radius: 2px;
  }

  .cl-quote p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    line-height: 1.6;
    color: var(--cream);
  }

  .cl-quote-label {
    margin-top: 20px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .cl-stat-block {
    text-align: center;
    padding: 80px 40px;
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .cl-big-number {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.5rem, 10vw, 7rem);
    font-weight: 900;
    color: var(--gold);
    line-height: 1;
    display: block;
  }

  .cl-stat-label {
    margin-top: 16px;
    font-size: 1.1rem;
    color: var(--cream-dim);
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
  }

  .cl-list {
    list-style: none;
    margin: 48px 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 0;
  }

  .cl-list li {
    display: flex;
    align-items: baseline;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size: 1.05rem;
    color: var(--cream-dim);
  }

  .cl-list li::before {
    content: '—';
    color: var(--gold);
    flex-shrink: 0;
  }

  .cl-list li strong {
    color: var(--cream);
    font-weight: 500;
    margin-right: 6px;
  }

  .cl-divider {
    width: 60px;
    height: 1px;
    background: var(--gold);
    margin: 60px auto;
    opacity: 0.5;
  }

  .cl-price-box {
    background: var(--olive-block);
    border: 1px solid var(--olive-border);
    padding: 64px 56px;
    margin: 80px 0 0;
    border-radius: 2px;
    text-align: center;
  }

  .cl-price-label {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 24px;
  }

  .cl-price-amount {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 900;
    color: var(--cream);
    line-height: 1;
    display: block;
    margin-bottom: 32px;
  }

  .cl-price-copy {
    font-size: 1.05rem;
    color: var(--cream-dim);
    max-width: 520px;
    margin: 0 auto 24px;
    line-height: 1.8;
  }

  .cl-price-copy strong { color: var(--cream); font-weight: 500; }
  .cl-price-copy em { font-style: italic; color: var(--cream-dim); font-size: 0.95rem; }

  .cl-cta {
    display: inline-block;
    background: var(--gold);
    color: var(--black);
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px 48px;
    border-radius: 1px;
    margin-top: 16px;
    transition: background 0.2s, transform 0.15s;
  }

  .cl-cta:hover {
    background: var(--gold-light);
    transform: translateY(-1px);
  }

  .cl-cta-note {
    margin-top: 20px;
    font-size: 0.8rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }

  .cl-footer {
    padding: 60px 40px;
    text-align: center;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .cl-footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    text-decoration: none;
    display: block;
    margin-bottom: 16px;
  }

  .cl-footer-link {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
  }

  .cl-footer-link:hover { color: var(--cream-dim); }

  @media (max-width: 640px) {
    .cl-nav { padding: 20px 24px; }
    .cl-hero { padding: 100px 24px 60px; }
    .cl-section { padding: 72px 24px; }
    .cl-quote { padding: 28px 28px; }
    .cl-price-box { padding: 48px 28px; }
  }
`;

export default function Checklist() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="checklist-page">
      <style>{styles}</style>

      <nav className="cl-nav">
        <a href="/" className="cl-nav-brand">The Exit Index</a>
        <a href="/calculator" className="cl-nav-link">Exit Gap Calculator</a>
      </nav>

      <div className="cl-hero">
        <div className="cl-section-label">The Exit Index</div>
        <h1 className="cl-hero-title">
          Most business owners<br />will never see this page.
        </h1>
        <p className="cl-hero-sub">
          The Exit Checklist is not the next step for every business.<br />
          It is the right step for <strong>a specific kind of owner.</strong>
        </p>
        <p className="cl-hero-note">
          If you found your way here, you probably already know which one you are.
        </p>
      </div>

      <div className="cl-section">
        <div className="reveal">
          <span className="cl-section-label-inline">Where The Calculator Ends</span>
          <div className="cl-display-heading">
            You have seen your number.<br />
            <span className="gold">Now close the gap.</span>
          </div>
        </div>
        <div className="cl-body reveal">
          <p>The Exit Gap Calculator shows you the difference between what your business is worth today and what a buyer will actually pay. For most owners, that gap runs into six figures.</p>
          <p>Knowing the gap is the first move. <strong>Closing it is the work.</strong> And most owners never start because nobody has ever laid out exactly what to do, in what order, without a broker relationship attached to it.</p>
          <p>The businesses that sell were built to be transferred. Documented. Not dependent on the founder. Financially clean. A management layer that works without the owner in the room.</p>
          <p>You either built it that way, or you did not. If you did not, you still can. But only if you know exactly what needs to change before the clock runs out.</p>
        </div>
        <div className="cl-quote reveal">
          <p>"Do I still have what it takes to do what needs to be done?"</p>
          <div className="cl-quote-label">The question every business owner asks. Usually too late.</div>
        </div>
      </div>

      <div className="cl-section" style={{ paddingTop: 0 }}>
        <div className="reveal">
          <span className="cl-section-label-inline">Who This Is For</span>
          <div className="cl-display-heading">
            This is not for<br />every business owner.
          </div>
        </div>
        <div className="cl-body reveal">
          <p>Price's Law is a mathematical principle that holds across every industry, every country, every market. In any group, the square root of the total number of participants produces half of all the output.</p>
          <p>That means in a room of a hundred businesses, ten of them are carrying the weight of fifty. In an economy of millions, a tiny fraction of companies are responsible for half of everything that gets built, employed, bought and sold.</p>
          <p>These are not the newest businesses or the most funded. <strong>They are the ones that have been quietly holding their corner of the economy together for decades.</strong> The ones their suppliers depend on. The ones their staff have built careers around. The ones their communities would notice the absence of.</p>
          <p>When one of those businesses closes without a plan, the loss is not just personal. It spreads. Staff without jobs. Suppliers without contracts. Customers without options. Knowledge that took forty years to build, gone.</p>
        </div>
        <div className="cl-quote reveal">
          <p>The Exit Checklist was built for those businesses.</p>
          <div className="cl-quote-label">You already know if yours is one of them.</div>
        </div>
      </div>

      <div style={{ padding: "0 40px" }}>
        <div className="cl-stat-block reveal">
          <span className="cl-big-number">$10 trillion</span>
          <p className="cl-stat-label">in business value will change hands this decade. Most of it will not go to the people who built it.</p>
        </div>
      </div>

      <div className="cl-section">
        <div className="reveal">
          <span className="cl-section-label-inline">What This Gives You</span>
          <div className="cl-display-heading">
            Not a valuation.<br />Not an introduction to a broker.<br />
            <span className="gold">A system.</span>
          </div>
        </div>
        <div className="cl-body reveal">
          <p>Every factor that determines whether your business exits cleanly or quietly disappears — assessed in one place, in the right order.</p>
        </div>
        <ul className="cl-list reveal">
          <li><strong>Financial clarity</strong> — what a buyer sees when they look at your numbers</li>
          <li><strong>Owner dependency</strong> — whether the business survives without you in the room</li>
          <li><strong>Documentation gaps</strong> — every process that currently lives only in your head</li>
          <li><strong>Management layer</strong> — whether your team can run the business or just follow instructions</li>
          <li><strong>Succession position</strong> — what happens if you need to leave tomorrow</li>
          <li><strong>Valuation gaps</strong> — the difference between what you think it is worth and what a buyer will pay</li>
          <li><strong>The action sequence</strong> — what to fix first, what to fix next, and what to stop worrying about</li>
        </ul>
        <div className="cl-body reveal">
          <p>No broker needed. No retainer. No six-month advisory relationship before anyone tells you what to actually do.</p>
          <p><strong>You have run your business without waiting for someone to hand you a plan. This is the same approach, applied to the most important financial transaction of your life.</strong></p>
        </div>
      </div>

      <div className="cl-divider" />

      <div className="cl-section">
        <div className="cl-price-box reveal">
          <div className="cl-price-label">The Exit Checklist</div>
          <span className="cl-price-amount">£10,000</span>
          <p className="cl-price-copy">This is not a mistake and it is not negotiable.</p>
          <p className="cl-price-copy">
            It is priced for the business owner who already understands that <strong>time costs more than money.</strong> Who has spent decades making decisions that cheaper operators would not make, because they knew the difference between price and value.
          </p>
          <p className="cl-price-copy">
            The gap between a well-executed exit and a chaotic one is not measured in thousands. It is measured in multiples of what you paid here.
          </p>
          <p className="cl-price-copy">
            <em>If that number made you hesitate because you are not sure this is serious — that is the most useful thing this page has told you.</em>
          </p>
          <p className="cl-price-copy">
            <em>If it made you hesitate because you want to be certain it is right for you — you have already read enough to know.</em>
          </p>
          <a
            href="https://buy.stripe.com/28E9AUeb47wo3nT1rXe3e00"
            className="cl-cta"
          >
            Claim Your Exit Checklist
          </a>
          <p className="cl-cta-note">Secure payment · One payment, no subscription</p>
        </div>
      </div>

      <footer className="cl-footer">
        <a href="/" className="cl-footer-brand">The Exit Index</a>
        <a href="/calculator" className="cl-footer-link">Back to the Exit Gap Calculator</a>
      </footer>

    </div>
  );
}
