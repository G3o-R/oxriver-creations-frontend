import styled from "styled-components";
import { motion } from "framer-motion";

// Outer container for ProductsSection
export const DynamicContainer = styled(motion.div)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  /* background-color: #f9f9f9; */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

// Wrapper for each subcategory section
export const SubSectionWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Individual subcategory container
export const SubCategorySection = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: #ffffff; */
  border-radius: 8px;
  padding: 20px;
  /* box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease;
`;

// Header containing subcategory title
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

// Container for ProductSlider component
export const ProductSliderContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  /* background-color: #f4f4f4; */
  padding: 10px;
`;
