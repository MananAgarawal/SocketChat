import mongoose, { Schema, Document } from 'mongoose';

interface IMessage extends Document {
  Time: Date;
  Email: string;
  Username: string;
  Chatid: string;
}

const messagesSchema: Schema<IMessage> = new Schema({
  Time: {
    type: Date,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  Username: {
    type: String,
    required: true,
  },
  Chatid: {
    type: String,
    required: true,
  },
});

const MESSAGES = mongoose.model<IMessage>('Message', messagesSchema);

export default MESSAGES;
