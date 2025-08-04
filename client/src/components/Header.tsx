import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-near-black/90 to-transparent backdrop-blur-sm">
      {/* Top Bar with Logos */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* GFG Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gfg-green rounded-full flex items-center justify-center shadow-glow" data-testid="logo-gfg">
            <svg className="w-6 h-6 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <span className="hidden md:block text-sm text-glow-sm">GeeksforGeeks</span>
        </div>
        
        {/* Center Title */}
        <h1 className="font-outfit font-bold text-xl md:text-2xl lg:text-3xl text-glow text-center" data-testid="header-title">
          GeeksforGeeks Campus Body
        </h1>
        
        {/* SMEC Logo */}
        <div className="flex items-center space-x-3">
          <span className="hidden md:block text-sm text-glow-sm">SMEC</span>
          <div className="w-12 h-12 bg-ocean-green rounded-full flex items-center justify-center shadow-glow" data-testid="logo-smec">
            <svg className="w-6 h-6 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9v6c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V9l-11-6z"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <nav className="bg-deep-green/80 backdrop-blur-sm border-t border-ocean-green/30">
        <div className="flex justify-center space-x-8 py-4">
          <Link 
            to="/" 
            className={`font-outfit font-medium text-glow-white hover:text-ocean-green transition-all duration-300 hover:shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
              isActive('/') ? 'border-ocean-green text-ocean-green' : ''
            }`}
            data-testid="nav-home"
          >
            Home
          </Link>
          <Link 
            to="/events" 
            className={`font-outfit font-medium text-glow-white hover:text-ocean-green transition-all duration-300 hover:shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
              isActive('/events') ? 'border-ocean-green text-ocean-green' : ''
            }`}
            data-testid="nav-events"
          >
            Events
          </Link>
          <Link 
            to="/resources" 
            className={`font-outfit font-medium text-glow-white hover:text-ocean-green transition-all duration-300 hover:shadow-glow px-4 py-2 rounded-full border-2 border-transparent hover:border-ocean-green hover-glow ${
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
