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
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../redux/actions/user";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("email", email);
    myForm.append("password", password);
    dispatch(register(myForm));
  };

  return (
    <Container h={"80vh"} width={"100vw"}>
      <VStack justifyContent="center" spacing={"16"}>
        <Heading textTransform={"uppercase"}>Registration</Heading>

        <form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Box my={"4"}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="abc"
              type={"text"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={"4"}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={"email"}
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
              type={"password"}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my={"4"} colorScheme={"yellow"} type="submit">
            Sign Up
          </Button>

          <Box>
            Already Signed Up?{" "}
            <Link to="/login">
              <Button colorScheme={"yellow"} variant="link">
                Login
              </Button>{" "}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Register;
