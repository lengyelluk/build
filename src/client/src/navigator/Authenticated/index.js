import React, { PureComponent } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AboutScreen, AddFlatScreen, FlatDetailScreen, FlatListScreen, HomeScreen, RegisterScreen } from '../../screen'
import { MenuLayout } from '../../layout'

import { ABOUT } from '../../screen/About'
import { ADD_FLAT } from '../../screen/AddFlat'
import { FLAT_DETAIL } from '../../screen/FlatDetail'
import { FLAT_LIST } from '../../screen/FlatList'
import { HOME } from '../../screen/Home'
import { REGISTER } from '../../screen/Register'

class AuthenticatedRouter extends PureComponent {
    render() {
        return (
            <Router>
                <MenuLayout>
                    <Switch>
                        <Route exact path={ABOUT} component={AboutScreen} />
                        <Route exact path={REGISTER} component={RegisterScreen} />
                        <Route exact path={ADD_FLAT} component={AddFlatScreen} />
                        <Route exact path={FLAT_LIST} component={FlatListScreen} />
                        <Route exact path={HOME} component={HomeScreen} />
                        <Route path={FLAT_DETAIL} component={FlatDetailScreen}/>
                    </Switch>
                </MenuLayout>
            </Router>
        )
    }
}
export default AuthenticatedRouter