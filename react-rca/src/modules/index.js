import { combineReducers } from 'redux';
import counter from './counter';
import reduxSample from './reduxSample';

// combineReducers : 여러 reducer 들을 하나의 store 에 저장 할 수 있게 해주는 함수이다.
// store에 저장되는 리듀서는 오직 1개입니다.
const rootReducer = combineReducers({ counter, reduxSample });

export default rootReducer;
