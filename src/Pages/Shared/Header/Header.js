import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';
import headerpng from '../../../images/headerpng.png'

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <>


            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img
                            style={{ width: '25%' }}
                            src={headerpng}
                        />
                        Travel World
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link className="text-white" as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/home#services"> Travel Packages</Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/locations"> Top Locations </Nav.Link>
                        <Nav.Link className="text-white" as={HashLink} to="/travellers"> Travellers Blog </Nav.Link>




                        {user?.displayName && <Nav.Link className="fs-10 text-white fw-bold" as={HashLink} to="/manageservice"> Admin:Manage Plans </Nav.Link>}
                        {user?.displayName && <Nav.Link className="fs-10 text-white fw-bold" as={HashLink} to="/addplan"> Admin:New Plan </Nav.Link>}
                        {user?.displayName && <Nav.Link className="fs-10 text-white fw-bold" as={HashLink} to="/booking"> Your Bookings </Nav.Link>}
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}

                        <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName} </a>
                        </Navbar.Text>
                    </Navbar.Collapse>



                </Container>
            </Navbar>

        </>
    );
};

export default Header;