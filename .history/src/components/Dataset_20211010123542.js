import React, { useEffect, useContext, Fragment } from 'react'
import DatasetContext from '../context/dataset/datasetContext'

export default function Containers({ children }) {
  console.log('*** Containers Render ***');

  const DatasetContext = useContext(DatasetContext);

  useEffect(() => containerContext.loadContainers(), []);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
