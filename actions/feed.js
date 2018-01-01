import * as types from './types'

export function refreshNewsFeed() {
  return{
    type: types.FETCH_CURATED_NEWSFEED,
  }
}
