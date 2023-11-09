import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 30px;
  h1 {
    margin-bottom: 2rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  h1 {
    margin: 10px 0;
    font-size: 4rem;
  }
  h2 {
    margin: 10px 0;
    font-size: 2.5rem;
  }
  p {
    margin: 10px 0;
    font-size: 1.2rem;
  }
  @media (max-width: 1000px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderImageContainter = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-bottom: 75%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
