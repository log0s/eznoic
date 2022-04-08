import Enzoic from '@enzoic/enzoic';

const enzoicMiddleware = handler => (req, res) => {
    const { apiKey, secret } = req.query;

    const missingParams = [];

    if (!apiKey) missingParams.push('apiKey');
    if (!secret) missingParams.push('secret');

    if (missingParams.length > 0) {
        return res.status(422).json({ message: `Missing required query parameters: ${missingParams.join(', ')}`});
    }

    req.enzoic = new Enzoic(apiKey, secret);

    return handler(req, res);
};

export default enzoicMiddleware;