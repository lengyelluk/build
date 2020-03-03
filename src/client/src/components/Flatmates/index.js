import { Icon } from 'semantic-ui-react'
import React from 'react'

import './style.css'

export default function Flatmates(props) {
	return (
		<>	<h3 className="heading">Flatmates</h3>
			<p><Icon fitted name='male' size='big' />{props.male} males
				<Icon fitted name='female' size='big' />{props.female} females</p>
		</>
	)
}