import React from 'react'

const MemeCreate = () => {

  const handleClick = (e) => {
    console.log ('hey')
    console.log(e.currentTarget.topText.value.trim())
  }

  return (
    <div>
      <h1>Also me, to createMeme</h1>
      <form onSubmit={e => {e.preventDefault(); handleClick(e)}}>
        <div>
          <label htmlFor="topText">Top Text</label>
          <input id="topText" type="text"></input>
        </div>
        <div>
          <label htmlFor="lowerText">Lower Text</label>
          <input id="lowerText" type="text"></input>
        </div>
        <div>
          <label htmlFor="imageUrl">Url</label>
          <input id="imageUrl" type="text"></input>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default MemeCreate
