const app = require('../app')
const request = require('supertest')

jest.setTimeout(15000)

// GET All threats from API
describe('GET /api/threat/getallthreats', () => {
    test('Should responds with 200 status code', async () => {
        const response = await request(app).get('/api/threat/getallthreats').send()
        expect(response.status).toBe(200)
    })

    test('Should responds with content-type application/json', async () => {
        const response = await request(app).get('/api/threat/getallthreats').send()
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
})

// GET Threat by ID
describe('GET /api/threat/getthreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo', () => {
    test('Should responds with 200 status code', async () => {
        const response = await request(app).get('/api/threat/getthreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo').send()
        expect(response.status).toBe(200)
    })

    test('Should responds with content-type application/json', async () => {
        const response = await request(app).get('/api/threat/getthreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo').send()
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
})

// DELETE Threat by ID
describe('POST /api/threat/deletethreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo', () => {
    test('Should responds with 200 status code', async () => {
        const response = await request(app).post('/api/threat/deletethreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo').send()
        expect(response.status).toBe(200)
    })

    test('Should responds with content-type application/json', async () => {
        const response = await request(app).post('/api/threat/deletethreat/bzIyMDcxNGxPMHc5V0NVdWdRb1prNnFGYVo').send()
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })
})