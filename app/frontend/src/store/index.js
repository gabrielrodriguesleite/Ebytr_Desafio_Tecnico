import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { user } from './reducers/login';
import { todos } from './reducers/todo';

export const rootReducer = combineReducers({ user, todos });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
