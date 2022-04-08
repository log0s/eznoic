import Head from 'next/head';
import { Box, Flex, Stack, Image } from '@chakra-ui/react';

const Home = () => {
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
                height="100vh"
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
                    <Image src="/enzoicLogo_regularFont.png" alt="Enzoic logo" />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Home;