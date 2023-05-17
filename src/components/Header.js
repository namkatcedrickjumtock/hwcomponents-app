import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Hourworth_Logotype from "../Assets/img/Hourworth_Logotype.png";
import "../styles/header.css"


function Header() {
    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            id='img'
                            alt=""
                            src={ Hourworth_Logotype }
                            className="d-inline-block align-top "
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;