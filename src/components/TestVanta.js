import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const TestVanta = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1a5c1d,
        backgroundColor: 0x111111,
        points: 14.00,
        THREE,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{
    width: "100%",
    minHeight: "100vh"
  }}/>;
};

export default TestVanta;
