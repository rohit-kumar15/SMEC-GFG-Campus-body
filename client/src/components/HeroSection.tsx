export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-ocean-green via-deep-green to-near-black relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3ab284 0%, transparent 50%), radial-gradient(circle at 75% 75%, #00895e 0%, transparent 50%)`
          }}
        />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="font-outfit font-bold text-4xl md:text-6xl lg:text-7xl text-glow mb-6" data-testid="hero-title">
          GeeksforGeeks Campus Body
        </h1>
        <h2 className="font-space font-medium text-xl md:text-2xl lg:text-3xl text-glow-sm mb-8" data-testid="hero-subtitle">
          St. Martin's Engineering College
        </h2>
        <p className="font-poppins text-lg md:text-xl text-glow-sm max-w-2xl mb-12" data-testid="hero-description">
          Empowering students with cutting-edge technology skills, competitive programming, and industry-ready knowledge
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6">
          <button 
            className="bg-transparent border-2 border-ocean-green text-glow-white font-outfit font-semibold px-8 py-4 rounded-full hover:bg-ocean-green/20 hover:shadow-glow transition-all duration-300 hover-glow"
            data-testid="button-join-member"
          >
            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Join as Member
          </button>
          <button 
            className="bg-transparent border-2 border-gfg-green text-glow-white font-outfit font-semibold px-8 py-4 rounded-full hover:bg-gfg-green/20 hover:shadow-glow-green transition-all duration-300 hover-glow"
            data-testid="button-join-core"
          >
            <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Join as Core Member
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-glow-white opacity-70" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
        </svg>
      </div>
    </section>
  );
}
