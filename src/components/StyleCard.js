import {
  StyleCardContainer,
  StyleCardWrapper,
  span,
  p,
} from "../styles/StyleCardStyles";

export default function StyleCard({
  text = "text",
  keyword = "keyword",
}) {
  const variants = {
    default: {
      scale: 1,
      boxShadow: "0px 0px #202020",
    },
    depth: {
      transition: {
        type: "spring",
        stiffness: 300,
      },
      
    },
    pop: {
        // scale: 1.1,
        margin: "0px 5px 5px 0px",
        boxShadow: "5px 5px #202020",

        transition: {
          type: "tween",
          stiffness: 300,
        },
        
      },
  };

  const containerVariants = {
    default: {
      scale: 1,
      boxShadow: "inset 0px 9px 16px 8px rgba(46, 46, 46, 0.0)",
      backgroundColor: "#e9e9e9",
    },
    depth: {
      boxShadow: "inset 0px 9px 16px 8px rgba(46, 46, 46, 0.8)",
      backgroundColor: "#e1e1e1",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  return (
    <StyleCardWrapper
      className={keyword.toLowerCase()}
      whileHover={variants[keyword.toLowerCase()] || variants.default}
      initial={{
        boxShadow: "0px 0px rgb(32,32,32)"
      }}
    >
      <StyleCardContainer
        whileHover={
          containerVariants[keyword.toLocaleLowerCase()] ||
          containerVariants.default
        }
        initial={containerVariants.default}
      >
        <p className="text">
          {text} <span className="key-word">{keyword}</span>
        </p>
      </StyleCardContainer>
    </StyleCardWrapper>
  );
}
