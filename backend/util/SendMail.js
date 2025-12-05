const nodemailer = require("nodemailer");

function SendMail(){

    const Transporter = nodemailer.createTransport({
        host:"gmail",
        secure: false,
        auth:{
            user:"trinityttechofc@gmail.com",
            pass:""
        }
    })




}