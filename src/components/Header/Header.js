import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <Navbar expand="lg" className='py-3 navBar'>
            <Container>
                <Navbar.Brand as={Link} to='/' className='text-white fs-4'>Car Hoppers</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to='/home' className='text-white'>Home</Nav.Link>
                        <Nav.Link as={CustomLink} to='/reviews' className='text-white'>Reviews</Nav.Link>
                        <Nav.Link as={CustomLink} to='/dashBoard' className='text-white'>DashBoard</Nav.Link>
                        <Nav.Link as={CustomLink} to='/blogs' className='text-white'>Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;