import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import "../styles/signin.css"

const SignIn = () => {
    return (
        <div>


            <Container className='vh-100 d-flex  align-items-center container'>
                <div className="mx-auto w-50  ">
                    <h2 className='text-center  fw-bold p-3'>Log in to Hourworth</h2>
                    <Form.Group className="mb-4 position-relative" controlId="formGridAddress2">
                        <Form.Control type="email" placeholder="example@gmail.com" className='shadow-none text-center' size="sm" />
                        <UserIcon className='position-absolute w-50 h-50 logIcon' />
                    </Form.Group>
                    <Form.Group className="mb-4 position-relative" controlId="formGridAddress1">
                        <Form.Control type='password' placeholder=" password (8 or more characters)" className='shadow-none text-center' size="sm" />
                        <LockClosedIcon className='position-absolute w-50 h-50 logIcon' />
                    </Form.Group>
                    <div className='d-flex justify-content-between'>
                        <Form.Check type='checkbox' className='mb-4 text-nowrap'>
                            <Form.Check.Input type='checkbox' />
                            <Form.Check.Label className='text-sm' id='terms'>Remember me</Form.Check.Label>
                        </Form.Check>
                        <a href='#' className='text-nowrap'>
                            Forgot password</a>
                    </div>
                    <p className='text-nowrap'>not you? <a href="#">Sign up</a></p>
                    <Button className='rounded-pill  mb-4 mx-auto d-block' type="submit">
                        Login
                    </Button>
                </div>
            </Container>
        </div>
    )
}

export default SignIn
