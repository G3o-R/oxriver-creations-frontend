import {
  ContactInfoContainer,
  ContactInfoWrapper,
  CustomWebsitesContainer,
  CustomWebsitesWrapper,
  DisplayGrid,
  HeaderContainer,
  HeaderWrapper,
  MethodsContainer,
  MethodsWrapper,
  ServicesContainer,
  ServicesPage,
  ServicesWrapper,
} from "../styles/ServicesPageStyles";

export default function Services() {
  return (
    <ServicesPage>
      <HeaderWrapper>
        <HeaderContainer>
          <h1>
            Ask us about our <span>Services</span>
          </h1>
        </HeaderContainer>
      </HeaderWrapper>
      <ServicesWrapper>
        <ServicesContainer>
          <DisplayGrid>
            <ul>Hats</ul>
            <ul>Shirts</ul>
            <ul>Coasters</ul>
            <ul>Hoodies</ul>
            <ul>Pot Holder</ul>
            <ul>Mugs</ul>
            <ul>Keychains</ul>
            <ul>Ornaments</ul>
            <ul>Cups</ul>
            <ul>Aprons</ul>
            <ul>Figurines</ul>
            <ul>Jewelery Boxes</ul>
          </DisplayGrid>
        </ServicesContainer>
      </ServicesWrapper>
      <MethodsWrapper>
        <MethodsContainer>
          <h3>Vinyl</h3>
          <h3>Laser Engraving</h3>
          <h3>3D Prints</h3>
        </MethodsContainer>
      </MethodsWrapper>
      <ContactInfoWrapper className="contact-info">
        <ContactInfoContainer>
          <h3>555-555-555</h3>
          <h3>Oxriver@gmail.com</h3>
        </ContactInfoContainer>
        <CustomWebsitesWrapper>
          <CustomWebsitesContainer>
            <label>
              For Custom Websites <span>Learn More</span>
            </label>
            <ContactInfoContainer>
              <h3>555-518-0326</h3>
              <h3>g3orbuilds@gmail.com</h3>
            </ContactInfoContainer>
          </CustomWebsitesContainer>
        </CustomWebsitesWrapper>
      </ContactInfoWrapper>
    </ServicesPage>
  );
}
