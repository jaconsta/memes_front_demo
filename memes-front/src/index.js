import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import appReducer from './reducers/'
import Root from './components/Root'

const target = document.getElementById('root')

let store = createStore(appReducer)

render(
  <Root store={store} />,
  target
)
