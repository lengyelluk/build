import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  cardId: {
  	type: String,
  },
   //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   user: {
   	type: String,
   }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;