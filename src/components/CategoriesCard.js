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
  TitleWrapper,
} from "../styles/CategoriesCardStyles";
import { useMediaQuery } from 'react-responsive'

export default function CategoriesCard({
  categoryData,
  type = "",
  index,
  currentIndex
}) {
  const { cover_photo, name, sub_categories } = categoryData;
  const [isActive, setIsActive] = useState(false);
  const isLarge = useMediaQuery({
    query: '(max-width: 860px)'
  })

  return (
    <CardWrapper
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={type}
    >
      <CardContainer>
        <ImageWrapper>
          <ImageContainer>
            <img src={cover_photo} alt="Product Image" />
          </ImageContainer>
        </ImageWrapper>
        <OverlayWrapper
          className={
            isActive || (currentIndex == index && isLarge)
              ? "active"
              : "hidden"
          }
        >
          <OverlayContainer>
            <TitleWrapper onClick={() => console.log("go to product page")}>
              <TitleContainer>
                <CategoryTitle>{name}</CategoryTitle>
              </TitleContainer>
            </TitleWrapper>
            {/* having subcategories messes this up a bit */}
            {/* <MenuWrapper>
                            <MenuContainer>
                                {sub_categories.map((productOption) => 
                                    (<MenuOption
                                     onClick={()=>console.log("go to selected product")} 
                                     key={productOption.id}>
                                        <img src={productOption.cover_photo}/>
                                        <OptionOverlay></OptionOverlay>
                                    </MenuOption>)).slice(0,4)}
                            </MenuContainer>
                        </MenuWrapper> */}
          </OverlayContainer>
        </OverlayWrapper>
      </CardContainer>
    </CardWrapper>
  );
}
