import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { UserIcon } from '@heroicons/react/24/solid'
import "../styles/signin.css"

const SignIn = () => {
    return (
        <div>
            <Container className='vh-100 d-flex align-items-center '>
                <div className="mx-auto w-50 position-relative">
                    <h2 className='text-center  fw-bold'>Log in to Upwork</h2>
                    <Form >
                        <Form.Group className="mb-3 " controlId="formGridAddress2">
                            <UserIcon className='user-icon' />
                            <Form.Control type="email" placeholder="Email" className='shadow-none px-5' />
                        </Form.Group>
                    </Form>
                    <Button className='rounded-pill w-50 mb-4 mx-auto d-block' type="submit">
                        Continue with Email
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default SignIn
