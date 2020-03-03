import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function NavBar(props) {
	return (
		<div id="navBar" className="overlay">
			<a className="closeBtn" onClick={props.closeNav}>&times;</a>
			<div className="overlay-content">
				<Link to="/" onClick={props.closeNav}>Home</Link>
				<Link to="/willBeAdded" onClick={props.closeNav}>Login</Link>
				<Link to="/register" onClick={props.closeNav}>Register</Link>
				<Link to="/addCard" onClick={props.closeNav}>Rent out a room</Link>
				<Link to="/cards" onClick={props.closeNav}>Find a room</Link>
				<Link to="/about" onClick={props.closeNav}>About us</Link>
				<Link to="/willBeAdded" onClick={props.closeNav}>Contact</Link>
			</div>
		</div>
	)
}