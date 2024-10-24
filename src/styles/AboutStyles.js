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
        font-size: 2rem;
        text-decoration: underline;
        margin-bottom: 20px;
    }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NavContainer = styled.div`
  margin-left: 20px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 5px;
      cursor: pointer;

      &:hover {
        background-color: #f5a623;
        transition: background-color 0.3s ease;
      }

      &.selected {
        background-color: #f5a623;
      }
    }
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