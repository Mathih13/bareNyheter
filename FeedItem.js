import React, { Component } from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, Card, CardItem, Body, Text } from 'native-base';
import TimeStamp from './utils/timestamp'

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timestamp: TimeStamp(new Date(this.props.publishedAt))
    }
  }

  onReadMore = (url) => {
    this.props.navigation.navigate('WebSurfer', { url })
  }

  render() {
    return (
      <View style={{
        overflow: 'hidden',
        height: 175,
        marginBottom: 20,
        backgroundColor: '#333',
      }}>
      <TouchableOpacity onPress={(() => this.onReadMore(this.props.url))}>
        <ImageBackground
          source={{uri: this.props.image}}
          style={{width: '100%', height: '100%', opacity: 0.35 }} />
        <Text style={{
          fontFamily: 'Avenir-Light',
          position: 'absolute',
          padding: 10,
          bottom: 0,
          fontSize: 20,
          backgroundColor: 'transparent',
          color: '#fff',
        }}
        >
          {this.props.title}
        </Text>
        {this.props.publishedAt &&
          <Text style={{
            fontFamily: 'Avenir-Light',
            position: 'absolute',
            padding: 20,
            fontSize: 10,
            top: 0,
            backgroundColor: 'transparent',
            color: '#fff',
          }}
          >
            {this.state.timestamp.difference.suggestion}
          </Text>
        }
      </TouchableOpacity>
      </View>
    );
  }
}
