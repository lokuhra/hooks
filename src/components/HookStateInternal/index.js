import React, { Fragment, useState } from 'react';
import { Button, Text, Heading } from 'natalia-ui';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className={'container-txt'}>
        <Heading level="h2">Estado interno con Hooks</Heading>
        <Text>La puerta esta {open ? 'abierta' : 'cerrada'}</Text>
      </div>
      <div className={'container-btns'}>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Cerrar' : 'Abrir'}
        </Button>
      </div>
    </Fragment>
  );
};
