import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function confingureStore(initialState) {
  const logger = createLogger({
    duration: true,
    diff: false
  });
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
  return store;
}
