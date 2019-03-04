import fetch from 'isomorphic-fetch';
global.fetch = fetch;

import React, { Fragment } from 'react';
import Apollo from 'rocaaaa';
import Child from '../src/components/Child';

export default () => {
  return (
    <Fragment>
      <Apollo>
        <Child />
      </Apollo>
    </Fragment>
  );
};
