import { IS_PROCESSING, FORM_STATUS } from '../actions/types';

const initialState = {
  isProcessing: false,
  formStatus: 'FORM',
}

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_PROCESSING:
      return {
        ...state, isProcessing: action.data
      };
    case FORM_STATUS:
      return {
        ...state, formStatus: action.data
      };
    default:
      return state;
  }
}

export default applicationReducer;