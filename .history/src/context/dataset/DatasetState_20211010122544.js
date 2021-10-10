import React, { useReducer, useContext } from 'react';
import datasetContext from './datasetContext';
import datasetReducer from './datasetReducer';
import initialState from './initialState';
import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

const DatasetState = props => {
  console.log('*** DatasetState Render ***');

  const [state, dispatch] = useReducer(datasetReducer, initialState);

  const ADD_ATTRIBUTE = (payload) => dispatch({ type: ADD_ATTRIBUTE, payload });
  const setStatus = (containerId, data) => dispatch({ type: SET_STATUS, payload: { containerId, data } });

  const getContainers = () => state.containers;
  const getContainer = (key) => state.containers[key];
  
  return <containerContext.Provider value={{
    containers: state.containers,
    loadContainers,
    loadContainerStatus,
    startContainer,
    stopContainer,
    getContainers,
    getContainer
  }}>
    {props.children}
  </containerContext.Provider>
}

export default DatasetState;
