import { motion } from "framer-motion";
import React from "react";
import { FaHome, FaUser, FaHeart, FaShoppingBasket } from "react-icons/fa";
import {
  Cart,
  HomeContainer,
  LinkContainer,
  LinksContainer,
  LinksNavbar,
  MenuContainer,
  NavbarContainer,
  SpanStyled,
  UserContainer,
  UserNav,
} from "./styles";
import { Toggle } from "../toggle/toggle";
import { NavbarContext } from "../../context/navbarContext";
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
          <Link to="/" onClick={() => menuValue.menuCerrar()}>
            <FaHome />
          </Link>
          <LinksNavbar>
            <li>
              <Link to="/" onClick={() => menuValue.menuCerrar()}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => menuValue.menuCerrar()}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => menuValue.menuCerrar()}>
                Productos
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => menuValue.menuCerrar()}>
                Contacto
              </Link>
            </li>
          </LinksNavbar>
          <UserNav>
            <UserContainer>
              <SpanStyled>Iniciar sesión</SpanStyled>
              <FaUser />
            </UserContainer>
          </UserNav>
        </HomeContainer>
        <Cart>
          <FaShoppingBasket />
        </Cart>
      </LinksContainer>
    </NavbarContainer>
  );
};
