import React from 'react'
import "../styles/signup.css"

import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

const SignUp = () => {
    return (
        <div>
            <Container className=''>
                <Row className="vh-100 d-flex justify-content-center align-items-center ">
                    <Col md={ 8 } lg={ 7 } xs={ 12 }>
                        <Card className="signinCard ">
                            <h2 className='text-center py-3'>Sign up to find work you love</h2>
                            <Card.Body>
                                <div className="">
                                    <div className="">
                                        <Form>
                                            <Row className="mb-3">
                                                <Form.Group as={ Col } controlId="formGridEmail">
                                                    <Form.Control type="text" placeholder="First Name" className='shadow-none' size="sm" />
                                                </Form.Group>

                                                <Form.Group as={ Col } controlId="formGridPassword">
                                                    <Form.Control type="text" placeholder="Last Name" className='shadow-none' size="sm" />
                                                </Form.Group>
                                            </Row>

                                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                                <Form.Control type="email" placeholder="Email" className='shadow-none' size="sm" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Control type='password' placeholder=" password (8 or more characters)" className='shadow-none' size="sm" />
                                            </Form.Group>
                                            <Form.Group as={ Col } controlId="formGridState">
                                                <Form.Select defaultValue="Choose..." className='shadow-none' size="sm">
                                                    <option>Cameroon</option>
                                                    <option>USA</option>
                                                </Form.Select>
                                            </Form.Group>


                                        </Form>
                                        <Form.Check type='checkbox' className='mt-4 mb-4'>
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label className='text-sm'>Send me helpful emails to find rewarding work and job leads.</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check type='checkbox' className='mb-4'>
                                            <Form.Check.Input type='checkbox' />
                                            <Form.Check.Label className='text-sm'>Yes, I understand and agree to the <a href='#'>HourWorth Terms of Service </a>, including the <a href='#'>User Agreement</a> and <a href='#'>Privacy Policy</a> .</Form.Check.Label>
                                        </Form.Check>

                                        <Button className='rounded-pill w-75 mb-4 mx-auto d-block' type="submit">
                                            Create my account
                                        </Button>
                                        <div className="mt-3 text-sm">
                                            <p className="mb-0 text-center ">
                                                Don't have an account?{ " " }
                                                <a href="{''}" className="text-primary fw-bold">
                                                    Sign Up
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp
