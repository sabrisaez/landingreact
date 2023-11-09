import styled from "styled-components";
import { motion } from "framer-motion";

export const CardCategoria = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  padding: 1rem 0.2rem;
  background-color: ${({ selected }) => (selected ? "#7aa399" : "#aee9d1")};
  border-radius: 15px;
  cursor: pointer;
  img {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }
  h2 {
    font-size: 1rem;
  }
  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 30px;
    text-align: center;
  }
`;
export const BorderDecoration = styled.div`
  height: 5px;
  width: 30%;
  background: #7fa37a;
  border-radius: 15px;
`;
