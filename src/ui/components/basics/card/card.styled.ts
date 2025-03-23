/*** Vendors ***/
import { NavLink } from "react-router";
import styled from "styled-components";

const CardStyledWrapper = styled(NavLink)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const CardStyledImage = styled.img`
  height: 25vh;
  object-fit: contain;
  width: 100%;
`;

const CardStyledBanner = styled.div`
  align-items: center;
  background: black;
  border-top: red 1vh solid;
  clip-path: polygon(0 100%, 90% 100%, 135% 0, 0 0);
  color: #fff;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    clip-path: polygon(0 100%, 90% 100%, 125% 0, 0 0);
    font-size: 1rem;
  }
`;

export { CardStyledWrapper, CardStyledBanner, CardStyledImage };
