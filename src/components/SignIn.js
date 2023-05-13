import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { UserIcon } from '@heroicons/react/24/solid'
import "../styles/signin.css"

const SignIn = () => {
    return (
        <div>
            <Container className=''>
                <Row className="vh-100 d-flex justify-content-center align-items-end ">
                    <Col md={ 8 } lg={ 6 } xs={ 12 }>
                        <Card className="signinCard ">
                            <h2 className='text-center py-3'>Log in to Upwork</h2>
                            <Card.Body>
                                    <div className=" w-75 mx-auto position-relative">
                                        <Form>
                                            <Form.Group className="mb-3 " controlId="formGridAddress2">
                                                {/* <UserIcon className='user-icon' /> */}
                                                <Form.Control type="email" placeholder="Email" className='shadow-none p-2' />
                                            </Form.Group>
                                        </Form>
                                        <Button className='rounded-pill w-75 mb-4 mx-auto d-block' type="submit">
                                            Continue with Email
                                        </Button>
                                    </div>
                                    <div className=" w-75 mx-auto">
                                        <Form>
                                            <Form.Group className="mb-3 " controlId="formGridAddress2">
                                                {/* <UserIcon className='user-icon' /> */}
                                                <Form.Control type="email" placeholder="Email" className='shadow-none p-2' />
                                            </Form.Group>
                                        </Form>
                                        <Button className='rounded-pill w-75 mb-4 mx-auto d-block' type="submit">
                                            Continue with Email
                                        </Button>
                                    </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignIn
