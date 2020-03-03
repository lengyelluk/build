import { Router } from 'express';

const router = Router();

router.get('/:cardId', async (req, res) => {
	const comments = await req.context.models.Comment.find({
		cardId: req.params.cardId
    }
	); 
  	return res.send(comments);
});

router.post('/:cardId', async (req, res) => {
  const comment = await req.context.models.Comment.create({
    text: req.body.text,
    cardId: req.params.cardId,
    //user: req.context.me.id,
    user: req.body.user,
  });
  console.log(comment);
  return res.send(comment);
});

router.delete('/:commentId', async (req, res) => {
  const comment = await req.context.models.Comment.findById(
    req.params.commentId,
  );
  let result = null;
  if (comment) {
    result = await comment.remove();
  }
  return res.send(result);
});


export default router;