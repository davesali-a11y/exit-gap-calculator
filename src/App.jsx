import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Calculator from './pages/Calculator';
import Checklist from './pages/Checklist';
import TrustedAdvisors from './pages/TrustedAdvisors';
import Intelligence from './pages/Intelligence/index';
import TheExitGap from './pages/Intelligence/TheExitGap';
import TheSilverTsunami from './pages/Intelligence/TheSilverTsunami';
import The20000 from './pages/Intelligence/The20000';
import TheAdvisorGap from './pages/Intelligence/TheAdvisorGap';
import Manifesto from './pages/Manifesto';
import Glossary from './pages/Glossary';
import IFranchisePartner from './pages/iFranchisePartner';

import { Analytics } from '@vercel/analytics/react';

const STANDALONE_ROUTES = ['/founding-partner/ifranchise'];

function AppInner() {
  const location = useLocation();
  const isStandalone = STANDALONE_ROUTES.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/trusted-advisors" element={<TrustedAdvisors />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/intelligence/the-exit-gap" element={<TheExitGap />} />
        <Route path="/intelligence/the-silver-tsunami" element={<TheSilverTsunami />} />
        <Route path="/intelligence/the-20000" element={<The20000 />} />
        <Route path="/intelligence/the-advisor-gap" element={<TheAdvisorGap />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/founding-partner/ifranchise" element={<IFranchisePartner />} />
      </Routes>

      {/* Footer Disclaimer — hidden on standalone invitation pages */}
      {!isStandalone && (
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
      )}

      <Analytics />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
