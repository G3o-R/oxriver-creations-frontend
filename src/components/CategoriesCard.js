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
import { useNavigate } from "react-router-dom";

export default function CategoriesCard({
  categoryData,
  index,
  currentIndex,
  type = "",
}) {
  const { cover_photo, name} = categoryData;
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate()
  const isLarge = useMediaQuery({
    query: '(max-width: 860px)'
  })

  function OnCardClick(){
    let name = categoryData.name;
    let categoryRoute = name.split(" ").join("-")
    navigate(`${categoryRoute}`)
  }

  return (
    <CardWrapper
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={OnCardClick}
      className={type}
    >
      <CardContainer>
        <ImageWrapper>
          <ImageContainer>
            <img src={cover_photo} alt="Product Image" loading="lazy"/>
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
            <TitleWrapper>
              <TitleContainer>
                <CategoryTitle>{name}</CategoryTitle>
              </TitleContainer>
            </TitleWrapper>
          </OverlayContainer>
        </OverlayWrapper>
      </CardContainer>
    </CardWrapper>
  );
}
