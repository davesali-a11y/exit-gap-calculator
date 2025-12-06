import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          What's your healthcare business really worth? Private equity already knows.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Don't negotiate blind. Get your free exit-readiness assessment before corporate buyers lowball you—2 minutes, no email required.
        </p>
        
        <Link 
          to="/calculator"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Get My Free Assessment
        </Link>
        
        <p className="mt-16 text-sm text-gray-500">
          Built for business owners who built something worth protecting.

          {/* Mission Context */}
          <div style={{
            maxWidth: '700px',
            margin: '60px auto 0',
            padding: '30px',
            background: '#f8f9fa',
            borderRadius: '8px'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#666',
              lineHeight: '1.7',
              margin: '0'
            }}>
              <strong style={{ color: '#333' }}>This isn't professional advice—here's why that's good:</strong> Professional valuations cost £15-30K and take weeks. They're essential when you're ready to sell. But most business owners don't discover their gaps until they're IN negotiations—when it's too late to fix them. This free assessment shows you what to ask your CFO, accountant, and advisors before you need expensive due diligence.
            </p>
          </div>
        </p>
      </div>
    </div>
  );
}