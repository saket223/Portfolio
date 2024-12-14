import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="hero"
    className="h-screen bg-black text-white flex items-center justify-center text-center"
  >
    <motion.h1
      className="text-5xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hi, I'm Saket
    </motion.h1>
    <motion.p
      className="text-xl mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      I create modern web applications with a focus on performance and user
      experience.
    </motion.p>
  </section>
);

export default Hero;
