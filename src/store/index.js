import recommend from './recommend.redux'
import rank from './rank.redux'
import songList from './songList.redux'
import {combineReducers} from 'redux'

//将多个redux组织起来
export default combineReducers({recommend,rank,songList});