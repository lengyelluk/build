import React from 'react'
import { Icon } from 'semantic-ui-react'
import './style.css'


export default function Availability(props) {
	return (
		<>	<h3 className="heading">Availability</h3>
			<p><Icon fitted name='calendar alternate outline' size='big' />Available from {props.availability} with minimal stay {props.stay} months</p>
		</>
	)
}