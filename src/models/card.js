import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
	title: {
		type: String
	},
	district: {
		type: String
	}, 
	street: {
		type: String
	}, price: {
		value: {type: Number},
		currency: {type: String}
	}, 
	availabilityDate: {
		type: String
	}, 
	minStay: {
		type: String
	},
	flatmatesMale: {
		type: Number
	}, 
	flatmatesFemale: {
		type: Number
	}, 
	prefFlatmatesMale: {
		type: Boolean
	}, 
	prefFlatmatesFemale: {
		type: Boolean
	},
	prefFlatmatesCouple: {
		type: Boolean
	}, 
	petAllowed: {
		type: Boolean
	}, 
	smokingAllowed: {
		type: Boolean
	},
	upvotes: {
		type: Number,
		default: 0
	}
});

const Card = mongoose.model('Card', cardSchema);

export default Card;