import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/api/index`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, email, message }),
      }
    );
    if (response.ok) {
      alert("Message sent!");
    } else {
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      <motion.h2
        className="text-3xl font-bold ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="mt-4 ml-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Get in touch with me at{" "}
        <a href="mailto:arora.saket20@gmail.com" className="text-blue-400">
          arora.saket20@gmail.com
        </a>
        .
      </motion.p>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea-field"
          />
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
      <div className="background-text">Contact Me</div>
      <Footer />
    </div>
  );
};

export default Contact;
