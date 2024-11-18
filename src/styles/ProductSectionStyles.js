import styled from "styled-components";
import { motion } from "framer-motion";

export const DynamicContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

export const SubSectionWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SubCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.3s ease;
`;

export const SubCategoryHeader = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid #ececec;

  h1 {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 600;
    margin: 0;
  }
`;

export const ProductSliderContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  padding: 10px;
`;
