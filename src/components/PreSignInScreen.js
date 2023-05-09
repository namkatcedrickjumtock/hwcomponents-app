import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './PreSignInScreen.css'


function PreSignInScreen({ img, cardText, setDisable, userType, setUserType }) {
    return (
        <Card   style={ { width: '13rem' } } className='presigninCards mb-3 m-0' onClick={ () => {
            setDisable(false)
            userType !== "employer" ? setUserType("Apply as a Freelancer") : setUserType("Join as a Client")
        } } >
            <Card.Body>
                <Card.Title className='d-flex justify-content-md-between'>
                    <img src={ img } alt="" srcset="" />
                    <Form.Check
                        type='radio'
                    />
                </Card.Title>
                <Card.Text className='fs-6 fw-bold'>
                    { cardText }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default PreSignInScreen;