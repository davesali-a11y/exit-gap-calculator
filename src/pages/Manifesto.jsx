import { useEffect } from 'react';

export default function Manifesto() {
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
          --gold-pale: #f7f0de; --muted: #7a7570; --rule: #d4cfc7;
          --col-width: 640px;
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

        .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 8rem 2rem 4rem; position: relative; }
        .hero::before { content: ''; position: absolute; top: 56px; left: 0; right: 0; bottom: 0; background: radial-gradient(ellipse at 50% 40%, rgba(201,168,76,0.06), transparent 60%); pointer-events: none; }
        .hero-eyebrow { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 2rem; }
        .hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.8rem, 6vw, 5.5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.02em; color: var(--ink); max-width: 700px; margin-bottom: 2rem; }
        .hero-title em { font-style: italic; color: var(--gold); }
        .hero-subtitle { font-size: 1.15rem; color: var(--muted); max-width: 480px; line-height: 1.65; font-weight: 300; margin-bottom: 3rem; }
        .hero-rule { width: 60px; height: 1px; background: var(--gold); margin: 0 auto; }

        .content-wrap { max-width: var(--col-width); margin: 0 auto; padding: 0 2rem; }
        .manifesto-section { padding: 4rem 0; border-bottom: 1px solid var(--rule); }
        .manifesto-section:last-of-type { border-bottom: none; }

        .m-num { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; margin-bottom: 1.5rem; display: block; }
        h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 700; line-height: 1.25; letter-spacing: -0.01em; color: var(--ink); margin-bottom: 1.5rem; }
        p { margin-bottom: 1.4rem; color: #3a3733; }
        p:last-child { margin-bottom: 0; }
        strong { font-weight: 500; color: var(--ink); }

        .drop-cap::first-letter { font-family: 'Playfair Display', serif; font-size: 4.5rem; font-weight: 900; line-height: 0.75; float: left; margin-right: 0.1em; margin-top: 0.1em; color: var(--gold); }

        .through-line { margin: 3rem 0; padding: 0; list-style: none; }
        .through-line li { display: flex; gap: 1.5rem; align-items: flex-start; padding: 1.5rem 0; border-bottom: 1px solid var(--rule); }
        .through-line li:last-child { border-bottom: none; }
        .tl-year { font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.08em; color: var(--gold); flex-shrink: 0; width: 60px; padding-top: 0.15rem; }
        .tl-content strong { display: block; font-size: 1rem; margin-bottom: 0.2rem; }
        .tl-content p { font-size: 0.9rem; color: var(--muted); margin: 0; line-height: 1.5; }

        .beliefs { margin: 3rem 0; background: var(--ink); padding: 3rem; }
        .beliefs-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold); margin-bottom: 2rem; }
        .belief { padding: 1.25rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .belief:last-child { border-bottom: none; padding-bottom: 0; }
        .belief-marker { font-family: 'DM Mono', monospace; font-size: 0.6rem; color: rgba(201,168,76,0.6); letter-spacing: 0.08em; margin-bottom: 0.4rem; }
        .belief-text { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 400; color: var(--paper); line-height: 1.5; }
        .belief-text em { font-style: italic; color: var(--gold); }

        .signoff { padding: 4rem 0; text-align: left; }
        .signoff p { margin-bottom: 1.4rem; color: #3a3733; }
        .signoff-name { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--rule); }
        .signoff-name strong { display: block; font-family: 'Playfair Display', serif; font-size: 1.3rem; font-style: italic; font-weight: 400; color: var(--ink); margin-bottom: 0.25rem; }
        .signoff-name span { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }

        .link-row { padding: 4rem 0; border-top: 1px solid var(--rule); }
        .link-row-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); margin-bottom: 2rem; }
        .link-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); }
        .link-card { background: var(--paper); padding: 1.5rem; text-decoration: none; display: block; transition: background 0.2s; }
        .link-card:hover { background: var(--gold-pale); }
        .link-card-num { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.5rem; }
        .link-card h3 { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: var(--ink); line-height: 1.3; margin-bottom: 0.4rem; }
        .link-card p { font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.4; }

        .calc-cta { background: var(--ink); padding: 4rem 3rem; margin: 4rem 0; text-align: center; position: relative; overflow: hidden; }
        .calc-cta::before { content: ''; position: absolute; top: -50%; left: 50%; transform: translateX(-50%); width: 400px; height: 400px; background: radial-gradient(circle, rgba(201,168,76,0.1), transparent 60%); pointer-events: none; }
        .calc-cta-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.5rem; }
        .calc-cta h2 { color: var(--paper); font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 1rem; }
        .calc-cta p { color: rgba(245,242,236,0.6); font-size: 1rem; max-width: 460px; margin: 0 auto 2rem; }
        .calc-cta a { display: inline-block; background: var(--gold); color: var(--ink); font-family: 'DM Mono', monospace; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 1rem 2.5rem; text-decoration: none; font-weight: 500; transition: background 0.2s, transform 0.2s; }
        .calc-cta a:hover { background: var(--gold-light); transform: translateY(-1px); }

        footer { border-top: 1px solid var(--rule); padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; }
        footer p { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); margin: 0; }
        footer a { color: var(--muted); text-decoration: none; }
        footer a:hover { color: var(--ink); }
        .fade-up { opacity: 0; transform: translateY(20px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 640px) {
          .link-cards { grid-template-columns: 1fr; }
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
        <p className="hero-eyebrow">The Exit Index &mdash; Manifesto</p>
        <h1 className="hero-title">Why We're Building <em>This</em></h1>
        <p className="hero-subtitle">The Exit Index is not a product. It is infrastructure the market needs and does not have. This is the story of why it exists.</p>
        <div className="hero-rule"></div>
      </div>

      <main>
        <div className="content-wrap">

          <div className="manifesto-section fade-up">
            <span className="m-num">I &mdash; The Pattern</span>
            <h2>Every chapter of this career has been the same story.</h2>
            <p className="drop-cap">
              Find a gap. Name it. Build the mechanism that closes it. The specific industry changes. The pattern doesn't.
            </p>
            <p>
              In healthcare, the gap was access. Patients who needed specialist care couldn't navigate the system to find it. The gap between what the system offered and what patients could actually reach was invisible — because no one had built the infrastructure to make it visible. OkayDoctor was built to close that gap. Not by replacing the specialists, but by creating the layer that connected people to them.
            </p>
            <p>
              In franchising, the gap was information. Prospective franchise buyers were making decisions worth hundreds of thousands of pounds based on marketing materials and gut instinct, because the intelligence layer that would tell them which franchises actually performed — and why — didn't exist in accessible form.
            </p>
            <p>
              The Exit Index is the same story, in a larger market, with higher stakes.
            </p>
          </div>

          <div className="through-line fade-up">
            <li>
              <span className="tl-year">2008</span>
              <div className="tl-content">
                <strong>Healthcare access gap</strong>
                <p>OkayDoctor built to connect patients with specialists. The infrastructure that the NHS didn't provide and the market hadn't built.</p>
              </div>
            </li>
            <li>
              <span className="tl-year">2015</span>
              <div className="tl-content">
                <strong>Franchise intelligence gap</strong>
                <p>Off the Cuff Franchising — a content platform built on the observation that franchise buyers were making major decisions without objective intelligence.</p>
              </div>
            </li>
            <li>
              <span className="tl-year">2020</span>
              <div className="tl-content">
                <strong>Medical coordination gap</strong>
                <p>Medic SOS — coordinating 101+ physicians across a network. Infrastructure where none existed. The same pattern, a different context.</p>
              </div>
            </li>
            <li>
              <span className="tl-year">2025</span>
              <div className="tl-content">
                <strong>Exit readiness gap</strong>
                <p>The Exit Index — the intelligence infrastructure for the $10 trillion market that has never been ranked, indexed, or made navigable.</p>
              </div>
            </li>
          </div>

          <div className="manifesto-section fade-up">
            <span className="m-num">II &mdash; The Observation</span>
            <h2>Three things became undeniable at the same time.</h2>
            <p>
              The Silver Tsunami is real. Baby Boomer business owners are retiring in a wave that will continue through the end of the decade. The businesses they have built — many of them among the most consequential employers and economic contributors in their regions — are transitioning ownership at a scale the market has never seen before.
            </p>
            <p>
              Price's Law is operating in this market exactly as it operates in every other. A small number of businesses — approximately 20,000 globally — account for a disproportionate share of the economic output that is at stake in this transition. These businesses are large enough to matter. They are small enough to have no Goldman Sachs. They are the gap.
            </p>
            <p>
              The Exit Gap is the mechanism by which value is lost. The difference between what owners believe their businesses are worth and what buyers will pay is not random. It is structural. It is predictable. And it is, for the most part, avoidable — if the intelligence infrastructure existed to make it visible before the sale process begins.
            </p>
            <p>
              None of these observations are new in isolation. The insight is their convergence, and the fact that no one has built the response.
            </p>
          </div>

          <div className="beliefs fade-up">
            <div className="beliefs-label">What We Believe</div>
            <div className="belief">
              <div className="belief-marker">01</div>
              <div className="belief-text">The most consequential economic transition of this decade is happening below the threshold where the M&A industry pays attention. That is <em>where the opportunity is.</em></div>
            </div>
            <div className="belief">
              <div className="belief-marker">02</div>
              <div className="belief-text">A ranking creates accountability. The businesses that know where they stand are the ones that close the gap. <em>Measurement precedes improvement.</em></div>
            </div>
            <div className="belief">
              <div className="belief-marker">03</div>
              <div className="belief-text">The real asset is the data. Every calculator submission, every readiness score, every completed transaction adds to an intelligence layer that compounds in value as it grows. <em>The hamburgers fund the real estate.</em></div>
            </div>
            <div className="belief">
              <div className="belief-marker">04</div>
              <div className="belief-text">Advisors are not the problem. Fragmentation is. The exit advisory ecosystem has talented people operating without shared intelligence. <em>Infrastructure changes that.</em></div>
            </div>
            <div className="belief">
              <div className="belief-marker">05</div>
              <div className="belief-text">The window is open. The Silver Tsunami has a peak. Businesses that enter this decade prepared will capture value that underprepared businesses will leave behind. <em>Timing matters.</em></div>
            </div>
          </div>

          <div className="manifesto-section fade-up">
            <span className="m-num">III &mdash; What It Is</span>
            <h2>Not a funnel. Not a directory. An index.</h2>
            <p>
              The Exit Index is being built as intelligence infrastructure. The calculator is the entry point — a free tool that gives business owners a baseline readiness score and a clear picture of where their exit gap is widest. It takes ten minutes. It requires no advisor and no commitment.
            </p>
            <p>
              The data that flows through the calculator feeds the ranking index — the mechanism that makes the 20,000 visible. Every submission adds signal. As the data compounds, the index becomes more precise, more authoritative, and more useful to every participant in the market: owners who want to know where they stand, advisors who want to identify and reach the most prepared businesses, and acquirers who want intelligence before they approach.
            </p>
            <p>
              The Trusted Advisor network is the third layer — the mechanism through which intelligence becomes action. Qualified advisors, listed by region and specialism, with the index's readiness data at their disposal. Not a directory. A ranked, curated network built on the intelligence that the index generates.
            </p>
            <p>
              This is being built in public, in real time, from November 2025. The data is real. The rankings are in development. The infrastructure is being assembled, piece by piece, exactly as it needs to be.
            </p>
          </div>

          <div className="signoff fade-up">
            <p>
              The Exit Index will be complete when the 20,000 businesses that drive half of global economic output can be found, ranked, and served by the advisors best placed to help them transition. That is a long-term project. The work starts here.
            </p>
            <p>
              If you own one of the businesses this is being built for, the calculator is the right first step. If you are an advisor who has been waiting for the intelligence layer that your market has been missing, the Trusted Advisor programme is where that conversation starts.
            </p>
            <p>
              The window is open. The wave is moving. The infrastructure is being built.
            </p>
            <div className="signoff-name">
              <strong>David Tamale-Sali</strong>
              <span>Founder, The Exit Index &mdash; theexitindex.com</span>
            </div>
          </div>

          <div className="link-row fade-up">
            <div className="link-row-label">The Intelligence &mdash; Read the Research</div>
            <div className="link-cards">
              <a href="/intelligence/the-exit-gap" className="link-card">
                <div className="link-card-num">01</div>
                <h3>The Exit Gap</h3>
                <p>Why most business owners leave millions on the table.</p>
              </a>
              <a href="/intelligence/the-silver-tsunami" className="link-card">
                <div className="link-card-num">02</div>
                <h3>The Silver Tsunami</h3>
                <p>$10 trillion in business value seeking an exit by 2030.</p>
              </a>
              <a href="/intelligence/the-20000" className="link-card">
                <div className="link-card-num">03</div>
                <h3>The 20,000</h3>
                <p>Price's Law and the businesses that drive half of global output.</p>
              </a>
              <a href="/intelligence/the-advisor-gap" className="link-card">
                <div className="link-card-num">04</div>
                <h3>The Advisor Gap</h3>
                <p>Why the people paid to help you exit are flying blind.</p>
              </a>
            </div>
          </div>

          <div className="calc-cta fade-up">
            <div className="calc-cta-label">The Entry Point</div>
            <h2>Start with the calculator.</h2>
            <p>Ten minutes. No advisor required. A baseline score and a clear picture of where your exit gap is widest.</p>
            <a href="/calculator">Calculate Your Gap &rarr;</a>
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
