import styled from "styled-components";
import { motion } from "framer-motion";

export const StyleCardWrapper = styled(motion.div)`
    max-width: 300px;
    width: 100%;
    border: 4px solid #2e2e2e;
    border-radius: 12px;
    aspect-ratio: 7/3;
    overflow: hidden;

    &.depth .text{
        transition: font-size .3s ease;
    }

    &.pop .key-word{
        transition: font-size .3s ease-in-out;
    }
`;

export const StyleCardContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;

    
    
    .text {
        font-size: 1.5rem;
        font-weight: 500;
    }

    .key-word{
        font-weight: bold;
        color: #2e2e2e;
    }
    /* .depth > .text{
        transition: font-size .3s ease;

    } */


     .depth > &:hover{
        .text{
            font-size: 1rem;
        }
     }

     .pop > &:hover{
        .text .key-word{
            font-size: 2rem;
        }
     }
`;

// export const StyledText = styled.p`
//     font-size: 1rem;
//     font-weight: 500;
// `;

// export const StyledSpan = styled.span`
//     font-weight: bold;
//     color: #2e2e2e;
// `;