import {createStore, combineReducers} from 'redux';
import formReducer from './reducers/formReducer';

export default createStore(combineReducers({
  formReducer
}));
