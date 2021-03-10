/*该文件专门用于汇总所有reducer*/

// 引入combineReducers，用于合并reducer
import {combineReducers} from 'redux';
// 引入为Count组件服务的reducer
import count from '../reducers/count';
// 引入为Person组件服务的reducer
import person from '../reducers/person';

// 汇总所有的reducer为一个总的reducer，combineReducers中一定要为一个对象
export default combineReducers({
  count,
  person
});