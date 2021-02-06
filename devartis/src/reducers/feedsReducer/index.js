import { FETCH_FEEDS, ADD_MY_FEED, DELETE_FEED } from "../../utils/constants"

const initialState = {
  feeds: [],
  newFeed: "",
  delete: {}
};

export const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEEDS:
      return {
        ...state,
        feeds: action.feed
      }
    case ADD_MY_FEED:
      return {
        ...state,
        newFeed: action.newFeed
      }
    case DELETE_FEED:
      return {
        ...state,
      }
    default:
      return state;
  }
};