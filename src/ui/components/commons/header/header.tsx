/*** Vendors ***/
import { NavLink } from "react-router";

/*** Styled ***/
import IconComponent from "../icon/icon.component";
import { HeaderStyledWrapper } from "./header.styled";

function HeaderComponent() {
  return (
    <HeaderStyledWrapper>
      <NavLink to={"/"}>
        <img
          src="/dragonball-z.svg"
          alt="Dragon Ball Logo"
          style={{ width: "7vw" }}
        />
      </NavLink>
      <p>
        <IconComponent selected />
      </p>
    </HeaderStyledWrapper>
  );
}

export default HeaderComponent;
