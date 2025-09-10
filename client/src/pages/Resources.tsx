import ResourceCard from "../components/ResourceCard";

// Resource data can be moved to a separate file for easier management if needed
const resources = [
  {
    icon: null,
    title: "DSA 160",
    description: "",
    linkText: "Explore Now",
    bgColor: "bg-ocean-green/20",
    borderColor: "border-gfg-green/30",
    textColor: "text-ocean-green",
    hoverEffect: "hover:shadow-glow",
    url: "https://www.geeksforgeeks.org/courses/gfg-160-series",
    image: "DSA-160.svg"
  },
  {
    icon: null,
    title: "DSA 360",
    description: "",
    linkText: "Explore Now",
    bgColor: "bg-ocean-green/20",
    borderColor: "border-gfg-green/30",
    textColor: "text-ocean-green",
    hoverEffect: "hover:shadow-glow",
    url: "https://www.geeksforgeeks.org/courses/dsa-skill-up",
    image: "DSA-360.svg"
  },
  {
    icon: null,
    title: "System Design",
    description: "",
    linkText: "Explore Now",
    bgColor: "bg-ocean-green/20",
    borderColor: "border-gfg-green/30",
    textColor: "text-ocean-green",
    hoverEffect: "hover:shadow-glow",
    url: "https://www.geeksforgeeks.org/courses/system-design-skill-up",
    image: "systemDesign.svg"
  },
  {
    icon: null,
    title: "Aptitude & Reasoning",
    description: "",
    linkText: "Explore Now",
    bgColor: "bg-ocean-green/20",
    borderColor: "border-gfg-green/30",
    textColor: "text-ocean-green",
    hoverEffect: "hover:shadow-glow",
    url: "https://www.geeksforgeeks.org/courses/aptitude-and-reasoning-skill-up",
    image: "Aptitude.svg"
  }
];

export default function Resources() {

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
          {/* <p className="font-bold text-center text-white text-4xl mb-16 ">Adding Soon!</p> */}
          
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-52 gap-y-20 justify-center mx-auto w-full">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.title + index}
                {...resource}
                onClick={() => {
                  if (resource.url) {
                    window.open(resource.url, "_blank");
                  } else {
                    handleResourceClick(resource.title);
                  }
                }}
              />
            ))}
          </div>


          {/* 
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
          */}
        </div>
      </section>
    </div>
  );
}
