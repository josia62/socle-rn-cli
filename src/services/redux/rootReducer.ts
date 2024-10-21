import {combineReducers} from 'redux';
import exampleSlice from './reducers/slices/exampleSlice';

const rootReducer = combineReducers({
  example: exampleSlice,
});
export default rootReducer;
