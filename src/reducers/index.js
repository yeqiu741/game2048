import { combineReducers } from 'redux';
import restart from './restart';
import score from './score';

export default combineReducers({
  restart,
  score
});
