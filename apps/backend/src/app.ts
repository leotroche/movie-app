import cors from '@fastify/cors'
import fastify from 'fastify'

import { logger } from './config/logger'

export const app = fastify({
  logger,
})

app.register(cors, { origin: true })

app.setErrorHandler(async (error, _request, reply) => {
  reply.log.error(error)

  return reply.status(500).send({
    message: 'Internal server error',
  })
})

app.get('/', async (_request, _reply) => {
  return { message: 'Hello, World!' }
})
