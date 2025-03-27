/*** Vendors ***/
import { useEffect } from "react";
import { Outlet } from "react-router";

/*** Components ***/
import HeaderComponent from "../../components/commons/header/header";

/*** Hooks ***/
import useCharactersStore from "../../hooks/characters/characters.hook";
import useFavorites from "../../hooks/favorites/favorites.hook";

/*** Types ***/
import RootLayoutaContextType from "../../types/RootLayoutContext.type";

function RootLayout() {
  const { characters, setCharacters } = useCharactersStore();
  const { favorites, onlyFavorites } = useFavorites();
  const contextValue: RootLayoutaContextType = {
    characters,
    favorites,
    onlyFavorites,
  };

  useEffect(() => {
    setCharacters(50);
  }, [setCharacters]);

  return (
    <>
      <HeaderComponent />
      <Outlet context={contextValue} />
    </>
  );
}

export default RootLayout;
