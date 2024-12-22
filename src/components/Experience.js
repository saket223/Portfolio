import React from "react";
import Footer from "./Footer";

import { motion } from "framer-motion";

const TimelineEvent = ({ content, position }) => {
  return (
    <motion.div
      className={`timeline-event ${position}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
    >
      <div className="event-content border-4 border-white p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white">{content.title}</h1>
          {content.date && (
            <span className="text-gray-100">{content.date}</span>
          )}
        </div>
        <h2 className="text-gray-400">{content.company}</h2>
        <ul className="text-white list-disc ml-6">
          {content.description.split("\n").map((line, index) => (
            <li
              key={index}
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </ul>
        <a href={content.url} className="link text-white mt-4 block">
          Visit Website
        </a>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const exp1 = {
    title: "Full Stack Developer",
    company: "Phlo Systems Ltd., London, United Kingdom (Remote)",
    description: `Developed the <a href="https://finphlo-staging-frontend-app.azurewebsites.net/" target="_blank" rel="noopener noreferrer">FinPhlo</a> platform, an advanced loan management system tailored for trade finance professionals, offering end-to-end loan lifecycle support.
          Developed an end-to-end document processing system using OpenAI Assistants and Weaviate APIs, achieving 80% extraction accuracy.
          Engineered a customer service chatbot that aggregated knowledge from vector stores and OpenAI, increasing issue resolution efficiency by 60%.
          Authored over 50 APIs, debugged platform bugs, and addressed database issues to ensure smooth performance and data integrity. Managed front-end modifications, improving user interface and experience across the platform.`,
    url: "https://www.phlo.io/",
    date: "July 2023 - Present",
  };

  const exp2 = {
    title: "SDET Intern",
    company: "Freecharge Payment Technologies Pvt. Ltd., Gurgaon",
    description:
      "Automated testing of KYC and Wallet microservices using Rest-assured and TestNG, enhancing test coverage and security testing. Tested over 10-12 APIs.\n" +
      "Designed frontend and backend API testing workflows using Java and Selenium, improving API response reliability.",
    url: "https://careers.freecharge.in/",
    date: "February 2023 - July 2023",
  };

  const exp3 = {
    title: "Data Science Intern",
    company: "Affine Analytics Pvt. Ltd., Bangalore",
    description:
      "Built a Garbage segregation model using VGG16 and K-Means Clustering, processing a dataset of 12,000 images.\n" +
      "Performed digit classification on the MNIST dataset using various techniques such as CNN, ANN, Random Forest, and Decision Tree algorithms. The MNIST database of handwritten digits has a training set of 60,000 examples and a test set of 10,000 examples.",
    url: "https://affine.ai/",
    date: "July 2022 - October 2022",
  };

  return (
    <div className="main-container">
      <h1 className="text-6xl font-bold text-white text-center">
        Work Experience.
      </h1>
      <div className="timeline-wrapper mt-5 mb-10">
        <div className="timeline">
          <div className="timeline-line"></div>
          <TimelineEvent content={exp1} position="left" />
          <TimelineEvent content={exp2} position="right" />
          <TimelineEvent content={exp3} position="left" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
