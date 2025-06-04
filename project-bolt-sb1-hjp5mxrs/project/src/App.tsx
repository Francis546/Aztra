import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TradersPage from './pages/TradersPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App: React.FC = () => {
  const location = useLocation();
  
  // Add a class to the body based on the current route
  React.useEffect(() => {
    document.body.classList.remove('login-page', 'signup-page');
    if (location.pathname === '/login') {
      document.body.classList.add('login-page');
    } else if (location.pathname === '/signup') {
      document.body.classList.add('signup-page');
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/traders" element={<TradersPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;