import { useEffect } from 'react';

export default function TheExitGap() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.gap-bar-fill').forEach((bar, i) => {
            bar.style.transition = `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s`;
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.gap-diagram').forEach(el => barObserver.observe(el));

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --ink: #0f0e0c;
          --paper: #f5f2ec;
          --gold: #c9a84c;
          --gold-light: #e8d5a3;
          --gold-pale: #f7f0de;
          --red: #b8372b;
          --muted: #7a7570;
          --rule: #d4cfc7;
          --col-width: 680px;
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

        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--paper);
          border-bottom: 1px solid var(--rule);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }
        .nav-logo { font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); text-decoration: none; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--ink); color: var(--paper); padding: 0.5rem 1.25rem; text-decoration: none; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); color: var(--ink); }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 8rem 2rem 5rem;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }

        .hero-label { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
        .hero-label::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }

        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 8vw, 7rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 2rem; }
        .hero-title em { font-style: italic; color: var(--gold); }

        .hero-deck { max-width: 580px; font-size: 1.2rem; line-height: 1.6; color: var(--muted); margin-bottom: 3rem; font-weight: 300; }

        .hero-stat-row { display: flex; gap: 3rem; padding-top: 2rem; border-top: 1px solid var(--rule); }
        .hero-stat strong { display: block; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: var(--ink); line-height: 1; margin-bottom: 0.25rem; }
        .hero-stat span { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        .scroll-line { position: absolute; bottom: 2rem; right: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .scroll-line span { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); writing-mode: vertical-rl; }
        .scroll-line::after { content: ''; display: block; width: 1px; height: 60px; background: linear-gradient(to bottom, var(--muted), transparent); animation: scrollpulse 2s ease-in-out infinite; }
        @keyframes scrollpulse { 0%, 100% { opacity: 0.3; transform: scaleY(1); } 50% { opacity: 1; transform: scaleY(1.1); } }

        .content-wrap { max-width: var(--col-width); margin: 0 auto; padding: 0 2rem; }

        section { padding: 5rem 0; }

        .section-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem; }
        .section-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--gold); }

        h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 1.5rem; }

        p { margin-bottom: 1.5rem; color: #3a3733; }
        p:last-child { margin-bottom: 0; }

        strong { font-weight: 500; color: var(--ink); }

        .pull-quote { border-left: 3px solid var(--gold); padding: 1.5rem 2rem; margin: 3rem 0; background: var(--gold-pale); }
        .pull-quote p { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-style: italic; line-height: 1.5; color: var(--ink); margin: 0; }

        .gap-diagram { margin: 4rem 0; background: var(--ink); padding: 3rem; position: relative; overflow: hidden; }
        .gap-diagram::before { content: ''; position: absolute; top: 0; right: 0; width: 200px; height: 200px; background: radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%); }
        .gap-diagram-title { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 2.5rem; }
        .gap-bars { display: flex; flex-direction: column; gap: 1.5rem; }
        .gap-bar-row { display: flex; flex-direction: column; gap: 0.4rem; }
        .gap-bar-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.5); }
        .gap-bar-track { height: 44px; background: rgba(255,255,255,0.05); position: relative; display: flex; align-items: center; }
        .gap-bar-fill { height: 100%; display: flex; align-items: center; padding: 0 1rem; position: relative; transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }
        .gap-bar-fill.owner { background: var(--gold); width: 85%; }
        .gap-bar-fill.buyer { background: var(--red); width: 52%; }
        .gap-bar-fill.prepared { background: #4a9e6b; width: 78%; }
        .gap-bar-value { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: var(--ink); white-space: nowrap; }
        .gap-bar-sublabel { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(245,242,236,0.4); letter-spacing: 0.08em; margin-top: 0.2rem; padding-left: 0.25rem; }
        .gap-note { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.08em; color: rgba(245,242,236,0.3); line-height: 1.6; }

        .multiple-table { margin: 3rem 0; border: 1px solid var(--rule); }
        .multiple-table-head { background: var(--ink); display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 0.75rem 1.25rem; }
        .multiple-table-head span { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.6); }
        .multiple-table-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; padding: 1rem 1.25rem; border-bottom: 1px solid var(--rule); align-items: center; transition: background 0.2s; }
        .multiple-table-row:last-child { border-bottom: none; }
        .multiple-table-row:hover { background: var(--gold-pale); }
        .multiple-table-row .category { font-weight: 500; color: var(--ink); font-size: 0.95rem; }
        .multiple-table-row .val { font-family: 'DM Mono', monospace; font-size: 0.85rem; color: var(--muted); }
        .multiple-table-row .val.highlight { color: var(--red); font-weight: 500; }
        .multiple-table-row .val.good { color: #4a9e6b; font-weight: 500; }

        .callout { background: var(--gold-pale); border: 1px solid var(--gold-light); padding: 2.5rem; margin: 3rem 0; }
        .callout-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .callout h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.3; }
        .callout p { font-size: 0.95rem; margin-bottom: 0; }

        .numbered-list { counter-reset: item; list-style: none; margin: 2rem 0; }
        .numbered-list li { counter-increment: item; display: flex; gap: 1.5rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--rule); }
        .numbered-list li:last-child { border-bottom: none; }
        .numbered-list li::before { content: counter(item, decimal-leading-zero); font-family: 'DM Mono', monospace; font-size: 0.75rem; color: var(--gold); flex-shrink: 0; padding-top: 0.2rem; letter-spacing: 0.05em; }
        .numbered-list li strong { display: block; margin-bottom: 0.25rem; font-size: 1rem; }
        .numbered-list li p { margin: 0; font-size: 0.95rem; color: var(--muted); }

        .calc-cta { background: var(--ink); padding: 4rem 3rem; margin: 4rem 0; text-align: center; position: relative; overflow: hidden; }
        .calc-cta::before { content: ''; position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.12), transparent 60%); pointer-events: none; }
        .calc-cta-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; }
        .calc-cta h2 { color: var(--paper); font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1rem; }
        .calc-cta p { color: rgba(245,242,236,0.6); font-size: 1rem; max-width: 460px; margin: 0 auto 2rem; }
        .calc-cta a { display: inline-block; background: var(--gold); color: var(--ink); font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 1rem 2.5rem; text-decoration: none; font-weight: 500; transition: background 0.2s, transform 0.2s; }
        .calc-cta a:hover { background: var(--gold-light); transform: translateY(-1px); }

        .sources { padding: 3rem 0; border-top: 1px solid var(--rule); }
        .sources h3 { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 1.5rem; }
        .sources ol { padding-left: 1.5rem; }
        .sources li { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--muted); line-height: 1.6; margin-bottom: 0.5rem; letter-spacing: 0.02em; }
        .sources li span { color: var(--gold); }

        footer { border-top: 1px solid var(--rule); padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; }
        footer p { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); margin: 0; }
        footer a { color: var(--muted); text-decoration: none; transition: color 0.2s; }
        footer a:hover { color: var(--ink); }

        .divider { border: none; border-top: 1px solid var(--rule); margin: 2rem 0; }

        .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 640px) {
          .hero-stat-row { flex-direction: column; gap: 1.5rem; }
          .multiple-table-head, .multiple-table-row { grid-template-columns: 2fr 1fr 1fr; }
          .multiple-table-head span:nth-child(3), .multiple-table-row .val:nth-child(3) { display: none; }
          footer { flex-direction: column; gap: 1rem; text-align: center; }
          nav .nav-links { display: none; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">The Exit Index</a>
        <ul className="nav-links">
          <li><a href="/intelligence">The Intelligence</a></li>
          <li><a href="/trusted-advisors">Trusted Advisors</a></li>
        </ul>
        <a href="/calculator" className="nav-cta">Calculate Your Gap</a>
      </nav>

      <div className="hero">
        <div className="hero-label">The Intelligence &mdash; 01</div>
        <h1 className="hero-title">The<br /><em>Exit Gap</em></h1>
        <p className="hero-deck">
          The difference between what a business owner believes their company is worth and what a buyer will actually pay. It is the most expensive miscalculation in business — and almost no one measures it until it's too late.
        </p>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <strong>$10T</strong>
            <span>Exit value at risk globally per year</span>
          </div>
          <div className="hero-stat">
            <strong>2&ndash;4&times;</strong>
            <span>Typical gap between perceived and realised multiple</span>
          </div>
          <div className="hero-stat">
            <strong>80%</strong>
            <span>Of businesses listed never complete a sale</span>
          </div>
        </div>
        <div className="scroll-line"><span>Read</span></div>
      </div>

      <main>
        <div className="content-wrap">

          <section className="fade-up">
            <div className="section-label">The Problem</div>
            <h2>Most business owners will only sell once. They practise on their own company.</h2>
            <p>
              A business owner spends fifteen, twenty, sometimes thirty years building something. In that time they develop deep knowledge of their industry, their customers, their operations. But they develop almost no knowledge of what buyers actually pay for businesses like theirs — because there is no reason to, until there is every reason to.
            </p>
            <p>
              By the time most owners discover the gap between what they expected and what the market will offer, they are already in a sale process. Negotiating position is weak. Time pressure is real. The gap, which could have been closed over years, now has to be managed over months — or accepted.
            </p>
            <p>
              This is the Exit Gap. It is not a negotiating failure. It is a preparation failure. And it is almost entirely avoidable.
            </p>

            <div className="pull-quote">
              <p>"The day you decide to sell is the worst day to start preparing for it."</p>
            </div>
          </section>

          <section className="fade-up">
            <div className="section-label">The Anatomy</div>
            <h2>Where the gap actually comes from</h2>
            <p>
              The Exit Gap is not a single number. It is the accumulation of several compounding discounts that buyers apply — methodically, based on information the owner often does not know they are missing.
            </p>

            <ul className="numbered-list">
              <li>
                <div>
                  <strong>Owner dependency</strong>
                  <p>If the business cannot function without the owner, buyers apply a significant discount — sometimes 1&ndash;2 full turns of EBITDA. The business is perceived as a job, not an asset.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Customer concentration</strong>
                  <p>When more than 20% of revenue comes from a single customer, most sophisticated buyers reduce their offer. The risk is real and the discount reflects it.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Financial opacity</strong>
                  <p>Unaudited accounts, mixed personal and business expenses, inconsistent reporting — each of these erodes buyer confidence and compresses the multiple they are prepared to pay.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>Absent growth narrative</strong>
                  <p>Buyers are paying for the future as much as the past. Businesses that cannot articulate a credible growth story are valued on history alone — a structurally lower number.</p>
                </div>
              </li>
              <li>
                <div>
                  <strong>No competitive tension</strong>
                  <p>A single buyer is a weak negotiating position. Businesses that enter sale processes without multiple credible acquirers systematically leave value on the table.</p>
                </div>
              </li>
            </ul>
          </section>

          <div className="gap-diagram fade-up">
            <div className="gap-diagram-title">Illustrative Exit Gap &mdash; Same Business, Different Preparation</div>
            <div className="gap-bars">
              <div className="gap-bar-row">
                <div className="gap-bar-label">Owner's perceived value</div>
                <div className="gap-bar-track">
                  <div className="gap-bar-fill owner">
                    <span className="gap-bar-value">£4.2M</span>
                  </div>
                </div>
                <div className="gap-bar-sublabel">Based on 6&times; EBITDA &mdash; comparable to recent sector transactions the owner is aware of</div>
              </div>
              <div className="gap-bar-row">
                <div className="gap-bar-label">Unprepared sale outcome</div>
                <div className="gap-bar-track">
                  <div className="gap-bar-fill buyer">
                    <span className="gap-bar-value">£2.6M</span>
                  </div>
                </div>
                <div className="gap-bar-sublabel">Buyer applies discounts: owner dependency, concentration risk, financial opacity &mdash; offer lands at 3.7&times;</div>
              </div>
              <div className="gap-bar-row">
                <div className="gap-bar-label">Prepared sale outcome</div>
                <div className="gap-bar-track">
                  <div className="gap-bar-fill prepared">
                    <span className="gap-bar-value">£3.9M</span>
                  </div>
                </div>
                <div className="gap-bar-sublabel">Risks addressed, growth narrative documented, competitive tension created &mdash; multiple recovers to 5.6&times;</div>
              </div>
            </div>
            <div className="gap-note">
              Note: Figures are illustrative based on a £700K EBITDA business. Actual outcomes vary by sector, size, and market conditions. Source: Exit Index modelling based on IBBA Market Pulse data and BizBuySell transaction reports. &mdash; <span style={{color:"rgba(201,168,76,0.6)"}}>*Estimates marked where third-party data is unavailable.</span>
            </div>
          </div>

          <section className="fade-up">
            <div className="section-label">The Data</div>
            <h2>What the transaction data shows</h2>
            <p>
              The International Business Brokers Association (IBBA) publishes quarterly market pulse data on completed SME transactions. The pattern is consistent across years and geographies: preparation is the primary predictor of outcome quality, ahead of market timing, sector, or size.
            </p>
            <p>
              BizBuySell's annual insight reports — covering hundreds of thousands of listed businesses — show that the median time on market for unprepared listings is significantly longer, and that price reductions during the sale process are common. The businesses that sell quickly, at or above asking price, share identifiable characteristics. The Exit Gap is the distance between those characteristics and where most owners actually are.
            </p>

            <div className="multiple-table fade-up">
              <div className="multiple-table-head">
                <span>Business Profile</span>
                <span>Typical Multiple</span>
                <span>vs. Sector Avg</span>
                <span>Gap Status</span>
              </div>
              <div className="multiple-table-row">
                <span className="category">Owner-dependent, no systems</span>
                <span className="val highlight">2.5&ndash;3.5&times;</span>
                <span className="val highlight">&minus;35%</span>
                <span className="val highlight">Wide gap</span>
              </div>
              <div className="multiple-table-row">
                <span className="category">Some systems, owner present</span>
                <span className="val">3.5&ndash;5&times;</span>
                <span className="val">At market</span>
                <span className="val">Moderate gap</span>
              </div>
              <div className="multiple-table-row">
                <span className="category">Systems-led, management team</span>
                <span className="val good">5&ndash;7&times;</span>
                <span className="val good">+20%</span>
                <span className="val good">Gap closed</span>
              </div>
              <div className="multiple-table-row">
                <span className="category">Recurring revenue, scalable</span>
                <span className="val good">7&ndash;12&times;</span>
                <span className="val good">+60%</span>
                <span className="val good">Premium exit</span>
              </div>
            </div>
            <p style={{fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:"var(--muted)", letterSpacing:"0.05em"}}>
              *Multiple ranges are indicative, based on IBBA Market Pulse Q3 2024 and Exit Index sector modelling. Individual outcomes vary. Premium multiples typically apply to businesses with £1M+ EBITDA.
            </p>
          </section>

          <section className="fade-up">
            <div className="section-label">The Opportunity</div>
            <h2>The gap is closeable. Most owners never close it.</h2>
            <p>
              The Exit Gap is not a structural feature of markets. It is a consequence of information asymmetry: buyers know what drives value, and most sellers do not. Every component of the gap — owner dependency, concentration, opacity, narrative, tension — is addressable with time and the right preparation.
            </p>
            <p>
              The problem is that most business owners have no mechanism to measure their gap, no benchmark to compare themselves against, and no trusted advisor who has a complete picture of where they stand relative to what buyers in their sector are actually paying.
            </p>
            <p>
              This is precisely the gap The Exit Index is designed to close. Not by advising directly, but by building the intelligence infrastructure that makes preparation possible — and by connecting owners with the advisors qualified to help them act on it.
            </p>

            <div className="callout">
              <div className="callout-label">The Exit Index</div>
              <h3>Ranking the businesses that are ready. Connecting them with the advisors who can close the gap.</h3>
              <p>The Exit Gap Calculator gives business owners a baseline measurement in under ten minutes. No obligation. No pitch. Just a number — and a clear picture of where the gap is widest.</p>
            </div>
          </section>

          <div className="calc-cta fade-up">
            <div className="calc-cta-label">Free &mdash; No Obligation</div>
            <h2>Calculate Your Exit Gap</h2>
            <p>Ten minutes. Honest output. A clear picture of where you stand before you need to know.</p>
            <a href="/calculator">Start the Calculator &rarr;</a>
          </div>

          <div className="sources fade-up">
            <h3>Sources &amp; Notes</h3>
            <ol>
              <li>IBBA Market Pulse Report, Q3 2024 — deal multiple data by business size and sector.</li>
              <li>BizBuySell Insight Report 2023 — time on market, price reduction frequency, transaction completion rates.</li>
              <li>$10T global exit value at risk — <span>*Exit Index estimate</span> based on OECD SME data combined with IBBA average deal value extrapolation. Treat as directional.</li>
              <li>80% of listed businesses never complete a sale — BizBuySell 2022 Insight Report (US data; UK equivalents directionally consistent per Dynamis/BusinessesForSale.com market commentary).</li>
              <li>Multiple compression by risk factor — Exit Index modelling based on aggregated broker and advisory data. <span>*Estimates.</span></li>
            </ol>
          </div>

        </div>
      </main>

      <footer>
        <p>&copy; 2026 The Exit Index &mdash; <a href="/">theexitindex.com</a></p>
        <p><a href="/intelligence">The Intelligence</a> &nbsp;&middot;&nbsp; <a href="/trusted-advisors">Trusted Advisors</a> &nbsp;&middot;&nbsp; <a href="/calculator">Calculator</a></p>
      </footer>
    </>
  );
}
