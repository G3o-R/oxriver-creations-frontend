import styled from "styled-components";

export const StyledWebDevSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #222222;
    padding: 20px 0px;
    overflow: hidden;

`;

export const HeaderWrapper = styled.div`
    width: 100%;

`;

export const HeaderContainer = styled.div`
    width: 100%;
    h3{
        color: #ffffff;
        text-align: left;
        font-size: 40px;
        /* text-decoration */
    }
`;

export const StyleCardsWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #c7c7c7;
    padding: 20px 0px;
    margin: 20px 0px;

`;

export const StyleCardsContainer = styled.div`
    width: 100%;
    /* margin: 0px 10px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const BackgroundTemp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: -1;
`;
