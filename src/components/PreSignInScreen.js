import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './PreSignInScreen.css'


function PreSignInScreen({ img, cardText }) {
    return (
        // <Card.Link href="#">
        <Card style={ { width: '15rem' } } >
            <Card.Body>
                <Card.Title className='d-flex justify-content-md-between'>
                    <img src={ img } alt="" srcset="" />
                    <Form.Check
                        type='radio'
                    />
                </Card.Title>
                <Card.Text>
                    { cardText }
                </Card.Text>
            </Card.Body>
        </Card>
        // </Card.Link>

    );
}

export default PreSignInScreen;