const API_KEY = process.env.MAILGUN_API_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const ADMIN = process.env.ADMIN_MAIL;
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

exports.mailer = async (to, subject, text) => {
    const data = {
        from: `MasterCraft <${ADMIN}>`,
        to,
        subject,
        text,
    };
    const sendMessage = await mailgun.messages().send(data);
    return sendMessage;
}