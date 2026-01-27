import type { FastifyServerOptions } from 'fastify'

import { env } from './env'

type LoggerOptions = FastifyServerOptions['logger']

const loggerOptions: Record<'development' | 'production' | 'test', LoggerOptions> = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
}

export const logger = loggerOptions[env.NODE_ENV] ?? true
