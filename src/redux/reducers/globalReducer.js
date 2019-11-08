import GET_GLOBAL_SPIN_STATE from "../actions/index";

const initialState = {
  globalState: {}
};

const globalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //set spining state
    case GET_GLOBAL_SPIN_STATE:
      const { isSpining } = payload;
      return {
        ...state,
        globalState: { ...isSpining }
      };
    default:
      return state;
  }
};

export default globalReducer;
