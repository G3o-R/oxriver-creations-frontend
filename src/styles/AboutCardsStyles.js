import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    background-color: #e9e9e9;
    border-radius: 24px 24px 24px 24px;
    
    @media screen and (min-width: 768px) {
        height: 540px;
        background-color: #2e2e2e;
    }
    `;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    border-radius: 12px;
    background-color: #e9e9e9;
    
    @media screen and (min-width: 768px) {
        box-shadow: inset 0 8px 16px rgba(46, 46, 46, 0.8);
        flex-direction: row;
        padding: 20px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width: 768px) {
        width: 50%;
    }
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensures the image covers the container */
        border-radius: 12px;
    }

    @media screen and (min-width: 768px) {
        border-radius: 12px 0 0 12px; /* Adjust border radius for row layout */
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    padding: 20px;
    
    @media screen and (min-width: 768px) {
        width: 50%;
        padding: 30px;
    }
`;

export const TextContainer = styled.div`
    h1 {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 15px;
    }

    p {
        font-size: 1rem;
        line-height: 1.6;
        color: #666;
        text-align: justify; /* Creates a neat text block */
    }

    @media screen and (min-width: 768px) {
        h1 {
            font-size: 2.2rem;
        }

        p {
            font-size: 1.1rem;
        }
    }
`;
