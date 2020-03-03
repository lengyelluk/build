import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { Register } from '../../components'
import { authenticationService } from '../../_services/authentication.service'

class RegisterScreen extends PureComponent {
    state = {
        email: '',
        password: '',
    }

    handleChange = input => event => {
		this.setState({ [input]: event.target.value });
    }
    
    handleSubmit = async e => {
        e.preventDefault()
       	const user = {
               username: this.state.email,
               email: this.state.email,
               password: this.state.password,
           };
        await authenticationService.registerUser(user);
    }

    render() {
        return (
            <>
                <h1>Register</h1>
                <Register 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </>
        )
    }
}

export default RegisterScreen
export const REGISTER = "/register"
