import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import PriceInput from '../PriceInput'
import { DateInput } from 'semantic-ui-calendar-react'

export default function Filters(props) {
	const updateGender = e => {
		props.updateFormState('currentGender', e.target.value)
	}

	const updateIsPetAllowed = e => {
		console.log('here')
		props.updateFormState('currentIsPetAllowed', e.target.checked)
	}

	const updateDistrict = e => {
		props.updateFormState('currentDistrict', e.target.value)
	}

	const resetFilters = () => {
		props.updateFormState({
			currentDistrict: '',
			currentGender: '',
			isPetAllowed: false,
		})
	}

	return (
		<Form>
			<Form.Group inline>
				<Form.Field label='City District'
					control='select'
					value={props.currentDistrict}
					onChange={updateDistrict}>
					<option value=''></option>
					<option value='Stare Mesto'>Stare Mesto</option>
					<option value='Ruzinov'>Ruzinov</option>
					<option value='Vrakuna'>Vrakuna</option>
					<option value='Podunajske Biskupice'>Podunajske Biskupice</option>
					<option value='Nove Mesto'>Nove Mesto</option>
					<option value='Raca'>Raca</option>
					<option value='Vajnory'>Vajnory</option>
					<option value='Karlova Ves'>Karlova Ves</option>
					<option value='Dubravka'>Dubravka</option>
					<option value='Lamac'>Lamac</option>
					<option value='Devinska Nova Ves'>Devinska Nova Ves</option>
				</Form.Field>
				<Form.Field inline>
					<label>Max num of flatmates</label>
					<Input placeholder='3' />
				</Form.Field>
				<Form.Field label='Your gender'
					control='select'>
					<option value=''></option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
					<option value='couple'>Couple</option>
				</Form.Field>
				<Form.Field inline>
					<label>Max price</label>
					<PriceInput placeholder='250 €' />
				</Form.Field>
				<Form.Field
					label='Pet Allowed'
					control='input'
					type='checkbox'
					checked={props.currentIsPetAllowed}
					onChange={updateIsPetAllowed}
				/>
				<Form.Field
					label='Smoking Allowed'
					control='input'
					type='checkbox'
				/>
				<Button
					onClick={resetFilters}
				>Reset filters
					 </Button>
			</Form.Group>
		</Form>
	)
}