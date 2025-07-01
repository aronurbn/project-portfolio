// server/index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Setup transporter once
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,  // your Gmail address
    pass: process.env.EMAIL_PASS,  // your Gmail app password
  },
});

// Verify transporter at startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP transporter error:', error);
  } else {
    console.log('SMTP Server ready');
  }
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill all fields.' });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender (your email)
      replyTo: email,               // reply to the sender’s email
      to: process.env.EMAIL_USER,   // receiver (your email)
      subject: `New contact from ${name}`,
      text: `You received a new message from ${name} <${email}>:\n\n${message}`,
    });

    res.status(200).json({ message: 'Message sent!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
