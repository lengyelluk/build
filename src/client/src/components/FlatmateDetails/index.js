import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'
import './style.css'

class FlatmateDetails extends PureComponent {
	
	saveAndContinue = e => {
		e.preventDefault()
		this.props.nextStep()
	}

	back = e => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		const { values } = this.props
		return (
			<Form>
				<h1 className='ui centered'>Enter Flatmate Details</h1>
				<Form.Group>
					<Form.Field label='Number of men living in the flat' 
						control='select'
						onChange={this.props.handleChange('flatmatesMale')}
						defaultValue={values.flatmatesMale}
						>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
					</Form.Field>
					<Form.Field label='Number of women living in the flat' 
						control='select'
						onChange={this.props.handleChange('flatmatesFemale')}
						defaultValue={values.flatmatesFemale}
						>
						<option value='0'>0</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
						<option value='6'>6</option>
						<option value='7'>7</option>
					</Form.Field>
				</Form.Group>
				<Button onClick={this.back}>Back</Button>
				<Button onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default FlatmateDetails