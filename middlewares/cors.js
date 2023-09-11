import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://127.0.0.1:5500',
  'http://localhost:3000',
  'http://localhost:8080',
  'https://movies.com',
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => {
  return cors({
    origin: (origin, cb) => {
      if (acceptedOrigins.includes(origin)) {
        return cb(null, true)
      }

      if (!origin) {
        return cb(null, true)
      }

      return cb(new Error('Not allowed by CORS'))
    },
  })
}
