import React, { PureComponent } from 'react'
import { Form, Button, List } from 'semantic-ui-react'

class Confirmation extends PureComponent {

	
	saveAndContinue = async e => {
        e.preventDefault()
       	this.props.nextStep()
    }

    back  = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }


    render() {
    	const {values: { district, street, price, availabilityDate, minStay,
			flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale,
			prefFlatmatesCouple, petAllowed, smokingAllowed }} = this.props
			console.log('props: ', this.props);
			return(
				<div>
					<h1>Check all the details</h1>
					<p>Confirm if all details below are correct</p>
					<List>
						<List.Item>
							<List.Content>District: {district}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Street: {street}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Male Flatmates: {flatmatesMale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Female Flatmates: {flatmatesFemale}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Male Flatmates: {prefFlatmatesMale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Female Flatmates: {prefFlatmatesFemale ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Preferred Couple Flatmates: {prefFlatmatesCouple ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Pet Allowed: {petAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Smoking Allowed: {smokingAllowed ? 'Yes' : 'No'}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Price: {price}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>Minimal stay: {minStay}</List.Content>
						</List.Item>
						<List.Item>
							<List.Content>AvailabilityDate: {availabilityDate}</List.Content>
						</List.Item>
					</List>

					<Button onClick={this.back}>Back</Button>
					<Button onClick={this.saveAndContinue}>Confirm</Button>
				</div>
			)
    }
}
export default Confirmation