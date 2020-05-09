import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { GeneralContext } from '../../contexts/GeneralContext';
import './test.css';

const Test = () => {
  const history = useHistory();
  const [state, setState] = useContext(GeneralContext);
  return (
    <div className='test-main'>
      <h1>Welcome {state.user.userName} to Test Page!</h1>
      <button className='btn btn-action' onClick={()=>history.goBack()}>Return to Home</button>
    </div>
  );
};

export default Test;