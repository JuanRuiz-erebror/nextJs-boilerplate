const express = require('express')
const path = require('path')
const server = express()
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { getCookieFromServer } = require('../app/lib/cookie-handler')
const { i18next, i18nInstance, i18nStatic } = require('./i18n-server')

const i18nextMiddleware = require('i18next-express-middleware')

global.appRoot = process.cwd();

const port = 3000;

const prepare = () => app.prepare()
    .then(() => server    
    
        .use(i18nextMiddleware.handle(i18nInstance))
        .use('/locales', express.static(path.join(appRoot, '/locales')))
        .post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18nInstance))
        .get('*', (req, res) => {
            let lang = getCookieFromServer('i18next',req)            
            if (typeof lang !== 'undefined') i18nInstance.changeLanguage(lang)
            return handle(req, res)
        }))
    .then(() => server.listen(port, (err) => console.log(`> Ready on http://localhost:${port}`)))
    .catch((err) => {
        console.error('ERROR',err);
        process.exit(1)
    });


// First, we load i18n instance and then pass all middlewares
i18next().then(() => prepare()).catch((e) => console.log('PROMISE ERROR',e))

/*i18next()
prepare()*/



