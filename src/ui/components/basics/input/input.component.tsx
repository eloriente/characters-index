/*** Components ***/
import ListCounter from "../list-counter/list-counter.component";

/*** Styles ***/
import {
  InputContainerWrapper,
  InputWrapper,
  InputStyled,
  InputIconStyled,
} from "./input.component.styled";

/*** Types ***/
import { InputPropsType } from "./input.component.types";

function Input(props: InputPropsType) {
  const { placeholder, type, icon, onChange, counter } = props;
  return (
    <InputContainerWrapper>
      <InputWrapper>
        {icon && <InputIconStyled src={`/${icon}`} />}
        <InputStyled
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
        />
      </InputWrapper>
      {counter && <ListCounter counter={counter} />}
    </InputContainerWrapper>
  );
}

export default Input;
