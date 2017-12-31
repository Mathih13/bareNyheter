import React, { Component } from 'react';
import { Root } from "native-base";
import { Tabs } from './router'

export default class App extends Component {


  render() {
      return (
        <Root>
          <Tabs />
        </Root>
      );
  }
}
