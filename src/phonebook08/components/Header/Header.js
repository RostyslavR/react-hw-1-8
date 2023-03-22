import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      p={4}
      bg={colorMode === "dark" ? "gray.600" : "gray.200"}
      fontSize="xl"
    >
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />
          <UserMenu />
        </Flex>
      </Container>
    </Box>
  );
};
