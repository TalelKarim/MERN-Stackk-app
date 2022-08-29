import { combineReducers } from "redux";
import posts from './Cards'
import photos from "./Photos";
import videos from "./Videos";

export const reducers =  combineReducers({
    posts,
    photos,
    videos
})