import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid'
import "../styles/signin.css"

const SignIn = () => {
    return (
        <Container className='vh-100 d-flex justify-content-center align-items-center signin-container'>
            <h2 className='text-center  fw-bold p-3'>Log in to Hourworth</h2>
            <Form.Group className="mb-4 w-50 position-relative" controlId="formGridAddress2">
                <Form.Control type="email" placeholder="example@gmail.com" className='shadow-none text-center rounded-pill' size="sm" />
                <UserIcon className='position-absolute w-50 h-50 logIcon' />
            </Form.Group>
            <Form.Group className="mb-4 w-50  position-relative" controlId="formGridAddress1">
                <Form.Control type='password' placeholder=" password (8 or more characters)" className='shadow-none text-center rounded-pill' size="sm" />
                <LockClosedIcon className='position-absolute w-50 h-50 logIcon' />
            </Form.Group>
            <div className='d-flex'>
                <Form.Check type='checkbox' className='mb-4 text-nowrap'>
                    <Form.Check.Input type='checkbox' />
                    <Form.Check.Label className='text-sm' id='terms'>Remember me</Form.Check.Label>
                </Form.Check>
                <a href='#' className='text-nowrap px-5'>
                    Forgot password</a>
            </div>
            <p className='text-nowrap'>not you? <a href="#">Sign up</a></p>
            <Button className='rounded-pill signin-btn mb-4 mx-auto d-block' type="submit">
                Login
            </Button>
        </Container>
    )
}

export default SignIn
