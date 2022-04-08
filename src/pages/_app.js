import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '@fontsource/raleway/400.css'

const theme = extendTheme({
    fonts: {
        heading: 'Raleway, sans-serif',
        body: 'Raleway, sans-serif'
    },
});

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default MyApp;