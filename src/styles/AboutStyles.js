import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: flex;
    justify-items: center;
    align-content: center;
    max-width: 1260px;
    width: 100%;
    `;

export  const HeaderContainer = styled.div`
    width: 100%;

    h1{
        color: #f9f9f9;
        text-decoration: underline;
    }
`;

export const AboutSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;

  .swiper{
    height: 100%;
    width: 100%;
    
  }
`;