// English as a default

import { Words } from '../character'

export type Locales = 'ru' | 'en'

export type LocaleItem = Record<Locales, string>

export type Locale = {
  [word in Words]: LocaleItem
}
