import React, { Fragment } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import Provider from '../Provider';

export default ({ children }) => (
  <Fragment>
    <Provider>
      <Nav />
      <div className={'content'}>{children}</div>
      <Footer />
    </Provider>
  </Fragment>
);
