/*** Vendors ***/
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Favorite {
  id: number;
}

interface State {
  favorites: Favorite[];
  onlyFavorites: boolean;
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  setOnlyFavorites: (value: boolean) => void;
}

const useFavorites = create<State>()(
  persist(
    (set) => ({
      favorites: [],
      onlyFavorites: false,
      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, { id }],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav.id !== id),
        })),
      setOnlyFavorites: (value) => set(() => ({ onlyFavorites: value })),
    }),
    { name: "favorites" }
  )
);

export default useFavorites;
