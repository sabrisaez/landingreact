import {
  HeaderContainer,
  HeaderImageContainter,
  HeaderTextContainer,
} from "./styles";
import { Button } from "../button/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <h1>La magia de Kuromi</h1>
        <h2>ha llegado.</h2>
        <p>Con un toque de travesura y un toque de encanto oscuro.</p>
        <Link to="/products">
          <Button>Ver más</Button>
        </Link>
      </HeaderTextContainer>
      <HeaderImageContainter>
        <img
          src="https://blindboxempire.com/cdn/shop/files/6a0c54e4379b9505f68638936dddfb9a_grande.png?v=1694116776"
          alt=""
        />
      </HeaderImageContainter>
    </HeaderContainer>
  );
};
