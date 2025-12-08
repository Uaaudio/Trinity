const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function SendEmail(req, res) {
    try {
        const { username, useremail, usermessage } = req.body;

        const data = await resend.emails.send({
            from: "Trinity Tech Group <onboarding@resend.dev>",
            to: useremail,
            subject: "Obrigado pelo contato!",
            html: `
                <h3>Obrigado ${username}!</h3>
                <p>Recebemos sua mensagem:</p>
                <p>${usermessage}</p>
                <p style="color:red;">Entraremos em contato em até 1 dia útil.</p>
            `
        });

        console.log("EMAIL ENVIADO:", data);
        return res.redirect("/");
    } catch (error) {
        console.error("Erro ao enviar email:", error);
        return res.status(500).send("Erro ao enviar email.");
    }
}

module.exports = SendEmail;
