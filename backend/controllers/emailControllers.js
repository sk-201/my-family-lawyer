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
  const { name, email, subject, message } = req.body;
  console.log(email, subject, message);
  const finalMessage = ` <p>Name-${name}</p><br/><p>Email-${email}</p><br/> <p>Message-${message}</p> `;

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_FORWARD_MAIL,
    subject: subject,
    html: finalMessage,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
