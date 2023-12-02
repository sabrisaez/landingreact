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
          <motion.div whileTap={{ scale: 0.97 }}>
            <a href="/#">
              <LinkContainer home={true}></LinkContainer>
              <FaHome />
              Home
            </a>
          </motion.div>
          <UserNav>
            <UserContainer>
              <SpanStyled>Iniciar sesión</SpanStyled>
              <FaUser />
            </UserContainer>
          </UserNav>
          <LinksNavbar>
            <li>
              <Link to="/" onClick={() => menuValue.menuCerrar()}>
                INICIO
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => menuValue.menuCerrar()}>
                NOSOTROS
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => menuValue.menuCerrar()}>
                PRODUCTOS
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => menuValue.menuCerrar()}>
                CONTACTO
              </Link>
            </li>
          </LinksNavbar>
        </HomeContainer>
        <Cart>
          <FaShoppingBasket />
        </Cart>
      </LinksContainer>
    </NavbarContainer>
  );
};
