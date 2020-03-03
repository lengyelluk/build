import {Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import React from 'react'

export default function NavTop(props) {
	return (
		<div>
			<Button as={Link} to="/" onClick={props.closeNav}>Home</Button>
			<Button as={Link} to="/willBeAdded" onClick={props.closeNav}>Login</Button>
			<Button as={Link} to="/register" onClick={props.closeNav}>Register</Button>
			<Button as={Link} to="/addCard" onClick={props.closeNav}>Rent out a room</Button>
			<Button as={Link} to="/cards" onClick={props.closeNav}>Find a room</Button>
			<Button as={Link} to="/about" onClick={props.closeNav}>About us</Button>
			<Button as={Link} to="/willBeAdded" onClick={props.closeNav}>Contact</Button>
		</div>
	)
}