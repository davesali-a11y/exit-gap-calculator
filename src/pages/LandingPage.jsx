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
        </p>
      </div>
    </div>
  );
}