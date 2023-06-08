import { Words } from 'data/locale/words'
import { locale } from 'data/locale'
import { useAppSelector } from 'hooks/store'

export const useLocale = (word: Words) => {
  const lang = useAppSelector((state) => state.app.lang)
  return locale[word][lang]
}
