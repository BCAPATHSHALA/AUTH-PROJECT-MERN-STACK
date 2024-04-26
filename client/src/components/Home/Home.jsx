import { Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Flex
        h={"100vh"}
        w={"100vw"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading fontSize={["2em", "5em"]}>AUTH PROJECT</Heading>
        <Text>Login & Signup Portfolio Project</Text>
      </Flex>
    </>
  );
};

export default Home;
