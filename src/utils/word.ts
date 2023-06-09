import { Words } from 'data/locale/words'
import { locale } from 'data/locale'
import { Lang } from 'data/locale/types'
import { capitalize } from 'utils/capitalize'

export const word = (word: Words, lang: Lang, capitalized: boolean = false) => {
  const wordInLowerCase = locale[word][lang]

  return capitalized ? capitalize(wordInLowerCase) : wordInLowerCase
}
