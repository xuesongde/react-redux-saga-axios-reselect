export default {
  getSpinStatus: state => {
    console.log(state);
    return state.globalReducer.globalState.isSpining;
  }
};
