import {createStore, applyMiddleware} from 'redux';
import storeReducers from './reducers';
import thunk from 'redux-thunk';
/**
 * Init Store
 * @param {Object} preloadState - it's not required
 */

export const store = createStore(storeReducers, applyMiddleware(thunk));
