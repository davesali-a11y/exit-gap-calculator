import { useState } from 'react'
import './index.css'

function App() {
  const [state, setState] = useState({
    currentStep: -2, // -2 = welcome, -1 = country selector, 0+ = questions
    country: null,
    answers: {},
    email: '',
    showResults: false
  })

  const currencies = {
    'UK': { symbol: '£', code: 'GBP', flag: '🇬🇧' },
    'US': { symbol: '$', code: 'USD', flag: '🇺🇸' },
    'EU': { symbol: '€', code: 'EUR', flag: '🇪🇺' }
  }

  const questions = [
    {
      id: 'exitStage',
      question: 'Which best describes where you are in your exit journey?',
      options: [
        { label: 'Planning to sell within 1-2 years', value: 'planning_1-2' },
        { label: 'Thinking about exit in 3-5 years', value: 'thinking_3-5' },
        { label: 'Just curious about my business\'s value', value: 'curious' },
        { label: 'Not selling, but want to maximize value', value: 'maximize' },
        { label: 'Evaluating acquisition opportunities', value: 'evaluating' }
      ]
    },
    {
      id: 'businessType',
      question: 'What type of business do you own?',
      options: [
        { label: 'Healthcare/Medical', sublabel: 'dental, veterinary, clinics', value: 'healthcare', multiplier: 1.1 },
        { label: 'Professional Services', sublabel: 'accounting, legal, consulting', value: 'professional', multiplier: 1.0 },
        { label: 'Home Services', sublabel: 'HVAC, plumbing, landscaping', value: 'home_services', multiplier: 0.9 },
        { label: 'Agency/Creative', sublabel: 'marketing, design, media', value: 'agency', multiplier: 0.95 },
        { label: 'Retail/E-commerce', value: 'retail', multiplier: 0.85 },
        { label: 'Manufacturing/Distribution', value: 'manufacturing', multiplier: 1.05 },
        { label: 'Other', value: 'other', multiplier: 0.9 }
      ]
    },
    {
      id: 'locations',
      question: 'How many locations does your business operate?',
      options: [
        { label: '1 location', value: 1, multiplier: 1.0 },
        { label: '2-3 locations', value: 2.5, multiplier: 1.15 },
        { label: '4-9 locations', value: 6.5, multiplier: 1.3 },
        { label: '10-19 locations', value: 14.5, multiplier: 1.45 },
        { label: '20+ locations', value: 25, multiplier: 1.6 }
      ]
    },
    {
      id: 'revenue',
      question: 'What\'s your approximate annual revenue?',
      getOptions: (country) => {
        const curr = currencies[country]
        return [
          { label: `Under ${curr.symbol}500K`, value: 250000, multiplier: 1.0 },
          { label: `${curr.symbol}500K - ${curr.symbol}1M`, value: 750000, multiplier: 1.1 },
          { label: `${curr.symbol}1M - ${curr.symbol}3M`, value: 2000000, multiplier: 1.2 },
          { label: `${curr.symbol}3M - ${curr.symbol}10M`, value: 6500000, multiplier: 1.3 },
          { label: `${curr.symbol}10M - ${curr.symbol}25M`, value: 17500000, multiplier: 1.4 },
          { label: `${curr.symbol}25M+`, value: 37500000, multiplier: 1.5 }
        ]
      }
    },
    {
      id: 'margin',
      question: 'What\'s your approximate profit margin?',
      options: [
        { label: 'Not profitable yet / Breaking even', value: 0.02, multiplier: 0.6 },
        { label: '5-10%', value: 0.075, multiplier: 0.8 },
        { label: '10-20%', value: 0.15, multiplier: 1.0 },
        { label: '20-35%', value: 0.275, multiplier: 1.2 },
        { label: '35%+', value: 0.4, multiplier: 1.4 },
        { label: 'I don\'t know', value: 0.12, multiplier: 0.9 }
      ]
    },
    {
      id: 'thinkWorth',
      question: 'What do you think your business is worth today?',
      getOptions: (country) => {
        const curr = currencies[country]
        return [
          { label: `Under ${curr.symbol}1M`, value: 500000 },
          { label: `${curr.symbol}1M - ${curr.symbol}2M`, value: 1500000 },
          { label: `${curr.symbol}2M - ${curr.symbol}5M`, value: 3500000 },
          { label: `${curr.symbol}5M - ${curr.symbol}10M`, value: 7500000 },
          { label: `${curr.symbol}10M - ${curr.symbol}25M`, value: 17500000 },
          { label: `${curr.symbol}25M+`, value: 37500000 },
          { label: 'I have no idea', value: 0 }
        ]
      }
    },
    {
      id: 'wantAmount',
      question: 'What number would you need to walk away happy?',
      getOptions: (country) => {
        const curr = currencies[country]
        return [
          { label: `Under ${curr.symbol}2M`, value: 1000000 },
          { label: `${curr.symbol}2M - ${curr.symbol}5M`, value: 3500000 },
          { label: `${curr.symbol}5M - ${curr.symbol}10M`, value: 7500000 },
          { label: `${curr.symbol}10M - ${curr.symbol}25M`, value: 17500000 },
          { label: `${curr.symbol}25M+`, value: 37500000 },
          { label: 'I haven\'t thought about it', value: 0 }
        ]
      }
    },
    {
      id: 'ownerDependence',
      question: 'Could your business operate successfully for 90 days without you?',
      options: [
        { label: 'Absolutely - it runs itself', value: 5, multiplier: 1.5 },
        { label: 'Mostly - with occasional check-ins', value: 4, multiplier: 1.25 },
        { label: 'Somewhat - they\'d need guidance weekly', value: 3, multiplier: 1.0 },
        { label: 'Not really - I\'m essential to daily operations', value: 2, multiplier: 0.75 },
        { label: 'Not at all - I am the business', value: 1, multiplier: 0.5 }
      ]
    },
    {
      id: 'onlineReputation',
      question: 'How strong is your online reputation?',
      options: [
        { label: '100+ reviews, 4.5+ star average', value: 5, multiplier: 1.3 },
        { label: '50-100 reviews, 4.0+ stars', value: 4, multiplier: 1.15 },
        { label: '20-50 reviews, 3.5+ stars', value: 3, multiplier: 1.0 },
        { label: 'Under 20 reviews', value: 2, multiplier: 0.9 },
        { label: 'Minimal online presence', value: 1, multiplier: 0.75 }
      ]
    },
    {
      id: 'documentation',
      question: 'How documented and systematized is your business?',
      options: [
        { label: 'Everything documented', sublabel: 'processes, procedures, training manuals', value: 5, multiplier: 1.4 },
        { label: 'Most key processes documented', value: 4, multiplier: 1.2 },
        { label: 'Some documentation exists', value: 3, multiplier: 1.0 },
        { label: 'Minimal documentation', value: 2, multiplier: 0.85 },
        { label: 'It\'s mostly in my head', value: 1, multiplier: 0.6 }
      ]
    }
  ]

  const formatNumber = (num) => Math.round(num).toLocaleString('en-GB')
  const formatCurrency = (amount) => {
    const curr = currencies[state.country]
    return curr.symbol + formatNumber(amount)
  }

  const calculateResults = () => {
    const revenue = state.answers.revenue?.value || 0
    const margin = state.answers.margin?.value || 0
    const baseMultiplier = 3
    
    const totalMultiplier = baseMultiplier *
      (state.answers.businessType?.multiplier || 1) *
      (state.answers.locations?.multiplier || 1) *
      (state.answers.ownerDependence?.multiplier || 1) *
      (state.answers.onlineReputation?.multiplier || 1) *
      (state.answers.documentation?.multiplier || 1) *
      (state.answers.margin?.multiplier || 1)

    const actualValue = revenue * margin * totalMultiplier
    const targetValue = state.answers.wantAmount?.value || actualValue * 1.5
    const exitGap = targetValue - actualValue
    const exitGapPercentage = targetValue > 0 ? ((exitGap / targetValue) * 100) : 0

    const maxMultiplier = baseMultiplier * 1.5 * 1.6 * 1.5 * 1.3 * 1.4 * 1.4
    const score = Math.min(100, Math.round((totalMultiplier / maxMultiplier) * 100))

    const weaknesses = []
    if (state.answers.ownerDependence?.value <= 3) 
      weaknesses.push({ area: 'Owner Dependence', score: state.answers.ownerDependence.value * 20, potential: actualValue * 0.6 })
    if (state.answers.documentation?.value <= 3) 
      weaknesses.push({ area: 'Process Documentation', score: state.answers.documentation.value * 20, potential: actualValue * 0.4 })
    if (state.answers.onlineReputation?.value <= 3) 
      weaknesses.push({ area: 'Online Reputation', score: state.answers.onlineReputation.value * 20, potential: actualValue * 0.2 })

    return {
      actualValue,
      targetValue,
      exitGap,
      exitGapPercentage,
      score,
      weaknesses: weaknesses.slice(0, 3)
    }
  }

  const selectCountry = (country) => {
    setState({ ...state, country, currentStep: 0 })
  }

  const handleAnswer = (questionId, option) => {
    setState({ 
      ...state, 
      answers: { ...state.answers, [questionId]: option },
      currentStep: state.currentStep + 1
    })
  }

  const nextStep = () => {
    setState({ ...state, currentStep: state.currentStep + 1 })
  }

  const prevStep = () => {
    if (state.showResults) {
      setState({ ...state, showResults: false, currentStep: questions.length })
    } else if (state.currentStep >= 0) {
      setState({ ...state, currentStep: state.currentStep - 1 })
    } else {
      setState({ ...state, currentStep: -2 })
    }
  }

  const submitEmail = () => {
    if (state.email && state.email.includes('@')) {
      console.log('=== EXIT GAP CALCULATOR SUBMISSION ===')
      console.log('Country:', state.country)
      console.log('Email:', state.email)
      console.log('Answers:', state.answers)
      console.log('Results:', calculateResults())
      setState({ ...state, showResults: true })
    }
  }

  // Welcome Screen
  if (state.currentStep === -2) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            What's Your<br/>Exit Gap?
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4 leading-relaxed">
            Most business owners leave £500k-£2M on the table.
          </p>
          <p className="text-lg text-slate-400 mb-12">
            Find out your number in 2 minutes.
          </p>
          <button 
            onClick={nextStep}
            className="bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            Start Calculator →
          </button>
          <p className="text-slate-500 text-sm mt-8">Takes 2 minutes • 10 questions • Free results</p>
        </div>
      </div>
    )
  }

  // Country Selector
  if (state.currentStep === -1) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="text-slate-400 text-sm font-semibold mb-4">STEP 1</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
            Which country is your business based in?
          </h2>
          <div className="space-y-4">
            {Object.entries(currencies).map(([country, data]) => (
              <button
                key={country}
                onClick={() => selectCountry(country)}
                className="w-full text-left p-8 rounded-2xl bg-slate-800 hover:bg-slate-700 border-2 border-transparent hover:border-blue-500 transition-all group hover:translate-x-3"
              >
                <div className="flex items-center">
                  <div className="text-5xl mr-6">{data.flag}</div>
                  <div className="flex-1">
                    <div className="text-2xl font-semibold text-white">
                      {country === 'UK' ? 'United Kingdom' : country === 'US' ? 'United States' : 'European Union'}
                    </div>
                    <div className="text-slate-400 mt-1">{data.code} ({data.symbol})</div>
                  </div>
                  <div className="text-slate-600 group-hover:text-blue-500 transition-colors text-2xl">→</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Email Capture
  if (state.currentStep === questions.length) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
          <div className="h-full bg-blue-500 transition-all duration-400" style={{ width: '100%' }} />
        </div>
        <div className="flex-1 flex items-center justify-center p-6 pt-16">
          <div className="max-w-2xl w-full text-center">
            <div className="text-6xl mb-6">✉️</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              One more thing...
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Enter your email to see your Exit Gap results
            </p>
            <input
              type="email"
              placeholder="your.email@example.com"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onKeyUp={(e) => e.key === 'Enter' && submitEmail()}
              className="w-full px-8 py-5 rounded-full bg-slate-800 border-2 border-slate-700 focus:border-blue-500 focus:outline-none text-xl text-center mb-6 text-white"
              autoFocus
            />
            <button
              onClick={submitEmail}
              className="bg-white text-slate-900 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-100 transition-all transform hover:scale-105"
            >
              See My Results →
            </button>
            <p className="text-slate-500 text-sm mt-8">🔒 Private and secure. No spam ever.</p>
            <button
              onClick={prevStep}
              className="mt-8 text-slate-400 hover:text-white transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Results Screen
  if (state.showResults) {
    const results = calculateResults()
    const curr = currencies[state.country]
    const priceAmount = '50'
    
    return (
      <div className="min-h-screen bg-slate-900 text-white p-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-slate-400 text-sm font-semibold mb-4">YOUR EXIT READINESS SCORE</div>
            <div className="text-9xl font-black mb-4">{results.score}</div>
            <div className="text-2xl text-slate-300">Out of 100</div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800 rounded-3xl p-8 text-center">
              <div className="text-slate-400 text-sm mb-2">Current Value</div>
              <div className="text-3xl font-bold">{formatCurrency(results.actualValue)}</div>
            </div>
            <div className="bg-slate-800 rounded-3xl p-8 text-center">
              <div className="text-slate-400 text-sm mb-2">Target Value</div>
              <div className="text-3xl font-bold">{formatCurrency(results.targetValue)}</div>
            </div>
            <div className="bg-red-900 rounded-3xl p-8 text-center border-2 border-red-700">
              <div className="text-red-300 text-sm font-semibold mb-2">Your Exit Gap</div>
              <div className="text-3xl font-bold text-red-200">{formatCurrency(Math.abs(results.exitGap))}</div>
            </div>
          </div>

          {results.weaknesses.length > 0 && (
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Your Top Opportunities</h3>
              <div className="space-y-4">
                {results.weaknesses.map((w, i) => (
                  <div key={i} className="bg-gradient-to-r from-green-900 to-slate-800 rounded-3xl p-8 border-l-4 border-green-500">
                    <div className="flex items-start gap-6">
                      <div className="text-5xl font-black text-green-500">{i + 1}</div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-2">{w.area}</h4>
                        <p className="text-green-300 font-semibold mb-2">Could add: {formatCurrency(w.potential)}</p>
                        <p className="text-slate-400">Current score: {w.score}/100</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-12 border-2 border-blue-700 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">
                The Most Valuable Piece of Paper<br/>in Your Business
              </h3>
              <p className="text-xl text-slate-300">
                Most business owners get 50-page reports they never read.<br/>
                <span className="font-bold text-white">This isn't that.</span>
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 mb-8">
              <h4 className="font-bold text-xl mb-4">What's in The Checklist:</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>The 3 moves to close YOUR {formatCurrency(Math.abs(results.exitGap))} gap</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>What to do THIS WEEK (not "someday")</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>90-day implementation plan</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="text-slate-400 line-through text-lg mb-2">{curr.symbol}500</div>
              <div className="text-7xl font-black mb-2">{curr.symbol}{priceAmount}</div>
              <div className="text-xl text-slate-300">One {curr.symbol}{priceAmount} note</div>
            </div>

            <button className="w-full bg-white text-slate-900 px-12 py-6 rounded-full text-2xl font-bold hover:bg-slate-100 transition-all transform hover:scale-105 mb-8">
              Get The Checklist →
            </button>

            <div className="bg-slate-950 rounded-2xl p-8 text-center">
              <h4 className="font-bold text-xl mb-4 text-red-300">NO GUARANTEE. NO REFUNDS.</h4>
              <p className="text-slate-300 text-sm mb-4">Trust your gut.</p>
              <p className="text-slate-400 text-sm">
                If your gut has been confirming what these numbers show...<br/>
                if you're ready to actually DO something about it...<br/>
                then put down one {curr.symbol}{priceAmount} note.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-400 mb-4">Not ready to invest yet?</p>
            <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Just Send Me The Free Summary →
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Questions
  const question = questions[state.currentStep]
  const progress = ((state.currentStep + 2) / (questions.length + 2)) * 100
  const options = question.getOptions ? question.getOptions(state.country) : question.options

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div className="h-full bg-blue-500 transition-all duration-400" style={{ width: `${progress}%` }} />
      </div>

      <div className="flex-1 flex items-center justify-center p-6 pt-16">
        <div className="max-w-3xl w-full">
          <div className="text-slate-400 text-sm font-semibold mb-4">
            QUESTION {state.currentStep + 1} OF {questions.length}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">
            {question.question}
          </h2>

          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleAnswer(question.id, option)}
                className="w-full text-left p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 border-2 border-transparent hover:border-blue-500 transition-all group hover:translate-x-3"
              >
                <div className="flex items-center">
                  <div className="flex-1">
                    <div className="text-lg font-semibold text-white">{option.label}</div>
                    {option.sublabel && <div className="text-sm text-slate-400 mt-1">{option.sublabel}</div>}
                  </div>
                  <div className="text-slate-600 group-hover:text-blue-500 transition-colors text-xl">→</div>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={prevStep}
            className="mt-8 text-slate-400 hover:text-white transition-colors flex items-center text-lg"
          >
            ← {state.currentStep > 0 ? 'Back' : 'Change Country'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App