import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function ChakraSection() {
  return (
    <Box
      minH="100vh"
      bg="gray.900"
      color="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <VStack spacing={6} textAlign="center">
        <Heading
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          color="pink.400"
        >
          Hello Chakra UI
        </Heading>

        <Text maxW="600px" fontSize="lg" color="gray.400">
          Build modern React applications with Chakra UI.
        </Text>

        <Button colorScheme="pink" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}
