const initialState: ApplicationState = {
  searchFieldText: ''
}

type Action= 
 | {type: 'updateSearchBox', value: string} 


const reducer: (
  state: ApplicationState,
  action: Action
) => ApplicationState = (state, action) => {
  switch (action.type) {
    case 'updateSearchBox': 
      return {
        ...state,
        searchFieldText : action.value
      }
  }
};
export { reducer, initialState };
