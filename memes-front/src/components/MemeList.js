import React from 'react'

import Meme from './Meme'

const MemeList = ({ memes }) => (
  <ul>
    {memes.map(meme => (
      <Meme key={meme.id} {...meme} />
    ))}
  </ul>
)

export default MemeList
