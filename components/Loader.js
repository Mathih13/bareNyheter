import React, { Component } from 'react';
import { Content, Spinner } from 'native-base';

export default class Loader extends Component {

  render() {
      return (
        <Content padder>
          <Spinner color='rgba(0, 0, 0, 0.85)'/>
        </Content>
      );
  }
}
