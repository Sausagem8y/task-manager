const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.send({
  to: "rogerseals797@gmail.com",
  from: "rogerseals797@gmail.com",
  subject: "sent from inside node.js",
  text: "just a test",
});
