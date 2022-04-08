import paramsHelper from "utils/paramsHelper";

export default paramsHelper((req, res) => {
    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed. Allowed methods: GET' });
        return;
    }

    res.send('PANDA');
});