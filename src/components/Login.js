import { useState } from "react";
import {
    Box,
    Input,
    Stack,
    Button,
    Heading,
    InputGroup,
    FormControl,
    InputLeftElement,
    InputRightElement
} from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons';

const Login = () => {
    const [showApiKey, setShowApiKey] = useState(false);
    const [showSecretKey, setShowSecretKey] = useState(false);

    const handleShowApiClick = () => setShowApiKey(!showApiKey);
    const handleShowSecretClick = () => setShowSecretKey(!showSecretKey);

    return (
        <>
            <Heading color="#fff">Welcome</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="#fff"
                    boxShadow="md"
                >
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                color="gray.300"
                                pointerEvents="none"
                                children={<LockIcon color="gray.300" />}
                            />
                            <Input
                                placeholder="API Key"
                                type={showApiKey ? "text" : "password"}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowApiClick}>
                                {showApiKey ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                color="gray.300"
                                pointerEvents="none"
                                children={<LockIcon color="gray.300" />}
                            />
                            <Input
                                placeholder="Secret Key"
                                type={showSecretKey ? "text" : "password"}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowSecretClick}>
                                {showSecretKey ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Button
                        borderRadius={0}
                        variant="solid"
                        width="full"
                        backgroundColor="#ed1a03"
                        color="#fff"
                        colorScheme="blackAlpha"
                    >
                        Login
                    </Button>
                    </Stack>
            </Box>
        </>
    );
};

export default Login;