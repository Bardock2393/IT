var nodemailer = require('nodemailer');    
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fk9156593311@gmail.com',
    pass: '11115555234'
  }
});

var mailOptions = {
  from: 'fk9156593311@gmail.com',
  to: 'ffkhan@mitaoe.ac.in',
  subject: 'Sending Email using Node.js',
  text: `Hi Smartherd, thank you for your nice Node.js tutorials.I will donate 50$ for this course. Please send me payment options.`
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
