import React, { Component } from 'react';
import { Container, Header, Text, Item, Input, Icon, Button, } from 'native-base';
import NewsFeed from '../components/NewsFeed'

export default class Explore extends Component {
  constructor() {
    super()
    this.state = {
      searchVal : null
    }
  }

  componentWillMount() {
  }

  search() {
    if (this.state.searchVal != null) {
      console.log(this.state.searchVal);
    } else {
      //TODO: Redux error stating
      // "Please insert search" or something
    }
  }

  render() {
      return (
        <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Søkeord..." onChangeText={(value) => {
                if (value == '') {
                  this.setState({ searchVal: null })
                } else {
                  this.setState({ searchVal: value })
                }
              }}/>
            </Item>
            <Button transparent onPress={() => this.search()}>
              <Text>Search</Text>
            </Button>
          </Header>

        </Container>
      );
  }
}
