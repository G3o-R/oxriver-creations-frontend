import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  gap: 120px;
`;

export const DynamicContainer = styled(motion.div)`
  overflow: hidden;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Item = styled.div`
  background-color: #333;
  color: #fff;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
`;