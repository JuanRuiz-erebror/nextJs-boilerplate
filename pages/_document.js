import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

     // styled-components for ssr
     static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()      
        let bootstrap = 'static/css/bootstrap.min.css'        
        let fa = 'static/css/fontawesome-all.min.css'
        let mdb = 'static/css/mdb.min.css'
        let places = 'static/js/places.js'
        // let mdb = 'static/css/mdb-pro.min.css'
        // let fa = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'

        if (process.env.NODE_ENV === 'production' ) {
            bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            fa = 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'          
            mdb = 'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.0/css/mdb.min.css'
            places = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA8cOR8iqFdBdBDrhIQk5YWs16qo2ssRC0&libraries=places'
        }

        return { ...page, styleTags, bootstrap, fa, mdb, places }
       
     }

    render () {
        return (
            <html>
                <Head>
                    <title>Cubiculum</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <script src={this.props.places} async defer></script>                 
                    <link rel="stylesheet" href={this.props.bootstrap}/>                    
                    <link rel="stylesheet" href={this.props.mdb} />
                    <link rel="stylesheet" href='static/css/flags/flag-icon.min.css' />
                    <link type="text/css" rel="stylesheet" href='static/css/base.css' />
                    <link href={this.props.fa} rel="stylesheet"/>
                    {this.props.styleTags}
                    
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>
            </html>
        )
    }
}
