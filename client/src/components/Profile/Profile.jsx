import {
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { clearError, clearMessage } from "../../redux/reducers/profileReducer";

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.profile);

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
    <Container h={"80vh"} w={"100vw"} py={"8"}>
      <Heading m={"8"} textTransform={"uppercase"}>
        Profile
      </Heading>
      <Stack
        justifyContent={"flex-start"}
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={"8"}
      >
        <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
          <HStack>
            <Text fontWeight={"bold"}>Name</Text>
            <Text>{user?.name}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Email</Text>
            <Text>{user?.email}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>CreatedAt</Text>
            <Text>{user?.createdAt?.split("T")[0]}</Text>
          </HStack>

          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to={"/updateprofile"}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={"/changepassword"}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Profile;
