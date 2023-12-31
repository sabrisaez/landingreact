import styled from "styled-components";
import { motion } from "framer-motion";

export const CategoriasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  margin: 15px auto;
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  user-select: none;
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;
