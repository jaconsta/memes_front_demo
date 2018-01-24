import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import appReducer from './reducers/'
import Root from './components/Root'

// Test
import TestStore from './test/TestStore'

const target = document.getElementById('root')

let store = createStore(appReducer)
TestStore(store)
render(
  <Root store={store} />,
  target
)
