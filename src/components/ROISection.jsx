import { useEffect, useRef } from 'react'

export default function ROISection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const fadeEls = sectionRef.current?.querySelectorAll('.fade-up')
    fadeEls?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const tiers = [
    {
      tag: 'Results Tier',
      name: '£1,000,000',
      period: 'per year · 5 spaces only',
      threshold: '£10M',
      thresholdSub: 'minimum per year',
      copy: "960 boomer-owned businesses reach exit age every day. Price's Law identifies the 20,000 that matter most. Results partners are positioned at the exact moment a business owner discovers their Exit Gap score: highest intent, lowest friction, first name seen. A franchise consulting firm converting 150 qualified leads per year at £100,000 per engagement generates £15,000,000. A global business marketplace converting 1% of indexed businesses generates multiples of that. The maths works. The question is whether your model captures it."
    },
    {
      tag: 'Featured Tier',
      name: '£250,000',
      period: 'per year · 15 spaces',
      threshold: '£2.5M',
      thresholdSub: 'minimum per year',
      copy: "Featured partners occupy the intelligence layer: the research, the data, the conversation that happens before a business owner decides who to trust. At £250,000, a firm needs 10 additional engagements per year that trace back to their Exit Index position to break even. For advisor networks, capital platforms, and ecosystem builders operating at scale, that is one month's pipeline. The investment is not the risk. Missing the position is."
    },
    {
      tag: 'Standard Tier',
      name: '£75,000',
      period: 'per year · 30 spaces · Founding rate locked',
      threshold: '£750K',
      thresholdSub: 'minimum per year',
      copy: "Regional advisors and specialist brokers working with 20 to 50 business owners per year need two or three additional mandates to generate a 10x return on their Standard investment. Two mandates. That is the threshold. If your firm closes deals and your clients trust you, the position pays for itself in the first quarter."
    }
  ]

  return (
    <section ref={sectionRef} style={{
      padding: '5rem 2rem',
      maxWidth: '860px',
      margin: '0 auto',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        .fade-up { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .fade-up:nth-child(2) { transition-delay: 0.1s; }
        .fade-up:nth-child(3) { transition-delay: 0.2s; }
        .fade-up:nth-child(4) { transition-delay: 0.3s; }
        .roi-tier:hover { background: #ede8df !important; }
        .confirm-btn:hover { background: #C9A84C !important; color: #F5F0E8 !important; }
      `}</style>

      <p className="fade-up" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 400, letterSpacing: '0.18em', color: '#C9A84C', textTransform: 'uppercase', textAlign: 'center', marginBottom: '2rem' }}>
        The Investment Logic
      </p>

      <h2 className="fade-up" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, lineHeight: 1.25, textAlign: 'center', color: '#1A1A2E', margin: '0 auto 2rem', maxWidth: '680px' }}>
        Every partner must be able to make <em style={{ fontStyle: 'italic', color: '#C9A84C' }}>ten times</em> their investment. That is not a target. It is a condition of entry.
      </h2>

      <p className="fade-up" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.85, color: '#3a3a4a', textAlign: 'center', maxWidth: '620px', margin: '0 auto 1.5rem' }}>
        The Trusted Advisor Programme is not an advertising spend. It is a financially-engineered position inside an ecosystem built around a single principle: incentive alignment. Every partner here wins only when the business owners they serve win. The investment tier is the mechanism that makes that true. It is also the filter that protects it.
      </p>

      <p className="fade-up" style={{ fontSize: '1rem', fontWeight: 400, lineHeight: 1.85, color: '#1A1A2E', textAlign: 'center', maxWidth: '620px', margin: '0 auto 1rem' }}>
        If your firm cannot credibly generate ten times your annual investment from your position in this ecosystem, this programme is not the right fit. We will tell you that directly, because acting in your interest, even when that means saying no, is how this platform operates.
      </p>

      <span className="fade-up" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#C9A84C', textAlign: 'center', margin: '0 auto 4rem', display: 'block' }}>
        If you can, read on.
      </span>

      <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5px', border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.2)', marginBottom: '4rem' }}>
        {tiers.map((tier) => (
          <div key={tier.tag} className="roi-tier" style={{ background: '#F5F0E8', padding: '2.5rem 2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start', transition: 'background 0.3s ease' }}>
            <div style={{ borderRight: '1px solid rgba(201,168,76,0.2)', paddingRight: '2rem' }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', fontWeight: 500, letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block' }}>{tier.tag}</span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, color: '#1A1A2E', margin: '0 0 0.25rem', lineHeight: 1.2 }}>{tier.name}</h3>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.8rem', fontWeight: 300, color: '#888', letterSpacing: '0.05em', marginBottom: '1.5rem', display: 'block' }}>{tier.period}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.35rem', display: 'block' }}>Minimum return threshold</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 400, color: '#C9A84C', lineHeight: 1, display: 'block', marginBottom: '0.25rem' }}>{tier.threshold}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', fontWeight: 300, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tier.thresholdSub}</span>
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.85, color: '#4a4a5a', margin: 0 }}>{tier.copy}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fade-up" style={{ textAlign: 'center', padding: '3rem 2rem', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.04)', marginBottom: '2.5rem' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 400, color: '#C9A84C', lineHeight: 1.6, margin: '0 auto 2rem', maxWidth: '540px', display: 'block' }}>
          The Dream Team has 50 spaces. Each one held by a firm with skin in the game.
        </span>
        <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.85, color: '#4a4a5a', maxWidth: '560px', margin: '0 auto' }}>
          If the numbers above describe your business, your space is waiting. If they do not, we would rather tell you now than watch you invest in the wrong thing. That is what it means to treat every firm in this ecosystem as a Client.
        </p>
      </div>
    </section>
  )
}
