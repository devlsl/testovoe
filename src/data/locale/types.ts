// English as a default

export type Locales = 'ru' | 'en'

export type LocaleItem = Record<Locales, string>

export type Locale = {
  [englishWord: string]: LocaleItem
}
