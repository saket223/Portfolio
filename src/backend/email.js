const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.error("Error verifying transporter:", error);
  } else {
    console.log("Transporter is ready to send emails!");
  }
});
console.log("EMAIL_USER:", process.env.REACT_APP_API_BASE_URL);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

const sendEmail = (name, email, message) => {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: `Message: ${message}\nFrom: ${name}\nEmail: ${email}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject("Error sending email: " + error);
      } else {
        resolve("Email sent: " + info.response);
      }
    });
  });
};

module.exports = sendEmail;
