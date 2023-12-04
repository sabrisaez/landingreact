import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutTittle = styled.h1`
  background: #7aa399;
  border-radius: 20px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (max-width: 768px) {
    display: inline-block;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Abouth2 = styled.h2`
  color: #aec6e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const AboutText = styled.div`
  color: #aec6e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-left: 100px;
  font-size: 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
`;

export const AboutImg = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  width: 40%;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLinkAbout = styled(Link)`
  color: red;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  button {
    color: white;
    background-color: #7aa399;
  }
`;
