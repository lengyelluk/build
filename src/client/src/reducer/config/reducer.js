import storage from 'localforage'
import { persistReducer } from 'redux-persist'

const initialState = {
    language: "EN"
}

export default persistReducer({
    blacklist: [],
    key: 'config',
    storage: storage,
    version: 1
}, function(state = initialState, { payload, type }) {
    return state
})