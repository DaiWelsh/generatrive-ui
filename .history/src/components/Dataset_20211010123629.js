import React, { useEffect, useContext, Fragment } from 'react'
import DatasetContext from '../context/dataset/datasetContext'

export default function Containers({ children }) {
  console.log('*** Containers Render ***');

  const datasetContext = useContext(DatasetContext);
  const attributes = datasetContext.a
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
