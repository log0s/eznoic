import { useState } from 'react';

import Results from './Results';
import Username from './Username';

const Check = ({ credentials }) => {
    const [results, setResults] = useState(null);
    const [selectedResult, setSelectedResult] = useState(null);

    return (results ? (
        <Results results={results} setSelectedResult={setSelectedResult} />
    ) : (
        <Username credentials={credentials} setResults={setResults} />
    ));
};

export default Check;