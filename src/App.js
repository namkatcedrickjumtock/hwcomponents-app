import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./App.css";
import Col from 'react-bootstrap/Col'
import PreSignInScreen from './components/PreSignInScreen';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [isButtonDisable, setDisable] = useState(true)
  const [userType, setUserType] = useState("Create Account")
  return (
    <Container className='wrapper'>
      {/* header component */ }
      <Header />

      {/* main container */ }
      <Container className='my-4   main-container'>
        <h3 className='text-center py-4 fs-4 '>Join as a client or freelancer</h3>
        <Row className='d-flex justify-content-around p-4'>
          <Col xs={ 12 } md={6 }  >
            <PreSignInScreen cardText={ `
                I’m a client, hiring for a project`} img={ './icons/icon2.png' } setUserType={ setUserType } userType="employer" setDisable={ setDisable } />
          </Col>
          <Col xs={ 12 } md={6 } >
            <PreSignInScreen cardText={ `I’m a freelancer, looking for work` } img="./icons/icon1.png" setDisable={ setDisable } setUserType={ setUserType } userType="freelancer" />
          </Col>
        </Row>

        <div className="p-3 btn-container">
          <Button disabled={ isButtonDisable } size="md" className='rounded-pill text-sm mb-4 mx-auto d-block'>{ userType }</Button>
          <p className='text-sm font-weight-light text-center'> Already have an account? <a href="#"> Log In</a></p>
        </div>
      </Container>

    </Container>
  );
}


export default App;
