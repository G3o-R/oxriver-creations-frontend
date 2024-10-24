import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 15px 5px;
    background-color: #fbfbfb;
    border-radius: 24px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    @media screen and (min-width: 1080px) {
        background-color: #e0e0e0;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 18px;
    background-color: #fbfbfb;
    transition: transform 0.3s ease;
    
    @media screen and (max-width: 650px) {
        max-width: 450px;
        height: 100%;
    }

    @media screen and (min-width: 1080px) {
        /* max-width: 450px; */
        flex-direction: row;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        padding: 20px;
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (min-width: 1080px) {
        width: 50%;
        height:100%;
    }
    `;

export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 1/1;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;

export const TextWrapper = styled.div`
    width: 100%;
    padding: 20px;

    @media screen and (min-width: 1080px) {
        width: 50%;
        padding: 0px 10px 0px 20px;
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
        text-align: justify;
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
