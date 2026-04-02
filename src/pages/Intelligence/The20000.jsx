import { useEffect } from 'react';

export default function The20000() {
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
        body { background: var(--paper); color: var(--ink); font-family: 'DM Sans', sans-serif; font-weight: 300; font-size: 18px; line-height: 1.75; -webkit-font-smoothing: antialiased; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: var(--paper); border-bottom: 1px solid var(--rule); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 56px; }
        .nav-logo { font-family: 'DM Mono', monospace; font-size: 0.75rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink); text-decoration: none; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--ink); }
        .nav-cta { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; background: var(--ink); color: var(--paper); padding: 0.5rem 1.25rem; text-decoration: none; transition: background 0.2s; }
        .nav-cta:hover { background: var(--gold); color: var(--ink); }

        .hero-outer { min-height: 100vh; display: grid; grid-template-columns: 1fr 1fr; padding-top: 56px; }
        .hero-left { background: var(--ink); display: flex; flex-direction: column; justify-content: flex-end; padding: 5rem 4rem 5rem 2rem; position: relative; overflow: hidden; }
        .hero-left::after { content: ''; position: absolute; bottom: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.1), transparent 60%); }
        .hero-right { display: flex; flex-direction: column; justify-content: flex-end; padding: 5rem 2rem 5rem 4rem; }
        .hero-label { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; }
        .hero-label::before { content: ''; display: block; width: 40px; height: 1px; background: var(--gold); }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(4rem, 7vw, 8rem); font-weight: 900; line-height: 0.9; letter-spacing: -0.03em; color: var(--paper); margin-bottom: 1rem; position: relative; }
        .hero-title .num { color: var(--gold); display: block; font-size: clamp(5rem, 10vw, 10rem); }
        .hero-tagline { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(245,242,236,0.4); margin-top: 1rem; line-height: 1.8; max-width: 280px; }
        .hero-right-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 2rem; display: flex; align-items: center; gap: 0.75rem; }
        .hero-right-label::before { content: ''; display: block; width: 24px; height: 1px; background: var(--rule); }
        .hero-deck { font-size: 1.15rem; line-height: 1.65; color: #3a3733; margin-bottom: 3rem; font-weight: 300; }
        .hero-stat-stack { display: flex; flex-direction: column; gap: 1.5rem; }
        .h-stat { padding-bottom: 1.5rem; border-bottom: 1px solid var(--rule); }
        .h-stat:last-child { border-bottom: none; padding-bottom: 0; }
        .h-stat strong { display: block; font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 700; color: var(--ink); line-height: 1; margin-bottom: 0.2rem; }
        .h-stat span { font-family: 'DM Mono', monospace; font-size: 0.63rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        .powerlaw-wrap { margin: 4rem 0; padding: 3rem; background: var(--ink); position: relative; overflow: hidden; }
        .powerlaw-wrap::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 1px, transparent 1px, transparent 40px); pointer-events: none; }
        .pl-title { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 2rem; }
        .pl-chart { position: relative; height: 200px; margin-bottom: 2rem; }
        .pl-curve { width: 100%; height: 100%; }
        .pl-annotations { display: flex; justify-content: space-between; margin-top: 1rem; }
        .pl-ann { display: flex; flex-direction: column; gap: 0.25rem; }
        .pl-ann-num { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--gold); line-height: 1; }
        .pl-ann-label { font-family: 'DM Mono', monospace; font-size: 0.58rem; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(245,242,236,0.4); max-width: 120px; line-height: 1.5; }
        .pl-note { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.06); font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(245,242,236,0.25); letter-spacing: 0.06em; line-height: 1.6; }

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

        @media (max-width: 800px) {
          .hero-outer { grid-template-columns: 1fr; }
          .hero-left { min-height: 60vh; padding: 8rem 2rem 3rem; }
          .hero-right { padding: 3rem 2rem; }
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

      <div className="hero-outer">
        <div className="hero-left">
          <div className="hero-label">The Intelligence &mdash; 03</div>
          <h1 className="hero-title">
            The<br />
            <span className="num">20,000</span>
          </h1>
          <p className="hero-tagline">The businesses that drive half of global economic output &mdash; and why their transition is the most consequential economic event no one is tracking.</p>
        </div>
        <div className="hero-right">
          <div className="hero-right-label">The Case</div>
          <p className="hero-deck">
            Price's Law is a pattern found in every large system: a small number of contributors account for a disproportionate share of output. In the global business economy, the number is approximately 20,000. These are not the largest companies in the world. They are the most consequential businesses below the Fortune 500 threshold — the firms that anchor industries, employ millions, and will need to transition ownership in the next decade.
          </p>
          <div className="hero-stat-stack">
            <div className="h-stat">
              <strong>~20,000</strong>
              <span>Businesses driving roughly half of global SME economic output</span>
            </div>
            <div className="h-stat">
              <strong>$10T+</strong>
              <span>Combined exit value of the top tier over the next decade</span>
            </div>
            <div className="h-stat">
              <strong>0</strong>
              <span>Ranking systems that currently track and index them</span>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="content-wrap">

          <div className="powerlaw-wrap fade-up">
            <div className="pl-title">Price's Law Applied to Global Business Output &mdash; Illustrative</div>
            <div className="pl-chart">
              <svg className="pl-curve" viewBox="0 0 700 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50" x2="700" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="150" x2="700" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <path d="M 0,5 C 40,8 80,25 140,80 C 200,130 280,165 400,182 C 500,193 600,198 700,199 L 700,200 L 0,200 Z"
                      fill="url(#goldGrad)" opacity="0.15" />
                <path d="M 0,5 C 40,8 80,25 140,80 C 200,130 280,165 400,182 C 500,193 600,198 700,199"
                      fill="none" stroke="url(#goldLine)" strokeWidth="2" />
                <line x1="110" y1="0" x2="110" y2="200" stroke="rgba(201,168,76,0.4)" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="110" cy="67" r="4" fill="#c9a84c" />
                <text x="115" y="30" fill="rgba(201,168,76,0.9)" fontFamily="monospace" fontSize="10" letterSpacing="1">~20,000 businesses</text>
                <text x="115" y="44" fill="rgba(201,168,76,0.6)" fontFamily="monospace" fontSize="9">≈ 50% of output</text>
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#c9a84c", stopOpacity:1}} />
                    <stop offset="60%" style={{stopColor:"#c9a84c", stopOpacity:0.3}} />
                    <stop offset="100%" style={{stopColor:"#c9a84c", stopOpacity:0.05}} />
                  </linearGradient>
                  <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:"#c9a84c", stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:"#c9a84c", stopOpacity:0.2}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="pl-annotations">
              <div className="pl-ann">
                <span className="pl-ann-num">~20K</span>
                <span className="pl-ann-label">Businesses in the high-value tier</span>
              </div>
              <div className="pl-ann">
                <span className="pl-ann-num">~50%</span>
                <span className="pl-ann-label">Share of SME output they represent</span>
              </div>
              <div className="pl-ann">
                <span className="pl-ann-num">200M+</span>
                <span className="pl-ann-label">Total registered businesses globally</span>
              </div>
            </div>
            <div className="pl-note">
              Note: Chart is illustrative of a power law distribution applied to business output. The 20,000 figure is an *Exit Index estimate derived from applying Price's Law to OECD SME output data. Exact figures are not independently published. Treat as directional framing.
            </div>
          </div>

          <section className="fade-up">
            <div className="section-label">The Law</div>
            <h2>Price's Law has no exceptions. Every large system obeys it.</h2>
            <p>
              Derek J. de Solla Price was a physicist and historian of science who, in the 1960s, observed a consistent pattern: in any field, roughly the square root of the total number of contributors produces approximately half of the total output. His observation has since been documented across scientific publishing, software development, income distribution, urban economics, and business revenue concentration.
            </p>
            <p>
              The law is not a guideline. It is a description of how complex systems organise themselves under competitive conditions. The top contributors are not merely better — they are disproportionately better, and the gap between them and the median widens as the system grows.
            </p>
            <p>
              Applied to global business: with approximately 200 million registered businesses worldwide, Price's Law predicts that roughly 14,000 to 20,000 of them account for half of total SME economic output. The precise number is not the point. The concentration is.
            </p>

            <div className="pull-quote">
              <p>"In any productive system, the square root of contributors produces half the output. Price's Law has no known exceptions."</p>
            </div>
          </section>

          <section className="fade-up">
            <div className="section-label">The Implication</div>
            <h2>These are not the companies you think they are</h2>
            <p>
              The 20,000 are not Apple, Microsoft, or Shell. Those companies are tracked, ranked, and analysed to a granular level by every major financial institution on earth. They have advisors, bankers, and succession infrastructure built into their governance by legal requirement.
            </p>
            <p>
              The 20,000 are the businesses that sit below that threshold — the regional manufacturers with £5M&ndash;£50M in revenue, the logistics firms, the business services companies, the healthcare providers, the industrial distributors. The companies that quietly employ 50, 100, 200 people and generate the economic foundation of the communities around them.
            </p>
            <p>
              These businesses are large enough to matter at scale. They are small enough to have no Goldman Sachs on retainer. And they are transitioning ownership — through sale, succession, merger, or closure — at a rate that has never been tracked, ranked, or indexed.
            </p>

            <div className="callout">
              <div className="callout-label">The Ranking Gap</div>
              <h3>Every business above £50M in sale value has a banker. Every business below it has a broker, if it's lucky.</h3>
              <p>The infrastructure that exists for the top tier of M&A — league tables, advisor rankings, transaction databases, intelligence platforms — stops at the threshold where the 20,000 live. The Exit Index is being built to extend that infrastructure downward, to the businesses that need it most and have least access to it.</p>
            </div>
          </section>

          <section className="fade-up">
            <div className="section-label">The Index</div>
            <h2>Why ranking these businesses changes everything</h2>
            <p>
              A ranking creates status tension. When LinkedIn launched its Social Selling Index, sales professionals who had never thought about their digital presence suddenly cared — because they could see where they stood relative to peers.
            </p>
            <p>
              The Exit Index applies the same mechanic to business exit readiness. When business owners can see a ranking that places them at #847 in their sector, the natural question becomes: who is ranked above me, and why? That question is the most powerful readiness intervention possible — and it costs nothing to create.
            </p>
            <p>
              The ranking is not a vanity metric. It is the intelligence layer that tells advisors where to focus, tells owners where they stand, and tells the market which businesses are genuinely transition-ready. It is infrastructure the lower middle market has never had.
            </p>
          </section>

          <div className="calc-cta fade-up">
            <div className="calc-cta-label">Free &mdash; No Obligation</div>
            <h2>Find out where you rank</h2>
            <p>The Exit Gap Calculator is the entry point to the index. Ten minutes gives you a baseline score and a clear picture of where you stand relative to businesses in your sector.</p>
            <a href="/calculator">Start the Calculator &rarr;</a>
          </div>

          <div className="sources fade-up">
            <h3>Sources &amp; Notes</h3>
            <ol>
              <li>Price's Law — Derek J. de Solla Price, "Networks of Scientific Papers," Science, 1965.</li>
              <li>200M+ registered businesses globally — World Bank Doing Business data, 2023.</li>
              <li>20,000 figure — <span>*Exit Index estimate</span> derived by applying Price's Law to OECD SME output data. Not an independently published figure. Treat as directional framing of a concentration principle.</li>
              <li>$10T exit value — <span>*Exit Index estimate</span> based on OECD SME data and IBBA average transaction values. Directional.</li>
              <li>OECD SME and Entrepreneurship Outlook 2023 — SME contribution to GDP by country.</li>
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
