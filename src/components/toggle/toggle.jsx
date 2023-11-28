import React from "react";
import { NavbarContext } from "../../context/navbarContext";
import { useContext } from "react";
import { OpenToggleMenu, ToggleButtonMenu, ToggleMenuStyles } from "./styles";
import { FaHeart } from "react-icons/fa";

export const Toggle = () => {
  const { isNavbarOpen, toggleNavbar } = useContext(NavbarContext);

  return (
    <ToggleMenuStyles>
      <ToggleButtonMenu onClick={toggleNavbar}>
        <FaHeart />
      </ToggleButtonMenu>
      {isNavbarOpen && (
        <OpenToggleMenu>
          {/* Contenido del navbar desplegable */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            {/* ...otros elementos del navbar */}
          </ul>
        </OpenToggleMenu>
      )}
    </ToggleMenuStyles>
  );
};
