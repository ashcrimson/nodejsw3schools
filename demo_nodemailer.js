var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'felipepinoredes@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions = {
    from: 'felipepinoredes@gmail.com',
    to: 'gundamdraws@gmail.com',
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