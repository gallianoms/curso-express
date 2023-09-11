import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const require = createRequire(import.meta.url)

/**
 * Loads a JSON file from the specified path.
 * @param {string} jsonFilePath - Path of the JSON file.
 * @returns {object} - Loaded JSON object.
 */
export function loadJSON(jsonFilePath) {
  const resolvedPath = resolve(fileURLToPath(import.meta.url), jsonFilePath)
  return require(resolvedPath)
}
