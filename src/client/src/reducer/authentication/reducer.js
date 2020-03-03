import storage from 'localforage'
import { persistReducer } from 'redux-persist'

const initialState = {
    accessToken: null,
    isAuthenticated: true
}

export default persistReducer({
    blacklist: [],
    key: 'authentication',
    storage: storage,
    version: 1
}, function(state = initialState, { payload, type }) {
    return state
})