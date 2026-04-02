export default function Intelligence() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      <style>{`
        :root {
          --ink: #0f0e0c; --paper: #f5f2ec; --gold: #c9a84c; --gold-light: #e8d5a3;
          --gold-pale: #f7f0de; --muted: #7a7570; --rule: #d4cfc7;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--paper); color: var(--ink); font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 18px; line-height: 1.75; -webkit-font-smoothing: antialiased; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: var(--paper); border-bottom: 1px solid var(--rule); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); text-decoration: none; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover, .nav-links a.active { color: var(--ink); }
        .nav-cta { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--ink); color: var(--paper); padding: 0.5rem 1.25rem; text-decoration: none; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); color: var(--ink); }

        .page-header {
          padding: 9rem 2rem 5rem;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
          border-bottom: 1px solid var(--rule);
        }
        .ph-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
        .ph-label::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .ph-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900; line-height: 1; letter-spacing: -0.02em; color: var(--ink); }
        .ph-right p { font-size: 1.05rem; color: var(--muted); line-height: 1.65; margin-bottom: 1.5rem; }
        .ph-right p:last-child { margin-bottom: 0; }

        .entries { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }

        .entry {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 3rem;
          align-items: center;
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          color: inherit;
          transition: background 0.2s;
        }
        .entry:last-child { border-bottom: none; }
        .entry:hover { background: var(--gold-pale); margin: 0 -2rem; padding-left: 2rem; padding-right: 2rem; }
        .entry-num { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; color: var(--rule); line-height: 1; transition: color 0.2s; }
        .entry:hover .entry-num { color: var(--gold-light); }
        .entry-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.4rem; }
        .entry-title { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: 0.5rem; letter-spacing: -0.01em; }
        .entry-desc { font-size: 0.95rem; color: var(--muted); line-height: 1.5; max-width: 480px; }
        .entry-arrow { font-family: 'DM Mono', monospace; font-size: 1.2rem; color: var(--rule); transition: color 0.2s, transform 0.2s; flex-shrink: 0; }
        .entry:hover .entry-arrow { color: var(--gold); transform: translateX(4px); }

        .bottom-strip { background: var(--ink); padding: 4rem 2rem; display: flex; align-items: center; justify-content: space-between; gap: 3rem; max-width: 100%; }
        .bs-inner { max-width: 1100px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 3rem; }
        .bs-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.75rem; }
        .bs-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: var(--paper); line-height: 1.2; margin-bottom: 0.5rem; }
        .bs-sub { font-size: 0.95rem; color: rgba(245,242,236,0.5); max-width: 380px; }
        .bs-cta a { display: inline-block; background: var(--gold); color: var(--ink); font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 1rem 2.5rem; text-decoration: none; font-weight: 500; white-space: nowrap; transition: background 0.2s; }
        .bs-cta a:hover { background: var(--gold-light); }

        footer { border-top: 1px solid var(--rule); padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; }
        footer p { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); margin: 0; }
        footer a { color: var(--muted); text-decoration: none; }
        footer a:hover { color: var(--ink); }

        @media (max-width: 800px) {
          .page-header { grid-template-columns: 1fr; gap: 2rem; }
          .entry { grid-template-columns: 48px 1fr; }
          .entry-arrow { display: none; }
          .bs-inner { flex-direction: column; align-items: flex-start; }
          footer { flex-direction: column; gap: 1rem; text-align: center; }
          nav .nav-links { display: none; }
        }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">The Exit Index</a>
        <ul className="nav-links">
          <li><a href="/intelligence" className="active">The Intelligence</a></li>
          <li><a href="/trusted-advisors">Trusted Advisors</a></li>
        </ul>
        <a href="/calculator" className="nav-cta">Calculate Your Gap</a>
      </nav>

      <div className="page-header">
        <div>
          <div className="ph-label">The Exit Index</div>
          <h1 className="ph-title">The Intelligence</h1>
        </div>
        <div className="ph-right">
          <p>The business exit market is the largest unindexed market in the world. These five pieces make the case for why that matters, who it costs, and what The Exit Index is being built to do about it.</p>
        </div>
      </div>

      <div className="entries">

        <a href="/intelligence/the-exit-gap" className="entry">
          <span className="entry-num">01</span>
          <div className="entry-body">
            <div className="entry-label">The Exit Gap</div>
            <h2 className="entry-title">Why business owners leave millions on the table</h2>
            <p className="entry-desc">The difference between perceived value and realised value. What drives it, what it costs, and how to close it. The calculator lives here.</p>
          </div>
          <span className="entry-arrow">&rarr;</span>
        </a>

        <a href="/intelligence/the-silver-tsunami" className="entry">
          <span className="entry-num">02</span>
          <div className="entry-body">
            <div className="entry-label">The Silver Tsunami</div>
            <h2 className="entry-title">$10 trillion in business value seeking an exit</h2>
            <p className="entry-desc">Baby Boomer business owners are retiring without succession plans at a scale the market is not equipped to absorb. The wave is here now.</p>
          </div>
          <span className="entry-arrow">&rarr;</span>
        </a>

        <a href="/intelligence/the-20000" className="entry">
          <span className="entry-num">03</span>
          <div className="entry-body">
            <div className="entry-label">The 20,000</div>
            <h2 className="entry-title">The businesses driving half of global economic output</h2>
            <p className="entry-desc">Price's Law applied to the business economy. A small number of companies carry a disproportionate share of the value at stake in this transition.</p>
          </div>
          <span className="entry-arrow">&rarr;</span>
        </a>

        <a href="/intelligence/the-advisor-gap" className="entry">
          <span className="entry-num">04</span>
          <div className="entry-body">
            <div className="entry-label">The Advisor Gap</div>
            <h2 className="entry-title">Why the people paid to help you exit are flying blind</h2>
            <p className="entry-desc">No rankings. No shared intelligence. No Bloomberg Terminal for the lower middle market. The infrastructure gap that the index is being built to close.</p>
          </div>
          <span className="entry-arrow">&rarr;</span>
        </a>

        <a href="/manifesto" className="entry">
          <span className="entry-num">05</span>
          <div className="entry-body">
            <div className="entry-label">Manifesto</div>
            <h2 className="entry-title">Why we're building this</h2>
            <p className="entry-desc">The through-line from healthcare to franchising to exits. The pattern, the observation, and what The Exit Index is being built to do.</p>
          </div>
          <span className="entry-arrow">&rarr;</span>
        </a>

      </div>

      <div className="bottom-strip">
        <div className="bs-inner">
          <div className="bs-text">
            <div className="bs-label">The Entry Point</div>
            <div className="bs-title">Calculate your exit gap</div>
            <p className="bs-sub">Ten minutes. No advisor required. A baseline readiness score and a clear picture of where your gap is widest.</p>
          </div>
          <div className="bs-cta">
            <a href="/calculator">Start the Calculator &rarr;</a>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 The Exit Index &mdash; <a href="/">theexitindex.com</a></p>
        <p><a href="/intelligence">The Intelligence</a> &nbsp;&middot;&nbsp; <a href="/trusted-advisors">Trusted Advisors</a> &nbsp;&middot;&nbsp; <a href="/calculator">Calculator</a></p>
      </footer>
    </>
  );
}
