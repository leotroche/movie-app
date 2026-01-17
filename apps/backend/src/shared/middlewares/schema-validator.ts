import type { NextFunction, Request, Response } from 'express'
import type { ZodObject } from 'zod'

export function schemaValidator(schema: ZodObject) {
  return (req: Request, _res: Response, next: NextFunction) => {
    schema.parse({
      params: req.params,
      query: req.query,
    })

    next()
  }
}
