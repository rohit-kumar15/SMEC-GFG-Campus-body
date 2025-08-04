import { Link, useLocation } from "react-router-dom";
import gfgLogo from "../assets/gfg-logo.png";
import smecLogo from "../assets/smec-logo.png";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-near-black/90 to-transparent backdrop-blur-sm">
      {/* Top Bar with Logos */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* GFG Logo */}
        <div className="flex items-center">
          <img src={gfgLogo} alt="GeeksforGeeks Logo" className="h-10 w-auto shadow-glow" data-testid="logo-gfg" />
        </div>
        
        {/* Center Title */}
        <h1 className="font-outfit font-bold text-xl md:text-2xl lg:text-3xl text-glow text-center" data-testid="header-title">
          St. Martin's GeeksforGeeks Campus Body
        </h1>
        
        {/* SMEC Logo */}
        <div className="flex items-center">
          <img src={smecLogo} alt="SMEC Logo" className="h-10 w-auto shadow-glow" data-testid="logo-smec" />
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="bg-deep-green/80 backdrop-blur-sm border-t border-ocean-green/30 rounded-b-3xl mx-6">
        <div className="flex justify-center space-x-8 py-2">
          <Link 
            to="/" 
            className={`font-outfit font-medium text-white hover:text-ocean-green transition-all duration-300 hover:drop-shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
              isActive('/') ? 'border-ocean-green text-ocean-green' : ''
            }`}
            data-testid="nav-home"
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`font-outfit font-medium text-white hover:text-ocean-green transition-all duration-300 hover:drop-shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
              isActive('/events') ? 'border-ocean-green text-ocean-green' : ''
            }`}
            data-testid="nav-events"
          >
            Events
          </Link>
          <Link 
            to="/resources" 
            className={`font-outfit font-medium text-white hover:text-ocean-green transition-all duration-300 hover:drop-shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
              isActive('/resources') ? 'border-ocean-green text-ocean-green' : ''
            }`}
            data-testid="nav-resources"
          >
            Resources
          </Link>
        </div>
      </nav>
    </header>
  );
}
