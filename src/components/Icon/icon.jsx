import { useContext } from "react";
import { MenuContext } from "../../context/navbarContext";
import { IconContainer, IconBars } from "./styles";

const Icon = () => {
  const ctx = useContext(MenuContext);

  return (
    <IconContainer onClick={ctx.toggleMenu}>
      <IconBars $clicked={ctx.isMenuOpen} />
    </IconContainer>
  );
};

export default Icon;
