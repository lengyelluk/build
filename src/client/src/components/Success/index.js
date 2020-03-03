import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'

import { cardService } from '../../_services/card.service'

class Success extends PureComponent {
	constructor(props) {
		super(props)
		this.returnToHome = this.returnToHome.bind(this)
	}

	async componentDidMount() {
		const { values } = this.props;
		const priceObject = {price: {value: values.price, currency: 'EUR'}};
		const finalObject = {...values, ...priceObject};
		const data = await cardService.saveCard(finalObject);
	}

	returnToHome() {
		this.props.history.push('/')
	}

	render() {
		return (
			<div>
				<h1 className="ui centered">Room to rent successfully saved</h1>
				<button><Link to="/">Go Back Home</Link></button>
			</div>
		)
	}
}
export default Success