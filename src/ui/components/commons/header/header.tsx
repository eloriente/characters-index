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

  return (
    <HeaderStyledWrapper>
      <HeaderLogoLink to={"/"} onClick={() => setOnlyFavorites(false)}>
        <img
          src="/dragonball-z.svg"
          alt="Dragon Ball Logo"
          style={{ width: "7vw" }}
        />
      </HeaderLogoLink>
      <HeaderFavoriteWrapper>
        <IconComponent selected onClick={() => setOnlyFavorites(true)} />
        <p>{favorites.length}</p>
      </HeaderFavoriteWrapper>
    </HeaderStyledWrapper>
  );
}

export default HeaderComponent;
