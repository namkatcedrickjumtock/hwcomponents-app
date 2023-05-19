import React from 'react'
import { Button, Container, Card, Form } from "react-bootstrap";
import { ShieldCheckIcon } from '@heroicons/react/24/solid'
import "../styles/verification.css"


const Verification = () => {
    return (
        <Container className='vh-100 d-flex justify-content-center align-items-center verification-container'>

            <h1 className='text-center  fw-bold display-4 display-sm-5'>Two-Step Verification</h1>
            <p className='fs-5'>Please enter the code sent to <br />
                S*****@hourworth.com
            </p>
            <Form.Group className="mb-4 w-50" controlId="formGridAddress1">
                <Form.Control type='password' placeholder=" * * * *" className='shadow-none text-center' size="sm" />
            </Form.Group>

            <Button className='rounded-pill w-50 mb-4 mx-auto d-block vrftn-btn text-nowrap' type="submit">
                Activate
                <ShieldCheckIcon className='icon mx-2' />
            </Button>
            <p className='text-center'>Did not receive the code? <a href="#" className='text-danger'>Resend</a></p>
        </Container>
    )
}

export default Verification
