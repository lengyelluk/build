import { combineReducers } from 'redux'

import authentication from './authentication'
import config from './config'

export default combineReducers({
    authentication: authentication,
    config: config
})
