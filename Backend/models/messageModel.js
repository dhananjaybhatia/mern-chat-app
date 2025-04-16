import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "chatModel",
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("messageMode", messageSchema);

export default messageModel;
