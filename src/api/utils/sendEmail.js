const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "siro.deviluke2@gmail.com", // generated ethereal user
    pass: "iifuwtacrcmtsazb", // generated ethereal password
  },
});

let sendEmail = (emailTemplate) => {
  transporter.sendMail(emailTemplate, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

module.exports = { sendEmail };
