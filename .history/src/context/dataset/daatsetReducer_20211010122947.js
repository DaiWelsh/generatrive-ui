import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

const setStatus = (state, action) => {
  const { containerId, data } = action.payload;
  return {
    ...state,
    containers: {
      ...state.containers,
      [containerId]: {
        ...state.containers[containerId],
        status: data.code,
        health: data.healthCode,
      }
    }
  };
};


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