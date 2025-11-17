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
    </BrowserRouter>
  );
}

export default App;