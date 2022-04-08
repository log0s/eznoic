import {
    Code,
    Heading
} from "@chakra-ui/react";

const SelectedResult = result => (
    <>
        <Heading color="#fff" fontWeight="200">Exposure Details</Heading>
        <pre backgroundColor="#fff" padding="2rem">{JSON.stringify(result.result, null, 2)}</pre>
    </>
);

export default SelectedResult;