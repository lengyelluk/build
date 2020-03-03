import React, { PureComponent } from 'react'
import { Form, Button } from 'semantic-ui-react'

class Register extends PureComponent {

    render() {
        const values = '';
        return (
            <Form>
				<h1>Registration</h1>
				<Form.Group>	
					<Form.Field>
						<label>Email</label>
						<Form.Input
							placeholder='john.smith@email.com'
							onChange={this.props.handleChange('email')}
							/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<Form.Input
                            type='password'
							placeholder='Super secret password'
							onChange={this.props.handleChange('password')}
							/>
					</Form.Field>
				</Form.Group>
				<Button onClick={this.props.handleSubmit}>Submit</Button>
			</Form>
        )
    }
}

export default Register;