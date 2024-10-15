import { useState } from "react";
import { 
    CardContainer, 
    CardWrapper, 
    CategoryTitle, 
    ImageContainer, 
    ImageWrapper, 
    MenuContainer, 
    MenuOption, 
    MenuWrapper, 
    OverlayContainer, 
    OverlayWrapper, 
    TextContainer, 
    TextWrapper,
    TitleWrapper
} from "../styles/ProductCardStyles";

// fix/remove the on hover effect for the images
// onHover a "menu" should come up from the botoom of the
// card and cover half of the image, and display four smaller square images of 
// different related products
// instead of products section this will be the categories secion


export default function ProductCard({image}){

    const [isActive, setIsActive] = useState(false)

    return(
        <CardWrapper 
        onMouseEnter={()=> setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        >
            <CardContainer>
                <ImageWrapper>
                    <ImageContainer>
                        <img src={image} alt="Product Image"/>
                    </ImageContainer>
                </ImageWrapper>
                <OverlayWrapper className={isActive ? "active" : "hidden"}>
                {/* <OverlayWrapper className={"active"}> */}
                    <OverlayContainer>
                        <TitleWrapper>
                            <CategoryTitle>Title</CategoryTitle>
                        </TitleWrapper>
                        <MenuWrapper>
                            <MenuContainer>
                                <MenuOption>1</MenuOption>
                                <MenuOption>2</MenuOption>
                                <MenuOption>3</MenuOption>
                                <MenuOption>4</MenuOption>
                            </MenuContainer>
                        </MenuWrapper>
                    </OverlayContainer>
                </OverlayWrapper>
            </CardContainer>
        </CardWrapper>
    )    
}