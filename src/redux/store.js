import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { mainReducer } from "./reducers";

export default createStore(mainReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);