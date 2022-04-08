const requiredParams = ['apiKey', 'secret'];

const paramsHelper = handler => (req, res) => {
    const errors = [];

    requiredParams.forEach(param => {
        if (!req.query[param]) {
            errors.push(param);
        }
    });

    if (errors.length > 0) {
        return res.status(422).json({ message: `Missing required query parameters: ${errors.join(', ')}`});
    }

    return handler(req, res);
};

export default paramsHelper;