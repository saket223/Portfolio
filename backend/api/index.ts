import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  // Extract parameters from the request body
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Create a transporter to send the email via Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Add your email here
      pass: process.env.EMAIL_PASS, // Add your email password here
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Send to the configured email
    subject: `New Message from ${name}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: `Email sent: ${info.response}` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error sending email: ${error.message}` });
  }
}
