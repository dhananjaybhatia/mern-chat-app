import Signup from "../authentication/Signup";
import Login from "../authentication/Login";
import { Box, Container, Text } from "@chakra-ui/react";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/tabs";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="4"
        mt="10"
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
        w="100%"
      >
        <Text
          fontSize="4xl"
          fontWeight="extrabold"
          color="teal.800"
          fontFamily="Work Sans"
        >
          Whispr-Hear 🙉
        </Text>
      </Box>

      <Box
        width="100%"
        marginTop={4}
        p={4}
        bg="white"
        borderRadius="lg"
        boxShadow="sm"
      >
        <Tabs variant="soft-rounded" defaultIndex={0}>
          <TabList>
            <Tab width="50%" color="black">
              Login
            </Tab>
            <Tab width="50%" color="black">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
