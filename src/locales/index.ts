import { createI18n } from 'vue-i18n'
import pl from './pl.json'

type MessageSchema = typeof pl

export const i18n = createI18n<[MessageSchema], 'pl'>({
  legacy: false,
  locale: 'pl',
  fallbackLocale: 'pl',
  messages: {
    pl: pl,
  },
})
