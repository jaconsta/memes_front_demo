import React from 'react'

const meme = ({ url }) => (
  <li>
    <img src={url} style={{ maxWidth: 250 }} alt={'hello'} />
  </li>
)

export default meme
