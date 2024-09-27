import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../assets/6reen-logo-white.png"

const Footer = () => {
  return (
    <footer className="bg-[#50D0BF] text-white py-12 px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src={logo} alt="6reen Logo" className="w-24 h-24 mb-2" />
          <p className="text-center md:text-left">
            G-10, Syopz Mall, 1, Jalan Taylors,
            <br />
            47500 Subang Jaya, Selangor
          </p>
          <p className="mt-2">Email us:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://x.com/6reenOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.instagram.com/6reen.official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/6reen/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6 text-white hover:text-gray-300" />
            </a>
            <a href="mailto:official.6reen@outlook.com">
              <FaEnvelope className="w-6 h-6 text-white hover:text-gray-300" />
              
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>
            © 2024 6reen Overtourism Management Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
