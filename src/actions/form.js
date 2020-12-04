import {
  ADD_AUTO_PRICE,
  ADD_AUTO_MAKE,
  ADD_AUTO_MODEL,
  ADD_USER_INCOME,
  ADD_USER_CREDIT_SCORE,
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
