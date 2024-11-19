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
  padding: 40px 0px 80px 0px;
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
  transition: transform 0.3s ease;
  @media screen and (min-width: 1024px){
    padding: 40px;    
  }
`;


export const ProductSliderContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  @media screen and (min-width: 1024px){
    padding: 10px;
  }
`;

export const HeaderWrapper = styled.div`
  text-align: left;
  padding: 0 20px;
`;

export const HeaderContainer = styled.div`

h1{
  font-size: 2rem;
  color: #fff;
}
`;