import axios from "axios";
import store from "../../store/index"
import { USER_REGISTER, USER_LOG_IN } from "../../utils/constants"

export const registerUser = (user) => ({
  type: USER_REGISTER,
  user
});

export const loginUser = (user) => ({
  type: USER_LOG_IN,
  user
});

export function registerUserAction(data) {
  return (dispatch) => {
    axios.post("http://167.99.162.146/users/register", data)
      .then(res => {
        dispatch(registerUser(res.data));
      })
  };
};

export function loginUserAction(data) {
  return (dispatch) => {
    return axios.post("http://167.99.162.146/users/login", data)
      .then(res => {
        dispatch(loginUser(res.data));
      })
  };
};