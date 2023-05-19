import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "../styles/activate.css"
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

const ActivateScreen = () => {
    return (
        <Container className="vh-100 d-flex  justify-content-center align-items-center activateContainer ">
                <h1 className='fw-bold text-center'>Activate Account</h1>
                <p className='text-center fs-5 mb-5'>Please enter the code the code sent to your email <br /> to activate your account.</p>
                <Form.Group className="mb-5 w-50" controlId="formGridAddress2">
                    <Form.Control type="text" placeholder="7483758" className='shadow-none text-center mx-3 ' size="sm" />
                </Form.Group>

            <Button className='rounded-pill activate-btn w-50 mb-5 mx-auto d-block text-nowrap' type="submit">
                Activate
                <ShieldCheckIcon className='icon mx-2' />
            </Button>
            <p className='text-center text-danger'>Did not receive the code? <a href="#">Resend</a></p>
        </Container>
    )
}

export default ActivateScreen
