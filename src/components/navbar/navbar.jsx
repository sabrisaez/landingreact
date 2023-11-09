import { motion } from "framer-motion";
import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import {
  HomeContainer,
  LinkContainer,
  LinksContainer,
  NavbarContainer,
  SpanStyled,
  UserContainer,
  UserNav,
} from "./styles";
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
        <HomeContainer>
          <motion.div whileTap={{ scale: 0.97 }}>
            <a href="/#">
              <LinkContainer home={true}>
                <FaHome />
              </LinkContainer>
              Home
            </a>
          </motion.div>
          <UserNav>
            <UserContainer>
              <SpanStyled>Iniciar sesión</SpanStyled>
              <FaUser />
            </UserContainer>
          </UserNav>
        </HomeContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};
