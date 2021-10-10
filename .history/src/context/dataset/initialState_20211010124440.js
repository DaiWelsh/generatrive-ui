const initialState = {
  name: 'test dataset',    
  attributes: [
    {
      id: 'hashvalueattr1',
      name: 'First Attribute',
      values: [
        {
          id: 'hashvalue1',
          name: 'First attr value a',
          category: false, 
          fileName: 'first/a.jpg',
          probability: 0.7,
        },
        {
          id: 'hashvalue2',
          name: 'First attr value b',
          category: false, 
          fileName: 'first/b.jpg', 
          probability: 0.3,
        },
      ],
    },
    {
      id: 'hashvalueattr1',
      name: 'Second Attribute',
      values: [
        {
          id: 'hashvalue3',
          name: 'Second attr value 1',
          category: false, 
          fileName: 'second/1.jpg',
          probability: 0.1,
        },
        {
          id: 'hashvalue4',
          name: 'Second attr category 1',
          category: true, 
          fileName: null,
          probability: 0.9,
          values: [
            {
              id: 'hashvalue5',
              name: 'Second attr cat 1 value 1',
              category: false, 
              fileName: 'second/1/1.jpg',
              probability: 0.6,
            },
            {
              id: 'hashvalue6',
              name: 'Second attr cat 1 value 2',
              category: false, 
              fileName: 'second/1/2.jpg',
              probability: 0.4,
            },
          ]
        },
      ],
    },
  ],
};

export default initialState;
