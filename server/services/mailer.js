const ADMIN = process.env.ADMIN_MAIL;
const ADMIN_RECEIVER = process.env.ADMIN_INCOMING_MAIL;
const KEY = process.env.ADMIN_KEY;
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
            service: SERVICE,
            auth: {
                user: ADMIN,
                pass: KEY,
            },
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
    return result;
}