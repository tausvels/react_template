import React, { createContext, useState } from 'react';

export const SampleContext = createContext(null);

export const SampleStateProvider = props => {
  const [state, setState] = useState({
    sampleUserObject: [{name: `sample1`, age: 30}, {name: `sample2`, age: 25}],
    counter: 0
  });
    return (val + ` And I am 30 years old.`)
  }
  return (
    <SampleContext.Provider value={[state, setState, myFunc]}>
      {props.children}
    </SampleContext.Provider>
  );
};