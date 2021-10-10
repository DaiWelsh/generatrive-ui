import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

export default (state, action) => {
  console.log('containerReducer', state, action);
  switch (action.type) {
    case SET_CONTAINERS:
      return {
        ...state,
        containers: action.payload
      };
    case SET_STATUS:
      return setStatus(state, action);
    default:
      return state;
  }
}