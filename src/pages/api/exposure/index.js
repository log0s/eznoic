import paramsHelper from "utils/paramsHelper";

export default paramsHelper((req, res) => {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed. Allowed methods: POST' });
        return;
    }

    if (!req.body.username) {
        res.status(422).json({ message: 'Missing required attribute: username' });
        return;
    }

    res.send('PANDA');
});