import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    };

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/category/0">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            {
                                user && <Nav.Link href="#profile">
                                    <FaUserCircle style={{ fontSize: '2rem' }} />
                                </Nav.Link>
                            }
                            {
                                user ?
                                    <Nav.Link href="/">
                                        <Button onClick={handleLogOut} variant="secondary">Logout</Button>
                                    </Nav.Link>
                                    :
                                    <Nav.Link href="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;