// This is where we "initialize" with redux stuff

import React, { Component } from 'react'
import { Tabs } from './router'
import { Root } from "native-base";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from './actions'

class AppContainer extends Component {
  render() {
    return(
      <Root>
        <Tabs {...this.props}/>
      </Root>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch)
}

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer)
