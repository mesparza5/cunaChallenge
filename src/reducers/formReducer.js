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
} from '../actions/types';

const initialState = {
  autoPrice: 0,
  autoMake: '',
  autoModel: '',
  userIncome: 0,
  userCreditScore: 0,
  autoPriceErr: '',
  autoMakeErr: '',
  autoModelErr: '',
  userIncomeErr: '',
  userCreditScoreErr: '',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AUTO_PRICE: 
      return {
        ...state, autoPrice: action.data
      };
    case ADD_AUTO_MAKE: 
      return {
        ...state, autoMake: action.data
      };
    case ADD_AUTO_MODEL: 
      return {
        ...state, autoModel: action.data
      };
    case ADD_USER_INCOME: 
      return {
        ...state, userIncome: action.data
      };
    case ADD_USER_CREDIT_SCORE:
      return {
        ...state, userCreditScore: action.data
      };
    case ADD_AUTO_PRICE_ERR: 
      return {
        ...state, autoPriceErr: action.data
      };
    case ADD_AUTO_MAKE_ERR: 
      return {
        ...state, autoMakeErr: action.data
      };
    case ADD_AUTO_MODEL_ERR: 
      return {
        ...state, autoModelErr: action.data
      };
    case ADD_USER_INCOME_ERR: 
      return {
        ...state, userIncomeErr: action.data
      };
    case ADD_USER_CREDIT_SCORE_ERR: 
      return {
        ...state, userCreditScoreErr: action.data
      };
    default:
      return state;
  }
}

export default formReducer;

