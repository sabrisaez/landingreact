import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.2rem;
  @media (max-width: 992px) {
    transform: ${(props) =>
      props.$clicked ? "translateX(0)" : "translateX(100%)"};
    position: absolute;
    top: 100px;
    right: 0;
    background-color: #aee9d1;
    width: 50%;
    padding: 50px 0;
    border-radius: 1rem;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const StyledListItem = styled.li`
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #7aa399;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  gap: 1rem;

  padding: 1rem 1.2rem;
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

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
`;
