import React from "react";
import { FaHome, FaUser, FaHeart, FaShoppingBasket } from "react-icons/fa";
import {
  Cart,
  HomeContainer,
  LinksContainer,
  LinksNavbar,
  MenuContainer,
  NavbarContainer,
  StyledLink,
  UserContainer,
  UserNav,
} from "./styles";
import { Toggle } from "../toggle/toggle";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <a href="/#">
          <img
            src="https://i.pinimg.com/originals/1d/a1/b3/1da1b36941570b2cc18ce517c655bb38.png"
            alt="Logo"
          />
        </a>
      </div>
      <LinksContainer>
        <MenuContainer>
          <Toggle>
            <FaHeart />
          </Toggle>
        </MenuContainer>
        <HomeContainer>
          <Link to="/">
            <FaHome />
          </Link>
        </HomeContainer>
        <LinksNavbar>
          <li>
            <StyledLink to="/about">About Us</StyledLink>
          </li>
          <li>
            <StyledLink to="/products">Productos</StyledLink>
          </li>
          <li>
            <StyledLink to="/contact">Contacto</StyledLink>
          </li>
        </LinksNavbar>
        <UserNav>
          <UserContainer>
            <FaUser />
          </UserContainer>
        </UserNav>
        <Cart>
          <FaShoppingBasket />
        </Cart>
      </LinksContainer>
    </NavbarContainer>
  );
};
