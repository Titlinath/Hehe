import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Safety from './pages/Safety';
import Report from './pages/Report';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/safety" element={<Safety />} />
              <Route path="/report" element={<Report />} />
              <Route path="/volunteer" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Volunteer Page - Coming Soon</div></div>} />
              <Route path="/locator" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Pandal Locator Page - Coming Soon</div></div>} />
              <Route path="/emergency" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Emergency Resources Page - Coming Soon</div></div>} />
              <Route path="/feedback" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Feedback Page - Coming Soon</div></div>} />
              <Route path="/about" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">About Us Page - Coming Soon</div></div>} />
              <Route path="/login" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Login/Signup Page - Coming Soon</div></div>} />
              <Route path="/admin" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="text-2xl font-bold text-gray-600">Admin Dashboard - Coming Soon</div></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;