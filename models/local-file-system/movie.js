import { randomUUID } from 'node:crypto'
import { loadJSON } from '../../utils.js'
const movies = loadJSON('../movies.json')

export class MovieModel {
  static getAll = async ({ genre }) => {
    if (genre) {
      return movies.filter(movie =>
        movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
    }
    return movies
  }

  static getById = async ({ id }) => {
    const movie = movies.find(movie => movie.id === id)
    return movie
  }

  static create = async ({ object }) => {
    const newMovie = {
      id: randomUUID(),
      ...object,
    }

    movies.push(newMovie)
    return newMovie
  }

  static delete = async ({ id }) => {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) {
      return false
    }

    movies.splice(movieIndex, 1)
    return true
  }

  static update = async ({ id, object }) => {
    const movieIndex = movies.findIndex(movie => movie.id === id)

    if (movieIndex === -1) return false

    movies[movieIndex] = {
      ...movies[movieIndex],
      ...object,
    }

    return movies[movieIndex]
  }
}
