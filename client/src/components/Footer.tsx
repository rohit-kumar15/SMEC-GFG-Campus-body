import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-deep-green/30 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-outfit font-semibold text-2xl text-glow mb-4" data-testid="footer-title">Stay Connected</h3>
          <div className="flex justify-center space-x-8">
            <a 
              href="https://linkedin.com" 
              className="text-[#0077B5] text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
              data-testid="social-linkedin"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://instagram.com" 
              className="text-[#E1306C] text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
              data-testid="social-instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://gmail.com" 
              className="text-[#D14836] text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
              data-testid="social-email"
            >
              <MdEmail />
            </a>
            <a 
              href="https://youtube.com" 
              className="text-[#FF0000] text-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
              data-testid="social-youtube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="border-t border-deep-green/30 pt-8">
          <p className="font-poppins text-glow-sm" data-testid="footer-credits">
            Built with <span className="text-ocean-green">💚</span> by SMEC GeeksforGeeks Campus Body
          </p>
          <p className="font-poppins text-sm text-glow-sm/70 mt-2" data-testid="footer-subtitle">
            Empowering the next generation of developers and programmers
          </p>
        </div>
      </div>
    </footer>
  );
}
