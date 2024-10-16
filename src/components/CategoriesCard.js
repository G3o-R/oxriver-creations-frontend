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
                {/* <OverlayWrapper className={isActive ? "active" : "hidden"}> */}
                <OverlayWrapper className={"active"}>
                    <OverlayContainer>
                        <TitleWrapper>
                            <CategoryTitle>{category_name}</CategoryTitle>
                        </TitleWrapper>
                        <MenuWrapper>
                            <MenuContainer>
                                {products.map((productOption) => 
                                    (<MenuOption><img src={productOption.image}/></MenuOption>))}
                            </MenuContainer>
                        </MenuWrapper>
                    </OverlayContainer>
                </OverlayWrapper>
            </CardContainer>
        </CardWrapper>
    )    
}