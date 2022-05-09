import supertest from 'supertest'
import app from '../../app'

describe('Testing useCase GetAllInstitution', () => {
  it('should test a request in the route /institutions', async () => {
    const res = await supertest(app).get('/institutions')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toBeDefined()
  })
})
