import {
  ADD_AUTO_PRICE,
  ADD_AUTO_MAKE,
  ADD_AUTO_MODEL,
  ADD_USER_INCOME,
  ADD_USER_CREDIT_SCORE,
  ADD_AUTO_PRICE_ERR,
  ADD_AUTO_MAKE_ERR,
  ADD_AUTO_MODEL_ERR,
  ADD_USER_INCOME_ERR,
  ADD_USER_CREDIT_SCORE_ERR,
} from './types';

export const addAutoPrice = (payload) => ({
  type: ADD_AUTO_PRICE,
  data: payload,
});

export const addAutoMake = (payload) => ({
  type: ADD_AUTO_MAKE,
  data: payload,
});

export const addAutoModel = (payload) => ({
  type: ADD_AUTO_MODEL,
  data: payload,
});

export const addUserIncome = (payload) => ({
  type: ADD_USER_INCOME,
  data: payload,
});

export const addUserCreditScore = (payload) => ({
  type: ADD_USER_CREDIT_SCORE,
  data: payload,
});

export const addAutoPriceErr = (payload) => ({
  type: ADD_AUTO_PRICE_ERR,
  data: payload,
});

export const addAutoMakeErr = (payload) => ({
  type: ADD_AUTO_MAKE_ERR,
  data: payload,
});

export const addAutoModelErr = (payload) => ({
  type: ADD_AUTO_MODEL_ERR,
  data: payload,
});

export const addUserIncomeErr = (payload) => ({
  type: ADD_USER_INCOME_ERR,
  data: payload,
});

export const addUserCreditScoreErr = (payload) => ({
  type: ADD_USER_CREDIT_SCORE_ERR,
  data: payload,
});
