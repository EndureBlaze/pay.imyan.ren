import { createI18nContext } from '@solid-primitives/i18n'

const dict = {
  en: {
    payTitle: 'Pay for Yanren',
    payment: 'ðSelect a payment methodð',
    saveImg: 'Long press to save the QR code image',
    yanren: 'Yanren',
  },
  zhCN: {
    payTitle: 'ç»çå¿æé±',
    payment: 'ðéæ©æ¯ä»æ¹å¼ð',
    saveImg: 'é¿æä¿å­äºç»´ç å¾ç',
    yanren: 'çå¿',
  },
}

const i18nValue = createI18nContext(dict, 'en')

export default i18nValue
