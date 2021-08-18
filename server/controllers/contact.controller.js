const { mailer } = require("../services/mailer");
const ADMIN = process.env.ADMIN_MAIL;

exports.contact = async (request, response) => {
    if (request.method == "GET") return response.status(200).json({ status: `${request.method} request recieved, can only process POST request for this endpoint` });
    // Mock Users
    const { name, email, subject, message } = request.body;
    const sendToAdmin = await mailer({to: ADMIN, subject: `${subject} from ${name}`, text: message});
    const respondToUser = await mailer({to: email, subject: `Re: ${subject}`, text: `Thank you for contacting me concerning ${subject}. I will get in touch ASAP!`});
    console.warn(sendToAdmin);
    console.warn(respondToUser);
    return response.status(200).json({ status: "Message received! Thank you for contacting me" });
};