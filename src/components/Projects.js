import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "A cool project.", link: "#" },
    { title: "Project 2", description: "Another cool project.", link: "#" },
  ];

  return (
    <div>
      <div
        id="projects"
        className="project-container p-8 bg-gray-900 text-white"
      >
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border p-4 bg-gray-800"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-400">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="background-text">Projects</div>
      <Footer />
    </div>
  );
};

export default Projects;
