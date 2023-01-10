import { ComponentStyleConfig } from "@chakra-ui/react";

// !! This is a placeholder configuration cloned over from the Edzoo project

export const TextStyles: ComponentStyleConfig = {
  // style object for base or default style
  // baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  // sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    caption1: {
      fontSize: ".75rem",
      lineHeight: "1.08rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    caption2: {
      fontSize: "1.4rem",
      lineHeight: "1.68rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    caption3: {
      fontSize: ".65rem",
      lineHeight: ".838rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    caption4: {
      fontSize: ".5rem",
      lineHeight: "2.75rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    body: {
      fontSize: "1.1rem",
      lineHeight: "1.3rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    smallText: {
      fontSize: ".6875rem",
      lineHeight: ".8125rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    input: {
      fontSize: ".9rem",
      lineHeight: "1.14",
      fontStyle: "normal",
      fontWeight: 400,
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  // defaultProps: {},
};
