import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="bg-gray-800 text-white p-8">
    <motion.h2
      className="text-3xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Contact
    </motion.h2>
    <motion.p
      className="mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      Feel free to reach out to me at{" "}
      <a href="mailto:youremail@example.com" className="text-blue-400">
        youremail@example.com
      </a>
      .
    </motion.p>
  </section>
);

export default Contact;
