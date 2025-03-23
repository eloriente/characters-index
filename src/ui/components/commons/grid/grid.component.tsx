/*** Vendors ***/
import { PropsWithChildren } from "react";

/*** Styled ***/
import { GridStyledWrapper } from "./grid.styled";

function Grid({ children }: PropsWithChildren) {
  return <GridStyledWrapper>{children}</GridStyledWrapper>;
}

export default Grid;
