interface ResourceCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  linkText: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  hoverEffect?: string;
  image?: string;
  url?: string;
  onClick: () => void;
}

export default function ResourceCard({ 
  icon, 
  title, 
  description, 
  linkText, 
  bgColor, 
  borderColor, 
  textColor, 
  hoverEffect,
  image,
  url,
  onClick 
}: ResourceCardProps) {
  // If image prop is provided, use it for the card image
  if (image) {
    // Fix for case-sensitive file systems and typo issues
    let imageFile = image;
    if (title === "Aptitude & Reasoning") {
      imageFile = "Aptitude.svg";
    }
    const imageSrc = new URL(`../assets/${imageFile}`, import.meta.url).href;
    return (
      <div
        className="bg-gradient-to-b from-gfg-green/10 to-deep-green border border-gfg-green/30 rounded-2xl shadow-lg hover:scale-105 hover:shadow-glow-green transition-all duration-300 cursor-pointer flex flex-col items-center justify-between relative overflow-hidden"
        style={{ width: "320px", minHeight: "370px", padding: "24px" }}
        onClick={onClick}
        data-testid="resource-card"
      >
        {/* Dark overlay for effect */}
        <div className="absolute inset-0 rounded-2xl" style={{background: "rgba(20,30,40,0.55)", zIndex: 1}}></div>
        <div className="w-full flex justify-center mb-4 relative z-10">
          <img
            src={imageSrc}
            alt={title}
            className="w-40 h-32 object-contain rounded-xl bg-white shadow"
            style={{ background: "linear-gradient(135deg, #3ab284 0%, #00895e 100%)" }}
          />
        </div>
        <h3 className="font-outfit font-semibold text-2xl text-white mb-4 text-center relative z-10" data-testid="resource-title">{title}</h3>
        <button
          className="w-full bg-gfg-green text-white py-3 rounded-lg font-semibold text-lg mt-2 hover:scale-105 hover:bg-gfg-green/90 hover:shadow-glow-green transition-all duration-200 shadow relative z-10"
          onClick={onClick}
        >
          {linkText}
        </button>
      </div>
    );
  }

  // Fallback for icon-based cards
  return (
    <div 
      className={`bg-gradient-to-b from-deep-green to-near-black border ${borderColor} rounded-2xl p-8 ${hoverEffect} hover:scale-105 transition-all duration-300 cursor-pointer`}
      onClick={onClick}
      data-testid="resource-card"
    >
      <div className={`${bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-glow`}>
        {icon}
      </div>
      <h3 className="font-outfit font-semibold text-2xl text-glow mb-4" data-testid="resource-title">{title}</h3>
      {description && (
        <p className="font-poppins text-glow-sm leading-relaxed mb-6" data-testid="resource-description">
          {description}
        </p>
      )}
      <div className={`flex items-center ${textColor} font-medium`}>
        <span className="mr-2" data-testid="resource-link-text">{linkText}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </div>
    </div>
  );
}
