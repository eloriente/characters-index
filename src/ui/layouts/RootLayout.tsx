/*** Vendors ***/
import { useEffect } from "react";
import { Outlet } from "react-router";

/*** Components ***/
import HeaderComponent from "../components/commons/header/header";

/*** Hooks ***/
import useCharactersStore from "../hooks/characters/characters.hook";

function RootLayout() {
  const { setCharacters } = useCharactersStore();

  useEffect(() => {
    setCharacters(50);
  }, [setCharacters]);

  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
}

export default RootLayout;
