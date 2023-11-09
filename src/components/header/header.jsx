import {
  HeaderContainer,
  HeaderImageContainter,
  HeaderTextContainer,
} from "./styles";
import { Button } from "../button/button";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <h1>Si tenes zappi,</h1>
        <h2>tenes nucba.</h2>
        <p>Buscá lo que quieras y Nucba te quedes sin comida</p>
        <Button>Ver más</Button>
      </HeaderTextContainer>

      <HeaderImageContainter>
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
          alt=""
        />
      </HeaderImageContainter>
    </HeaderContainer>
  );
};
