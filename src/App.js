import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import './App.css';

// import the actions from the actions folder to be used
import { sampleAction, sampleAction2, reset } from './actions/sampleAction';
import { signIn, signOut } from './actions/loggingAction';

function App() {
  // state is the overall STATE object that has sub states and can be found in the index.js of the reducer folder
  const sampleState1 = useSelector((state) => state.sample);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> WELCOME TO TAUSIF'S REACT-REDUX TEMPLATE </h1>
      <h2> THE STATES ARE STORED IN THE REDUCER FILE AND SEE CODE TO SEE HOW IT IS RENDERED</h2>
      <h3> SAMPLE STATE: {sampleState1} </h3>
      {/* THIS IS HOW TO USE THE useDispatch and the ACTIONS */}
      <button onClick= {() => dispatch(sampleAction())}> + </button> <hr></hr>
      <button onClick= {() => dispatch(sampleAction2())}> ADD 10 </button> <br></br>
      <button onClick={() => dispatch(reset())} > RESET STATE </button> <br></br>
      {/* CONDITIONAL RENDERING */}
      {isLogged ? <button onClick = {() => dispatch(signOut())}> SIGN OUT </button> : <button onClick={() => dispatch(signIn())}> SIGN In </button>}
      { isLogged ? <h2>I AM LOGGED IN</h2> : <h2>SIGN IN</h2>}
    </div>
  );
}

export default App;
