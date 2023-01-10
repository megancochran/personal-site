import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

export type HeadingProps = {
  type?:
    | "heading0"
    | "heading1"
    | "heading2"
    | "heading2SemiBold"
    | "heading3"
    | "heading3Point5"
    | "heading3Point5Regular"
    | "heading4"
    | "heading5"
    | "heading5SemiBold"
    | "heading6";
} & ChakraHeadingProps;

export const Heading = ({
  type = "heading2",
  children,
  ...props
}: HeadingProps) => {
  const htmlType = setHtmlType(type);
  return (
    <ChakraHeading as={htmlType} variant={type} {...props}>
      {children}
    </ChakraHeading>
  );
};

// Helper function to set the html type for the heading component
// This ensures we're writing semantic html for accessibility
const setHtmlType = (type: HeadingProps["type"]) => {
  switch (type) {
    case "heading1" || "heading0":
      return "h1";
    //multiple case statements are the equivalent of "OR" clauses
    case "heading2":
    case "heading2SemiBold":
      return "h2";
    case "heading3":
    case "heading3Point5":
    case "heading3Point5Regular":
      return "h3";
    case "heading4":
      return "h4";
    case "heading5":
    case "heading5SemiBold":
      return "h5";
    case "heading6":
      return "h6";
    default:
      return "h1";
  }
};
