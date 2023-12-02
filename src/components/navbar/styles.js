import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  height: 100px;
  background-color: #aee9d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-radius: 20px;
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
  img {
    width: 100px;
  }
`;

export const LinksContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
export const LinkContainer = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#white" : "ff9300")};
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled(LinkContainer)`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    padding: 1rem 1.5rem;
    &:first-of-type {
      background: #7aa399;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuContainer = styled(LinkContainer)`
  display: none;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const UserNav = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

export const Cart = styled(LinkContainer)`
  display: flex;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  padding-right: 20px;
`;

export const LinksNavbar = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  /* Estilos personalizados para el componente Link */
  color: brown; /* Cambia el color del texto */
  text-decoration: none; /* Elimina la decoración de texto por defecto (subrayado) */
  font-weight: bold;
`;
