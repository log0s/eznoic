import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Stack, Image } from '@chakra-ui/react';

import Login from 'components/Login';
import Check from 'components/Check';

const Home = () => {
    const [credentials, setCredentials] = useState(null);
    
    return (
        <Box>
            <Head>
                <title>EZnoic - Username checking made EZ with Enzoic</title>
                <meta name="description" content="Easy-to-use UI for interfacing with the Enzoic API" />
                <link rel="icon" href="/enzoic-icon-square-png.png" />
            </Head>
            <Flex
                flexDirection="column"
                width="100wh"
                height="100%"
                minHeight="100vh"
                backgroundColor="#232f38"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image src="/enzoicLogo_regularFont.png" alt="Enzoic logo" m="7rem 0" />
                    {!credentials ? (
                        <Login setCredentials={setCredentials} />
                    ) : (
                        <Check credentials={credentials} />
                    )}
                </Stack>
            </Flex>
        </Box>
    );
};

export default Home;