import { useState } from "react";
import EventCard from "../components/EventCard";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import nationSkillUpLogo from "../assets/Nation SkillUp.png";

// Import harsh profile image with fallback
let harshProfileImage: string | null;
try {
  harshProfileImage = new URL('../assets/harsh-profile.png', import.meta.url).href;
} catch {
  harshProfileImage = null;
}

export default function Events() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const events = [
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Inaugural Ceremony",
      date: "August 12, 2025",
      description: "The event will be held on Tuesday, 12th August 2025, from 1:20 PM onwards at the auditorium of the APJ Abdul Kalam Block.",
      borderColor: "border-ocean-green/30",
      buttonColor: "bg-ocean-green",
      hoverEffect: "hover:shadow-glow",
      showButton: false
    },
    {
      icon: (
        <img src={nationSkillUpLogo} alt="Nation SkillUp" className="w-16 h-8 object-contain" />
      ),
      title: "National SkillUp",
      date: "Ongoing Program",
      description: "A comprehensive skill development initiative by GeeksforGeeks designed to enhance technical competencies and career readiness for students and professionals.",
      borderColor: "border-gfg-green/30",
      buttonColor: "bg-gfg-green",
      hoverEffect: "hover:shadow-glow-green",
      showButton: true,
      buttonLink: "https://www.geeksforgeeks.org/nation-skill-up/?utm_campaign=nation_skillup_CM&utm_medium=community+team&utm_source=harsh1111"
    }
  ];

  const teamHeads = [
    {
      name: "Harsh Rapaka",
      role: "Campus Mantri",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Rohit Kumar",
      role: "Technical Head", 
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Ayesha Fatima",
      role: "Design & Creative Head",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Sai Priya Ekbote",
      role: "Events & Logistics Head",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Sunketa Meghana",
      role: "Marketing Head",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      name: "Satish Kumar",
      role: "Social Media Head",
      bgColor: "from-ocean-green to-gfg-green",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    }
  ];

  const handleRegister = (eventTitle: string, buttonLink?: string) => {
    if (buttonLink) {
      window.open(buttonLink, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`Registering for ${eventTitle}`);
    }
  };

  return (
    <div>
      {/* Upcoming Events Section */}
      <section className="bg-gradient-to-b from-ocean-green via-deep-green to-near-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-outfit font-bold text-4xl md:text-6xl text-glow text-center mb-16" data-testid="events-title">
            Upcoming Events
          </h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                showButton={event.showButton}
                onRegister={() => handleRegister(event.title, event.buttonLink)}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamHeads.map((head, index) => {
              // Special styling for first card (Harsh Rapaka)
              if (index === 0) {
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: harshProfileImage
                        ? `url(${harshProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: harshProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: harshProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/harsh-rapaka" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/harshrapaka?igsh=M2tucWZnOXJiZWo3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://github.com/HarshRapaka" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Special styling for second card (Rohit Kumar)
              if (index === 1) {
                // Import Rohit profile image
                let rohitProfileImage: string | null;
                try {
                  rohitProfileImage = new URL('../assets/rohit-profile.png', import.meta.url).href;
                } catch {
                  rohitProfileImage = null;
                }
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: rohitProfileImage
                        ? `url(${rohitProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: rohitProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: rohitProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/rohit-kumar-9b9486353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/rohu_560?igsh=MXRwMnpqMTJrYm9wdQ==" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://github.com/rohit-kumar15" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Special styling for third card (Ayesha Fatima)
              if (index === 2) {
                // Import Ayesha profile image
                let ayeshaProfileImage: string | null;
                try {
                  ayeshaProfileImage = new URL('../assets/ayesha-profile.png', import.meta.url).href;
                } catch {
                  ayeshaProfileImage = null;
                }
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: ayeshaProfileImage
                        ? `url(${ayeshaProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: ayeshaProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: ayeshaProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/ayeshafatimq" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/ayeshqfatima/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Special styling for fourth card (Sai Priya Ekbote)
              if (index === 3) {
                // Import Priya profile image
                let priyaProfileImage: string | null;
                try {
                  priyaProfileImage = new URL('../assets/priya-profile.png', import.meta.url).href;
                } catch {
                  priyaProfileImage = null;
                }
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: priyaProfileImage
                        ? `url(${priyaProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: priyaProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: priyaProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/sai-priya-ekbote" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://instagram.com/ekbote_priya" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://github.com/Saipriya-ekbote" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Special styling for fifth card (Sunketa Meghana)
              if (index === 4) {
                // Import Meghana profile image
                let meghanaProfileImage: string | null;
                try {
                  meghanaProfileImage = new URL('../assets/meghana-profile.png', import.meta.url).href;
                } catch {
                  meghanaProfileImage = null;
                }
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: meghanaProfileImage
                        ? `url(${meghanaProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: meghanaProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: meghanaProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/sunketameghana" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/meghana_sunketa?igsh=ZmJydXpienR4emNz&utm_source=qr" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://github.com/sunketa02" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Special styling for sixth card (Satish Kumar)
              if (index === 5) {
                // Import Satish profile image
                let satishProfileImage: string | null;
                try {
                  satishProfileImage = new URL('../assets/satish-profile.png', import.meta.url).href;
                } catch {
                  satishProfileImage = null;
                }
                return (
                  <div 
                    key={index}
                    className={`relative border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 overflow-hidden ${
                      hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                    }`}
                    style={{
                      backgroundImage: satishProfileImage
                        ? `url(${satishProfileImage}), linear-gradient(135deg, #3ab284 0%, #00895e 100%)`
                        : `linear-gradient(135deg, #3ab284 0%, #00895e 100%)`,
                      backgroundSize: satishProfileImage ? 'cover, cover' : 'cover',
                      backgroundPosition: satishProfileImage ? 'center, center' : 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    data-testid={`team-member-${index}`}
                  >
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 rounded-2xl"></div>
                    {/* Content container with relative positioning */}
                    <div className="relative z-10">
                      <h3 className="font-outfit font-semibold text-xl text-white drop-shadow-lg mb-2 mt-32" data-testid={`member-name-${index}`}>
                        {head.name}
                      </h3>
                      <p className="font-poppins text-white drop-shadow-lg text-sm font-medium mb-4" data-testid={`member-role-${index}`}>
                        {head.role}
                      </p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="https://www.linkedin.com/in/satish-kumar-9868b3379?trk=contact-info" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a 
                          href="https://www.instagram.com/anonyymouss._.__?igsh=ZGV0eXRkZTBsbmhn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                        >
                          <FaInstagram className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              // Default styling for other cards
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-b from-deep-green to-near-black border ${head.borderColor} rounded-2xl p-6 text-center ${head.hoverEffect} hover:scale-105 transition-all duration-300 ${
                    hoveredCard !== null && hoveredCard !== index ? 'blur-sm' : 'blur-none'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
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
                  <p className={`font-poppins ${head.textColor} text-sm font-medium mb-4`} data-testid={`member-role-${index}`}>
                    {head.role}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-glow-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-glow-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-glow-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
