import { Center, ChakraProvider, Text, Button, VStack } from "@chakra-ui/react";
import React, { FC } from "react";

const EmailVerifiedNextPage: FC = () => {
  return (
    <ChakraProvider>
      <Center h="100vh">
        <VStack textAlign="center" spacing="6">
          <Text>Your email has been verified 🎉</Text>

          <Button onClick={() => window.location.assign("/admin")}>Continue to app</Button>
        </VStack>
      </Center>
    </ChakraProvider>
  );
};
export default EmailVerifiedNextPage;
