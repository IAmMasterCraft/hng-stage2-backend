exports.contact = (request, response) => {
    if (request.method == "GET") return response.status(200).json({ status: `${request.method} request recieved, can only process POST request for this endpoint` });
    // Mock Users
    const users = [{ name: "Alexandre" }, { name: "Pooya" }, { name: "Sébastien" }];
    return response.status(200).json({ status: "Send mail!" });
};