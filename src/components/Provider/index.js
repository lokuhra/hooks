import React, { useState } from 'react';

export const Context = React.createContext();
const { Provider } = Context;

export default ({ children }) => {
  const values = { framework: 'React' };
  const actions = {
    toggleFramework: (property, value) => {
      setState({
        ...state,
        [property]: value
      });
    }
  };

  const obj = { ...values, ...actions };
  const [state, setState] = useState(obj);

  return <Provider value={state}>{children}</Provider>;
};
