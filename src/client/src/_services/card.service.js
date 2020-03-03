import { handleResponse } from '../_helpers/handle-response';

export const cardService = {
	getAll,
	getById,
	saveCard,
	upvoteCard,
};

//working in async mode
async function getAll() {
	const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};
		//const response = await fetch('http://ec2-18-195-246-219.eu-central-1.compute.amazonaws.com/cards', requestOptions);
		const response = await fetch('https://my-flat-app.herokuapp.com/cards', requestOptions);
		const data = await response.json();
		console.log('data: ', data);
		return data;
} 

async function getById(cardId) {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};
		//const response = await fetch(`http://ec2-18-195-246-219.eu-central-1.compute.amazonaws.com/cards/${cardId}`, requestOptions);
		const response = await fetch(`https://my-flat-app.herokuapp.com/cards/${cardId}`, requestOptions);
		const data = await response.json();
		console.log('data: ', data);
		return data;
}

async function upvoteCard(cardId) {
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	};
	console.log('here');
	const response = await fetch(`https://my-flat-app.herokuapp.com/cards/${cardId}/upvote`, requestOptions);
	const data = await response.json();
	console.log('new upvotes: ', data);
	return data;
}

async function saveCard(card) {
        console.log(card);
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify(card),
			headers: { 'Content-Type': 'application/json' }
		};

		//const response = await fetch('http://ec2-18-195-246-219.eu-central-1.compute.amazonaws.com/cards', requestOptions);
		const response = await fetch('https://my-flat-app.herokuapp.com/cards', requestOptions);
		const data = await response.json();
		return data;
	}
