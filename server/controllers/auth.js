const mysql=require('mysql2')
const nodemailer=require('nodemailer')
const sendgridTransport=require('nodemailer-sendgrid-transport')
require('dotenv').config()

let Email;
let otp;

const db = mysql.createPool({
    host: "localhost",
    user: "root", 
    password: `${process.env.PASSWORD}`,
    database:"zocket-db"
   })

   const transporter = nodemailer.createTransport(sendgridTransport({
       auth:{
           api_key: `${process.env.SENDGRID_API_KEY}`
       }
   }))

exports.EarlyAccess = (req, res) => {
    const email = req.body.email
    Email = email
    otp = Math.floor((Math.random()*100000)+1)
    transporter.sendMail({
        from: 'PINTU1713122@akgec.ac.in',
        to: email,
        subject: "Zocket Verification Code",
        text: `Your verification code is ${otp}`
    }).then(response => {
        res.status(200).json({response})
    }).catch(err => {
        res.status(400).json({err})
    })
}

exports.VerifyCode = (req, res) => {
    const code = req.body.code
    if(parseInt(code) === otp) {
        db.query("INSERT INTO zocket_users (email) values (?)", [Email], (err, result) => {
            if(err){
             res.status(400).json({err})
            } 
            else {
              res.status(200).json({message:"Successfully registered"})
             }
         })
      }
     else {
        res.status(400).json({message:"Invalid code !"})
    }
}