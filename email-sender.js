var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: '', // email adress of the sender
    pass: ''  // password of the sender
  }
});

var mailOptions = {
  from: '', 
  to: '',
  subject: 'Sending mail with node.js',
  text: 'Node JS Checkpoint'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

module.exports=transporter;