/*** Types ***/
import IconPropsType from "./icon.types";

function IconComponent({ selected }: IconPropsType) {
  const icon = selected ? "/icon_fav.svg" : "/icon_no-fav.svg";

  return <img src={icon} alt="" />;
}

export default IconComponent;
