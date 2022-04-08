import { useState } from "react";
import {
    Box,
    Text,
    Flex,
    Stack,
    Button,
    Heading
} from "@chakra-ui/react";
import { WarningTwoIcon } from '@chakra-ui/icons';

const Results = ({ results, credentials: { apiKey, secretKey }, setSelectedResult }) => {
    const handleClick = async result => {
        const res = await fetch(`/api/exposure/${result}?apiKey=${apiKey}&secret=${secretKey}`, {
            method: 'GET'
        });

        const exposure = await res.json();

        setSelectedResult(exposure);
    };

    return (
        <>
            <Heading color="#fff" fontWeight="200">Results</Heading>
            <Box minW={{ base: "90%", md: "468px" }}>
                {results.length > 0 ? (
                    <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="#232f38"
                        boxShadow="md"
                    >
                        {results.map((result, i) => (
                            <Button
                                key={i}
                                width="100%"
                                color="232f38"
                                variant="solid"
                                position="relative"
                                onClick={() => handleClick(result)}
                                justifyContent="center"
                                leftIcon={<WarningTwoIcon color="#ed1a03" position="absolute" left="0.5rem" top="0.75rem" />}
                            >
                                {result}
                            </Button>
                        ))}
                    </Stack>
                ) : (
                    <Flex justifyContent="center" alignItems="center" mt="10vh">
                        <Text color="green" fontSize="3rem">No exposures found!</Text>
                    </Flex>
                )}
                
            </Box>
        </>
    );
};

export default Results;