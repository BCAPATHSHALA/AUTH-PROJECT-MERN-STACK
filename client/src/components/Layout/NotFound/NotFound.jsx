import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container h={"80vh"} w={"100vw"}>
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
        <RiErrorWarningFill size={"5rem"} />
        <Heading>Page Not Found</Heading>
        <Link to={"/"}>
          <Button variant={"ghost"}>Go to home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
