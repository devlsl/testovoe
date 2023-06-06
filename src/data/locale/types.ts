// English as a default

import { Words } from '../character'

export const locales = ['ru', 'en'] as const

export type Locale = (typeof locales)[number]

export type LocaleItem = Record<Locale, string>

export type Translate = {
  [word in Words]: LocaleItem
}
