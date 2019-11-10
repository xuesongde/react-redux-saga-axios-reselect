import { GET_GLOBAL_SPIN_STATE } from "../actions/index";

const initialState = {
  globalState: { isSpining: false }
};

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    //set spining state
    case GET_GLOBAL_SPIN_STATE:
      return {
        ...state,
        globalState: { ...payload }
      };
    default:
      return state;
  }
};

export default globalReducer;
