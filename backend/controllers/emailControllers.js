const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_MAIL, // generated ethereal user
    pass: process.env.SMTP_PASSWORD, // generated ethereal password
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, phoneNo, subject, message } = req.body;

  const finalMessage = ` <p>Name-${name}</p><br/><p>Phone No-${phoneNo}</p><br/> <p>Message-${message}</p> `;

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_FORWARD_MAIL,
    subject: subject,
    html: finalMessage,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).send("Error");
    } else {
      res.status(200).send("Email Sent Successfully");
    }
  });
});

module.exports = { sendEmail };
