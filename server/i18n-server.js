const path = require('path')
const express = require('express')
const server = express()
const i18nextMiddleware = require('i18next-express-middleware')
const Backend = require('i18next-node-fs-backend')
const { i18nInstance, lng, ns } = require('../app/lib/i18n')

// no es necesario una promesa, pero nos permite saber cuando se ha realizado la instancia
const i18next = () => new Promise((resolve, reject) => {
    // i18nInstance

    i18nInstance
        .use(Backend)
        .use(i18nextMiddleware.LanguageDetector)
        .init({
        fallbackLng: 'es',
        debug:false,
        load: 'languageOnly',
        // detection: optionsLang,
        preload:lng, // preload all langages
        ns:ns, // need to preload all the namespaces
        defaultNS:'common',
        backend: {
            loadPath: path.join(appRoot, '/locales/{{lng}}/{{ns}}.json'),
            addPath: path.join(appRoot, '/locales/{{lng}}/{{ns}}.missing.json')
        }
    }, () =>  resolve('PROMESA RESUELTA'))

    

}).catch((e) => reject(e))




module.exports = {
    i18next,
    i18nInstance
}