const initialState: ApplicationState = {
  searchFieldText: '',
  repos: [],
  myStarsMode: false
}

type Action= 
 | {type: 'updateSearchBox', value: string} 
 | {type: 'updateRepos', value: Repo[]} 
 | {type: 'toggleMyStarsMode', value: boolean}


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
    case 'toggleMyStarsMode':
      return { 
        ...state,
        myStarsMode: action.value
      }
  }
};
export { reducer, initialState };
