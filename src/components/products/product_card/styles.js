import styled from "styled-components";

export const ProductoCard = styled.div`
  background: #aee9d1;
  width: 250px;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 95%;
    margin-bottom: 1rem;
    border-radius: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
    color: #7fa37a;
    font-size: 0.8rem;
  }
  p {
    color: #666;
    font-size: 0.7rem;
  }
  @media (max-width: 768px) {
    width: 250px;
    text-align: left;
  }
`;
