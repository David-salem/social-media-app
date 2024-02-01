import {
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";

import { REGISTER } from "lib/routes";
import { Link as RouterLink } from "react-router-dom";
import { useLoading } from "hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "utils/form-validate";

export default function Login() {
  const { login, isLoading } = useLoading();
  const { register, handleSubmit } = useForm();

  async function handleLogin(data) {
    console.log(data);
  }

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxw="md" p="9" borderWidth="1px" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
          Log In
        </Heading>

        <form onSubmit={handleSubmit(handleLogin)}>
          <FormControl isInvalid={true} py="2">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              {...register("email", emailValidate)}
            />
            <FormErrorMessage>Email Incorrect</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={true} py="2">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", passwordValidate)}
            />
            <FormErrorMessage>Password Incorrect</FormErrorMessage>
          </FormControl>

          <Button
            mt="4"
            type="submit"
            colorScheme="teal"
            size="md"
            w="full"
            isLoading={true}
            loadingText="Logging in..."
          >
            Log In
          </Button>
        </form>

        <Text fontSize="xlg" align="center" mt="6">
          Don't have an account?{" "}
          <Link
            as={RouterLink}
            to={REGISTER}
            color="teal.800"
            fontWeight="medium"
            textDecor="underline"
            _hover={{ background: "teal.100" }}
          >
            Register
          </Link>{" "}
          instead!
        </Text>
      </Box>
    </Center>
  );
}
