import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import featuredReducer, { FeaturedState } from './featured';

export interface RootState {
  featured: FeaturedState
}

const reducer = combineReducers({
  featured: featuredReducer,
})

export default configureStore({
  reducer
});
