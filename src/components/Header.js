import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.png"
                            className="d-inline-block align-top"
                        />{ ' ' }
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export default Header;