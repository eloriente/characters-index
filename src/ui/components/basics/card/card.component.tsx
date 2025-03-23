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

function Card({ id, name, image, selected = false }: CardPropsType) {
  return (
    <CardStyledWrapper to={`/character/${id}`}>
      <CardStyledImage src={image} />
      <CardStyledBanner data-testId="card-banner">
        <p>{name}</p>
        <IconComponent selected={selected} />
      </CardStyledBanner>
    </CardStyledWrapper>
  );
}

export default Card;
