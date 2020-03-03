import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
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