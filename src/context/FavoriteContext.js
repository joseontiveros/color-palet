import { createContext } from "react";

export const FavoritesContext = createContext({
  //es una lista vacia
  favorites: [],
  //es una funcion inicial para setear estos favorites
  setFavorites: () => {}
})