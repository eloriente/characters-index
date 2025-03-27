/*** Vendors ***/
import styled from "styled-components";

/*** Components ***/
import { NavLink } from "react-router";

const HeaderStyledWrapper = styled.div`
  align-items: center;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.25rem 1.5rem;
`;

const HeaderLogoLink = styled(NavLink)`
  cursor: pointer;
`;

const HeaderFavoriteWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  gap: ${12 / 16}rem;
`;

export { HeaderStyledWrapper, HeaderFavoriteWrapper, HeaderLogoLink };
