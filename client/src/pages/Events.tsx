import EventCard from "../components/EventCard";

export default function Events() {
  const events = [
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3a1 1 0 000 2v4a1 1 0 000 2H6a1 1 0 000 2v4a1 1 0 000 2h2a1 1 0 000 2v2a1 1 0 102 0v-2a1 1 0 000-2h2a1 1 0 000-2v-4a1 1 0 000-2h-2a1 1 0 000-2V5a1 1 0 000-2h2a1 1 0 000-2V1a1 1 0 10-2 0v2z"/>
        </svg>
      ),
      title: "Coding Workshop",
      date: "December 15, 2024",
      description: "Interactive session on advanced data structures and algorithms with hands-on coding practice.",
      borderColor: "border-ocean-green/30",
      buttonColor: "bg-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Coding Contest",
      date: "December 22, 2024",
      description: "Annual programming competition with exciting prizes and recognition for top performers.",
      borderColor: "border-gfg-green/30",
      buttonColor: "bg-gfg-green",
      hoverEffect: "hover:shadow-glow-green"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Industry Talk",
      date: "January 5, 2025",
      description: "Guest speaker session with industry experts sharing insights on career opportunities.",
      borderColor: "border-ocean-green/30",
      buttonColor: "bg-ocean-green",
      hoverEffect: "hover:shadow-glow"
    }
  ];

  const teamHeads = [
    {
      name: "Alex Johnson",
      role: "President",
      description: "Leading the campus body with passion for competitive programming and mentorship.",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Sarah Chen",
      role: "Vice President", 
      description: "Organizing events and fostering collaboration among members.",
      bgColor: "from-gfg-green to-ocean-green",
      borderColor: "border-gfg-green/30",
      textColor: "text-gfg-green",
      hoverEffect: "hover:shadow-glow-green"
    },
    {
      name: "Mike Rodriguez",
      role: "Technical Head",
      description: "Expert in web development and technical workshop coordination.",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Emma Davis",
      role: "Events Coordinator",
      description: "Managing event logistics and community engagement initiatives.",
      bgColor: "from-gfg-green to-ocean-green",
      borderColor: "border-gfg-green/30",
      textColor: "text-gfg-green",
      hoverEffect: "hover:shadow-glow-green"
    }
  ];

  const handleRegister = (eventTitle: string) => {
    // Handle event registration
    console.log(`Registering for ${eventTitle}`);
  };

  return (
    <div>
      {/* Upcoming Events Section */}
      <section className="bg-gradient-to-b from-ocean-green via-deep-green to-near-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-outfit font-bold text-4xl md:text-6xl text-glow text-center mb-16" data-testid="events-title">
            Upcoming Events
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard
                key={index}
                icon={event.icon}
                title={event.title}
                date={event.date}
                description={event.description}
                borderColor={event.borderColor}
                buttonColor={event.buttonColor}
                hoverEffect={event.hoverEffect}
                onRegister={() => handleRegister(event.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Heads Section */}
      <section className="bg-near-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-glow text-center mb-16" data-testid="team-title">
            Our Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamHeads.map((head, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-b from-deep-green to-near-black border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300`}
                data-testid={`team-member-${index}`}
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${head.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow`}>
                  <svg className="w-8 h-8 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="font-outfit font-semibold text-xl text-glow mb-2" data-testid={`member-name-${index}`}>
                  {head.name}
                </h3>
                <p className={`font-poppins ${head.textColor} text-sm font-medium mb-3`} data-testid={`member-role-${index}`}>
                  {head.role}
                </p>
                <p className="font-poppins text-glow-sm text-sm" data-testid={`member-description-${index}`}>
                  {head.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
