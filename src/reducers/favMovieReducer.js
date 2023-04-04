import {
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    TOGGLE_FAVORITES,
  } from "../actions/favoritesActions";
  
  const initialState = {
    favorites: [],
    displayFavorites: true,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FAVORITE:
        if (!state.favorites.includes(action.payload)) {
          return {
            ...state,
            favorites: [...state.favorites, action.payload],
          };
        } else return state;
      case REMOVE_FAVORITE:
        return {
          ...state,
          favorites: state.favorites.filter(
            (favMov) => favMov.id !== action.payload
          ),
        };
      case TOGGLE_FAVORITES:
        return {
          ...state,
          displayFavorites: !state.displayFavorites,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  