import express from "express";
import nodeMailer from "nodemailer";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "nadineexppsicologia@gmail.com",
        pass: "kvnl cemp uvhb xpzq "
    }
});

app.post("/send-email", async (req, res) => {
    const { to, subject, text } = req.body;

    const mailOptions = {
        from: "nadineexppsicologia@gmail.com",
        to,
        subject,
        text
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("E-mail enviado com sucesso!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao enviar o e-mail.");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});