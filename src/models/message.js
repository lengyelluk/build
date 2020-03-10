import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Message = mongoose.model('Message', messageSchema);

export default Message;