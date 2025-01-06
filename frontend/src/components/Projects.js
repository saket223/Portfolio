import { motion } from "framer-motion";
import React from "react";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Cars360",
      description:
        "A user-friendly, responsive car rental platform using HTML, CSS, JavaScript, Next.js, TypeScript, and React, enabling users to browse and book cars for rent seamlessly.",
      link: "https://cars360-cyan.vercel.app/",
      github: "https://github.com/saket223/Cars360",
      image: "/Cars360.png",
      technologies: [
        "React",
        "Node.js",
        "Next.js",
        "Typescript",
        "Tailwind CSS",
      ],
    },
    {
      title: "News Classifier",
      description:
        "A web application that classifies news as Real or Fake with 75% accuracy using a Decision Tree Classifier trained on 2000+ labeled news articles.",
      link: "https://fake-news-detector-1-zsuz.onrender.com/",
      github: "https://github.com/saket223/Fake_News_Detector",
      image: "/FakeNews.png",
      technologies: ["HTML", "CSS", "Javascript", "Node.js", "Python"],
    },
  ];

  return (
    <div>
      <div className="project-container text-white max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8 mb-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-lg relative min-h-[400px] w-full max-w-[400px] mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-md mb-4"
              />

              <h3 className="title-padding text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs tech-bg text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-gray-400 hover:text-white"
                >
                  <FaGithub />
                </a>
              </div>
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
