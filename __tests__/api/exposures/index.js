jest.mock('../../../src/utils/enzoicMiddleWare', () => ({
    __esModule: true,
    default: handler => (req, res) => handler(req, res)
}));

import exposures from '../../../src/pages/api/exposure';

import { mockReq, mockRes as res, mockJson, mockEnzoic as enzoic } from '../../__utils__/apiMocks';

const req = {
    ...mockReq,
    body: {}
};

describe('/api/exposures', () => {
    it('should return an error if the method is not correct', () => {
        req.method = 'GET';

        exposures(req, res);

        expect(res.status).toHaveBeenCalledWith(405);
        expect(mockJson).toHaveBeenCalledWith({ message: 'Method not allowed. Allowed methods: POST' });
    });

    it('should return an error if there is no username present in the POST body', () => {
        req.method = 'POST';

        exposures(req, res);

        expect(res.status).toHaveBeenCalledWith(422);
        expect(mockJson).toHaveBeenCalledWith({ message: 'Missing required attribute: username' });
    });

    it('should call the Enzoic API with the proper username if all input params are present', () => {
        req.method = 'POST';
        req.body.username = 'PANDA';

        exposures(req, res);

        expect(enzoic.getExposuresForUser).toHaveBeenCalledWith('PANDA', expect.anything());
    });
});