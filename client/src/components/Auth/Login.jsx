import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Container h={"80vh"} width={"100vw"}>
      <VStack justifyContent={"center"} spacing={"16"}>
        <Heading>Welcome to LPU</Heading>
        <form style={{ width: "100%" }} onSubmit={submitHandler}>
          <Box my={"4"}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="xyz@gmail.com"
              type="email"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={"4"}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              required
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type="password"
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box>
            <Link to={"/forgetpassword"}>
              <Button fontSize={"sm"} variant={"link"}>
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button my={4} colorScheme="yellow" type="submit">
            Login
          </Button>
          <Box>
            New User?{" "}
            <Link to={"/register"}>
              <Button colorScheme="yellow" variant={"link"}>
                Sign Up
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
