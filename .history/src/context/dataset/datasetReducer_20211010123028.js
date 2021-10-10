import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

export default (state, action) => {
  console.log('datasetReducer', state, action);
  switch (action.type) {
    default:
      return state;
  }
}