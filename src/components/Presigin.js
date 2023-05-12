import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Header from './Header'
import Row from 'react-bootstrap/Row';
import "../styles/presignin.css"


const Presigin = () => {
    const [isButtonDisable, setDisable] = useState(true)
    const [userType, setUserType] = useState("Create Account")
    return (
        <>
            <Container className='wrapper'>
                <Header />

                {/* main container */ }
                <Container className='my-4   main-container'>
                    <h3 className='text-center py-4 fs-4 '>Join as a client or freelancer</h3>
                    <Row className='d-flex justify-content-around p-4'>
                        <Col xs={ 12 } md={ 6 }  >
                            <Card style={ { width: '13rem' } } className={ `presigninCards mb-3` } onClick={ () => {
                                setDisable(false)
                                userType !== "employer" ? setUserType("Apply as a Freelancer") : setUserType("Join as a Client")
                            } } >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-md-between'>
                                        <img src={ "img" } alt="" srcset="" />
                                        <Form.Check
                                            type='radio'
                                        />
                                    </Card.Title>
                                    <Card.Text className='fs-6 fw-bold'>
                                        { "cardText" }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* second column */}
                        <Col xs={ 12 } md={ 6 } >
                            <Card style={ { width: '13rem' } } className={ `presigninCards mb-3` } onClick={ () => {
                                setDisable(false)
                                userType !== "employer" ? setUserType("Apply as a Freelancer") : setUserType("Join as a Client")
                            } } >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-md-between'>
                                        <img src={ "img" } alt="" srcset="" />
                                        <Form.Check
                                            type='radio'
                                        />
                                    </Card.Title>
                                    <Card.Text className='fs-6 fw-bold'>
                                        cardText
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <div className="p-3 btn-container">
                        <Button disabled={ isButtonDisable } size="md" className='rounded-pill text-sm mb-4 mx-auto d-block'>{ userType }</Button>
                        <p className='text-sm font-weight-light text-center'> Already have an account? <a href="#"> Log In</a></p>
                    </div>
                </Container>
            </Container>
        </>
    )
}

export default Presigin
