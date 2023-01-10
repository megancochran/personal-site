import { ComponentStyleConfig } from "@chakra-ui/react";

// !! This is a placeholder configuration cloned over from the Edzoo project

export const HeadingStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    color: "white",
  },
  // styles for different sizes ("sm", "md", "lg")
  // sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    display: {
      fontSize: ["4rem", null, "4.5rem", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["4.25rem", null, "4.75rem", null, null, null],
      fontWeight: 700,
    },
    heading1: {
      fontSize: ["60px", null, "60px", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["75px", null, "75px", null, null, null],
      fontWeight: 500,
    },
    heading2: {
      fontSize: ["35px", null, "35px", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["44px", null, "44px", null, null, null],
      fontWeight: 500,
    },
    heading3: {
      fontSize: ["1.875rem", null, "2.125rem", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["2.125rem", null, "2.375rem", null, null, null],
      fontWeight: 700,
    },
    heading4: {
      fontSize: ["1.625rem", null, "1.875rem", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["1.875rem", null, "2.125rem", null, null, null],
      fontWeight: 700,
    },
    heading5: {
      fontSize: ["1.4375rem", null, "1.625rem", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["1.625rem", null, "1.875rem", null, null, null],
      fontWeight: 700,
    },
    heading6: {
      fontSize: ["1.25rem", null, "1.4375rem", null, null, null],
      fontFamily: "Sunflower",
      fontStyle: "normal",
      lineHeight: ["1.4375rem", null, "1.625rem", null, null, null],
      fontWeight: 700,
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  // defaultProps: {},
};
