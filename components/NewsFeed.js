import React, { Component } from 'react';
import { RefreshControl } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, List, Text, Icon } from 'native-base';
import FeedItem from '../FeedItem'
import Loader from './Loader'

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

export default class ListExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      refreshing: true,
    }
  }

  componentWillMount() {
    this.grabArticles()

  }

  grabArticles() {
    var url = this.props.url;
    var component = this
    var req = new Request(url);

    fetch(req)
        .then(function(response) {
          console.log(response);
            return response.json()
        })
        .then((json) => {
          json.articles.sort(date_sort_asc)
          console.log(json.articles);
          component.setState({ data: json.articles, refreshing: false })
        })
  }

  refresh() {
    this.grabArticles()
  }



  // TODO: Make this "one" container instead of 2
  render() {
    if (this.state.refreshing) {
      return (
        <Loader />
      );
    } else {
      return (
        <Content  refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.refresh()}/> }>
          <List
            dataArray={this.state.data}
            renderRow={(article) =>
              <FeedItem key={article.url}
                navigation={this.props.navigation}
                author={article.author}
                url={article.url}
                title={article.title}
                publishedAt={article.publishedAt}
                image={article.urlToImage.replace(/^http:\/\//i, 'https://')} />
            }
          />
        </Content>

      );
    }
  }
}
