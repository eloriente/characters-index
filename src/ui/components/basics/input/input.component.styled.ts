/*** Vendors ***/
import styled from "styled-components";

const InputContainerWrapper = styled.div``;

const InputWrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  gap: ${12 / 16}rem;
  padding: 1rem 0;
  width: 100%;
`;

const InputIconStyled = styled.img`
  height: 1%;
  width: 1%;
`;

const InputStyled = styled.input`
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;

  &::placeholder {
    color: #aaa;
    text-transform: uppercase;
  }
`;

export { InputContainerWrapper, InputWrapper, InputIconStyled, InputStyled };
