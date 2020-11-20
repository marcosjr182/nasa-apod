import { createAction, createReducer } from '@reduxjs/toolkit';
import moment from 'moment';
import { Picture } from '../interfaces/Picture';

const ActionTypes = {
  CHANGE_DATE: 'CHANGE_DATE',
  CHANGE_PICTURE: 'CHANGE_PICTURE',
}

type ChangeDateAction = ReturnType<typeof changeDateAction>;
type ChangePictureAction = ReturnType<typeof changePictureAction>;

export type FeaturedState = {
  date: moment.Moment | null,
  picture: Picture | null,
}

const initialState: FeaturedState = {
  date: null,
  picture: null,
}

export default createReducer(initialState, {
  [ActionTypes.CHANGE_DATE]: (state, action: ChangeDateAction) => ({
    ...state, date: action.payload
  }),
  [ActionTypes.CHANGE_PICTURE]: (state, action: ChangePictureAction) => ({
    ...state, picture: action.payload
  }),
});

export const changeDateAction = createAction<moment.Moment | null>(ActionTypes.CHANGE_DATE);
export const changePictureAction = createAction<Picture | null>(ActionTypes.CHANGE_PICTURE);
