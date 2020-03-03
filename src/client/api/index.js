import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';

/*let mongodb;
MongoClient.connect('mongodb://localhost:27017/my-flats', (err, db) => {
	assert.equal(null, err);

	mongodb = db;
});

const router = express.Router();

router.get('/cards/card/:id', (req, res) => {
	mongodb.collection('cards')
	.findOne({ id: req.params.id })
	.then(card => res.send(card))
	.catch(error => {
		console.error(error);
		res.status(404).send('Something went bad');
	});
});
*/