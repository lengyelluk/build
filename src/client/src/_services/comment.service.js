export const commentService = {
	getAllCommentsByCardId,
	saveComment,
};


async function getAllCommentsByCardId(cardId) {
		const requestOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		};
		//const response = await fetch(`http://ec2-18-195-246-219.eu-central-1.compute.amazonaws.com/cards/${cardId}`, requestOptions);
		const response = await fetch(`https://my-flat-app.herokuapp.com/comments/${cardId}`, requestOptions);
		const data = await response.json();
		console.log('data from get all: ', data);
		return data;
}

async function saveComment(comment) {
		const requestOptions = {
			method: 'POST',
			body: JSON.stringify(comment),
			headers: { 'Content-Type': 'application/json' }
		};

		//const response = await fetch('http://ec2-18-195-246-219.eu-central-1.compute.amazonaws.com/cards', requestOptions);
		const response = await fetch(`https://my-flat-app.herokuapp.com/comments/${comment.cardId}`, requestOptions);
		console.log('response: ', response);
		const data = await response.json();
		return data;
	}
