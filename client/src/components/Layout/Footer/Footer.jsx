import { Flex, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Footer = () => {
  return (
    <>
      <Flex
        width={"100vw"}
        h={"20vh"}
        alignItems="center"
        gap="4"
        padding={"2"}
        bgColor={"#232323"}
        color={"#ffffff"}
        justifyContent={"center"}
        flexDirection={["column", "row"]}
      >
        <Box p="2">
          <Heading size="md">AUTH PROJECT ©️2024</Heading>
        </Box>

        <ButtonGroup gap="2">
          <Link to={"/"}>
            <Button colorScheme="teal" variant={"solid"}>
              Home
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Footer;
