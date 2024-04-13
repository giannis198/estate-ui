import db from "../lib/db.js";

export const addMessage = async (req, res) => {
  const tokenUserId = req.userId;
  const chatId = req.params.chatId;
  const text = req.body.text;
  try {
    const chat = await db.chat.findUnique({
      where: {
        id: chatId,
        userIDs: {
          hasSome: [tokenUserId],
        },
      },
    });

    if (!chat) {
      return res.status(404).json({ message: "Chat not found!" });
    }

    const message = await db.message.create({
      data: {
        text,
        chatId,
        userId: tokenUserId,
      },
    });

    await db.chat.update({
      where: {
        id: chatId,
      },
      data: {
        seenBy: [tokenUserId],
        lastMessage: text,
      },
    });

    res.status(200).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save Message", error });
  }
};
