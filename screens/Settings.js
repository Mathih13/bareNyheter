import React, { Component } from 'react';
import { Container, Content, Header, Text } from 'native-base';


export default class Settings extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
  }

  // TODO: Make this "one" container instead of 2
  render() {
      return (
        <Container>
          <Header style={{ height: '3.5%', backgroundColor: 'transparent', borderBottomWidth: 0}} />
          <Content>
            <Text>WEW LAD</Text>
          </Content>
        </Container>
      );
  }
}
