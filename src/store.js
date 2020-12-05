import {createStore, combineReducers} from 'redux';
import formReducer from './reducers/formReducer';
import applicationReducer from './reducers/applicationReducer';

export default createStore(combineReducers({
  formReducer, applicationReducer
}));
