import { extendTheme } from "@chakra-ui/react";
import { HeadingStyles as Heading } from "./components/Heading.styles";
import { TextStyles as Text } from "./components/Text.styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";

export const theme = extendTheme({
  // If you want to override any component themes from the Chakra module, import your styles
  fonts,
  colors,
  components: {
    Heading,
    Text,
  },
});
