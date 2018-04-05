
import Link from 'next/link';
import Hello1 from '../app/components/hello1';
import Hello2 from '../app/components/hello2';
import { compose } from 'redux';

import { translate } from 'react-i18next';
import { i18nInstance } from '../app/lib/i18n';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { setCookie } from '../app/lib/cookie-handler';
import withLayout from '../app/hocs/withLayout';
import ActiveLink from '../app/components/ActiveLink';
import withServerProps from '../app/hocs/withServerProps';

const foo = 'bar';

class Index extends React.Component {

	static async getInitialProps({ req }) {
	    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        const headers = req.headers
	    return { userAgent, headers }
	}


    render () {
	    const { t, tReady } = this.props
        console.log('HTHGHGHG', this.props, this.context)
	    return (
	          	<div>
	              	<h1>{t('title')}</h1>
                    <ActiveLink href="/counter">Counter</ActiveLink>
	           	</div>  
	    )
    }
}

translate.setI18n(i18nInstance);
// export default Index;

// exportd default withServerProps(Index)

export default compose(
    
    // tranlate antes que withLayout para que podamos pasar 
    // los props a todas las capas del withLayout
    translate(['home','common','lang']),
    withLayout()
)(Index)


/*export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

const withConnect = connect(mapStateToProps, mapDispatchToProps);*/
/*

class Index extends React.Component {
    render () {
      return (
        <div>
          <h1>{t('home.title')}</h1>
          <Hello1 />
          <Hello2 />
          <Link href="counter"><a>Counter</a></Link>
          }
        </div>
      )
    }
}



/*

const mapStateToProps = createStructuredSelector({
  aa: makeSelectAa(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}




const withConnect = connect(mapStateToProps, mapDispatchToProps);*/