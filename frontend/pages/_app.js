import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
