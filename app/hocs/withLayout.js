import { Component, PropTypes } from 'react'
import { loadGetInitialProps } from 'next/dist/lib/utils'
import LayoutFull from '../layouts/layoutFull'
import { isAuthenticated } from "../services/auth/auth"
import Navbar from '../components/Navbar'
import Head from 'next/head'

const BaseLayout = (type = 1) => ComposedComponent => class WithLayout extends Component {
  
    static async getInitialProps(ctx) {
        const isAuth = isAuthenticated(ctx)
        const load = loadGetInitialProps(ComposedComponent, ctx)

        return { isAuth, load }  
    }

    constructor(props) {
        super(props)
    }

    render() {
        switch (type) {            
            case 1:
                return (
                    <LayoutFull {...this.props}>
                        <ComposedComponent 
                            openModal={this.openModal}
                            {...this.props} 
                        />
                    </LayoutFull>
                )
            case 2:
                return (
                    <div>
                        <Head>
                          <meta name="viewport" content="width=device-width, initial-scale=1" />
                          <meta charSet="utf-8" />
                        </Head>
                        <style jsx global>{`
                          html, body, .container-fluid, .row {
                                height: 100%;
                            }


                            @media (min-width: 992px) {
                              .sidebar  {
                                position: absolute;
                                top: 60px;
                                left: 0;
                                bottom: 0;
                                z-index: 1000;
                                display: block;
                                overflow-y:auto;
                              }
                            }

                            .sidebar2 {
                              border-right: 1px solid #000;
                              top: 59px;
                            }

                            .sidebar3 {
                              box-shadow: 12px 1px 20px 0px rgb(189, 189, 189);
                              z-index:1010;
                              border:none;
                              top: 59px;
                              overflow:hidden;
                            }

                        `}</style>
                        <Navbar {...this.props} />
                        <ComposedComponent {...this.props} />
                      </div>
                )
        }

    }
};


export default BaseLayout