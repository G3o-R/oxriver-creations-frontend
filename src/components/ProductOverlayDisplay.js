import { 
    CloseBtn,
    ContentContainer,
    ContentWrapper,
    DescriptionContainer,
    DescriptionWrapper,
    DisplayContainer,
    DisplayWrapper,
    ImageContainer,
    ImageWrapper,
    OverlayContainer,
    PhotoSlidesContainer,
    PhotoSlidesWrapper,
 } from "../styles/ProductOverlayDisplayStyles";


export default function ProductOverlayDisplay(){

    return(
        <OverlayContainer>
            <CloseBtn>x</CloseBtn>
            <DisplayWrapper>
                <DisplayContainer>
                    <ContentWrapper>
                        <ContentContainer>
                            <ImageWrapper>
                                <ImageContainer>
                                    <img src="" alt="random text" />
                                </ImageContainer>
                            </ImageWrapper>
                            <DescriptionWrapper>
                                <DescriptionContainer>
                                    <h1>product name</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </DescriptionContainer>
                            </DescriptionWrapper>
                        </ContentContainer>
                    </ContentWrapper>
                    <PhotoSlidesWrapper>
                        <PhotoSlidesContainer>
                            {/* photos arr here */}
                        </PhotoSlidesContainer>
                    </PhotoSlidesWrapper>
                </DisplayContainer>
            </DisplayWrapper>

        </OverlayContainer>
    )
}