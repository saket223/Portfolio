import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import cors from "cors";

const corsMiddleware = cors({
  origin: "https://saket-portfolio-v1.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  return new Promise((resolve, reject) => {
    corsMiddleware(req, res, async () => {

      if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST requests are allowed" });
      }

      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Message from ${name}`,
        text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
      };

      try {
        // Send the email
        const info = await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: `Email sent: ${info.response}` });
      } catch (error) {
        return res.status(500).json({ message: `Error sending email: ${error.message}` });
      }
    });
  });
}