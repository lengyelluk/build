import Navigator from './navigator'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import React from 'react'
import store, { persistor } from './store'

export default function App() {
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Navigator/>
          </PersistGate>
      </Provider>
  )
}