export default function CampusBodySection() {
  const roles = [
    {
      icon: (
        <svg className="w-8 h-8 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Leadership",
      description: "Core members who guide the vision, organize events, and mentor junior members in their coding journey.",
      bgColor: "bg-ocean-green/20",
      borderColor: "border-ocean-green/30",
      hoverEffect: "hover:shadow-glow"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Mentorship",
      description: "Experienced students who provide guidance on competitive programming, internships, and career development.",
      bgColor: "bg-gfg-green/20",
      borderColor: "border-gfg-green/30",
      hoverEffect: "hover:shadow-glow-green"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0017 6.5c-.83 0-1.54.5-1.85 1.22l-2.78 8.33c-.24.72-.06 1.51.44 2.05L15 20v2h2zm-6.5-2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM12 13c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM7.5 13c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
        </svg>
      ),
      title: "Community",
      description: "Active members who participate in workshops, contests, and collaborative projects to enhance their skills.",
      bgColor: "bg-ocean-green/20",
      borderColor: "border-ocean-green/30",
      hoverEffect: "hover:shadow-glow"
    }
  ];

  return (
    <section className="bg-near-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-outfit font-bold text-4xl md:text-5xl text-glow text-center mb-12" data-testid="campus-body-title">
          Campus Body Structure
        </h2>
        <p className="font-poppins text-xl text-glow-sm text-center max-w-3xl mx-auto mb-16" data-testid="campus-body-description">
          The Campus Body of GeeksforGeeks Student Chapter is designed to ensure smooth functioning, effective collaboration, and maximum impact on the student community. Each role is structured to encourage leadership, creativity, and technical excellence.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-b from-deep-green to-near-black border ${role.borderColor} rounded-2xl p-8 ${role.hoverEffect} hover:scale-105 transition-all duration-300`}
              data-testid={`role-card-${index}`}
            >
              <div className={`${role.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto shadow-glow`}>
                {role.icon}
              </div>
              <h3 className="font-outfit font-semibold text-2xl text-glow text-center mb-4" data-testid={`role-title-${index}`}>
                {role.title}
              </h3>
              <p className="font-poppins text-glow-sm text-center leading-relaxed" data-testid={`role-description-${index}`}>
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
