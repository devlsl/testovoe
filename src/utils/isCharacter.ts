import { Character } from '../data/character'

export const isCharacter = (obj: Character): obj is Character => {
  if (obj.name === undefined) return false
  if (obj.look === undefined) return false
  if (obj.attributes === undefined) return false
  if (obj.points === undefined) return false
  if (obj.score === undefined) return false
  if (obj.skills === undefined) return false
  return true
}
