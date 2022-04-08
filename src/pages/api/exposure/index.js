import enzoicMiddleware from 'utils/enzoicMiddleware';

export const config = {
    api: {
        externalResolver: true
    },
};

export default enzoicMiddleware((req, res) => {
    const username = req.body.username;

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed. Allowed methods: POST' });
    }

    if (!username) {
        return res.status(422).json({ message: 'Missing required attribute: username' });
    }

    req.enzoic.getExposuresForUser(username, (err, result) => {
        if (err) {
            res.status(500).json({ message: `Failed to fetch results from Enzoic API. Error: ${err}` });
        } else {
            res.json({ exposures: result.exposures });
        }
    });
});