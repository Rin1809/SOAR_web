import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import Report from './components/Report';
import './styles/poetic-style.css'; 

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('home');

  const handleNavClick = (view: string) => {
    setActiveView(view);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="poetic-container">
      <NavBar activeView={activeView} onNavClick={handleNavClick} />
      
      <main className="main-content-wrapper container mx-auto px-4 py-8 md:py-12">
        {activeView === 'home' && <Home />}
        {activeView === 'report' && <Report />}
      </main>
    </div>
  );
};

export default App;