interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hoverEffect: string;
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
  onClick 
}: ResourceCardProps) {
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
      <p className="font-poppins text-glow-sm leading-relaxed mb-6" data-testid="resource-description">
        {description}
      </p>
      <div className={`flex items-center ${textColor} font-medium`}>
        <span className="mr-2" data-testid="resource-link-text">{linkText}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </div>
    </div>
  );
}
