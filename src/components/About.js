import { motion } from "framer-motion";
import Footer from "./Footer";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* About Section */}
      <div
        id="about"
        className="flex flex-col items-center justify-center text-center text-white flex-grow px-4 sm:px-8 overflow-hidden"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Hi, I'm <span className="text-blue-600">Saket</span>
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:text-xl mt-4"
        >
          I create modern web applications with a focus on performance and user
          experience.
        </motion.p>
      </div>

      {/* Background text */}
      <div className="background-text">About Me</div>

      <Footer />
    </div>
  );
};

export default About;
