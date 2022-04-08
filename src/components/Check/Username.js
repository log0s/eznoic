import { useState } from "react";
import {
    Box,
    Input,
    Stack,
    Button,
    Heading,
    InputGroup,
    FormControl,
    InputLeftElement
} from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons';

const emailRegex = /\S+@\S+\.\S+/;

const Username = ({ credentials: { apiKey, secretKey }, setResults }) => {
    const [username, setUsername] = useState('');
    const handleUsernameChange = e => setUsername(e.target.value);

    const handleSubmit = async () => {
        const res = await fetch(`/api/exposure?apiKey=${apiKey}&secret=${secretKey}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        });

        const results = await res.json();

        setResults(results.exposures);
    };

    const usernameIsInvalid = !emailRegex.test(username);

    return (
        <>
            <Heading color="#fff" fontWeight="200">Check Username</Heading>
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
                                children={<EmailIcon color="gray.300" />}
                            />
                            <Input
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="Username"
                                type={"email"}
                                isInvalid={usernameIsInvalid}
                            />
                        </InputGroup>
                    </FormControl>
                    <Button
                        borderRadius={0}
                        variant="solid"
                        width="full"
                        backgroundColor="#ed1a03"
                        color="#fff"
                        colorScheme="blackAlpha"
                        onClick={handleSubmit}
                        disabled={usernameIsInvalid}
                    >
                        Submit
                    </Button>
                </Stack>
            </Box>
        </>
    );
};

export default Username;