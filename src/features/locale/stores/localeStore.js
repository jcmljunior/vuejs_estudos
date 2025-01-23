import { reactive } from 'vue';
import pt_BR from '@/features/locale/pt_BR.json';
import en_US from '@/features/locale/en_US.json';

const LOCALES = {
  pt_BR,
  en_US,
}
const LOCALE_KEY = 'user-locale'

const useLocaleStore = () =>
  reactive({
    locale: localStorage.getItem(LOCALE_KEY) || 'pt_BR',
    setLocale(locale) {

      if (!Object.keys(LOCALES).includes(locale)) {
        return
      }

      if (this.locale === locale) {
        return
      }

      this.locale = locale
      localStorage.setItem(LOCALE_KEY, locale)
    },

    getLocale() {
      return this.locale
    },

    removeLocale() {
      localStorage.removeItem(LOCALE_KEY)
    },

    translate(key, ...args) {
      if (!LOCALES[this.locale]) {
        return key
      }

      let message = LOCALES[this.locale][key]

      if(args.length && message.includes('%s')) {
        for (let i = 0; i < args.length; i++) {
          message = message.replaceFirst(`%s`, args[i])
        }
      }

      return message
    },
  })

export default useLocaleStore
