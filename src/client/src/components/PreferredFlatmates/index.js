import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from 'semantic-ui-react'
import React from 'react'

import './style.css'


export default function PreferredFlatmates(props) {
	console.log(props)
	const prefFlatmateMale = props.male
	const prefFlatmateFemale = props.female
	const male = prefFlatmateMale ? 'Male' : ''
	const female = prefFlatmateFemale ? 'Female' : ''
	const both = male && female


	return (
		<>
			<h3 className="heading">Preferred Flatmates</h3>
			<p>
				<Icon name='mars' size='big' />
				<Icon fitted name='venus' size='big' className='no-left-padding' />
				{both ? 'Males or females' : { male } ? 'Males only' : 'Females only'}
			</p>
		</>
	)
}