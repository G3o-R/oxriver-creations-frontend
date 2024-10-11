import { 
    FooterContainer, 
    FooterWrapper, 
    LogoWrapper,
    LogoContainer,
    InfoWrapper,
    InfoContainer,
 } from "../styles/FooterStyles";


export default function Footer(){
    return (
        <FooterWrapper>
            <FooterContainer>
                <LogoWrapper>
                    <LogoContainer>
                        <img src="/OxRiverLogo.3.png" alt="OxRiver Logo" />
                    </LogoContainer>
                </LogoWrapper>
                <InfoWrapper>
                    <InfoContainer>
                        <label>Email: <span>oxrivercreations@gmail.com</span></label>
                        <label>Phone#: <span>555-555-5555</span></label>
                    </InfoContainer>
                </InfoWrapper>
            </FooterContainer>
        </FooterWrapper>
    )
}