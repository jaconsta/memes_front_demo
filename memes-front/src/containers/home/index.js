import React from 'react'
import { connect } from 'react-redux'

import Home from '../../components/Home'


const mapStateToProps = state => {
  return {
    memes: state.memes.items
  }
}

export default connect(
  mapStateToProps
)(Home)
