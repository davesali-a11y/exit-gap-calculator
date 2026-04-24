import { useState, useEffect } from 'react'

const STEPS = { INTRO: 0, CONTEXT: 1, QUESTION: 2, DETAILS: 3, THANKYOU: 4 }

export default function Exit101Form() {
  const [step, setStep] = useState(STEPS.INTRO)
  const [answer, setAnswer] = useState('')
  const [details, setDetails] = useState({ name: '', firm: '', role: '', email: '', location: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [step])

  const handleDetailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://hook.eu1.make.com/psi09aj1iqf3xlamub11vs5bc5bfj0cu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'exit-101',
          timestamp: new Date().toISOString(),
          answer,
          ...details
        })
      })
    } catch (_) {
      // silent — don't block the user
    }
    setSubmitting(false)
    setStep(STEPS.THANKYOU)
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #1A1A2E;
          color: #F5F0E8;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 18px;
          line-height: 1.75;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
        }
        .e101-wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
        }
        .e101-wrap::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08), transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .e101-card {
          position: relative;
          z-index: 1;
          max-width: 640px;
          width: 100%;
          animation: fadeUp 0.6s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .e101-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 2rem;
          display: block;
        }
        .e101-rule {
          width: 40px;
          height: 1px;
          background: #C9A84C;
          opacity: 0.5;
          margin-bottom: 2rem;
        }
        .e101-h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #F5F0E8;
          margin-bottom: 1.75rem;
        }
        .e101-h1 em { color: #C9A84C; font-style: italic; }
        .e101-h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.01em;
          color: #F5F0E8;
          margin-bottom: 1.5rem;
        }
        .e101-h2 em { color: #C9A84C; font-style: italic; }
        .e101-p {
          font-size: 1rem;
          line-height: 1.85;
          color: rgba(245,240,232,0.7);
          margin-bottom: 1.25rem;
        }
        .e101-p strong { color: #F5F0E8; font-weight: 500; }
        .e101-p em { font-style: italic; color: #C9A84C; }
        .e101-divider {
          border: none;
          border-top: 1px solid rgba(201,168,76,0.15);
          margin: 2rem 0;
        }
        .e101-btn {
          display: inline-block;
          background: #C9A84C;
          color: #1A1A2E;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          margin-top: 2rem;
        }
        .e101-btn:hover { background: #e8d5a3; transform: translateY(-2px); }
        .e101-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .e101-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #C9A84C;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          border: 1px solid rgba(201,168,76,0.4);
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
          margin-top: 2rem;
        }
        .e101-btn-ghost:hover { border-color: #C9A84C; transform: translateY(-2px); }
        .e101-textarea {
          width: 100%;
          min-height: 200px;
          background: rgba(245,240,232,0.06);
          border: 1px solid rgba(201,168,76,0.25);
          color: #F5F0E8;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.7;
          padding: 1.25rem 1.5rem;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s;
          margin-top: 1.5rem;
        }
        .e101-textarea::placeholder { color: rgba(245,240,232,0.3); }
        .e101-textarea:focus { border-color: rgba(201,168,76,0.6); }
        .e101-input {
          width: 100%;
          background: rgba(245,240,232,0.06);
          border: 1px solid rgba(201,168,76,0.2);
          border-bottom: 1px solid rgba(201,168,76,0.4);
          color: #F5F0E8;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          font-weight: 300;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.2s;
          margin-bottom: 1rem;
        }
        .e101-input::placeholder { color: rgba(245,240,232,0.3); }
        .e101-input:focus { border-color: rgba(201,168,76,0.7); }
        .e101-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.7);
          display: block;
          margin-bottom: 0.4rem;
        }
        .e101-field { margin-bottom: 1.25rem; }
        .e101-ps {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: rgba(245,240,232,0.4);
          line-height: 1.7;
          margin-top: 1.5rem;
        }
        .e101-ps em { color: rgba(201,168,76,0.6); font-style: normal; }
        .e101-progress {
          display: flex;
          gap: 6px;
          margin-bottom: 2.5rem;
        }
        .e101-progress-dot {
          width: 24px;
          height: 2px;
          background: rgba(201,168,76,0.2);
          transition: background 0.3s;
        }
        .e101-progress-dot.active { background: #C9A84C; }
        .e101-quote-block {
          border-left: 2px solid #C9A84C;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0;
          background: rgba(201,168,76,0.04);
        }
        .e101-quote-block p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.05rem;
          color: rgba(245,240,232,0.85);
          line-height: 1.7;
          margin: 0;
        }
        @media (max-width: 500px) {
          .e101-wrap { padding: 3rem 1.5rem; }
        }
      `}</style>

      <div className="e101-wrap">
        <div className="e101-card" key={step}>

          {/* ── STEP 0: INTRO ── */}
          {step === STEPS.INTRO && (
            <>
              <div className="e101-progress">
                {[0,1,2,3].map(i => <div key={i} className={`e101-progress-dot${i === 0 ? ' active' : ''}`} />)}
              </div>
              <span className="e101-eyebrow">Exit 101 &mdash; Off the Cuff</span>
              <div className="e101-rule" />
              <h1 className="e101-h1">
                <em>101 M&A advisors.</em><br />
                One question.<br />
                An honest answer.
              </h1>
              <p className="e101-p">
                This is not a survey. It is not a webinar. It is not a pitch.
              </p>
              <p className="e101-p">
                It is a book built from a single question asked of the 101 advisors who shape how businesses actually exit. And you are one of them.
              </p>
              <p className="e101-p">
                It takes four minutes. Your answer goes in print, under your name, alongside the other 100.
              </p>
              <button className="e101-btn" onClick={() => setStep(STEPS.CONTEXT)}>
                I&apos;m in. Ask me the question.
              </button>
            </>
          )}

          {/* ── STEP 1: CONTEXT ── */}
          {step === STEPS.CONTEXT && (
            <>
              <div className="e101-progress">
                {[0,1,2,3].map(i => <div key={i} className={`e101-progress-dot${i <= 1 ? ' active' : ''}`} />)}
              </div>
              <span className="e101-eyebrow">A little context first</span>
              <div className="e101-rule" />
              <h2 className="e101-h2">
                Where this is going.
              </h2>
              <p className="e101-p">
                <strong>Exit 101: Off the Cuff</strong> is a collected intelligence project featuring 101 off the cuff answers from the advisors, brokers, and capital providers who have sat across the table from more exits than most people will ever see.
              </p>
              <p className="e101-p">
                The premise is simple: by asking 101 M&A advisors the same question, we surface the consensus, the contradictions, and the uncomfortable truths that no single advisor would say alone in a boardroom.
              </p>
              <p className="e101-p">
                The book will be published under The Exit Index and distributed to the business owners this platform is built for. Your name, your firm, your answer.
              </p>
              <div className="e101-quote-block">
                <p>"The most useful thing you can give a business owner preparing to exit is not a framework. It is the unguarded opinion of someone who has seen what actually happens."</p>
              </div>
              <p className="e101-p">
                No editing. No softening. Just the real answer.
              </p>
              <button className="e101-btn" onClick={() => setStep(STEPS.QUESTION)}>
                Ok. I&apos;m ready. Ask me.
              </button>
            </>
          )}

          {/* ── STEP 2: QUESTION ── */}
          {step === STEPS.QUESTION && (
            <>
              <div className="e101-progress">
                {[0,1,2,3].map(i => <div key={i} className={`e101-progress-dot${i <= 2 ? ' active' : ''}`} />)}
              </div>
              <span className="e101-eyebrow">The question</span>
              <div className="e101-rule" />
              <h2 className="e101-h2">
                What is the one thing most business owners <em>get wrong</em> about their exit?
              </h2>
              <p className="e101-p">
                Write the answer you would give off the cuff, over a drink, to a business owner who trusted you enough to ask it straight.
              </p>
              <p className="e101-p" style={{ fontSize: '0.85rem', color: 'rgba(245,240,232,0.45)' }}>
                No minimum length. No format. Just your honest answer.
              </p>
              <textarea
                className="e101-textarea"
                placeholder="Write your answer here…"
                value={answer}
                onChange={e => setAnswer(e.target.value)}
              />
              <button
                className="e101-btn"
                onClick={() => setStep(STEPS.DETAILS)}
                disabled={answer.trim().length < 10}
              >
                That&apos;s my answer. Let&apos;s go.
              </button>
            </>
          )}

          {/* ── STEP 3: DETAILS ── */}
          {step === STEPS.DETAILS && (
            <>
              <div className="e101-progress">
                {[0,1,2,3].map(i => <div key={i} className="e101-progress-dot active" />)}
              </div>
              <span className="e101-eyebrow">Almost there</span>
              <div className="e101-rule" />
              <h2 className="e101-h2">
                Put your name to it.
              </h2>
              <p className="e101-p">
                Your answer will be attributed in the book exactly as you provide it here. Name, firm, and role.
              </p>
              <hr className="e101-divider" />
              <form onSubmit={handleSubmit}>
                <div className="e101-field">
                  <label className="e101-label">Full name *</label>
                  <input
                    className="e101-input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={details.name}
                    onChange={handleDetailsChange}
                    required
                  />
                </div>
                <div className="e101-field">
                  <label className="e101-label">Firm *</label>
                  <input
                    className="e101-input"
                    type="text"
                    name="firm"
                    placeholder="Your firm or company"
                    value={details.firm}
                    onChange={handleDetailsChange}
                    required
                  />
                </div>
                <div className="e101-field">
                  <label className="e101-label">Role / title</label>
                  <input
                    className="e101-input"
                    type="text"
                    name="role"
                    placeholder="e.g. Managing Director, M&A Advisor"
                    value={details.role}
                    onChange={handleDetailsChange}
                  />
                </div>
                <div className="e101-field">
                  <label className="e101-label">Email *</label>
                  <input
                    className="e101-input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={details.email}
                    onChange={handleDetailsChange}
                    required
                  />
                </div>
                <div className="e101-field">
                  <label className="e101-label">Country / region</label>
                  <input
                    className="e101-input"
                    type="text"
                    name="location"
                    placeholder="e.g. United Kingdom"
                    value={details.location}
                    onChange={handleDetailsChange}
                  />
                </div>
                <button
                  type="submit"
                  className="e101-btn"
                  disabled={submitting}
                >
                  {submitting ? 'Sending…' : "I\u2019m done. Put me in the book."}
                </button>
                <p className="e101-ps">
                  <em>P.S.</em> &mdash; You are contributing to a collection of 101 insights from 101 M&A advisors. Your answer will not be edited. Your details will not be shared outside of The Exit Index and the published book.
                </p>
              </form>
            </>
          )}

          {/* ── STEP 4: THANK YOU ── */}
          {step === STEPS.THANKYOU && (
            <>
              <span className="e101-eyebrow">You&apos;re in the book</span>
              <div className="e101-rule" />
              <h2 className="e101-h2">
                Thank you,{details.name ? ` ${details.name.split(' ')[0]}` : ''}.
              </h2>
              <p className="e101-p">
                Your answer has been recorded. When <em>Exit 101: Off the Cuff</em> is published, you will hear about it first.
              </p>
              <p className="e101-p">
                In the meantime — if you have not yet seen what the Exit Gap Calculator shows a business owner at the moment of highest intent, it is worth two minutes of your time. It is what your clients will see before they come to you.
              </p>
              <hr className="e101-divider" />
              <a href="/calculator" className="e101-btn">
                Show me the Exit Gap Calculator.
              </a>
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href="/"
                  className="e101-btn-ghost"
                  style={{ marginTop: '0.75rem', display: 'inline-block' }}
                >
                  Back to The Exit Index
                </a>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  )
}
