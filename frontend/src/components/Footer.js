import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="p-8 text-white text-center">
    <div className="flex justify-center space-x-6">
      <a href="https://github.com/saket223" className="text-2xl">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/saket-arora-20748b217/"
        className="text-2xl"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:arora.saket20@gmail.com" className="text-2xl">
        <FaEnvelope />
      </a>
    </div>
  </footer>
);

export default Footer;
