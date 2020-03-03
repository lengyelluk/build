import React, { PureComponent } from 'react'

import { 
    Confirmation, 
    FlatDetails, 
    FlatmateDetails, 
    PreferredFlatmateDetails,
    ProgressBar,
    RentDetails,
    Success
} from '../../components'

import './style.css'

class AddFlatScreen extends PureComponent {
    state = {
		step: 1,
		district: 'Stare Mesto',
		street: '',
		title: '',
		streetError: true,
		price: '',
		availabilityDate: '',
		minStay: '',
		flatmatesMale: 0,
		flatmatesFemale: 0,
		prefFlatmatesMale: false,
		prefFlatmatesFemale: false,
		prefFlatmatesCouple: false,
		smokingAllowed: false,
		petAllowed: false,
		percent: 0,
	}

	nextStep = () => {
		const { step, percent } = this.state;
		this.setState({
			step: step + 1,
			percent: percent + 25
		})
	}

	prevStep = () => {
		const { step, percent } = this.state;
		this.setState({
			step: step - 1,
			percent: percent - 25
		})
	}

	handleChange = input => event => {
		this.setState({ [input]: event.target.value });
	}

	handleChecked = input => event => {
		this.setState({ [input]: event.target.checked });
	}

	handleDate = input => (event, {name, value}) => {
		if(this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	}
    render() {
        const { step } = this.state;
        const { district, street, title, price, availabilityDate, minStay,
            flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale, percent,
            streetError, prefFlatmatesCouple, smokingAllowed, petAllowed} = this.state;
        const values = { district, street, title, price, availabilityDate, minStay,
            flatmatesMale, flatmatesFemale, prefFlatmatesMale, prefFlatmatesFemale,
            streetError, prefFlatmatesCouple, smokingAllowed, petAllowed };
        switch(step) {
            case 1:
                return (
                        <>
                            <FlatDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                            <ProgressBar percent={percent}/>
                        </>
                        )
            case 2:
                return (
                        <>
                            <FlatmateDetails
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                            <ProgressBar percent={percent}/>
                        </>
                        )
            case 3:
                return (
                    <>
                        <PreferredFlatmateDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChecked}
                            values={values}
                        />
                        <ProgressBar percent={percent}/>
                    </>
                        )
            case 4:
                return (
                    <>	
                        <RentDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleDate={this.handleDate}
                            values={values}
                        />
                        <ProgressBar percent={percent}/>
                    </>
                    )
            case 5:
                return (
                    <> 
                        <Confirmation
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                        <ProgressBar percent={percent}/>
                    </>
                    )
            case 6:
                return (
                    <Success 
                        values={values}
                    />
                )
        }
    }
}
export default AddFlatScreen
export const ADD_FLAT = "/addFlat"