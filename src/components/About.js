import { motion } from "framer-motion";
import Footer from "./Footer";

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="main-container flex flex-col overflow-hidden text-white">
      <div
        id="about"
        className="flex flex-col items-start text-white flex-grow px-6 sm:px-4 py-8 md:py-20 overflow-hidden max-w-4xl mx-auto"
      >
        <motion.h1
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-blue-600">Saket</span>
        </motion.h1>
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className="text-sm sm:text-base mt-6 max-w-3xl"
        >
          A passionate web developer who loves building user-friendly and
          efficient digital solutions. Whether it's creating clean, responsive
          designs or solving complex technical problems, I enjoy turning ideas
          into reality through code.
        </motion.p>

        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
          className="text-sm sm:text-base mt-4 max-w-3xl"
        >
          My journey includes diverse{" "}
          <a href="/experience" className="hyperlink">
            experience
          </a>{" "}
          that has helped me grow both technically and creatively. When I'm not
          working on projects, I like exploring new tech trends, reading
          interesting articles, or relaxing with some good music. Feel free to
          check out my{" "}
          <a href="#projects" className="hyperlink">
            projects
          </a>
          , and{" "}
          <a href="#contact" className="hyperlink">
            contact me
          </a>{" "}
          — I'm always excited to connect and collaborate!
        </motion.p>
      </div>

      <div className="background-text">About Me</div>

      <Footer />
    </div>
  );
};

export default About;
