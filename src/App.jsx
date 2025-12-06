import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Calculator from './pages/Calculator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>

       {/* Footer Disclaimer */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        color: '#888',
        padding: '40px 20px',
        marginTop: '80px',
        fontSize: '14px',
        lineHeight: '1.6'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p><strong style={{ color: '#fff' }}>Important:</strong> This calculator provides educational estimates based on common business valuation factors. It does not constitute financial, legal, tax, or professional advice. Results are approximations for informational purposes only.</p>
          <p style={{ marginTop: '10px' }}>For professional valuation, M&A advisory, or exit planning, consult qualified professionals. By using this tool, you acknowledge these limitations.</p>
          <p style={{ marginTop: '20px', fontSize: '12px' }}>© 2025 The Exit Index. All rights reserved.</p>
        </div>
      </footer>
    </BrowserRouter>
   
  );
}

export default App;