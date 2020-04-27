const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');


router.post('/register', (req,res)=>{
  
    const output = `
                    <h3>New form</h3>
                    <p>Firstname: ${req.body.fname}</p>
                    <p>Surname: ${req.body.sname}</p>
                    <p>Email: ${req.body.email}</p>
                    <p>Home address: ${req.body.homeadd}</p>
                    <p>Nationality: ${req.body.nation}</p>
                    <p>Gender: ${req.body.gender}</p>
                    <p>Marital Status: ${req.body.mstatus}</p>
                    <p>Income: ${req.body.income}</p>
                    <p>Employed: ${req.body.work}</p>
                    <p>Type of card: ${req.body.card}</p>
                    <p>Card Report: ${req.body.cardrep}</p>
                    <p>Rent/own: ${req.body.rent}</p>
                    <p>Form of grant: ${req.body.grant}</p>
                   
                    `
    //sending a welcome msg to via email
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'granthomecare2020@gmail.com', // generated ethereal user
          pass: 'akinrinde24'
        }
      });
    
      // send mail with defined transport object
      let mailOptions = {
        from: '"HOMECAREGRANT" <granthomecare2020@gmail.com>', // sender address
        to: 'homecaregrant01@gmail.com', // list of receivers
        subject: "New Registration form", // Subject line
        text: "hello world", // plain text body
        html: output // html body
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.status(400).send(error)
          console.log(error);
        } else {
          res.status(200).send('done n dusted')
          console.log('Email sent');
        }
      });
      
})

module.exports = router