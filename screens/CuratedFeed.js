import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header } from 'native-base';
import NewsFeed from '../components/NewsFeed'


export default class ListExample extends Component {
  constructor(props) {
    super(props)
  }


  // TODO: Newsfeed: change from url dependency to data prop dependency
  render() {
      return (
        <Container>
            <NewsFeed navigation={this.props.navigation} url={'https://newsapi.org/v2/top-headlines?sources=bbc-news,nrk,aftenposten&apiKey=73d118d7f70e41c6bd7e92899ca062b2'} />
        </Container>
      );
  }
}
