import { IS_PROCESSING } from '../actions/types';

const initialState = {
  isProcessing: false
}

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PROCESSING:
      return {
        ...state, isProcessing: action.data
      };
    default:
      return state;
  }
}

export default applicationReducer;