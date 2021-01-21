const initialState: ApplicationState = {
  searchFieldText: '',
  repos: []
}

type Action= 
 | {type: 'updateSearchBox', value: string} 
 | {type: 'updateRepos', value: Repo[]} 


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
    case 'updateRepos':
      return { 
        ...state,
        repos: action.value
      }
  }
};
export { reducer, initialState };
