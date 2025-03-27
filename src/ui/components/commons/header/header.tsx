/*** Styled ***/
import IconComponent from "../icon/icon.component";
import {
  HeaderStyledWrapper,
  HeaderFavoriteWrapper,
  HeaderLogoLink,
} from "./header.styled";

/*** Header ***/
import useFavorites from "../../../hooks/favorites/favorites.hook";

function HeaderComponent() {
  const { favorites, setOnlyFavorites } = useFavorites();

  function handleSetOnlyFavorites() {
    if (favorites.length > 0) setOnlyFavorites(true);
    return;
  }

  return (
    <HeaderStyledWrapper>
      <HeaderLogoLink to={"/"} onClick={() => setOnlyFavorites(false)}>
        <img
          src="/dragonball-z.svg"
          alt="Dragon Ball Logo"
          style={{ width: "7vw" }}
        />
      </HeaderLogoLink>
      <HeaderFavoriteWrapper onClick={() => handleSetOnlyFavorites()}>
        <IconComponent selected />
        <p>{favorites.length}</p>
      </HeaderFavoriteWrapper>
    </HeaderStyledWrapper>
  );
}

export default HeaderComponent;
