import { combineReducers } from 'redux';
import restart from './restart';
import score from './score';
import icon from './icon';

export default combineReducers({
  restart,
  score,
  icon
});
