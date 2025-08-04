interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  description: string;
  borderColor: string;
  buttonColor: string;
  hoverEffect: string;
  onRegister: () => void;
}

export default function EventCard({ 
  icon, 
  title, 
  date, 
  description, 
  borderColor, 
  buttonColor, 
  hoverEffect,
  onRegister 
}: EventCardProps) {
  return (
    <div className={`bg-gradient-to-b from-deep-green to-near-black border ${borderColor} rounded-2xl p-6 ${hoverEffect} hover:scale-105 transition-all duration-300`}>
      <div className={`${buttonColor}/20 rounded-xl p-4 mb-6`}>
        {icon}
        <h3 className="font-outfit font-semibold text-xl text-glow mt-2" data-testid="event-title">{title}</h3>
      </div>
      <div className="mb-4">
        <p className={`font-poppins text-sm font-semibold mb-2`} style={{ color: buttonColor.replace('/20', '') }} data-testid="event-date">
          {date}
        </p>
        <p className="font-poppins text-glow-sm mt-2" data-testid="event-description">{description}</p>
      </div>
      <button 
        onClick={onRegister}
        className={`w-full bg-transparent border-2 ${borderColor} text-glow-white font-outfit font-medium py-3 rounded-full hover:${buttonColor}/20 ${hoverEffect} transition-all duration-300`}
        data-testid="button-register"
      >
        <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
        Register Now
      </button>
    </div>
  );
}
