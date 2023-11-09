import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import {
  HomeContainer,
  LinkContainer,
  NavbarContainer,
  UserContainer,
} from "./styles";
import { LinksContainer } from "./styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <a href="/#">
          <img src="./src/assets/pokeball-logo.gif" alt="Logo" />
        </a>
      </div>

      <LinksContainer>
        <HomeContainer>
          <a href="#">
            <LinkContainer home={true}>
              <FaHome />
              <span>Home</span>
            </LinkContainer>
          </a>
          <UserContainer>
            <a href="">
              <span>Iniciar sesión</span>
              <FaUser />
            </a>
          </UserContainer>
        </HomeContainer>
      </LinksContainer>
    </NavbarContainer>
  );
};
