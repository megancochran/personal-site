import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";

export const Home = () => {
  const nav = useNavigate();
  return (
    <Flex
      bg="primary.main"
      h="100vh"
      w="100vw"
      flexWrap="wrap"
      alignContent="flex-start"
    >
      <Heading variant="heading2" paddingTop="10%" paddingLeft="5%" w="100%">
        HELLO, WORLD.
      </Heading>
      <Box marginLeft="2%" border="2px" w="266px" h="335px"></Box>
      <Heading variant="heading1" paddingLeft="5%" paddingTop="5%">
        MEGAN COCHRAN
      </Heading>
    </Flex>
  );
};
