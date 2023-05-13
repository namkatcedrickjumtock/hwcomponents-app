import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import "../styles/activate.css"

const ActivateScreen = () => {
    return (
        <Container className="vh-100 d-flex justify-content-between align-items-center ">
            <Container className='w-50 mx-auto'>
                <Form >
                    <h1 className='fw-bold text-center py-3'>Activate Account</h1>
                    <p className='text-center py-3'>Please enter the code the code sent to your email <br /> to activate your account.</p>
                    <Form.Group className="mb-5" controlId="formGridAddress2">
                        <Form.Control type="text" placeholder="7483758" className='shadow-none' size="sm" />
                    </Form.Group>
                </Form>

                <Button className='rounded-pill w-75 mb-4 mx-auto d-block text-nowrap' type="submit">
                    Create my account
                </Button>
                <p>Did not receive the code? <a href="#">Resend</a></p>
            </Container>
        </Container>
    )
}

export default ActivateScreen
