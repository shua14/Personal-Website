import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from './images/JL_logo.png';
import "./styles/NavBar.css";

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar" fixed="top">
                <Container className="d-flex justify-content-between align-items-center">
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-center"
                        />{' '}
                        Jay Luxenberg
                    </Navbar.Brand>

                    <div className="d-flex gap-3 text-right">
                        <Navbar.Text>About Me</Navbar.Text>
                        <Navbar.Text>Projects</Navbar.Text>
                        <Navbar.Text>Contact</Navbar.Text>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

