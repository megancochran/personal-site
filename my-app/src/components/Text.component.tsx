import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

export type HeadingProps = {
  type?:
    | "body"
    | "caption"
    | "caption2"
    | "caption3"
    | "caption4"
    | "smallText"
    | "input";
} & ChakraTextProps;

export const Text = ({ type = "body", children, ...props }: HeadingProps) => {
  return (
    <ChakraText variant={type} {...props}>
      {children}
    </ChakraText>
  );
};
