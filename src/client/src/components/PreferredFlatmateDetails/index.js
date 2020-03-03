import { Form, Button, Checkbox } from 'semantic-ui-react'
import React, { PureComponent } from 'react'

class PreferredFlatmateDetails extends PureComponent {
	
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
				<h1 className='ui centered'>Preffered Flatmate Details</h1>
				<Form.Group inline>
					<label>Who are you OK to live with?</label>
					<Form.Field  
						label='Male'
						control='input'
						type='checkbox'
						onChange={this.props.handleChange('prefFlatmatesMale')}
						checked={values.prefFlatmatesMale}
					 />
					 <Form.Field  
						label='Female'
						control='input'
						type='checkbox'
						onChange={this.props.handleChange('prefFlatmatesFemale')}
						checked={values.prefFlatmatesFemale}
					 />
					 <Form.Field  
						label='Couple'
						control='input'
						type='checkbox'
						onChange={this.props.handleChange('prefFlatmatesCouple')}
						checked={values.prefFlatmatesCouple}
					 />
				</Form.Group>
				<Form.Group inline>
					<label>What about pets and smokers?</label>
					 <Form.Field  
						label='Pet Allowed'
						control='input'
						type='checkbox'
						onChange={this.props.handleChange('petAllowed')}
						checked={values.petAllowed}
					 />
					 <Form.Field  
						label='Smoking Allowed'
						control='input'
						type='checkbox'
						onChange={this.props.handleChange('smokingAllowed')}
						checked={values.smokingAllowed}
					 />
				</Form.Group>
				<Button onClick={this.back}>Back</Button>
				<Button onClick={this.saveAndContinue}>Save and Continue</Button>
			</Form>
		)
	}
}
export default PreferredFlatmateDetails