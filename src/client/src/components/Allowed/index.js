import React from 'react'
import { Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmoking, faDog } from '@fortawesome/free-solid-svg-icons'
import './style.css'


export default function Allowed(props) {
	return (
		<>
			<h3 className="heading">Allowed</h3>
			<div className='inline'>
				{props.smoking ?
					(<span><FontAwesomeIcon icon={faSmoking} size='lg' />Smoking Allowed</span>)
					:
					(<span><Icon fitted name='dont' size='big' className='no-left-padding' />Smoking not allowed</span>)}
				{props.pet ?
					(<span><FontAwesomeIcon icon={faDog} size='lg' />Pet Allowed</span>)
					:
					(<span> <Icon fitted name='dont' size='big' className='no-left-padding' />Pet not allowed</span>)}
			</div>
		</>
	)
}