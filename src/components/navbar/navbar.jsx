import { MenuNavbar } from "../menunavbar/menunavbar";
import Icon from "../icon/icon";
import { StyledHeader } from "./styles";

export const Navbar = () => {
  return (
    <StyledHeader>
      <div>
        <a href="/#">
          <img
            src="https://i.pinimg.com/originals/1d/a1/b3/1da1b36941570b2cc18ce517c655bb38.png"
            alt="Logo"
          />
        </a>
      </div>
      <MenuNavbar />
      <Icon />
    </StyledHeader>
  );
};
