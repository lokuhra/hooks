import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import '../src/style/style.css';
import 'natalia-ui/dist/styles.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container className="asdaaaaaaa">
          <Head>
            <title>React Hooks</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </Container>

    );
  }
}
