import {
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user/operations";

const initialValues = {
  email: "",
  password: "",
  rememberMe: true,
};

export const SignInForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const onShow = () => setShow(!show);

  const onCancel = () => {
    formik.resetForm();
    onClose();
    navigate("/");
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(signIn(values));
      formik.resetForm();
      onClose();
      navigate("/");
    },
  });

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onCancel}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Input your information</DrawerHeader>
          <form onSubmit={formik.handleSubmit}>
            <DrawerBody>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Type email here"
                    autoFocus
                    required
                    variant="flushed"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup mb="20px">
                    <Input
                      id="password"
                      name="password"
                      type={show ? "text" : "password"}
                      placeholder="Type password here"
                      required
                      autoComplete="off"
                      variant="flushed"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <InputRightElement
                      children={
                        <IconButton
                          aria-label="show"
                          icon={show ? <ViewOffIcon /> : <ViewIcon />}
                          onClick={onShow}
                          bg="inherit"
                        />
                      }
                    />
                  </InputGroup>
                </FormControl>
                <Checkbox
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleChange}
                  isChecked={formik.values.rememberMe}
                  colorScheme="teal"
                >
                  Remember me?
                </Checkbox>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                aria-label="cancel"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button type="submit" aria-label="sign in" colorScheme="teal">
                Sign In
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};
