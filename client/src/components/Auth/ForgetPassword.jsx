import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/actions/profile";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/userReducer";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const { error, message, loading } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  return (
    <Container h={"80vh"} width={"100vw"} py={"16"}>
      <form onSubmit={submitHandler}>
        <Heading
          my={"16"}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        >
          Forget Password
        </Heading>
        <VStack>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="xyz@gmail.com"
            type="email"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            type="submit"
            w={"full"}
            colorScheme="yellow"
          >
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
