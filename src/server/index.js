const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // allow requests from frontend

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your.email@gmail.com', // replace with your email
      pass: 'your-app-password'     // use an app-specific password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'aronurbano111@gmail.com', // where you want to receive the form message
      subject: `New Contact: ${name}`,
      text: message,
    });

    res.status(200).send('Message sent successfully!');
  } catch (error) {
    res.status(500).send('Failed to send message.');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
