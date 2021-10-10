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

  const getAttributes = () => state.attributes;
  const getName = () => state.name;
  
  return <datasetContext.Provider value={{
    name: state.name,
    attributes: state.attributes,
    getName,
    getAttributes,
    addAttribute,
    removeAttribute,
  }}>
    {props.children}
  </datasetContext.Provider>
}

export default DatasetState;
