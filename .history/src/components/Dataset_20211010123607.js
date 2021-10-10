import React, { useEffect, useContext, Fragment } from 'react'
import DatasetContext from '../context/dataset/datasetContext'

export default function Containers({ children }) {
  console.log('*** Containers Render ***');

  const datasetContext = useContext(DatasetContext);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
