require("dotenv").config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const sendEmail = require("./email");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await sendEmail(name, email, message);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
