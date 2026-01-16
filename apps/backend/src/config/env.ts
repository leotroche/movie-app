import z from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),

  // TMDB
  TMDB_API_KEY: z.string().min(1),
  TMDB_BASE_URL: z.string().min(1),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('❌ Environment validation failed:')
  console.error(parsedEnv.error.issues)
  process.exit(1)
}

export const env = Object.freeze(parsedEnv.data)
