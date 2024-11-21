import { useState, useEffect, useRef } from "react";

export function LazyLoadWrapper({ children }) {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef}>{isInView ? children : <Placeholder />}</div>;
}

function Placeholder() {
  return <div style={{ height: "300px", background: "#e0e0e0" }} />;
}
