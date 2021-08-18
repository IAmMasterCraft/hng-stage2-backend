const ADMIN = process.env.ADMIN_MAIL;
const ADMIN_RECEIVER = process.env.ADMIN_INCOMING_MAIL;
const KEY = process.env.ADMIN_KEY;
const HOST = process.env.ADMIN_HOST;
const PORT = process.env.ADMIN_PORT;
const SERVICE = process.env.NODEMAILER_SERVICE;
const nodemailer = require("nodemailer");

exports.mailer = async (
    mailObj = {
        to: ADMIN_RECEIVER,
        subject: "TEST",
        text: "Just something to test!",
    }) => {
    const result = {
        success: null,
        error: null,
    };
    try {
        const transporter = nodemailer.createTransport({
          host: HOST,
          port: PORT,
          auth: {
            user: ADMIN,
            pass: KEY
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
        });

        const { to, subject, text } = mailObj;

        const mailOptions = {
            from: ADMIN,
            to,
            subject,
            text,
        };

        const send = await transporter.sendMail(mailOptions);
        console.warn(send);
        result.success = send;
        result.error = null;
    } catch (error) {
        result.success = null;
        result.error = error.message;
    }
    console.log(result);
    return result;
}

// sendMail();

// exports.mailer = async (to, subject, text) => {
//     const data = {
//         from: `MasterCraft <${ADMIN}>`,
//         to,
//         subject,
//         text,
//     };
//     const sendMessage = await mailgun.messages().send(data);
//     return sendMessage;
// }