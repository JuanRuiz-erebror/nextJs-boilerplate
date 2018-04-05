import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

     // styled-components for ssr
     static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        const bootstrap = process.env.NODE_ENV !== 'production' 
            ? 'static/css/bootstrap.min.css'
            : 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
        return { ...page, styleTags, bootstrap }

       
       
     }

    render () {
        return (
            <html>
                <Head>
                    <title>Cubiculum</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />

                    <link rel="stylesheet" href={this.props.bootstrap} />
                    <link rel="stylesheet" href='static/css/base.css' />
                    <link rel="stylesheet" href='static/css/flags/flag-icon.min.css' />

                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
