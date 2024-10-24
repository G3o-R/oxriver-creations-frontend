import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 0px;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 1560px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    text-align: left;
    
    h1 {
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

  &.hidden{
    display: none;
  }
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
        transition: background-color 0.3s ease;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const ContentContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
