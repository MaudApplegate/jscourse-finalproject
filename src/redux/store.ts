import { applyMiddleware, combineReducers, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import initialState from './initialState';
import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'


export default createStore(
  combineReducers({ ...rootReducer }),
  initialState,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);
