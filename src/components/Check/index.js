import { useState } from 'react';

import Results from './Results';
import Username from './Username';
import SelectedResult from './SelectedResult';

const Check = ({ credentials }) => {
    const [results, setResults] = useState(null);
    const [selectedResult, setSelectedResult] = useState(null);

    return (selectedResult ? (
            <SelectedResult result={selectedResult} setSelectedResult={setSelectedResult} />
        ) : results ? (
            <Results results={results} credentials={credentials} setResults={setResults} setSelectedResult={setSelectedResult} />
        ) : (
            <Username credentials={credentials} setResults={setResults} />
        )
    );
};

export default Check;