import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function CardList(props) {
	const cards = props.cards
	console.log("card list", cards)
	return (
		<div className='grid'>
			{cards && cards.map(renderCard)}
		</div>
	)
}

function renderCard(card, key) {
	console.log(card);
	return (
		<div className='container' key={key}>
			<Link to={`/cards/${card._id}`}>
				<h3>{card.title}</h3>
				<img src={require("../../assets/images/flat.jpg")} className='card-image' alt="flat" />
				<h3><span className="price"> {card.price.value} {card.price.currency}/month</span></h3>
				<p>{card.street}, {card.district}</p>
			</Link>
		</div>
	)
}