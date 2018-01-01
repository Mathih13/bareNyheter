import React, { Component } from 'react';
import { RefreshControl } from 'react-native'

import { Container, Header, Content, Footer, FooterTab, Button, List, Text, Icon } from 'native-base';
import FeedItem from '../FeedItem'
import Loader from './Loader'

import { connect } from 'react-redux'
import { refreshNewsFeed } from '../actions/feed';

import Slide from './animations/Slide'

// Now we will define our date comparison functions. These are callbacks
// that we will be providing to the array sort method below.
var date_sort_asc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // ASCENDING order. As you can see, JavaScript's native comparison operators
  // can be used to compare dates. This was news to me.
  if (date1 > date2) return 1;
  if (date1 < date2) return -1;
  return 0;
};

var date_sort_desc = function (date1, date2) {
  // This is a comparison function that will result in dates being sorted in
  // DESCENDING order.
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
};

class NewsFeed extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.refresh()
  }

  refresh() {
    this.props.dispatch(refreshNewsFeed())
  }

  // TODO: Make this "one" container instead of 2
  render() {  
    if (!this.props.newsFeedData) {
      return (
        <Loader />
      );
    } else {
      return (
        <Content  refreshControl={ <RefreshControl refreshing={!this.props.newsFeedData} onRefresh={() => this.refresh()}/> }>
          <List
            dataArray={this.props.newsFeedData}
            renderRow={(article) =>
              <Slide> 
                <FeedItem key={article.url}
                navigation={this.props.navigation}
                author={article.author}
                url={article.url}
                title={article.title}
                publishedAt={article.publishedAt}
                image={article.urlToImage.replace(/^http:\/\//i, 'https://')} />
              </Slide>
            }
          />
        </Content>

      );
    }
  }
}

function mapStateToProps(state) {
  return {
    newsFeedData: state.fetchedFeed
  }
}

export default connect(mapStateToProps)(NewsFeed)