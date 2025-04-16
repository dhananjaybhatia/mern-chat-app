import { Input, VStack } from "@chakra-ui/react";
const Login = () => {
  return (
    <div VStack spacing="5px">
      <FormLabel>
        <Input placeholder="Enter your name"></Input>
      </FormLabel>
    </div>
  );
};

export default Login;
