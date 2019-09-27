const nodemailer = require('nodemailer');
const emails = require('./emails');
const email_template = require('./email_template');

var transporter = nodemailer.createTransport({
  host: 'mail.adm.tools',
  port: 465,
  secure: true,
  auth: {user: "info@bodyway.com.ua", pass: "3ADlF0iZ1f7s"}
});

module.exports.sendMessage = function (name, email, message) {
  var template = email_template(name, email, message);

  var mailOptions = {
    from: email,
    to: emails.join(', '),
    subject: `from user`,
    text: message,
    html: template
  };

  return new Promise(function (resolve, reject) {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return reject(error);
      }

      return resolve(info);
    });
  });
};