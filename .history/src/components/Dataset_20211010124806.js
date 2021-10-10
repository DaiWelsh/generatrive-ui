import React, { useContext, Fragment } from 'react'
import DatasetContext from '../context/dataset/datasetContext'

export default function Dataset() {
  console.log('*** Dataset Render ***');

  const datasetContext = useContext(DatasetContext);
  const attributes = datasetContext.attributes;
  
  console.log('attributes', attributes);
  
  const deleteAttribute = (id) => {
    console.log(`delete attribute ${id}`);
  };
  
  const addAttribute = (id) => {
    console.log(`delete attribute ${id}`);
  };
  
  return (
    <Fragment>
      <ul>
        Attributes
        {attributes.map((attr) => (
          <li key={attr.id}>
            {attr.name}
            <button onClick={() => deleteAttribute(attr.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addAttribute()}>Add</button>
    </Fragment>
  );
}
