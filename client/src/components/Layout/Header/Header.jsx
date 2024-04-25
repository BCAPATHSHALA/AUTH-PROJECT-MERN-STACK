import { Flex, Box, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";

// eslint-disable-next-line react/prop-types
const Header = ({ isAuthenticated = false }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

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
          <Heading size="md">AUTH PROJECT</Heading>
        </Box>

        <ButtonGroup gap="2">
          {isAuthenticated ? (
            <>
              <Link to={"/profile"}>
                <Button colorScheme="yellow">Profile</Button>
              </Link>
              <Button colorScheme="teal" onClick={logoutHandler}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <Button colorScheme="yellow">Login</Button>
              </Link>

              <Link to={"/register"}>
                <Button colorScheme="teal">Sign Up</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Header;
