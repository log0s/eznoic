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

const validKeyLength = 32;

const Login = ({ setCredentials }) => {
    const [apiKey, setApiKey] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [showApiKey, setShowApiKey] = useState(false);
    const [showSecretKey, setShowSecretKey] = useState(false);

    const handleApiChange = e => setApiKey(e.target.value);
    const handleSecretChange = e => setSecretKey(e.target.value);
    const handleShowApiClick = () => setShowApiKey(!showApiKey);
    const handleShowSecretClick = () => setShowSecretKey(!showSecretKey);

    const handleLogin = e => {
        if (apiKey.length !== validKeyLength || secretKey.length !== validKeyLength) return;

        setCredentials({ apiKey: encodeURIComponent(apiKey), secretKey: encodeURIComponent(secretKey) });
    }

    const apiKeyIsInvalid = apiKey.length !== validKeyLength;
    const secretKeyIsInvalid = secretKey.length !== validKeyLength;

    return (
        <>
            <Heading color="#fff" fontWeight="200">Welcome</Heading>
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
                                value={apiKey}
                                onChange={handleApiChange}
                                placeholder="API Key"
                                type={showApiKey ? "text" : "password"}
                                isInvalid={apiKeyIsInvalid}
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
                                value={secretKey}
                                onChange={handleSecretChange}
                                placeholder="Secret Key"
                                type={showSecretKey ? "text" : "password"}
                                isInvalid={secretKeyIsInvalid}
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
                        onClick={handleLogin}
                        disabled={apiKeyIsInvalid || secretKeyIsInvalid}
                    >
                        Login
                    </Button>
                    </Stack>
            </Box>
        </>
    );
};

export default Login;