export const initialState = {
    paths: [],
    pathCacheExpiry: null,
    categories: []
};

const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_ALL_PATHS':
        return {
          ...state,
          paths: action.payload,
          pathCacheExpiry: new Date(new Date().getTime() + 4*60000) // + 4 minutes
        }
      case 'ADD_ALL_CATEGORIES':
        return {
          ...state,
          categories: action.payload
        }
      default: return state;
    }
}

export default reducer;