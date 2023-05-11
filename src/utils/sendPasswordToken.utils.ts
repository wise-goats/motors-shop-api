import { createTransport } from "nodemailer";
import { AppError } from "../errors/AppError";
import Mailgen from "mailgen";
import "dotenv/config";

export interface ISendTokenRequest {
  to: string;
  subject: string;
  text: string;
}
class SendPasswordTokenService {
  async sendToken({ to, subject, text }: ISendTokenRequest) {
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter
      .sendMail({ from: "from@example.com", to, subject, html: text })
      .then(() => {
        console.log("Email enviado com sucesso");
      })
      .catch((err) => {
        console.log(err);

        throw new AppError(
          "Erro ao enviar o email, tente novamente mais tarde",
          500
        );
      });
  }
  resetPasswordTemplate(
    userEmail: string,
    userName: string,
    resetToken: string,
    protocol: string,
    host: string
  ) {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Motors Shop",
        link: `${protocol}://${host}`,
      },
    });

    const email = {
      body: {
        name: userName,
        intro:
          "You have received this email because a password reset request for your account was received.",
        action: {
          instructions: "Click the button below to reset your password:",
          button: {
            color: "#DC4D2F",
            text: "Reset your password",
            // link: `${protocol}://${host}/resetPassword/${resetToken}`,
            link: `https://motors-shop-webpage-thaygobrd.vercel.app/resetPassword/${resetToken}`,
            // deve vir o link do front
          },
        },
        outro:
          "If you did not request a password reset, no further action is required on your part.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      subject: "Reset Password",
      text: emailBody,
    };

    return emailTemplate;
  }
}

const sendTokenService = new SendPasswordTokenService();

export { sendTokenService };
