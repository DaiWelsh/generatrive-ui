import React, { useReducer, useContext } from 'react';
import containerContext from './containerContext';
import containerReducer from './containerReducer';
import { SET_CONTAINERS, SET_STATUS } from '../types';
import RequestContext from '../requests/requestContext'

const DatasetState = props => {
  console.log('*** DatasetState Render ***');

  const initialState = {
    name: 'test dataset',    
    attributes: [
      {
        name: 'First Attribute',
        values: [
          {
            id: 'hashvalue1',
            name: 'First attr value a',
            category: false, 
            fileName: 'first/a.jpg',
            probability: 0.7
          },
          {
            id: 'hashvalue2',
            name: 'First attr value b',
            category: false, 
            fileName: 'first/b.jpg', 
          },
        ],
      },
      {
        name: 'Second Attribute',
        values: [
          {
            id: 'hashvalue3',
            name: 'Second attr value 1',
            category: false, 
            fileName: 'second/1.jpg',
            probability: 0.7
          },
          {
            id: 'hashvalue2',
            name: 'Second attr category 1',
            category: true, 
            fileName: null, 
          },
        ],
      },
    ],
  };
  const [state, dispatch] = useReducer(containerReducer, initialState);

  const requestContext = useContext(RequestContext);
  const translateContainerState = (containers) => {
    const containerState = {};
    Object.keys(containers).forEach((key) => {
      const container = containers[key];
      containerState[key] = {
        key,
        name: container.name,
        status: '...',
        health: '...',
      };
    });
    return containerState;
  };

  const loadContainers = () => {
    requestContext.makeRequest('containers', (data) => {
      console.log('loadContainers got data', data);
      setContainers(translateContainerState(data.containers));
    });
  }

  const startContainer = (containerId) => {
    requestContext.makeRequest(`start/${containerId}`, (data) => {
      //console.log('startContainer data', data);
      loadContainerStatus(containerId);
    });
  }

  const stopContainer = (containerId) => {
    requestContext.makeRequest(`stop/${containerId}`, (data) => {
      //console.log('stopContainer data', data);
      loadContainerStatus(containerId);
    });
  }

  const loadContainerStatus = (containerId) => {
    requestContext.makeRequest(`status/${containerId}`, (data) => {
      console.log('loadContainerStatus data', containerId, data);
      setStatus(containerId, data)
    });
  };
  
  const setContainers = (payload) => dispatch({ type: SET_CONTAINERS, payload });
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
