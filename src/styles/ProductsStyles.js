import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductsPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  color: #fff;
  padding: 20px;
  h1 {
    text-decoration: underline;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  /* max-width: 725px; */
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  background-color: #2e2e2e;
  border-radius: 12px;
  margin-bottom: 40px;
  /* max-width: 725px; */
  /* width: 100%; */
  `;

export const TextContainer = styled.div`
  background-color: #e9e9e9;
  height: 70px;
  margin: 5px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  font-size: 20px;
  p{
    margin: 0;
    text-align: center;
    color: #333;

    span{
      color: #111;

      &:hover{
        color: #000;
      }
    }
  }
  /* color: #fff; */
`;

export const DynamicContainer = styled(motion.div)`
  padding: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  row-gap: 20px;
`;
