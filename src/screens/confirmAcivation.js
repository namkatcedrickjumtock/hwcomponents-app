import React from 'react'
import { Button, Container, Card, Form } from "react-bootstrap";
import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import "../styles/confirmAcivation.css"


const ConfirmAcivation = () => {
    return (
        <Container className='vh-100 d-flex justify-content-center align-items-center verification-container'>
            <div>
                <ShieldCheckIcon id='verifiedIcon' />
            </div>
            <h1 className='text-center  fw-bold'>Your Account has <br /> been Activated</h1>
            <p className='fs-5'>Login to continue</p>
            <Form.Group className="mb-4 w-50" controlId="formGridAddress1">
                <Form.Control type='password' placeholder=" * * * *" className='shadow-none text-center' size="sm" />
            </Form.Group>

            <Button className='rounded-pill cnfrm-btn w-50 mb-4 mx-auto fw-bold d-block text-nowrap' type="submit">
                Log in
            </Button>
        </Container>
    )
}

export default ConfirmAcivation

