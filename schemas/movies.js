import z from 'zod'

const movieSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .min(1),
  year: z.number().int().min(1900).max(2024),
  director: z.string(),
  duration: z.number().int().positive(),
  poster: z.string().url({
    message: 'Poster must be a valid URL',
  }),
  rate: z.number().min(0).max(10).optional(),
  genre: z.array(
    z.enum([
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Horror',
      'Romance',
      'Sci-Fi',
      'Thriller',
      'Fantasy',
    ])
  ),
})

export const validateMovie = object => {
  return movieSchema.safeParse(object)
}

export const validatePartialMovie = object => {
  return movieSchema.partial().safeParse(object)
}
