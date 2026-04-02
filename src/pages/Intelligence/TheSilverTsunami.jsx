import { useEffect } from 'react';

export default function TheSilverTsunami() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
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
          --blue: #2a5c8a;
          --blue-light: #d4e4f2;
          --red: #b8372b;
          --muted: #7a7570;
          --rule: #d4cfc7;
          --col-width: 680px;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body { background: var(--paper); color: var(--ink); font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 18px; line-height: 1.75; -webkit-font-smoothing: antialiased; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: var(--paper); border-bottom: 1px solid var(--rule); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); text-decoration: none; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--ink); color: var(--paper); padding: 0.5rem 1.25rem; text-decoration: none; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); color: var(--ink); }

        .hero { background: var(--ink); min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 8rem 2rem 5rem; max-width: 1100px; margin: 0 auto; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; bottom: 0; right: 0; width: 500px; height: 500px; background: radial-gradient(circle at 80% 80%, rgba(201,168,76,0.08), transparent 60%); pointer-events: none; }

        .hero-label { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; position: relative; }
        .hero-label::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }

        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(3.5rem, 8vw, 7rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; color: var(--paper); margin-bottom: 2rem; position: relative; }
        .hero-title em { font-style: italic; color: var(--gold); }

        .hero-deck { max-width: 580px; font-size: 1.2rem; line-height: 1.6; color: rgba(245,242,236,0.6); margin-bottom: 3rem; font-weight: 300; position: relative; }

        .hero-stat-row { display: flex; gap: 3rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); position: relative; }
        .hero-stat strong { display: block; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: var(--gold); line-height: 1; margin-bottom: 0.25rem; }
        .hero-stat span { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.4); }

        .scroll-line { position: absolute; bottom: 2rem; right: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .scroll-line span { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(245,242,236,0.3); writing-mode: vertical-rl; }
        .scroll-line::after { content: ''; display: block; width: 1px; height: 60px; background: linear-gradient(to bottom, rgba(201,168,76,0.5), transparent); animation: scrollpulse 2s ease-in-out infinite; }
        @keyframes scrollpulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

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

        .timeline { margin: 4rem 0; background: var(--ink); padding: 3rem; position: relative; overflow: hidden; }
        .timeline::after { content: ''; position: absolute; top: 0; right: 0; width: 300px; height: 300px; background: radial-gradient(circle, rgba(201,168,76,0.06), transparent 60%); }
        .timeline-title { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 2.5rem; }
        .timeline-track { position: relative; padding-bottom: 1rem; }
        .timeline-axis { display: flex; justify-content: space-between; margin-bottom: 0.75rem; }
        .timeline-axis span { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(245,242,236,0.4); letter-spacing: 0.08em; }
        .timeline-bar-wrap { height: 8px; background: rgba(255,255,255,0.06); position: relative; margin-bottom: 2.5rem; }
        .timeline-segment { position: absolute; top: 0; height: 100%; display: flex; align-items: center; }
        .seg-past { background: rgba(201,168,76,0.3); left: 0; width: 35%; }
        .seg-now { background: var(--gold); left: 35%; width: 20%; animation: pulse-seg 2s ease-in-out infinite; }
        @keyframes pulse-seg { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        .seg-future { background: rgba(184,55,43,0.4); left: 55%; width: 45%; }
        .timeline-now-label { position: absolute; top: -24px; left: 45%; transform: translateX(-50%); font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); white-space: nowrap; }
        .timeline-events { display: flex; flex-direction: column; gap: 1rem; }
        .timeline-event { display: flex; gap: 1.5rem; align-items: flex-start; }
        .event-year { font-family: 'DM Mono', monospace; font-size: 0.7rem; color: var(--gold); letter-spacing: 0.08em; flex-shrink: 0; width: 52px; padding-top: 0.1rem; }
        .event-text { font-size: 0.9rem; color: rgba(245,242,236,0.7); line-height: 1.5; }
        .event-text strong { color: var(--paper); font-weight: 500; }
        .timeline-note { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(245,242,236,0.25); letter-spacing: 0.06em; line-height: 1.6; }

        .scale-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 3rem 0; }
        .scale-cell { background: var(--paper); padding: 1.75rem; }
        .scale-cell-number { font-family: 'Playfair Display', serif; font-size: 2.2rem; font-weight: 700; color: var(--ink); line-height: 1; margin-bottom: 0.5rem; }
        .scale-cell-number.accent { color: var(--gold); }
        .scale-cell-number.danger { color: var(--red); }
        .scale-cell-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.5rem; }
        .scale-cell-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.5; }

        .callout { background: var(--gold-pale); border: 1px solid var(--gold-light); padding: 2.5rem; margin: 3rem 0; }
        .callout-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .callout h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.3; }
        .callout p { font-size: 0.95rem; margin-bottom: 0; }

        .calc-cta { background: var(--ink); padding: 4rem 3rem; margin: 4rem 0; text-align: center; position: relative; overflow: hidden; }
        .calc-cta::before { content: ''; position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.1), transparent 60%); pointer-events: none; }
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

        .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 640px) {
          .hero-stat-row { flex-direction: column; gap: 1.5rem; }
          .scale-grid { grid-template-columns: 1fr; }
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
        <div className="hero-label">The Intelligence &mdash; 02</div>
        <h1 className="hero-title">The<br /><em>Silver</em><br />Tsunami</h1>
        <p className="hero-deck">
          The largest intergenerational wealth transfer in history is happening now, in slow motion, mostly unmanaged. Baby Boomer business owners are retiring without succession plans at a scale the market is not equipped to absorb.
        </p>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <strong>$10T</strong>
            <span>Business value seeking exit by 2030</span>
          </div>
          <div className="hero-stat">
            <strong>10,000</strong>
            <span>Boomers reaching retirement age every day in the US alone</span>
          </div>
          <div className="hero-stat">
            <strong>70%</strong>
            <span>Of Boomer owners have no formal succession plan</span>
          </div>
        </div>
        <div className="scroll-line"><span>Read</span></div>
      </div>

      <main>
        <div className="content-wrap">

          <section className="fade-up">
            <div className="section-label">The Wave</div>
            <h2>This is not a prediction. It is a demographic certainty.</h2>
            <p>
              Baby Boomers — broadly defined as those born between 1946 and 1964 — built the modern economy. In the United States, they own an estimated 2.5 million businesses. In the United Kingdom, they account for the majority of businesses with revenues above £1 million. Across the developed world, the picture is consistent: a generation of builders is reaching the exit stage simultaneously.
            </p>
            <p>
              The retirement wave began in earnest around 2012 — when the first Boomers turned 65 — and will continue through 2029 and beyond. Unlike individual business sales, which the market handles routinely, this is a structural supply shock. A concentration of businesses seeking exit in a compressed timeframe, with a buyer pool that has not scaled proportionally.
            </p>
            <p>
              The wave is not coming. It is already here. And the businesses entering it underprepared are the ones absorbing the highest cost.
            </p>

            <div className="pull-quote">
              <p>"Every day, 10,000 Baby Boomers reach retirement age. Many of them own a business. Most of those businesses have no transition plan."</p>
            </div>
          </section>

          <div className="timeline fade-up">
            <div className="timeline-title">The Boomer Exit Timeline &mdash; 2010 to 2035</div>
            <div className="timeline-track">
              <div className="timeline-now-label">&#9660; You are here (2026)</div>
              <div className="timeline-bar-wrap">
                <div className="timeline-segment seg-past"></div>
                <div className="timeline-segment seg-now"></div>
                <div className="timeline-segment seg-future"></div>
              </div>
              <div className="timeline-axis">
                <span>2010</span>
                <span>2015</span>
                <span>2020</span>
                <span>2026</span>
                <span>2030</span>
                <span>2035</span>
              </div>
            </div>
            <div className="timeline-events">
              <div className="timeline-event">
                <span className="event-year">2012</span>
                <span className="event-text"><strong>Wave begins.</strong> First Boomers hit 65. US SBA estimates 40% of all US businesses will change hands within a decade.</span>
              </div>
              <div className="timeline-event">
                <span className="event-year">2019</span>
                <span className="event-text"><strong>Pre-pandemic peak.</strong> Business sale transactions hit record levels. Buyer appetite strong, but seller preparation still weak.</span>
              </div>
              <div className="timeline-event">
                <span className="event-year">2023</span>
                <span className="event-text"><strong>Backlog builds.</strong> COVID-delayed exits compound the pipeline. BizBuySell reports record inventory of businesses listed for sale.</span>
              </div>
              <div className="timeline-event">
                <span className="event-year">2026</span>
                <span className="event-text"><strong>Peak window.</strong> <span style={{color:"var(--gold)"}}>*Exit Index estimate</span> — highest concentration of motivated seller activity relative to buyer capacity. Preparation advantage is largest here.</span>
              </div>
              <div className="timeline-event">
                <span className="event-year">2029</span>
                <span className="event-text"><strong>Last Boomer turns 65.</strong> Supply begins normalising. Unprepared businesses that haven't transitioned face closure or distressed sale.</span>
              </div>
            </div>
            <div className="timeline-note">
              Sources: US Small Business Administration; BizBuySell 2023 Insight Report; Pew Research Center Boomer retirement data. UK data: Federation of Small Businesses, ONS. Timeline projections marked * are Exit Index estimates.
            </div>
          </div>

          <section className="fade-up">
            <div className="section-label">The Scale</div>
            <h2>Numbers that reframe the opportunity</h2>
            <p>
              The scale of the Silver Tsunami is difficult to internalise from inside a single industry or geography. The data only makes sense when you see it assembled.
            </p>

            <div className="scale-grid fade-up">
              <div className="scale-cell">
                <div className="scale-cell-number accent">2.5M</div>
                <div className="scale-cell-label">US Boomer-owned businesses</div>
                <div className="scale-cell-desc">Estimated number with revenues above $100K. Source: US SBA Office of Advocacy.</div>
              </div>
              <div className="scale-cell">
                <div className="scale-cell-number danger">70%</div>
                <div className="scale-cell-label">Without a succession plan</div>
                <div className="scale-cell-desc">Share of Boomer business owners with no formal transition strategy. Source: Exit Planning Institute.</div>
              </div>
              <div className="scale-cell">
                <div className="scale-cell-number">£1.2T</div>
                <div className="scale-cell-label">UK SME business value at stake</div>
                <div className="scale-cell-desc">*Estimate based on ONS business population data and median SME valuation. Treat as directional.</div>
              </div>
              <div className="scale-cell">
                <div className="scale-cell-number danger">80%</div>
                <div className="scale-cell-label">Listed businesses that never sell</div>
                <div className="scale-cell-desc">Share of businesses listed for sale that fail to complete a transaction. Source: BizBuySell 2022.</div>
              </div>
            </div>
          </section>

          <section className="fade-up">
            <div className="section-label">The Gap Within the Wave</div>
            <h2>Why most of this value will not transfer cleanly</h2>
            <p>
              The Silver Tsunami creates a supply-side pressure that should theoretically drive transaction volume. But supply without preparation is not opportunity — it is inventory. And inventory that cannot be absorbed is eventually abandoned.
            </p>
            <p>
              The Exit Planning Institute's annual State of Owner Readiness Survey consistently finds that the majority of business owners have not taken the basic steps required for a successful exit: documented financials, a management team capable of operating without them, a defined growth narrative, or even a clear understanding of what their business is worth in the current market.
            </p>
            <p>
              The consequence is predictable. Buyers — who do this professionally — engage with sellers who do it once. The asymmetry is structural. Businesses that enter the wave underprepared are not failed by the market. They are failed by the absence of infrastructure that could have prepared them.
            </p>

            <div className="callout">
              <div className="callout-label">The Infrastructure Gap</div>
              <h3>There is no Bloomberg Terminal for business exits. No ranking system. No shared intelligence layer.</h3>
              <p>The M&amp;A market above £50M has Morgan Stanley. It has Goldman Sachs. It has league tables, rankings, transaction data, and advisor reputation systems built over decades. Below £50M — where the Silver Tsunami is concentrated — none of this exists in structured form. That is what The Exit Index is building.</p>
            </div>
          </section>

          <section className="fade-up">
            <div className="section-label">The Window</div>
            <h2>Preparation advantage is time-sensitive</h2>
            <p>
              The Silver Tsunami is not a permanent market condition. It has a beginning, a peak, and an end. The businesses that transition well during this period will be those that recognised the window early and used the time to close their readiness gap.
            </p>
            <p>
              For advisors, the implication is different but equally clear. The businesses in the wave that are prepared represent the premium end of the market. The intelligence to identify and reach them — before a competitor does — is a structural advantage. That intelligence does not exist today in accessible form.
            </p>
            <p>
              The Exit Index is being built to change that. The calculator is the entry point. The ranking index is the intelligence layer. The Trusted Advisor network is the mechanism through which preparation becomes action.
            </p>
          </section>

          <div className="calc-cta fade-up">
            <div className="calc-cta-label">Free &mdash; No Obligation</div>
            <h2>Where do you stand in the wave?</h2>
            <p>The Exit Gap Calculator gives you a baseline in under ten minutes. No pitch. Just a number — and a clear picture of your readiness before the window narrows.</p>
            <a href="/calculator">Start the Calculator &rarr;</a>
          </div>

          <div className="sources fade-up">
            <h3>Sources &amp; Notes</h3>
            <ol>
              <li>Pew Research Center — Baby Boomer retirement data; 10,000 per day figure (US).</li>
              <li>US Small Business Administration Office of Advocacy — Boomer business ownership estimates.</li>
              <li>Exit Planning Institute, State of Owner Readiness Survey 2023 — succession plan prevalence data.</li>
              <li>BizBuySell Insight Report 2022/2023 — transaction volume, listing inventory, completion rates.</li>
              <li>Federation of Small Businesses / ONS — UK SME population and owner demographics.</li>
              <li>$10T figure — <span>*Exit Index estimate</span> based on OECD SME data extrapolation. Treat as directional order of magnitude.</li>
              <li>£1.2T UK figure — <span>*Exit Index estimate</span> based on ONS business population data combined with median SME valuation modelling. Not independently verified.</li>
              <li>2026 "peak window" — <span>*Exit Index assessment</span> based on demographic data and transaction backlog modelling. Directional.</li>
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
