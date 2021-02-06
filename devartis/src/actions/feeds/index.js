import axios from "axios";
import store from "../../store/index"
import { FETCH_FEEDS, ADD_MY_FEED, DELETE_FEED } from "../../utils/constants"

export const addFeed = (newFeed) => ({
  type: ADD_MY_FEED,
  newFeed
});


export const fetchFeed = (feed) => ({
  type: FETCH_FEEDS,
  feed
});


export const deleteFeed = (feed) => ({
  type: DELETE_FEED,
  feed
});

export function addMyFeed(data) {
  return (dispatch) => {
    return axios.post("http://167.99.162.146/feeds/add", { url: data.url }, {
      headers: { "Authorization": `Bearer ${data.token}` }
    })
      .then(res => {
        dispatch(addFeed(res.data));
      })
  };
};

export function fetchFeedsUser({ token }) {
  return (dispatch) => {
    axios.get("http://167.99.162.146/feeds", { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        dispatch(fetchFeed(res.data));
      })
  };
};

export function deleteFeedUser(data) {
  return (dispatch) => {
    return axios.delete(`http://167.99.162.146/feeds/${data.id}`,
      { headers: { "Authorization": `Bearer ${data.token}` } })
      .then(res => {
        console.log(res, "RESSS")
        dispatch(deleteFeed(res.data));
      })
  };
};



