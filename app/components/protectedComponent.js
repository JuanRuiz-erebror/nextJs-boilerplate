export default class extends Page {


  static async getInitialProps({req}) {
    // Inherit standard props from the Page (i.e. with session data)
    let props = await super.getInitialProps({req})

    // If user is not signed in then redirect to access denied URL
    if (!props.session.user) {
      this.props.url.push('/access-denied')
    }

    return props
  }


  render() {
    return(
      <Layout session={this.props.session}>
        <p>Some content</p>
      </Layout>
    )
  }
}