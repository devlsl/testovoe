// English as a default

import { Words } from 'data/locale/words'

export const langs = ['ru', 'en'] as const

export type Lang = (typeof langs)[number]

export type LocaleItem = Record<Lang, string>

export type Locale = {
  [word in Words]: LocaleItem
}
