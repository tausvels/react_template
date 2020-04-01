import React from 'react';
import { Link } from 'react-router-dom';

// ---- IMPORT ACTIONS TO UPDATE STATE FROM THE ACTIONS FOLDER ----- //
import { sampleAction, sampleAction2, reset } from '../../actions/sampleAction';
import { signIn, signOut } from '../../actions/loggingAction';



// destructuing the props
const Home = ({allStates, dispatch}) => {

  return (
    <div>

      <h1> WELCOME TO TAUSIF'S REACT-REDUX TEMPLATE </h1>
      <h2> This is the landing page OR HOME page</h2>
      <h2> THE STATES ARE STORED IN THE REDUCER folder and combined as allStates in INDEX.js of that folder. State Update Actions are stored in Actions Folder.</h2>
      <h3> SAMPLE STATE: {allStates.sample} </h3>
      <p> All the state are passed from APP component which in tern gets from the src/index.js file.</p>
      <p>The buttons given below updates the state of the SAMPLE STATE</p>
      <button onClick = { () => dispatch(sampleAction()) }>Add 1</button> <br></br>
      <button onClick = { () => dispatch(sampleAction2()) }>Add 10</button> <br></br>
      <button onClick = { () => dispatch(reset()) }>RESET SAMPLE STATE</button>
      <br></br>
      <p>Another Sample State is isLOGGED STATE that conditionally renders the following line: </p>
      {allStates.logged ? 
        <div>
          <p>YOU ARE <strong>LOGGED IN</strong></p>
          <Link to='about'>About Page</Link> <br></br>
          <button onClick = { () => dispatch(signOut()) } >Click to SIGN OUT</button>
        </div> 
        : 
        <div>
          <p>YOU ARE <strong>NOT</strong>LOGGED IN</p>
          <button onClick = { () => dispatch(signIn()) }>Click to SIGN IN</button>
        </div>
      }

    </div>
  );
};

export default Home;