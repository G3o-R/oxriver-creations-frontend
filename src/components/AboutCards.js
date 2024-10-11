import { 
    Container,
    ImageContainer,
    ImageWrapper,
    TextContainer,
    TextWrapper,
    Wrapper
     } from "../styles/AboutCardsStyles"


export function AboutCrafts(){
    return(
        <Wrapper>
            <Container>
                <ImageWrapper>
                    <ImageContainer>
                        <img 
                        src="https://b3268060.smushcdn.com/3268060/wp-content/uploads/elementor/thumbs/roman-kraft-WOzVqzpScrk-unsplash-1-scaled-qiw573at4m4vxiy4gtfl0ceirexjhs3e7bvglnhtsw.jpg?lossy=1&strip=1&webp=1"
                        alt="crafting"
                        />
                    </ImageContainer>
                </ImageWrapper>
                <TextWrapper>
                    <TextContainer>
                        <h1>Crafts</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TextContainer>
                </TextWrapper>
            </Container>
        </Wrapper>
    )
}

export function AboutPrints(){
    return(
        <Wrapper>
            <Container>
                <ImageWrapper>
                    <ImageContainer>
                        <img 
                        src="https://mach5ive.com/cdn/shop/articles/resin_3d_printed_horse_825x.png?v=1692051380"
                        alt="3D printing"
                        />
                    </ImageContainer>
                </ImageWrapper>
                <TextWrapper>
                    <TextContainer>
                        <h1>3D Prints</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </TextContainer>
                </TextWrapper>
            </Container>
        </Wrapper>
    )
}