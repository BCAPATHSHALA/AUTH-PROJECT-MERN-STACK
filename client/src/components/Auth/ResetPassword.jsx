import { Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../../redux/actions/profile";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/profileReducer";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const params = useParams();

  const { error, message, loading } = useSelector((state) => state.profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
      navigate("/login");
    }
  }, [dispatch, error, message, navigate]);

  return (
    <Container py={"16"} h={"90vh"}>
      <form onSubmit={submitHandler}>
        <Heading
          my={"16"}
          textTransform={"uppercase"}
          textAlign={["center", "left"]}
        >
          Reset Password
        </Heading>
        <VStack>
          <Input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="yellow.500"
          />
          <Button
            isLoading={loading}
            type="submit"
            w={"full"}
            colorScheme="yellow"
          >
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
