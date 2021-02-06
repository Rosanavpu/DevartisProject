import { USER_REGISTER, USER_LOG_IN} from "../../utils/constants"

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.user
      }
    case USER_LOG_IN:
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
};