const MESSAGES = require('../models/Messages')

interface IndiMsgI {
    ActualMessage: string;
    Timestamp: string;
    SendedBy: string;
    MsgId: string;
}

async function SaveMessages(msg: IndiMsgI) {
    try {
        const Newmessage = new MESSAGES({
            ActualMessage: msg.ActualMessage,
            Time: msg.Timestamp,
            Username: msg.SendedBy,
            Chatid: msg.MsgId
        });

        await Newmessage.save();
    } catch (error) {
        console.error("Error saving message:", error);
        // Handle the error appropriately (e.g., throw it or log it)
    }
}

module.exports = {
    SaveMessages,
}
