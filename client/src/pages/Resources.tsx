import ResourceCard from "../components/ResourceCard";

export default function Resources() {
  const resources = [
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "DSA Course",
      description: "Comprehensive Data Structures and Algorithms course with interactive coding exercises, video tutorials, and practice problems.",
      linkText: "Explore Course",
      bgColor: "bg-ocean-green/20",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
        </svg>
      ),
      title: "CP Roadmap",
      description: "Step-by-step competitive programming roadmap from beginner to advanced level with curated problem sets and strategies.",
      linkText: "View Roadmap",
      bgColor: "bg-gfg-green/20",
      borderColor: "border-gfg-green/30",
      textColor: "text-gfg-green",
      hoverEffect: "hover:shadow-glow-green"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
      title: "Web Dev Guide",
      description: "Complete web development guide covering frontend, backend, databases, and modern frameworks with hands-on projects.",
      linkText: "Start Learning",
      bgColor: "bg-ocean-green/20",
      borderColor: "border-ocean-green/30",
      textColor: "text-ocean-green",
      hoverEffect: "hover:shadow-glow"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Interview Prep",
      description: "Comprehensive interview preparation materials including coding questions, system design, and behavioral interview tips.",
      linkText: "Prepare Now",
      bgColor: "bg-gfg-green/20",
      borderColor: "border-gfg-green/30",
      textColor: "text-gfg-green",
      hoverEffect: "hover:shadow-glow-green"
    }
  ];

  const additionalResources = [
    { icon: "fab fa-github", text: "GitHub Projects", color: "ocean-green" },
    { icon: "fas fa-book", text: "Documentation", color: "gfg-green" },
    { icon: "fas fa-video", text: "Video Tutorials", color: "ocean-green" },
    { icon: "fas fa-users", text: "Study Groups", color: "gfg-green" }
  ];

  const handleResourceClick = (title: string) => {
    console.log(`Accessing ${title}`);
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-gfg-green via-deep-green to-near-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-outfit font-bold text-4xl md:text-6xl text-glow text-center mb-8" data-testid="resources-title">
            Free Resources
          </h1>
          <p className="font-poppins text-xl text-glow-sm text-center max-w-3xl mx-auto mb-16" data-testid="resources-description">
            Access curated learning materials, roadmaps, and guides to accelerate your programming journey and career preparation.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <ResourceCard
                key={index}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
                linkText={resource.linkText}
                bgColor={resource.bgColor}
                borderColor={resource.borderColor}
                textColor={resource.textColor}
                hoverEffect={resource.hoverEffect}
                onClick={() => handleResourceClick(resource.title)}
              />
            ))}
          </div>
          
          {/* Additional Resources Section */}
          <div className="mt-16 text-center">
            <h3 className="font-outfit font-semibold text-2xl text-glow mb-8" data-testid="additional-resources-title">
              More Learning Resources
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalResources.map((resource, index) => (
                <span 
                  key={index}
                  className={`bg-${resource.color}/20 border border-${resource.color} text-glow-white px-6 py-3 rounded-full hover:shadow-glow hover:scale-105 transition-all duration-300 cursor-pointer`}
                  data-testid={`additional-resource-${index}`}
                >
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {resource.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
