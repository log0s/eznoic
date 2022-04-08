const mockJson = jest.fn();
const mockEnzoic = {
    getExposureDetails: jest.fn(),
    getExposuresForUser: jest.fn()
};

const mockReq = { enzoic: mockEnzoic };
const mockRes = { status: jest.fn(() => ({ json: mockJson })) };

export { mockJson, mockEnzoic, mockReq, mockRes };