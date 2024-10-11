import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: #000;
    height: 400px;
    display: flex;
    max-width: 100vw;
    width: 100%;
    margin-top: 15px;
`;

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 400px;
`;

export const LogoContainer = styled.div`
    img {
        width: 100%;
        height: auto;
    }
`;

export const InfoWrapper = styled.div`

`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    
    label {
        font-size: 1rem;
        color: #ececec;
        display: block;
        margin-bottom: 8px;
        
        span {
            color: #b3b3b3; /* Light color for the contact details */
        }
    }
`;
