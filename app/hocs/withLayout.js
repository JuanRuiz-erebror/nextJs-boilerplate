import { Component, PropTypes } from 'react';
import { loadGetInitialProps } from 'next/dist/lib/utils';
// import configureProgressBar from '../util/routing';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import Head from 'next/head'
import Navbar from '../components/Navbar'

// color palette: http://paletton.com/#uid=33m0y0ksMDf8jVahZJZEepkKleL

export default (type = 1) => ComposedComponent => class WithLayout extends Component {
  
    static async getInitialProps(ctx) {
        return loadGetInitialProps(ComposedComponent, ctx);
        
    }

  /*componentDidMount() {
    configureProgressBar();
  }*/

    render() {
        console.log('PRRORPS', this.props,type)
        switch (type) {            
            case 1:
                return (
                    <div>
                        <Head />
                        <Navbar  {...this.props}/>    
                        <ComposedComponent {...this.props} />
                        <Footer/>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Head />
                        <Navbar  {...this.props}/>    
                        <ComposedComponent {...this.props} />
                    </div>
                )
        }

    }
};