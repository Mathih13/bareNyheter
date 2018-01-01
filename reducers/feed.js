import createReducer from '../utils/createReducer'
import * as types from '../actions/types'

export const fetchedFeed = createReducer({}, {
    [types.SET_CURATED_NEWSFEED](state, action) {
        return action.newsFeed
    }
})
