export default function Glossary() {
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
          --muted: #7a7570;
          --rule: #d4cfc7;
          --col-width: 720px;
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

        .page-header { padding: 9rem 2rem 4rem; max-width: var(--col-width); margin: 0 auto; border-bottom: 1px solid var(--rule); }
        .ph-label { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.75rem; }
        .ph-label::before { content: ''; display: block; width: 32px; height: 1px; background: var(--gold); }
        .ph-title { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 4vw, 3.5rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 1.25rem; }
        .ph-desc { font-size: 1.05rem; color: var(--muted); max-width: 540px; line-height: 1.65; }

        .alpha-nav { max-width: var(--col-width); margin: 0 auto; padding: 1.5rem 2rem; display: flex; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid var(--rule); }
        .alpha-nav a { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); text-decoration: none; padding: 0.3rem 0.6rem; border: 1px solid var(--rule); transition: all 0.15s; }
        .alpha-nav a:hover { color: var(--ink); border-color: var(--gold); background: var(--gold-pale); }

        .glossary { max-width: var(--col-width); margin: 0 auto; padding: 0 2rem 6rem; }

        .term-group { padding-top: 3rem; }

        .term-group-letter { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 900; color: var(--rule); line-height: 1; padding-bottom: 1rem; border-bottom: 2px solid var(--rule); margin-bottom: 0; }

        .term { padding: 2.5rem 0; border-bottom: 1px solid var(--rule); scroll-margin-top: 80px; }
        .term:last-child { border-bottom: none; }

        .term-header { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 1rem; flex-wrap: wrap; }

        .term-name { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: var(--ink); letter-spacing: -0.01em; line-height: 1.2; }

        .term-origin { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); flex-shrink: 0; padding: 0.2rem 0.6rem; border: 1px solid var(--gold-light); background: var(--gold-pale); }

        .term-definition { font-size: 1.05rem; color: var(--ink); line-height: 1.7; margin-bottom: 1rem; font-weight: 400; }
        .term-definition strong { font-weight: 500; }

        .term-context { font-size: 0.92rem; color: var(--muted); line-height: 1.65; margin-bottom: 1rem; }
        .term-context:last-child { margin-bottom: 0; }

        .term-link { display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); text-decoration: none; margin-top: 0.75rem; transition: gap 0.2s; }
        .term-link:hover { gap: 0.7rem; }
        .term-link::after { content: '→'; }

        .term-related { margin-top: 1rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
        .term-related-label { font-family: 'DM Mono', monospace; font-size: 0.58rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
        .term-related a { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.08em; color: var(--muted); text-decoration: none; border-bottom: 1px solid var(--rule); padding-bottom: 1px; transition: color 0.2s, border-color 0.2s; }
        .term-related a:hover { color: var(--ink); border-color: var(--ink); }

        .bottom-cta { background: var(--ink); padding: 4rem 2rem; }
        .bottom-cta-inner { max-width: var(--col-width); margin: 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 3rem; }
        .bc-label { font-family: 'DM Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 0.75rem; }
        .bc-title { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--paper); line-height: 1.2; margin-bottom: 0.5rem; }
        .bc-sub { font-size: 0.9rem; color: rgba(245,242,236,0.5); }
        .bc-cta a { display: inline-block; background: var(--gold); color: var(--ink); font-family: 'DM Mono', monospace; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.9rem 2rem; text-decoration: none; font-weight: 500; white-space: nowrap; transition: background 0.2s; }
        .bc-cta a:hover { background: var(--gold-light); }

        footer { border-top: 1px solid var(--rule); padding: 3rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1100px; margin: 0 auto; }
        footer p { font-family: 'DM Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--muted); margin: 0; }
        footer a { color: var(--muted); text-decoration: none; }
        footer a:hover { color: var(--ink); }

        @media (max-width: 640px) {
          .bottom-cta-inner { flex-direction: column; align-items: flex-start; }
          footer { flex-direction: column; gap: 1rem; text-align: center; }
          nav .nav-links { display: none; }
          .term-header { flex-direction: column; gap: 0.5rem; }
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

      <div className="page-header">
        <div className="ph-label">The Exit Index</div>
        <h1 className="ph-title">Exit Intelligence Glossary</h1>
        <p className="ph-desc">Definitions of the core concepts used by The Exit Index — written for business owners, advisors, and acquirers who want clarity before they need it.</p>
      </div>

      <div className="alpha-nav">
        <a href="#E">E</a>
        <a href="#L">L</a>
        <a href="#O">O</a>
        <a href="#P">P</a>
        <a href="#R">R</a>
        <a href="#S">S</a>
        <a href="#T">T</a>
        <a href="#V">V</a>
      </div>

      <div className="glossary">

        {/* E */}
        <div className="term-group" id="E">
          <div className="term-group-letter">E</div>

          <div className="term" id="exit-gap">
            <div className="term-header">
              <h2 className="term-name">The Exit Gap</h2>
              <span className="term-origin">Exit Index Definition</span>
            </div>
            <p className="term-definition">
              The Exit Gap is <strong>the difference between a business owner's perceived valuation of their company and the price a buyer will actually pay at the point of transaction.</strong> It is the most expensive miscalculation in business — and it is almost entirely avoidable with sufficient preparation time.
            </p>
            <p className="term-context">
              The Exit Gap is not a single number. It is the accumulated effect of several compounding discounts that buyers apply systematically: owner dependency, customer concentration, financial opacity, the absence of a credible growth narrative, and the lack of competitive tension in the sale process. Each factor independently reduces the multiple a buyer is prepared to pay. Together, they can move a business from a 6× valuation to a 3.5× outcome on the same underlying earnings.
            </p>
            <p className="term-context">
              The gap is widest for businesses entering a sale process unprepared — which, based on IBBA and BizBuySell data, describes the majority of businesses that reach the market. Preparation closes the gap. The Exit Index exists to make that preparation measurable and actionable before the sale process begins.
            </p>
            <a href="/intelligence/the-exit-gap" className="term-link">Read the full research</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-readiness">Exit Readiness</a>
              <a href="#exit-multiple">Exit Multiple</a>
              <a href="#owner-dependency">Owner Dependency</a>
              <a href="#exit-readiness-score">Exit Readiness Score</a>
            </div>
          </div>

          <div className="term" id="exit-multiple">
            <div className="term-header">
              <h2 className="term-name">Exit Multiple</h2>
            </div>
            <p className="term-definition">
              An exit multiple is <strong>the factor applied to a business's earnings — typically EBITDA — to arrive at its transaction value.</strong> A business with £700K EBITDA sold at a 5× multiple transacts at £3.5M.
            </p>
            <p className="term-context">
              Exit multiples vary significantly by sector, size, growth profile, and the quality of preparation the seller brings to the process. In the UK lower middle market, multiples for unprepared businesses typically range from 2.5× to 4×. Prepared businesses with recurring revenue, strong management teams, and documented financials regularly achieve 6× to 8× or above in the same sectors.
            </p>
            <p className="term-context">
              The difference between a 3× and a 6× multiple on a £700K EBITDA business is £2.1 million. That is the financial case for exit preparation stated simply.
            </p>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-gap">Exit Gap</a>
              <a href="#ebitda">EBITDA</a>
              <a href="#exit-readiness">Exit Readiness</a>
            </div>
          </div>

          <div className="term" id="exit-readiness">
            <div className="term-header">
              <h2 className="term-name">Exit Readiness</h2>
              <span className="term-origin">Exit Index Definition</span>
            </div>
            <p className="term-definition">
              Exit readiness is <strong>the degree to which a business has addressed the factors that buyers discount — and is therefore positioned to achieve a premium outcome at the point of sale.</strong>
            </p>
            <p className="term-context">
              A business is exit-ready when it can operate without its owner, demonstrates clean and auditable financials, has a credible growth narrative supported by evidence, shows no dangerous customer or supplier concentration, and can create genuine competitive tension among multiple qualified buyers.
            </p>
            <p className="term-context">
              Exit readiness is not a binary state. It is a spectrum — and most businesses that have not deliberately worked toward it sit significantly below the threshold where premium multiples are achievable. The Exit Index measures this spectrum and produces an Exit Readiness Score for each business that completes the calculator.
            </p>
            <a href="/calculator" className="term-link">Calculate your readiness score</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-gap">Exit Gap</a>
              <a href="#exit-readiness-score">Exit Readiness Score</a>
              <a href="#owner-dependency">Owner Dependency</a>
            </div>
          </div>

          <div className="term" id="exit-readiness-score">
            <div className="term-header">
              <h2 className="term-name">Exit Readiness Score</h2>
              <span className="term-origin">Exit Index Definition</span>
            </div>
            <p className="term-definition">
              An Exit Readiness Score is <strong>a numerical measure of how prepared a business is to achieve a premium outcome at exit, based on the factors buyers use to assess and price acquisition targets.</strong>
            </p>
            <p className="term-context">
              The Exit Index generates an Exit Readiness Score for every business that completes the Exit Gap Calculator. The score reflects the business's current position across the key readiness dimensions — financial clarity, owner dependency, growth narrative, customer concentration, and management depth — and identifies where the gap is widest.
            </p>
            <p className="term-context">
              Scores are used to rank businesses within the Exit Index. They are also the primary data point used by Trusted Advisors on the platform to identify businesses where their specialist expertise can generate the most value.
            </p>
            <a href="/calculator" className="term-link">Get your score</a>
          </div>

          <div className="term" id="ebitda">
            <div className="term-header">
              <h2 className="term-name">EBITDA</h2>
            </div>
            <p className="term-definition">
              EBITDA stands for <strong>Earnings Before Interest, Tax, Depreciation and Amortisation.</strong> It is the most commonly used measure of business profitability in the context of acquisitions and exit valuations.
            </p>
            <p className="term-context">
              In business exit transactions, EBITDA functions as the base number to which the exit multiple is applied. Buyers use EBITDA because it approximates the cash-generating capacity of the business independent of its capital structure and accounting treatment — making it a more comparable measure across different businesses.
            </p>
            <p className="term-context">
              EBITDA can be adjusted — typically referred to as "adjusted" or "normalised" EBITDA — to remove one-off items, owner perks, and expenses that would not be incurred by a new owner. Normalised EBITDA is generally higher than reported EBITDA, and a key part of exit preparation is identifying and documenting legitimate adjustments that increase the base number before a multiple is applied.
            </p>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-multiple">Exit Multiple</a>
              <a href="#exit-gap">Exit Gap</a>
            </div>
          </div>

        </div>

        {/* L */}
        <div className="term-group" id="L">
          <div className="term-group-letter">L</div>

          <div className="term" id="lower-middle-market">
            <div className="term-header">
              <h2 className="term-name">Lower Middle Market</h2>
            </div>
            <p className="term-definition">
              The lower middle market refers to <strong>businesses with enterprise values typically between £2M and £50M</strong> — the segment of the business economy where the vast majority of Baby Boomer-owned businesses sit, and where the exit advisory infrastructure is most fragmented.
            </p>
            <p className="term-context">
              Unlike the upper middle market and large-cap M&A, the lower middle market has no standardised ranking systems for advisors, no published league tables, and limited access to transaction comparables. Business owners in this segment rely on personal referrals to find advisors, with no objective basis for assessing advisor quality or deal track record.
            </p>
            <p className="term-context">
              The lower middle market is the primary focus of The Exit Index. It is where the Silver Tsunami is concentrated, where the Exit Gap is widest, and where the absence of intelligence infrastructure costs business owners the most.
            </p>
            <a href="/intelligence/the-advisor-gap" className="term-link">Read: The Advisor Gap</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#silver-tsunami">Silver Tsunami</a>
              <a href="#trusted-advisor">Trusted Advisor</a>
              <a href="#exit-gap">Exit Gap</a>
            </div>
          </div>

        </div>

        {/* O */}
        <div className="term-group" id="O">
          <div className="term-group-letter">O</div>

          <div className="term" id="owner-dependency">
            <div className="term-header">
              <h2 className="term-name">Owner Dependency</h2>
            </div>
            <p className="term-definition">
              Owner dependency is <strong>the degree to which a business's revenue, operations, or key relationships are reliant on the continued involvement of its current owner.</strong> It is one of the most significant drivers of exit multiple compression.
            </p>
            <p className="term-context">
              A business where the owner holds the primary customer relationships, makes the majority of operational decisions, and is the public face of the brand is perceived by buyers as a job — not an asset. When the owner leaves, the value leaves with them. Buyers price this risk explicitly, often discounting by 1–2 full turns of EBITDA for high owner dependency.
            </p>
            <p className="term-context">
              Reducing owner dependency is typically the single highest-return exit preparation activity available to a business owner. It requires systematising operations, building a management layer, and transitioning key relationships — work that takes 18 to 36 months to do credibly.
            </p>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-gap">Exit Gap</a>
              <a href="#exit-readiness">Exit Readiness</a>
              <a href="#exit-multiple">Exit Multiple</a>
            </div>
          </div>

        </div>

        {/* P */}
        <div className="term-group" id="P">
          <div className="term-group-letter">P</div>

          <div className="term" id="prices-law">
            <div className="term-header">
              <h2 className="term-name">Price's Law</h2>
            </div>
            <p className="term-definition">
              Price's Law is the observation, made by physicist and historian of science Derek J. de Solla Price, that <strong>in any productive system, the square root of the total number of contributors produces approximately half of the total output.</strong>
            </p>
            <p className="term-context">
              The law describes a power law distribution — a pattern found consistently across scientific publishing, software development, income distribution, urban economics, and business revenue concentration. It is not a guideline. It is a description of how complex systems organise themselves under competitive conditions.
            </p>
            <p className="term-context">
              Applied to the global business economy: with approximately 200 million registered businesses worldwide, Price's Law predicts that roughly 14,000 to 20,000 of them account for half of total SME economic output. This concentration — The 20,000 — is the founding premise of The Exit Index. The transition of these businesses represents the most consequential economic event in the lower middle market.
            </p>
            <a href="/intelligence/the-20000" className="term-link">Read: The 20,000</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#the-20000">The 20,000</a>
              <a href="#silver-tsunami">Silver Tsunami</a>
            </div>
          </div>

        </div>

        {/* R */}
        <div className="term-group" id="R">
          <div className="term-group-letter">R</div>

          <div className="term" id="recurring-revenue">
            <div className="term-header">
              <h2 className="term-name">Recurring Revenue</h2>
            </div>
            <p className="term-definition">
              Recurring revenue refers to <strong>income that a business can reliably predict will continue into the future, typically generated through subscriptions, retainers, long-term contracts, or repeat consumable purchases.</strong>
            </p>
            <p className="term-context">
              Recurring revenue is one of the most significant multiple-expanders available to a business preparing for exit. Buyers pay a premium for predictability — a business with 70% recurring revenue commands a materially higher multiple than an equivalent business with project-based or transactional revenue, because the risk of revenue loss post-acquisition is lower.
            </p>
            <p className="term-context">
              In the Exit Index readiness framework, the proportion of recurring revenue is a weighted input into the Exit Readiness Score.
            </p>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-multiple">Exit Multiple</a>
              <a href="#exit-readiness">Exit Readiness</a>
            </div>
          </div>

        </div>

        {/* S */}
        <div className="term-group" id="S">
          <div className="term-group-letter">S</div>

          <div className="term" id="silver-tsunami">
            <div className="term-header">
              <h2 className="term-name">The Silver Tsunami</h2>
              <span className="term-origin">Exit Index Context</span>
            </div>
            <p className="term-definition">
              The Silver Tsunami is <strong>the wave of Baby Boomer business owners retiring simultaneously and seeking to exit their businesses — representing the largest intergenerational transfer of business wealth in history.</strong>
            </p>
            <p className="term-context">
              Baby Boomers — born between 1946 and 1964 — own an estimated 2.5 million businesses in the United States alone. In the UK, they account for the majority of businesses with revenues above £1 million. The retirement wave began around 2012 when the first Boomers turned 65, and will continue through 2029 and beyond.
            </p>
            <p className="term-context">
              Unlike individual business sales, which the market absorbs routinely, the Silver Tsunami is a structural supply shock: a concentration of businesses seeking exit in a compressed timeframe, against a buyer pool that has not scaled proportionally. The Exit Planning Institute estimates that 70% of these owners have no formal succession plan. BizBuySell data shows that 80% of listed businesses never complete a transaction.
            </p>
            <p className="term-context">
              The Exit Index uses the Silver Tsunami as the primary context for the urgency of exit preparation. The window for an optimal exit is open now. It will not remain open indefinitely.
            </p>
            <a href="/intelligence/the-silver-tsunami" className="term-link">Read the full research</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-gap">Exit Gap</a>
              <a href="#the-20000">The 20,000</a>
              <a href="#exit-readiness">Exit Readiness</a>
            </div>
          </div>

          <div className="term" id="succession-plan">
            <div className="term-header">
              <h2 className="term-name">Succession Plan</h2>
            </div>
            <p className="term-definition">
              A succession plan is <strong>a documented strategy for the transfer of business ownership and leadership — whether through external sale, management buyout, family transfer, or planned closure.</strong>
            </p>
            <p className="term-context">
              The absence of a succession plan is one of the defining features of the Silver Tsunami. Exit Planning Institute research consistently finds that the majority of Boomer business owners have not taken the basic steps required to transition their business successfully — including identifying potential successors, valuing the business, or beginning the financial and operational preparation that improves exit outcomes.
            </p>
            <p className="term-context">
              A succession plan is distinct from an exit plan, though the two overlap. A succession plan addresses who takes over. An exit plan addresses how the owner realises maximum value from the transition.
            </p>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#silver-tsunami">Silver Tsunami</a>
              <a href="#exit-readiness">Exit Readiness</a>
            </div>
          </div>

        </div>

        {/* T */}
        <div className="term-group" id="T">
          <div className="term-group-letter">T</div>

          <div className="term" id="the-20000">
            <div className="term-header">
              <h2 className="term-name">The 20,000</h2>
              <span className="term-origin">Exit Index Definition</span>
            </div>
            <p className="term-definition">
              The 20,000 refers to <strong>the approximately 20,000 businesses globally that, by application of Price's Law, account for roughly half of total SME economic output.</strong> They are the founding premise of The Exit Index.
            </p>
            <p className="term-context">
              These are not the world's largest corporations — those are tracked, ranked, and served by the full infrastructure of global investment banking. The 20,000 are the businesses that sit below that threshold: regional manufacturers, logistics firms, business services companies, healthcare providers, and industrial distributors with revenues typically between £5M and £100M.
            </p>
            <p className="term-context">
              They are large enough to matter at economic scale. They are small enough to have no Goldman Sachs on retainer. And they are transitioning ownership — through sale, succession, merger, or closure — at a rate that has never been systematically tracked, ranked, or indexed. Until now.
            </p>
            <a href="/intelligence/the-20000" className="term-link">Read the full research</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#prices-law">Price's Law</a>
              <a href="#silver-tsunami">Silver Tsunami</a>
              <a href="#lower-middle-market">Lower Middle Market</a>
            </div>
          </div>

          <div className="term" id="trusted-advisor">
            <div className="term-header">
              <h2 className="term-name">Trusted Advisor</h2>
              <span className="term-origin">Exit Index Programme</span>
            </div>
            <p className="term-definition">
              Within The Exit Index, a Trusted Advisor is <strong>a qualified exit advisory professional — broker, accountant, M&amp;A advisor, coach, or specialist — listed within the index and associated with its readiness intelligence data.</strong>
            </p>
            <p className="term-context">
              The Trusted Advisor programme is the mechanism through which the intelligence generated by the Exit Index becomes actionable. Trusted Advisors have access to readiness data from businesses in their region and specialism, early positioning within the ranking index, and association with the Exit Index brand as the intelligence infrastructure of the lower middle market.
            </p>
            <p className="term-context">
              Slots are intentionally limited by region and specialism. The architecture is designed to reward advisors who move early — before the index reaches full scale and positioning within it becomes competitive.
            </p>
            <a href="/trusted-advisors" className="term-link">View the Trusted Advisors programme</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-readiness-score">Exit Readiness Score</a>
              <a href="#lower-middle-market">Lower Middle Market</a>
              <a href="#exit-gap">Exit Gap</a>
            </div>
          </div>

        </div>

        {/* V */}
        <div className="term-group" id="V">
          <div className="term-group-letter">V</div>

          <div className="term" id="valuation-gap">
            <div className="term-header">
              <h2 className="term-name">Valuation Gap</h2>
            </div>
            <p className="term-definition">
              A valuation gap is <strong>the difference between the value a business owner assigns to their business and the value an independent assessment or buyer offer reveals.</strong> It is the informal precursor to the Exit Gap — present before a sale process begins.
            </p>
            <p className="term-context">
              Research consistently shows that business owners systematically overestimate the value of their businesses. The reasons are structural: owners compare their business to the best-case transactions they are aware of, do not account for the risk discounts buyers apply, and have no independent benchmark to calibrate against.
            </p>
            <p className="term-context">
              The Exit Gap Calculator is designed specifically to close this information asymmetry — giving owners an independent, data-anchored estimate of where their business sits relative to market comparables, before they enter a sale process.
            </p>
            <a href="/calculator" className="term-link">Calculate your valuation gap</a>
            <div className="term-related">
              <span className="term-related-label">Related</span>
              <a href="#exit-gap">Exit Gap</a>
              <a href="#exit-multiple">Exit Multiple</a>
              <a href="#ebitda">EBITDA</a>
            </div>
          </div>

        </div>

      </div>

      <div className="bottom-cta">
        <div className="bottom-cta-inner">
          <div>
            <div className="bc-label">The Entry Point</div>
            <div className="bc-title">Find out where you stand</div>
            <p className="bc-sub">Ten minutes. No advisor required. A baseline readiness score and a clear picture of where your gap is widest.</p>
          </div>
          <div className="bc-cta">
            <a href="/calculator">Start the Calculator &rarr;</a>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2026 The Exit Index &mdash; <a href="/">theexitindex.com</a></p>
        <p><a href="/intelligence">The Intelligence</a> &nbsp;&middot;&nbsp; <a href="/glossary">Glossary</a> &nbsp;&middot;&nbsp; <a href="/trusted-advisors">Trusted Advisors</a> &nbsp;&middot;&nbsp; <a href="/calculator">Calculator</a></p>
      </footer>
    </>
  );
}
