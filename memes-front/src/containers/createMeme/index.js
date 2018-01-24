import React from 'react'
import { connect } from 'react-redux'

import MemeCreate from '../../components/MemeCreate'
// const createMeme = () => (
//   <div>
//     <h1>Also me, to createMeme</h1>
//     <form onSubmit={e => {e.preventDefault()}}>
//       <input type="text"></input>
//       <button type="submit">Create</button>
//     </form>
//   </div>
// )

export default connect()(MemeCreate)
