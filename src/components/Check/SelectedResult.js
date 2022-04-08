import {
    Code,
    Heading
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';

const SelectedResult = ({ result, setSelectedResult }) => (
    <>
        <Heading color="#fff" fontWeight="200">
            Exposure Details
            <CloseIcon boxSize="1.5rem" marginLeft="2rem" cursor="pointer" onClick={() => setSelectedResult(null)} />
        </Heading>
        <pre style={{ backgroundColor: "#fff", padding: "2rem" }}>{JSON.stringify(result, null, 2)}</pre>
    </>
);

export default SelectedResult;