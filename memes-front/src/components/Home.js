import React from 'react'

import MemeList from './MemeList'

const Home = ({memes}) => (
  <div>
    <h1>Look at me</h1>
    <MemeList memes={memes} />
  </div>
)

export default Home
