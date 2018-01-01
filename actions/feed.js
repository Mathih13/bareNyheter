import * as types from './types'
import Api from '../utils/api'

export function refreshNewsFeed() {
  return (dispatch, getState) => {
    Api.get('https://newsapi.org/v2/top-headlines?sources=bbc-news,nrk,aftenposten&apiKey=73d118d7f70e41c6bd7e92899ca062b2')
      .then((json) => dispatch(setNewsFeed({ newsFeed: json.articles }))
    )
  }
}

export function setNewsFeed({ newsFeed }) {
  return {
    type: types.SET_CURATED_NEWSFEED,
    newsFeed
  }
}