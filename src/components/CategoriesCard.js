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
    const {image, name, products} = categoryData
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
                        <TitleWrapper onClick={()=>console.log("go to product page")}>
                            <TitleContainer>
                                <CategoryTitle>{name}</CategoryTitle>
                            </TitleContainer>
                        </TitleWrapper>
                        <MenuWrapper>
                            <MenuContainer>
                                {products.map((productOption) => 
                                    (<MenuOption
                                     onClick={()=>console.log("go to selected product")} 
                                     key={productOption.id}>
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