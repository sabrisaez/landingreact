import { MenuContext } from "../../context/navbarContext";
import { useContext } from "react";
import {
  StyledNavbar,
  StyledList,
  StyledListItem,
  HomeContainer,
  UserContainer,
  Cart,
} from "./styles";
import { FaHome, FaUser, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MenuNavbar = () => {
  const ctx = useContext(MenuContext);
  return (
    <StyledNavbar $clicked={ctx.isMenuOpen}>
      <StyledList>
        <HomeContainer>
          <Link to="/">
            <FaHome />
          </Link>
        </HomeContainer>
        <StyledListItem>
          <Link to="/about">About Us</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/products">Productos</Link>
        </StyledListItem>
        <StyledListItem>
          <Link to="/contact">Contacto</Link>
        </StyledListItem>
        <UserContainer>
          <FaUser />
        </UserContainer>
        <Cart>
          <FaShoppingBasket />
        </Cart>
      </StyledList>
    </StyledNavbar>
  );
};
