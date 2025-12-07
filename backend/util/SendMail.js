const nodemailer = require("nodemailer");

const Mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

async function SendEmail(req, res) {
    try {
        const { username, useremail, usermessage, usercompany } = req.body;

        await Mailer.sendMail({
            from: '"Trinity Tech Group" <trinitytechofc@gmail.com>',
            to: useremail,
            subject: "Obrigado pelo contato!",
            html: `
                <h3>Obrigado ${username}!</h3>
                <p>Recebemos sua mensagem:</p>
                <p>${usermessage}</p>
                <p color:red >Entraremos em contato em até 1 dia útil</p>
            `
        });

        res.redirect("/")
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        res.status(500).send("Erro ao enviar email.");
    }
}
//
module.exports = SendEmail;
