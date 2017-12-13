import React from 'react'
import { Route, Link } from 'react-router-dom'

import Home from '../home'
import CreateMeme from '../createMeme'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/add">Add new</Link>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/add" component={CreateMeme} />
    </main>
  </div>
)

export default App
