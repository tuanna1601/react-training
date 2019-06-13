import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { reducer as userReducer } from './reducer';

const reducer = combineReducers({
  user: userReducer
});

export default createStore(reducer, applyMiddleware(thunk));
