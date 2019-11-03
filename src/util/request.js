import axios from "axios";
import _ from "lodash";

const header = {};
const instance = axios.create({
  baseURL: "/mock/599fe56cbd4203191f535ed9/",
  timeout: 5000,
  headers: header,
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  }
});
export const request = async function({ type, url, data, option = {} }) {
  let axiosOption = {
    method: type,
    url: url,
    data: data
  };
  if (!_.isEmpty(option)) {
    axiosOption = _.merge(axiosOption, option);
  }
  try {
    const { data } = await instance(axiosOption);
    return data;
  } catch (error) {
    console.error(error);
  }
};
