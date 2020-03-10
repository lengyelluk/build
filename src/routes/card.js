import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const cards = await req.context.models.Card.find();
  	return res.send(cards);
});

router.get('/:cardId', async (req, res) => {
	const card = await req.context.models.Card.findById(
		req.params.cardId,
	); 
  	return res.send(card);
});

router.post('/', async (req, res) => {
  const card = await req.context.models.Card.create({
    title: req.body.title,
    district: req.body.district,
    street: req.body.street,
    price: req.body.price,
    availabilityDate: req.body.availabilityDate,
    minStay: req.body.minStay,
    flatmatesMale: req.body.flatmatesMale,
    flatmatesFemale: req.body.flatmatesFemale,
    prefFlatmatesMale: req.body.prefFlatmatesMale,
    prefFlatmatesFemale: req.body.prefFlatmatesFemale,
    prefFlatmatesCouple: req.body.prefFlatmatesCouple,
    petAllowed: req.body.petAllowed,
    smokingAllowed: req.body.smokingAllowed,
    //user: req.context.me.id,
  });

  return res.send(card);
});

//delete a card
router.delete('/:cardId', async (req, res) => {
  const card = await req.context.models.Card.findById(
    req.params.cardId,
  );
  let result = null;
  if (card) {
    result = await card.remove();
  }
  return res.send(result);
});

//add upvote
router.post('/:cardId/upvote', async (req, res) => {
    const card = await req.context.models.Card.findById(
    req.params.cardId,
  );
    console.log(card);
    card.upvotes = card.upvotes + 1;
    console.log(card.upvotes);
    await card.save();

    return res.send(card);
})

router.delete('/:cardId', async (req, res) => {
  const card = await req.context.models.Card.findById(
    req.params.cardId,
  );
  let result = null;
  if (card) {
    result = await card.remove();
  }
  return res.send(result);
});


export default router;