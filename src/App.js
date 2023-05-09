import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./App.css";
import Col from 'react-bootstrap/Col'
import PreSignInScreen from './components/PreSignInScreen';
import Header from './components/Header';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container fluid>
      {/* header component */ }
      <Header />

      {/* main container */ }
      <Container className='border rounded w-50 my-5 p-5'>
        <h3 className='text-center p-3 '>Join as a client or freelancer</h3>
        <Row>
          <Col xs={ 12 } md={ 6 } >
            <PreSignInScreen cardText={ `
                I’m a client, hiring for a project`} img={ './icons/icon2.png' } />
          </Col>
          <Col xs={ 12 } md={ 6 }>
            <PreSignInScreen cardText={ `I’m a freelancer, looking for work` } img="./icons/icon1.png" />
          </Col>
        </Row>

        <div className="p-3">
          <Button variant="primary" size="md" className='rounded-pill  mb-4 mx-auto d-block'>Join as a Client</Button>
          <p className='text-sm font-weight-light text-center'>Already have an account? <a href="#"> Log In</a></p>
        </div>
      </Container>

    </Container>
  );
}


export default App;
