// Redux utility functions
import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

import * as reducers from './reducers';

const finalReducers = combineReducers(reducers)

const finalCreateStore = compose(
    // Enables your middleware:
    // applyMiddleware(thunk),
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const store = finalCreateStore(finalReducers);

export default store;
