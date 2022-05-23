import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api";
import createRequestSaga from "../lib/createRequestSaga";

const GET_BESTSELLER = "allbooks/GET_BESTSELLER";
const GET_BESTSELLER_SUCCESS = "allbooks/GET_BESTSELLER_SUCCESS";

const GET_ITEMNEWALL = "allbooks/GET_ITEMNEWALL";
const GET_ITEMNEWALL_SUCCESS = "allbooks/GET_ITEMNEWALL_SUCCESS";

const GET_ITEMNEWSPECIAL = "allbooks/GET_ITEMNEWSPECIAL";
const GET_ITEMNEWSPECIAL_SUCCESS = "allbooks/GET_ITEMNEWSPECIAL_SUCCESS";

export const getBestSeller = createAction(GET_BESTSELLER);
export const getItemNewAll = createAction(GET_ITEMNEWALL);
export const getItemNewSpecial = createAction(GET_ITEMNEWSPECIAL);

const getBestSellerSaga = createRequestSaga(GET_BESTSELLER, api.getBestseller);
const getItemNewAllSaga = createRequestSaga(GET_ITEMNEWALL, api.getItemNewAll);
const getItemNewSpecialSaga = createRequestSaga(
  GET_ITEMNEWSPECIAL,
  api.getItemNewSpecial
);

export function* allbooksSaga() {
  yield takeLatest(GET_BESTSELLER, getBestSellerSaga);
  yield takeLatest(GET_ITEMNEWALL, getItemNewAllSaga);
  yield takeLatest(GET_ITEMNEWSPECIAL, getItemNewSpecialSaga);
}

const initialState = {
  Bestseller: null,
  ItemNewAll: null,
  ItemNewSpecial: null,
};

const allbooks = handleActions(
  {
    [GET_BESTSELLER_SUCCESS]: (state, action) => ({
      ...state,
      Bestseller: action.payload,
    }),
    [GET_ITEMNEWALL_SUCCESS]: (state, action) => ({
      ...state,
      ItemNewAll: action.payload,
    }),
    [GET_ITEMNEWSPECIAL_SUCCESS]: (state, action) => ({
      ...state,
      ItemNewSpecial: action.payload,
    }),
  },
  initialState
);

export default allbooks;
