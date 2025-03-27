/*** Styled ***/
import { ListCounterStyled } from "./list-counter.component.styled";

interface Props {
  counter: number;
}

function ListCounter(props: Props) {
  const { counter } = props;
  return <ListCounterStyled>{counter} results</ListCounterStyled>;
}

export default ListCounter;
