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
    OptionOverlay, 
    OverlayContainer, 
    OverlayWrapper, 
    TextContainer, 
    TextWrapper,
    TitleContainer,
    TitleWrapper
} from "../styles/CategoriesCardStyles";

export default function CategoriesCard({categoryData}){
    const {image, category_name, products} = categoryData
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
                            <TitleContainer>
                                <CategoryTitle>{category_name}</CategoryTitle>
                            </TitleContainer>
                        </TitleWrapper>
                        <MenuWrapper>
                            <MenuContainer>
                                {products.map((productOption) => 
                                    (<MenuOption>
                                        <img src={productOption.image}/>
                                        <OptionOverlay></OptionOverlay>
                                    </MenuOption>))}
                            </MenuContainer>
                        </MenuWrapper>
                    </OverlayContainer>
                </OverlayWrapper>
            </CardContainer>
        </CardWrapper>
    )    
}