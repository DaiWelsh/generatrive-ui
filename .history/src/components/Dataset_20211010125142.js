import React, { useContext, Fragment, useState } from 'react'
import DatasetContext from '../context/dataset/datasetContext'

export default function Dataset() {
  console.log('*** Dataset Render ***');

  const [adding, setAdding] = useState(false);
  const datasetContext = useContext(DatasetContext);
  const attributes = datasetContext.attributes;
  
  console.log('attributes', attributes);
  
  const deleteAttribute = (id) => {
    console.log(`delete attribute ${id}`);
  };
  
  const addAttribute = () => {
    console.log(`add attribute`);
    setAdding(trie)
  };
  
  return (
    <Fragment>
      <table>
        <h2>Attributes</h2>
        {attributes.map((attr) => (
          <tr key={attr.id}>
            <td>{attr.name}</td>
            <td>
              <button onClick={() => deleteAttribute(attr.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <button onClick={() => addAttribute()}>
        Add
      </button>
      {adding && 
        <form>
          <h3>Add attribute</h3>
        </form>
      } 
    </Fragment>
  );
}
