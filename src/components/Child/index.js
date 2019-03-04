import React, { useContext, Fragment } from 'react';
import { Context } from '../Provider';
import { Button, Text, Heading } from 'natalia-ui';

export default () => {
  const context = useContext(Context);
  const { framework, toggleFramework } = context;

    const Btn = ({value}) => <Button onClick={() => toggleFramework('framework', value)}>{value}</Button>

  return (
    <Fragment>
      <div className={'container-txt'}>
          <Heading level="h2">Estado Global con Hooks + Context</Heading>
        <Text>{framework}</Text>
      </div>
      <div className={'container-btns'}>
          <Btn value={'Angular'} />
          <Btn value={'Vue'} />
          <Btn value={'React'} />
      </div>
    </Fragment>
  );
};
