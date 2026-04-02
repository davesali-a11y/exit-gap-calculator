import { useEffect } from 'react';

export default function TheAdvisorGap() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); } });
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
          --ink: #0f0e0c; --paper: #f5f2ec; --gold: #c9a84c; --gold-light: #e8d5a3;
          --gold-pale: #f7f0de; --red: #b8372b; --muted: #7a7570; --rule: #d4cfc7;
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

        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; padding: 8rem 2rem 5rem; max-width: 1100px; margin: 0 auto; position: relative; }
        .hero-label { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
        .hero-label::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(3rem, 7vw, 6.5rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 2rem; }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-deck { max-width: 600px; font-size: 1.2rem; line-height: 1.6; color: var(--muted); margin-bottom: 3rem; font-weight: 300; }
        .hero-stat-row { display: flex; gap: 3rem; padding-top: 2rem; border-top: 1px solid var(--rule); }
        .hero-stat strong { display: block; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; color: var(--ink); line-height: 1; margin-bottom: 0.25rem; }
        .hero-stat span { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
        .scroll-line { position: absolute; bottom: 2rem; right: 2rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .scroll-line span { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); writing-mode: vertical-rl; }
        .scroll-line::after { content: ''; display: block; width: 1px; height: 60px; background: linear-gradient(to bottom, var(--muted), transparent); animation: scrollpulse 2s ease-in-out infinite; }
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

        .contrast-table { margin: 3rem 0; }
        .ct-header { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--rule); }
        .ct-header > div { background: var(--ink); padding: 0.75rem 1.25rem; font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.12em; text-transform: uppercase; }
        .ct-header > div:first-child { color: var(--muted); }
        .ct-header > div:nth-child(2) { color: rgba(245,242,236,0.5); }
        .ct-header > div:nth-child(3) { color: var(--gold); }
        .ct-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--rule); border-bottom: none; }
        .ct-row > div { background: var(--paper); padding: 1rem 1.25rem; font-size: 0.9rem; }
        .ct-row > div:first-child { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.05em; color: var(--muted); }
        .ct-row > div:nth-child(2) { color: var(--muted); }
        .ct-row > div:nth-child(3) { color: var(--ink); font-weight: 500; }
        .ct-row:hover > div { background: var(--gold-pale); }
        .ct-note { font-family: 'DM Mono', monospace; font-size: 0.62rem; color: var(--muted); letter-spacing: 0.05em; margin-top: 0.75rem; }

        .league-table { margin: 3rem 0; border: 1px solid var(--rule); }
        .lt-header { background: var(--ink); padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; }
        .lt-title { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); }
        .lt-subtitle { font-family: 'DM Mono', monospace; font-size: 0.58rem; letter-spacing: 0.08em; color: rgba(245,242,236,0.3); }
        .lt-col-headers { display: grid; grid-template-columns: 40px 1fr 80px 80px 80px; gap: 0; padding: 0.6rem 1.5rem; background: rgba(0,0,0,0.03); border-bottom: 1px solid var(--rule); }
        .lt-col-headers span { font-family: 'DM Mono', monospace; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
        .lt-row { display: grid; grid-template-columns: 40px 1fr 80px 80px 80px; gap: 0; padding: 0.9rem 1.5rem; border-bottom: 1px solid var(--rule); align-items: center; transition: background 0.15s; }
        .lt-row:last-child { border-bottom: none; }
        .lt-row:hover { background: var(--gold-pale); }
        .lt-rank { font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; color: var(--gold); }
        .lt-name { font-size: 0.9rem; font-weight: 500; color: var(--ink); }
        .lt-sector { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--muted); letter-spacing: 0.05em; margin-top: 0.15rem; }
        .lt-score { font-family: 'DM Mono', monospace; font-size: 0.8rem; color: var(--ink); text-align: right; }
        .lt-score.high { color: #4a9e6b; }
        .lt-score.mid { color: var(--gold); }
        .lt-score.low { color: var(--red); }
        .lt-advisor { font-family: 'DM Mono', monospace; font-size: 0.65rem; color: var(--muted); text-align: right; }
        .lt-status { text-align: right; }
        .lt-badge { display: inline-block; font-family: 'DM Mono', monospace; font-size: 0.55rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.5rem; }
        .lt-badge.ready { background: rgba(74,158,107,0.15); color: #4a9e6b; }
        .lt-badge.progress { background: rgba(201,168,76,0.15); color: var(--gold); }
        .lt-badge.gap { background: rgba(184,55,43,0.12); color: var(--red); }
        .lt-blur { filter: blur(4px); pointer-events: none; }
        .lt-footer { padding: 1rem 1.5rem; background: var(--ink); display: flex; justify-content: space-between; align-items: center; }
        .lt-footer p { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(245,242,236,0.35); letter-spacing: 0.05em; margin: 0; }
        .lt-footer a { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: var(--gold); text-decoration: none; letter-spacing: 0.08em; }

        .callout { background: var(--gold-pale); border: 1px solid var(--gold-light); padding: 2.5rem; margin: 3rem 0; }
        .callout-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1rem; }
        .callout h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--ink); margin-bottom: 0.75rem; line-height: 1.3; }
        .callout p { font-size: 0.95rem; margin-bottom: 0; }

        .ta-cta { background: var(--ink); padding: 4rem 3rem; margin: 4rem 0; text-align: center; position: relative; overflow: hidden; }
        .ta-cta::before { content: ''; position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.1), transparent 60%); pointer-events: none; }
        .ta-cta-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; }
        .ta-cta h2 { color: var(--paper); font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1rem; }
        .ta-cta p { color: rgba(245,242,236,0.6); font-size: 1rem; max-width: 460px; margin: 0 auto 2rem; }
        .ta-cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .ta-cta a { display: inline-block; font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 1rem 2rem; text-decoration: none; font-weight: 500; transition: background 0.2s, transform 0.2s; }
        .ta-cta a.primary { background: var(--gold); color: var(--ink); }
        .ta-cta a.primary:hover { background: var(--gold-light); transform: translateY(-1px); }
        .ta-cta a.secondary { background: transparent; color: rgba(245,242,236,0.6); border: 1px solid rgba(245,242,236,0.2); }
        .ta-cta a.secondary:hover { border-color: var(--gold); color: var(--gold); }

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
          .ct-header, .ct-row { grid-template-columns: 1fr 1fr; }
          .ct-header > div:nth-child(2), .ct-row > div:nth-child(2) { display: none; }
          .lt-col-headers, .lt-row { grid-template-columns: 32px 1fr 70px 70px; }
          .lt-col-headers span:nth-child(3), .lt-row .lt-score:nth-child(3) { display: none; }
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
        <div className="hero-label">The Intelligence &mdash; 04</div>
        <h1 className="hero-title">The<br /><em>Advisor</em><br />Gap</h1>
        <p className="hero-deck">
          The business exit advisory ecosystem is fragmented, unranked, and operating without shared intelligence. Owners cannot find the best advisors. Advisors cannot find the best opportunities. There is no Bloomberg Terminal for business exits. Until now.
        </p>
        <div className="hero-stat-row">
          <div className="hero-stat">
            <strong>0</strong>
            <span>Ranking systems for exit advisors below the £50M deal threshold</span>
          </div>
          <div className="hero-stat">
            <strong>72%</strong>
            <span>Of owners find their advisor through personal referral alone</span>
          </div>
          <div className="hero-stat">
            <strong>$10T</strong>
            <span>In exit value navigated by an unranked, unindexed advisor ecosystem</span>
          </div>
        </div>
        <div className="scroll-line"><span>Read</span></div>
      </div>

      <main>
        <div className="content-wrap">

          <section className="fade-up">
            <div className="section-label">Two Markets</div>
            <h2>Above £50M, the infrastructure exists. Below it, you're on your own.</h2>
            <p>
              When a business above £50M in enterprise value seeks an exit, the process is well-supported. Investment banks compete for the mandate. Advisors are ranked by league table performance. Transaction data is published, analysed, and benchmarked. Buyers are approached systematically. The seller has access to the full weight of an industry built specifically to serve this moment.
            </p>
            <p>
              Below £50M — and especially below £10M — the picture is categorically different. Business brokers operate independently, with no shared database of deal quality, no public rankings, no league tables, and no mechanism for business owners to identify who performs and who doesn't. The market is a black box.
            </p>
            <p>
              This is not a minor inefficiency. It is a structural failure that costs business owners billions every year — in lower multiples, longer time on market, aborted transactions, and exits that never happen at all.
            </p>

            <div className="pull-quote">
              <p>"Every business above £50M has a Goldman Sachs. Every business below it finds an advisor the same way they find a plumber — word of mouth, and hope."</p>
            </div>
          </section>

          <div className="contrast-table fade-up">
            <div className="ct-header">
              <div>Capability</div>
              <div>Upper M&amp;A Market (£50M+)</div>
              <div>Lower Middle Market (sub-£50M)</div>
            </div>
            <div className="ct-row"><div>Advisor rankings</div><div>League tables, published annually</div><div>None</div></div>
            <div className="ct-row"><div>Transaction data</div><div>Mergermarket, PitchBook, Bloomberg</div><div>Fragmented, mostly unpublished</div></div>
            <div className="ct-row"><div>Deal comparables</div><div>Accessible via data subscription</div><div>Informal, broker-held, opaque</div></div>
            <div className="ct-row"><div>Advisor discovery</div><div>Established relationships + rankings</div><div>Personal referral, chance</div></div>
            <div className="ct-row"><div>Readiness scoring</div><div>Built into the advisory process</div><div>Ad hoc, inconsistent</div></div>
            <div className="ct-row"><div>Intelligence layer</div><div>Bloomberg Terminal</div><div>Does not exist</div></div>
            <p className="ct-note">*Sub-£50M market characterisation based on Exit Index research and IBBA member surveys. Upper M&A data: Mergermarket, Bloomberg, PitchBook.</p>
          </div>

          <section className="fade-up">
            <div className="section-label">The Consequence</div>
            <h2>An unranked ecosystem produces uneven outcomes</h2>
            <p>
              In any market where quality is invisible and discovery is opaque, the default selection mechanism is proximity and word of mouth. The best advisors get the best mandates — but only if they happen to be in the right network. The worst advisors get mandates they shouldn't, because the owner had no way to know the difference.
            </p>
            <p>
              The IBBA's market pulse data consistently shows wide variance in outcomes for businesses of similar profile — indicating that advisor quality, not just business quality, drives exit results. A business with a 5× EBITDA potential that goes to market with a poorly-equipped advisor often lands at 3×. The same business, properly represented, lands at 6× or above.
            </p>
            <p>
              The cost of this gap is not evenly distributed. It falls hardest on the owners who need the most help — the first-time sellers, the businesses in sectors where advisory relationships are thinnest, the owners approaching retirement without a network of advisors who've navigated this before.
            </p>
          </section>

          <div className="league-table fade-up">
            <div className="lt-header">
              <span className="lt-title">Exit Index — Business Readiness Rankings</span>
              <span className="lt-subtitle">UK Lower Middle Market &mdash; Illustrative Sample</span>
            </div>
            <div className="lt-col-headers">
              <span>#</span>
              <span>Business</span>
              <span>Score</span>
              <span>Advisor</span>
              <span>Status</span>
            </div>
            <div className="lt-row">
              <span className="lt-rank">01</span>
              <div><div className="lt-name">Meridian Logistics Ltd</div><div className="lt-sector">Transport &amp; Distribution</div></div>
              <span className="lt-score high">92</span>
              <span className="lt-advisor">Trusted</span>
              <span className="lt-status"><span className="lt-badge ready">Exit Ready</span></span>
            </div>
            <div className="lt-row">
              <span className="lt-rank">02</span>
              <div><div className="lt-name">Apex Engineering Group</div><div className="lt-sector">Industrial Manufacturing</div></div>
              <span className="lt-score high">88</span>
              <span className="lt-advisor">Trusted</span>
              <span className="lt-status"><span className="lt-badge ready">Exit Ready</span></span>
            </div>
            <div className="lt-row">
              <span className="lt-rank">03</span>
              <div><div className="lt-name">Thornfield Care Holdings</div><div className="lt-sector">Healthcare Services</div></div>
              <span className="lt-score mid">74</span>
              <span className="lt-advisor">Unadvised</span>
              <span className="lt-status"><span className="lt-badge progress">Preparing</span></span>
            </div>
            <div className="lt-row lt-blur">
              <span className="lt-rank">04</span>
              <div><div className="lt-name">Castleford Tech Solutions</div><div className="lt-sector">Business Software</div></div>
              <span className="lt-score mid">71</span>
              <span className="lt-advisor">—</span>
              <span className="lt-status"><span className="lt-badge progress">Preparing</span></span>
            </div>
            <div className="lt-row lt-blur">
              <span className="lt-rank">05</span>
              <div><div className="lt-name">Northern Foods Distribution</div><div className="lt-sector">FMCG</div></div>
              <span className="lt-score low">48</span>
              <span className="lt-advisor">—</span>
              <span className="lt-status"><span className="lt-badge gap">Gap: Wide</span></span>
            </div>
            <div className="lt-footer">
              <p>*Illustrative data only &mdash; not based on real businesses. Full index in development.</p>
              <a href="/trusted-advisors">Join as a Trusted Advisor &rarr;</a>
            </div>
          </div>

          <section className="fade-up">
            <div className="section-label">The Mechanism</div>
            <h2>A ranking changes the dynamic for everyone in the market</h2>
            <p>
              The Exit Index is not an advisory firm. It does not compete with brokers, accountants, or M&A advisors. It builds the infrastructure layer that makes all of them more effective — and more discoverable.
            </p>
            <p>
              For business owners, the ranking provides a benchmark that didn't previously exist. Where do you stand relative to comparable businesses in your sector? What is closing the gap between your current position and exit readiness? The calculator generates that baseline. The ranking contextualises it.
            </p>
            <p>
              For advisors, the index creates a new acquisition channel — and a new form of professional credibility. Being listed as a Trusted Advisor on The Exit Index is not a directory listing. It is an association with the intelligence infrastructure that the market has been missing. That association compounds in value as the index grows.
            </p>

            <div className="callout">
              <div className="callout-label">Trusted Advisors</div>
              <h3>First refusal on the intelligence layer. Limited slots by region and specialism.</h3>
              <p>The Trusted Advisor programme gives qualified advisors early positioning within the index — access to the readiness data, association with the rankings, and first-mover status in a market where being seen early is a structural advantage. Slots are limited by design. The architecture rewards those who move first.</p>
            </div>
          </section>

          <div className="ta-cta fade-up">
            <div className="ta-cta-label">Limited Availability</div>
            <h2>The advisor ecosystem is being rebuilt from the bottom up.</h2>
            <p>Whether you're a business owner wanting a readiness baseline, or an advisor wanting early positioning in the index — the entry point is the same.</p>
            <div className="ta-cta-buttons">
              <a href="/trusted-advisors" className="primary">View Trusted Advisors &rarr;</a>
              <a href="/calculator" className="secondary">Calculate Your Gap</a>
            </div>
          </div>

          <div className="sources fade-up">
            <h3>Sources &amp; Notes</h3>
            <ol>
              <li>IBBA Market Pulse Report — advisor quality variance and outcome data.</li>
              <li>72% referral figure — <span>*Exit Index estimate</span> based on IBBA member survey data and EPI research. Directional.</li>
              <li>League table and ranking infrastructure — Mergermarket, PitchBook, Bloomberg (upper M&A market).</li>
              <li>Sub-£50M market characterisation — based on Exit Index research, IBBA surveys, and broker interviews. <span>*Assessment, not independently audited.</span></li>
              <li>$10T figure — <span>*Exit Index estimate.</span> See The Silver Tsunami for sourcing notes.</li>
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
