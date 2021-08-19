const { mailer } = require("../services/mailer");
const ADMIN = process.env.ADMIN_INCOMING_MAIL;

exports.contact = async (request, response) => {
    if (request.method == "GET") return response.status(200).json({ status: `${request.method} request recieved, can only process POST request for this endpoint` });
    // Mock Users
    const { name, email, subject, message } = request.body;
    const respondToUser = await mailer({to: email, subject: `Re: ${subject}`, text: `Thank you for contacting me concerning ${subject}. I will get in touch ASAP!`});
    const sendToAdmin = await mailer({to: ADMIN, subject: `${subject} from ${name}`, text: message});
    // console.warn(sendToAdmin);
    // console.warn(respondToUser);
    if (sendToAdmin.error || respondToUser.error) {
        return response.status(200).json({
          status: "Something went wrong",
          error: `${JSON.stringify(sendToAdmin.error)} ${JSON.stringify(
            respondToUser.error
          )}`
        });
    }
    if (sendToAdmin.error || respondToUser.error) {
      return response.status(500).json({
        status: "Something went wrong",
        error: `${JSON.stringify(sendToAdmin.error)} ${JSON.stringify(
          respondToUser.error
        )}`
      });
    }
    if (!sendToAdmin.success.response || !respondToUser.success.response) {
      return response.status(502).json({
        status: "Something went wrong",
        error: `cannot send/receive message`
      });
    }
    return response.status(200).json({ status: "Message received! Thank you for contacting me", error: null, });
};