import styled from "styled-components";

export const ProductosWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  margin: 15px auto;
  h2 {
    color: #7aa399;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const ProductosContainer = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;

export const BotonesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`;
