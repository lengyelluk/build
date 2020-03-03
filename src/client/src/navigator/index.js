import { connect } from 'react-redux'
import { selectIsAuthenticated } from '../reducer/authentication'

import React, { PureComponent } from 'react'

import AuthenticatedRouter from './Authenticated'
import UnauthenticatedRouter from './Unauthenticated'


class Navigator extends PureComponent {
    render() {
        if (this.props.isAuthenticated) {
            return (
                <AuthenticatedRouter/>
            )
        }
        return (
            <UnauthenticatedRouter/>
        )
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: selectIsAuthenticated(state)
    }
}
export default connect(mapStateToProps)(Navigator)