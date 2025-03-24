/*** Vendors ***/
import { NavLink } from "react-router";
import styled from "styled-components";

const CardStyledWrapper = styled(NavLink)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    [data-testid="card-banner"] {
      animation: gradientShutterEffect 0.25s forwards ease-in-out;
    }
  }

  &:not(:hover) {
    [data-testid="card-banner"] {
      animation: gradientShutterEffectReverse 0.25s forwards ease-in-out;
    }
  }
`;

const CardStyledImage = styled.img`
  height: 25vh;
  object-fit: contain;
  width: 100%;
`;

const CardStyledBanner = styled.div`
  align-items: center;
  background-color: black;
  background-image: linear-gradient(to bottom, red 10%, black 10%);
  clip-path: polygon(0 100%, 90% 100%, 135% 0, 0 0);
  color: #fff;
  display: flex;
  flex-direction: row;
  font-size: ${14 / 16}rem;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-transform: uppercase;

  @keyframes gradientShutterEffect {
    0% {
      background-size: 100% 10vh;
    }
    100% {
      background-size: 100% 100vh;
    }
  }

  @keyframes gradientShutterEffectReverse {
    0% {
      background-size: 100% 100vh;
    }
    100% {
      background-size: 100% 10vh;
    }
  }

  @media (max-width: 768px) {
    clip-path: polygon(0 100%, 90% 100%, 125% 0, 0 0);
    font-size: 1rem;
  }
`;

export { CardStyledWrapper, CardStyledBanner, CardStyledImage };
