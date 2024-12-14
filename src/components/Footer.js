import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="p-8 bg-black text-white text-center">
    <div className="flex justify-center space-x-6">
      <a href="https://github.com" className="text-xl">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" className="text-xl">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" className="text-xl">
        <FaTwitter />
      </a>
    </div>
  </footer>
);

export default Footer; // Ensure this is the default export
