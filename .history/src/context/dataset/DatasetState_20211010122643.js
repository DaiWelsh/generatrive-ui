import React, { useReducer, useContext } from 'react';
import datasetContext from './datasetContext';
import datasetReducer from './datasetReducer';
import initialState from './initialState';
import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

const DatasetState = props => {
  console.log('*** DatasetState Render ***');

  const [state, dispatch] = useReducer(datasetReducer, initialState);

  const addAttribute = (payload) => dispatch({ type: ADD_ATTRIBUTE, payload });
  const removeAttribute = (payload) => dispatch({ type: REMOVE_ATTRIBUTE, payload });

  const getAttributes = () => state.containers;
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
