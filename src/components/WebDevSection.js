import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import {
  StyledWebDevSection,
  Content,
} from "../styles/WebDevSectionStyles";
import TestVanta from "./TestVanta";

export default function WebDevSection() {

  return (
    <StyledWebDevSection className="web-development">
      <Content className="content">
        <TestVanta />
      </Content>
    </StyledWebDevSection>
  );
}
