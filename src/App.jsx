import { useState } from 'react'
import './index.css'

function App() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const questions = [
    {
      id: 'businessType',
      question: 'What type of healthcare business do you own?',
      options: [
        'Private Medical Practice',
        'Dental Practice', 
        'Veterinary Clinic',
        'Allied Health Practice',
        'Healthcare Services Company'
      ]
    },
    {
      id: 'ownerInvolvement',
      question: 'How involved are you in day-to-day operations?',
      options: [
        'I see patients/clients full-time',
        'I work clinically 3-4 days per week',
        'I work clinically 1-2 days per week',
        'I manage but don\'t see patients',
        'Business runs without me'
      ]
    },
    {
      id: 'revenue',
      question: 'What\'s your annual revenue?',
      options: [
        'Under £500,000',
        '£500,000 - £1 million',
        '£1-2 million',
        '£2-5 million',
        'Over £5 million'
      ]
    },
    {
      id: 'profitMargin',
      question: 'What\'s your profit margin (EBITDA)?',
      options: [
        'Under 10%',
        '10-15%',
        '15-20%',
        '20-30%',
        'Over 30%'
      ]
    },
    {
      id: 'systemsDocumented',
      question: 'Are your systems and processes documented?',
      options: [
        'No documentation exists',
        'Some informal notes',
        'Partially documented',
        'Mostly documented',
        'Fully documented and digital'
      ]
    },
    {
      id: 'managementTeam',
      question: 'Do you have a management team in place?',
      options: [
        'It\'s just me',
        'One key person helps',
        'Small leadership team (2-3)',
        'Full management team',
        'Could run without me for months'
      ]
    },
    {
      id: 'timeToExit',
      question: 'When are you thinking of exiting?',
      options: [
        'ASAP - actively looking',
        'Within 12 months',
        '1-3 years',
        '3-5 years',
        '5+ years'
      ]
    },
    {
      id: 'email',
      question: 'Where should we send your Exit Readiness Score?',
      type: 'email',
      placeholder: 'your@email.com'
    }
  ]

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
  }

  const nextStep = () => {
    if (step < questions.length) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const calculateScore = () => {
    // Scoring logic for exit readiness
    let score = 0
    
    // Owner involvement (less involvement = higher score)
    const involvementScores = {
      'I see patients/clients full-time': 10,
      'I work clinically 3-4 days per week': 25,
      'I work clinically 1-2 days per week': 50,
      'I manage but don\'t see patients': 75,
      'Business runs without me': 100
    }
    
    // Systems documentation
    const systemScores = {
      'No documentation exists': 0,
      'Some informal notes': 20,
      'Partially documented': 40,
      'Mostly documented': 70,
      'Fully documented and digital': 100
    }
    
    // Management team
    const managementScores = {
      'It\'s just me': 0,
      'One key person helps': 20,
      'Small leadership team (2-3)': 45,
      'Full management team': 75,
      'Could run without me for months': 100
    }
    
    // Calculate weighted score
    const involvement = involvementScores[answers.ownerInvolvement] || 0
    const systems = systemScores[answers.systemsDocumented] || 0
    const management = managementScores[answers.managementTeam] || 0
    
    score = Math.round((involvement * 0.4 + systems * 0.3 + management * 0.3))
    
    return score
  }

  const getReadinessLevel = (score) => {
    if (score >= 80) return { level: 'Exit Ready', color: 'text-green-400', message: 'Your business is highly attractive to buyers' }
    if (score >= 60) return { level: 'Nearly Ready', color: 'text-blue-400', message: 'A few improvements would significantly increase value' }
    if (score >= 40) return { level: 'Needs Work', color: 'text-yellow-400', message: 'Strategic changes needed to maximize value' }
    return { level: 'Not Ready', color: 'text-red-400', message: 'Significant preparation needed before exit' }
  }

  if (step === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white flex items-center justify-center p-4">
        <div className="max-w-3xl text-center">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              The Exit Index
            </h1>
            <p className="text-2xl text-gray-300">
              Healthcare Business Exit Readiness Assessment
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Is Your Healthcare Business Ready to Sell?
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Most healthcare business owners leave millions on the table because they don't know what buyers actually pay for.
            </p>
            <p className="text-lg text-gray-400">
              Get your Exit Readiness Score in 2 minutes and discover exactly what's holding your valuation back.
            </p>
          </div>
          
          <button
            onClick={() => setStep(1)}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-cyan-700 transition shadow-xl"
          >
            Get Your Exit Readiness Score →
          </button>
          
          <p className="text-sm text-gray-500 mt-6">
            Free assessment • No credit card required • Instant results
          </p>
        </div>
      </div>
    )
  }

  if (step > questions.length) {
    const score = calculateScore()
    const readiness = getReadinessLevel(score)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white flex items-center justify-center p-4">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">Your Exit Readiness Score</h2>
            <p className="text-gray-400">Based on buyer preferences and valuation drivers</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur p-10 rounded-2xl mb-8">
            <div className="text-center mb-8">
              <div className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {score}%
              </div>
              <div className={`text-3xl font-bold ${readiness.color}`}>
                {readiness.level}
              </div>
              <p className="text-xl text-gray-300 mt-3">
                {readiness.message}
              </p>
            </div>
            
            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-2xl font-bold mb-4">What This Means:</h3>
              {score < 60 ? (
                <ul className="space-y-3 text-lg text-gray-300">
                  <li>• Your business value is tied to you personally</li>
                  <li>• Buyers will discount heavily or walk away</li>
                  <li>• You're likely leaving 30-50% of potential value on the table</li>
                  <li>• Strategic improvements could double your exit value</li>
                </ul>
              ) : (
                <ul className="space-y-3 text-lg text-gray-300">
                  <li>• Your business has transferable value</li>
                  <li>• Buyers will pay premium multiples</li>
                  <li>• You have negotiating leverage</li>
                  <li>• Small improvements yield big returns</li>
                </ul>
              )}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-3">
              Get Your Full Exit Index Report
            </h3>
            <p className="text-lg mb-4">
              We're sending your detailed analysis to {answers.email}
            </p>
            <p className="text-gray-200">
              Including: Valuation estimate • Improvement priorities • 90-day action plan
            </p>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => window.location.reload()}
              className="text-gray-400 hover:text-white transition"
            >
              Take Assessment Again →
            </button>
          </div>
        </div>
      </div>
    )
  }

  const currentQuestion = questions[step - 1]
  const progress = ((step - 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Question {step} of {questions.length}</span>
            <span className="text-sm text-gray-400">{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">
            {currentQuestion.question}
          </h2>

          {currentQuestion.options ? (
            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    handleAnswer(currentQuestion.id, option)
                    setTimeout(nextStep, 200)
                  }}
                  className="w-full text-left p-5 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 hover:border-blue-500 transition-all"
                >
                  <span className="text-lg">{option}</span>
                </button>
              ))}
            </div>
          ) : (
            <div>
              <input
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                className="w-full p-5 rounded-xl bg-slate-700/50 text-white border border-slate-600 focus:border-blue-500 focus:outline-none text-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && answers[currentQuestion.id]) {
                    nextStep()
                  }
                }}
              />
              <button
                onClick={nextStep}
                disabled={!answers[currentQuestion.id]}
                className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Continue →
              </button>
            </div>
          )}

          {step > 1 && (
            <button
              onClick={prevStep}
              className="mt-6 text-gray-400 hover:text-white transition"
            >
              ← Back to previous question
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App