import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: formReducer, //the key needs to be exactly 'form' for redux-form
    streams: streamReducer
})