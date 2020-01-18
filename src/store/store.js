import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { countries_reducer } from './reducers';

const rootReducer = combineReducers({
  countries_list: countries_reducer
});

export const countries = ({ countries_list }) => countries_list.countries;

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
