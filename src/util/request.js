import axios from "axios";
import _ from "lodash";
import store from "../redux/store/index";
import * as Actions from "../redux/actions";

const header = {};
const instance = axios.create({
  baseURL: "/mock/599fe56cbd4203191f535ed9/",
  timeout: 5000,
  headers: header,
  validateStatus: function(status) {
    return status >= 200 && status <= 500; // default
  }
});
export const request = async function({ type, url, data, option = {} }) {
  store.dispatch({
    type: Actions.GET_GLOBAL_SPIN_STATE,
    payload: { isSpining: true }
  });
  let axiosOption = {
    method: type,
    url: url,
    data: data
  };
  if (!_.isEmpty(option)) {
    axiosOption = _.merge(axiosOption, option);
  }
  try {
    const response = await instance(axiosOption);
    store.dispatch({
      type: Actions.GET_GLOBAL_SPIN_STATE,
      payload: { isSpining: false }
    });
    const { status, statusText, data } = response;
    if (status !== 200) {
      return Promise.reject({ status, statusText });
    }
    console.log(response);
    return Promise.resolve(data);
  } catch (error) {
    store.dispatch({
      type: Actions.GET_GLOBAL_SPIN_STATE,
      payload: { isSpining: false }
    });
    console.error(error);
  }
};
