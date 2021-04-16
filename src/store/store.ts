import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/root.reducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = applyMiddleware();

export const store = createStore(rootReducer, {}, composeEnhancers(enhancers));
