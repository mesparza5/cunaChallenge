import {
  ADD_AUTO_PRICE,
  ADD_AUTO_MAKE,
  ADD_AUTO_MODEL,
  ADD_USER_INCOME,
  ADD_USER_CREDIT_SCORE,
} from '../actions/types';

const initialState = {
  autoPrice: 0,
  autoMake: '',
  autoModel: '',
  userIncome: 0,
  userCreditScore: 0,
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
    default:
      return state;
  }
}

export default formReducer;

