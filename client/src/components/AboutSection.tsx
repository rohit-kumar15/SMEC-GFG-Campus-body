export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-deep-green to-near-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-outfit font-bold text-4xl md:text-5xl text-glow text-center mb-12" data-testid="about-title">
          About GeeksforGeeks
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-2">
              <span className="font-outfit font-semibold text-xl text-ocean-green">About SMEC</span>
            </div>
            <p className="font-poppins text-base text-glow-sm leading-relaxed mb-6" data-testid="about-description-1">
              St. Martin’s Engineering College (SMEC), situated in Dhulapally, Hyderabad, is an autonomous institution under JNTU Hyderabad that stands as a hub for innovation, excellence, and holistic development. With NAAC A+ and NBA accreditations, AICTE approval, and a lush 17-acre campus equipped with state-of-the-art labs, research facilities, and vibrant student spaces, SMEC fosters both academic and personal growth. The college is home to 100+ industry collaborations, an impressive record of research and patents, and a strong placement track with top recruiters like Microsoft, Amazon, and Accenture. More than just an engineering institution, SMEC is a thriving community where ideas turn into impact and students are shaped into future-ready professionals.
            </p>
            <div className="mb-2">
              <span className="font-outfit font-semibold text-xl text-ocean-green">About GFG</span>
            </div>
            <p className="font-poppins text-base text-glow-sm leading-relaxed mb-6" data-testid="about-description-2">
              GeeksforGeeks (GFG) is one of the largest and most trusted platforms for computer science and programming resources. Founded with the vision to make quality technical knowledge accessible to everyone, GFG offers a vast collection of tutorials, coding problems, interview preparation materials, and development resources for learners of all levels. From data structures and algorithms to web development, machine learning, and competitive programming, GeeksforGeeks provides in-depth explanations, examples, and practice problems to help learners build a strong foundation in computer science.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-ocean-green/20 border border-ocean-green text-glow-white px-4 py-2 rounded-full text-sm" data-testid="tag-programming">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 3a1 1 0 000 2v4a1 1 0 000 2H6a1 1 0 000 2v4a1 1 0 000 2h2a1 1 0 000 2v2a1 1 0 102 0v-2a1 1 0 000-2h2a1 1 0 000-2v-4a1 1 0 000-2h-2a1 1 0 000-2V5a1 1 0 000-2h2a1 1 0 000-2V1a1 1 0 10-2 0v2z"/>
                </svg>
                Programming
              </span>
              <span className="bg-gfg-green/20 border border-gfg-green text-glow-white px-4 py-2 rounded-full text-sm" data-testid="tag-competitive">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Competitive Coding
              </span>
              <span className="bg-ocean-green/20 border border-ocean-green text-glow-white px-4 py-2 rounded-full text-sm" data-testid="tag-interview">
                <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Interview Prep
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-ocean-green to-gfg-green rounded-2xl h-32 flex items-center justify-center shadow-glow" data-testid="about-visual-1">
                <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.999 2.999 0 0017 6.5c-.83 0-1.54.5-1.85 1.22l-2.78 8.33c-.24.72-.06 1.51.44 2.05L15 20v2h2zm-6.5-2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM12 13c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM7.5 13c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
                </svg>
              </div>
              <div className="bg-gradient-to-br from-gfg-green to-deep-green rounded-2xl h-32 flex items-center justify-center shadow-glow" data-testid="about-visual-2">
                <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <div className="bg-gradient-to-br from-deep-green to-ocean-green rounded-2xl h-32 flex items-center justify-center shadow-glow" data-testid="about-visual-3">
                <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div className="bg-gradient-to-br from-ocean-green to-gfg-green rounded-2xl h-32 flex items-center justify-center shadow-glow" data-testid="about-visual-4">
                <svg className="w-12 h-12 text-glow-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
