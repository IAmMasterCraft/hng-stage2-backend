const { mailer } = require("../services/mailer");
const ADMIN = process.env.ADMIN_MAIL;

exports.contact = async (request, response) => {
    if (request.method == "GET") return response.status(200).json({ status: `${request.method} request recieved, can only process POST request for this endpoint` });
    // Mock Users
    const { name, email, subject, message } = request.body;
    const sendToAdmin = await mailer(ADMIN, `${subject} from ${name}`, message);
    const respondToUser = await mailer(email, `Re: ${subject}`, `Thank you for contacting me concerning ${subject}. I will get in touch ASAP!`);
    console.warn(sendToAdmin);
    console.warn(respondToUser);
    return response.status(200).json({ status: "Send mail!" });
};