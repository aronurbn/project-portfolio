const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Check transporter at start
transporter.verify((error, success) => {
  if (error) {
    console.log('Error with SMTP', error);
  } else {
    console.log('Server is ready to take messages');
  }
});

// POST endpoint to send mail
app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  const mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Message sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
