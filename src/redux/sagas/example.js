/**
 * @module Sagas/getComment
 * @desc getComment
 */
import { request } from "../../util/request";
import { all, delay, put, takeLatest } from "redux-saga/effects";

import * as Actions from "../actions";

/**
 * Login
 */
export function* getComment(payload) {
  try {
    yield delay(1000);
    request({
      type: "get",
      url: "/xsd/userList",
      data: {},
      option: {
        timeout: 0
      }
    });
    const comments = ["This is one", "This is two"];
    const personInfo = {
      name: "xsd",
      gender: "male"
    };
    yield put({
      type: Actions.GET_COMMENTS_SUCCESS,
      payload: { comments, personInfo }
    });
  } catch (error) {
    /* istanbul ignore next */
    yield put({
      type: Actions.GET_COMMENTS_FAILURE,
      payload: error
    });
  }
}

export default function* root() {
  yield all([takeLatest(Actions.GET_COMMENTS_REQUEST, getComment)]);
}
