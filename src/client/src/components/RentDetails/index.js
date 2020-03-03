import { DateInput } from 'semantic-ui-calendar-react'
import { Icon, Form, Button } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

class RentDetails extends PureComponent {
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
				<h1 className='ui centered'>Enter Rent Details</h1>
				<Form.Field>
						<label>Price</label>
						<Form.Input
							type='number'
							placeholder='300 EUR'
							onChange={this.props.handleChange('price')}
							defaultValue={values.price}
							/>
				</Form.Field>
				<Form.Field>
						<label>Minimal duration of rent in months</label>
						<Form.Input
							type='number'
							placeholder='5 months'
							onChange={this.props.handleChange('minStay')}
							defaultValue={values.minStay}
							/>
				</Form.Field>
				<Form.Field>
					<label>Available from</label>
					<DateInput
						clearable
						clearIcon={<Icon name='remove' color='red' />}
						name='availabilityDate'
						value={values.availabilityDate}
						onChange={this.props.handleDate('availabilityDate')}
						/>
				</Form.Field>
				<Button onClick={this.back}>Back</Button>
				<Button onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default RentDetails