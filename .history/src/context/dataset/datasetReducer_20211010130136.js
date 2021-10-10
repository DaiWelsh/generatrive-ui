import { ADD_ATTRIBUTE, REMOVE_ATTRIBUTE } from '../types';

const reducer = (state, action) => {
  console.log('datasetReducer', state, action);
  switch (action.type) {
    case ADD_ATTRIBUTE:
      console.log('ADD_ATTRIBUTE');
      return {
        ...state,
        attributes: [
          ...state.attributes,
          {
            id: 'newid',
            name: 'New Attribute',
            values: []
          },
      };
    default:
      return state;
  }
}

export default reducer;