import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import "../styles/presignin.css"
import icon2 from "../Assets/icons/icon2.png";
import icon1 from "../Assets/icons/icon1.png";


const Presigin = () => {
    const [isButtonDisable, setDisable] = useState(true)
    const [userType, setUserType] = useState("Create Account")
    return (
        <>
            <Container className='wrapper vh-100 d-flex  align-items-center'>
                {/* main container */ }
                <Container className='my-4   main-container'>
                    <h3 className='text-center py-4 fs-4 '>Join as a client or freelancer</h3>
                    <Row className='d-flex justify-content-around'>
                        <Col xs={ 12 } md={ 6 }  >
                            <Card style={ { width: '13rem' } } className={ `${userType == "Apply as a Freelancer" ? "presigninCards mb-3" : "mb-3"}` } onClick={ () => {
                                setDisable(false)
                                setUserType("Apply as a Freelancer")
                            } } >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-md-between '>
                                        <img src={ icon2 } alt="" />
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                                            checked={ userType == "Apply as a Freelancer" ? true : false }
                                        />
                                    </Card.Title>
                                    <Card.Text className='fs-6 fw-bold'>
                                        I’m a client, hiring for a project
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* second column */ }
                        <Col xs={ 12 } md={ 6 } >
                            <Card style={ { width: '13rem' } } className={ `${userType == "Join as a Client" ? "presigninCards mb-3" : ""}` } onClick={ () => {
                                setDisable(false)
                                setUserType("Join as a Client")
                            } } >
                                <Card.Body>
                                    <Card.Title className='d-flex justify-content-md-between'>
                                        <img src={ icon1 } alt="" />
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                                            checked={ userType == "Join as a Client" ? true : false }

                                        />
                                    </Card.Title>
                                    <Card.Text className='fs-6 fw-bold'>
                                        I’m a freelancer, looking for work
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
