import styled from "styled-components";

export const StyledButton = styled.div`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: #aec6e9;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 95%;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5%;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
