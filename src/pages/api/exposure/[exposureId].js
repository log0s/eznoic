import enzoicMiddleware from 'utils/enzoicMiddleware';

export const config = {
    api: {
        externalResolver: true
    },
};

export default enzoicMiddleware((req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed. Allowed methods: GET' });
    }

    req.enzoic.getExposureDetails(req.query.exposureId, (err, details) => {
        if (err) {
            res.status(500).json({ message: `Failed to fetch exposure details from Enzoic API. Error: ${err}` });
        } else {
            res.json(details);
        }
    });
});