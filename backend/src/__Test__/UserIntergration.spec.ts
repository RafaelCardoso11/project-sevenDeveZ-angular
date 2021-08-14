
import request from 'supertest'
import app from '../app'

describe('Authentication', () => {
  it('should be able to create a user With router', async () => {
    const response = await request(app).post('/user').send({
      name: 'withene',
      email: 'withene28@gmail.com',
      password: '282828',
      phone: 61982637390
    })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('user.id')
  })
})
