// i18n.js

const i18next = require('i18next');
const XHR = require('i18next-xhr-backend');
const LanguageDetector = require('i18next-browser-languagedetector');
const { reactI18nextModule } = require('react-i18next');
const Cache = require('i18next-localstorage-cache');
const { getCookieFromBrowser } = require('./cookie-handler')
const lng = ['es','en'];
const ns = ['common','home','hello','lang'];



const options = {
 
  // lng: 'es',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ns,
  defaultNS: 'common',

  // debug: process.env.NODE_ENV !== 'production',
  debug: false,
  saveMissing: true,

  interpolation: {
    // escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value, format, lng) => {
      if (format === 'uppercase') return value.toUpperCase()
      return value
    }
  },
  cache: {
      enabled: true,
      expirationTime: 24 * 60 * 60 * 1000
    }
}

const reactOpt = {
  react: {
    wait: true, 
    withRef: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'  
  }
}

const i18nInstance = i18next



// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {

    let lang = 'es'

    if (localStorage.getItem('i18nextLng')) {
        lang = localStorage.getItem('i18nextLng').substring(0,2)
    }
    

    if (!localStorage.getItem(`i18next_res_${lang}`)) {        
        Object.assign(options,reactOpt)
    }

    Object.assign(options,{ fallbackLng: lang})

    i18nInstance
        .use(XHR) 
        .use(Cache)
        .use(LanguageDetector)
        .use(reactI18nextModule) 
    

  console.log('OPTRA',options)
  
}



// initialize if not already initialized
if (!i18nInstance.isInitialized) i18nInstance.init(options)

module.exports = { i18nInstance, lng, ns };

/*// a simple helper to getInitialProps passed on loaded i18n data
const getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18nInstance.options.defaultNS
  if (typeof namespaces === 'string') namespaces = [namespaces]

  req.i18n.toJSON = () => null // do not serialize i18next instance and send to client

  const initialI18nStore = {}
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {}
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
    })
  })


  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language
  }
}

module.exports = {
  getInitialProps,
  i18nInstance,
  I18n: i18next.default
}*/