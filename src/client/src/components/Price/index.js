import { Icon } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Price(props) {
	return (
		<>
			<h3 className="heading">Price</h3>
			<p><Icon fitted name='euro' size='big' />{props.price} {props.currency}/month</p>
		</>
	)
}