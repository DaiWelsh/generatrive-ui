import React, { useEffect, useContext, Fragment } from 'react'
import ContainerContext from '../context/containers/containerContext'

export default function Containers({ children }) {
  console.log('*** Containers Render ***');

  const containerContext = useContext(ContainerContext);

  useEffect(() => containerContext.loadContainers(), []);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}
