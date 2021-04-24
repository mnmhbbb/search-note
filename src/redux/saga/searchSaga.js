import axios from 'axios';
import { all, takeLatest, call, put, fork } from 'redux-saga/effects';
import { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET } from '../../config';
import { searchAction } from '../ducks/search';

function searchBookAPI(data) {
  return axios
    .get(`/v1/search/book.json?query=${data}&display=100`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Naver-Client-Id': REACT_APP_CLIENT_ID,
        'X-Naver-Client-Secret': REACT_APP_CLIENT_SECRET,
      },
    })
    .then((res) => {
      console.log(res);
      return res.data.items;
    })
    .catch((error) => console.dir(error));
}

function* searchBook(action) {
  console.log(action); //{type: "search/SEARCH_REQUEST", payload: keyword}
  const { SEARCH_SUCCESS, SEARCH_FAILURE } = searchAction;
  try {
    const result = yield call(searchBookAPI, action.payload);
    console.log(result);
    yield put(SEARCH_SUCCESS(result));
  } catch (err) {
    console.dir(err);
    yield put(SEARCH_FAILURE(err));
  }
}

function* watchsearchBook() {
  const { SEARCH_REQUEST } = searchAction;
  yield takeLatest(SEARCH_REQUEST, searchBook);
}

export default function* searchSaga() {
  yield all([fork(watchsearchBook)]);
}
