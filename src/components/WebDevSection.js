import { 
    StyledWebDevSection,
    Content, 
    HeaderWrapper,
    HeaderContainer,
    StyleCardsWrapper,
    StyleCardsContainer
 } from "../styles/WebDevSectionStyles";
import StyleCard from "./StyleCard";


export default function WebDevSection(){
    
    return(
        <StyledWebDevSection className="web-development">
            <Content className="content">
                <HeaderWrapper className="header-wrapper">
                    <HeaderContainer className="header-container">
                        <h3>
                            Interested in a custom website?
                        </h3>
                    </HeaderContainer>
                </HeaderWrapper>
                <StyleCardsWrapper>
                    <StyleCardsContainer>
                        <StyleCard text="Give it" keyword="Depth"/>
                        <StyleCard text="Make it" keyword="Pop"/>
                        <StyleCard text="Give it" keyword="Life"/>
                    </StyleCardsContainer>
                </StyleCardsWrapper>
            </Content>
        </StyledWebDevSection>
    )
}