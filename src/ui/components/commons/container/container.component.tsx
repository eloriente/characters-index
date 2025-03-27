/*** Vendors ***/
import { PropsWithChildren } from "react";

/*** Styles ***/
import { ContainerStyled } from "./contaner.component.styled";

function Container({ children }: PropsWithChildren) {
  return <ContainerStyled>{children}</ContainerStyled>;
}

export default Container;
