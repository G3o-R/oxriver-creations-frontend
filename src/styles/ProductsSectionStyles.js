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
    max-width: 1260px;
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
    /* flex-direction: column; */
    /* align-items: center; */
    /* gap: 15px; */

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
