/*** Vendors ***/
import { useEffect, useState } from "react";

/*** Components ***/
import IconComponent from "../../commons/icon/icon.component";

/*** Styles ***/
import {
  CardStyledWrapper,
  CardStyledBanner,
  CardStyledImage,
} from "./card.styled";

/*** Types ***/
import CardPropsType from "./types/card.types";

/*** Hooks ***/
import useFavoritesStore from "../../../hooks/favorites/favorites.hook";

function Card({ id, name, image, selected = false }: CardPropsType) {
  const [isSelected, setIsSelected] = useState<boolean>(selected);
  const [isHover, setIsHover] = useState<boolean>(false);
  const { addFavorite, removeFavorite } = useFavoritesStore();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsSelected(!isSelected);
    if (isSelected === true) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <CardStyledWrapper
      to={`/character/${id}`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <CardStyledImage src={image} />
      <CardStyledBanner data-testId="card-banner">
        <p>{name}</p>
        <IconComponent
          selected={isSelected}
          onClick={handleClick}
          isHover={isHover}
        />
      </CardStyledBanner>
    </CardStyledWrapper>
  );
}

export default Card;
