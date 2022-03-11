// var nodemailer  = require("nodemailer")

// var transporter = nodemailer.createTransport({
//   serive: "gmail",
//   auth: {
//       user: "turxan.tomayev2003@gmail.com",
//       pass: "05.05.2003."
//   }
// })

// var mailOptions  = {
//   from: "turxan.tomayev2003@gmail.com",
//   to: "turxan.tomayev8@gmail.com",
//   subject: "gonder",
//   text: "ilk mail gonderme"
// }
// transporter.sendMail(mailOptions,function(error,info){
// if (error) {
//     console.log(error);
// }
// else{
//   console.log("mail gonderildi"+ info.response);
// }
// })


var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'turxan.tomayev2003@gmail.com',
    pass: '05.05.2003.'
  }
});

var mailOptions = {
  from: 'turxan.tomayev2003@gmail.com',
  to: 'ilkin944@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});