import { Icon } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Location(props) {
	return (
		<>
			<h3 className="heading">Location</h3>
			<p><Icon fitted name='map outline' size='big' />{props.street}, {props.district}</p>
		</>
	)
}