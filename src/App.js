import React from 'react'
import ActivateScreen from './screens/Activate';
import Presigin from "./screens/Presigin.js"
import SignUp from './screens/Signup';
import SignIn from './screens/SignIn';
import Header from './components/Header';
import Verification from './screens/verification';
import ConfirmAcivation from './screens/confirmAcivation';

const App = () => {
  return (
    <>
      <Header />
      {/*  */}
      <Verification />
    </>
  );
}


export default App;
