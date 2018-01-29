import React from 'react';
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);
const createStoreWithMiddleware = applyMiddleware()(createStore);

export default createStoreWithMiddleware(reducers, middleware);