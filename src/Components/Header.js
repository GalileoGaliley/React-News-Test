import React from 'react';

import {Navbar, Nav, Container, Modal, Form, Button, FormControl, Row, NavDropdown} from "react-bootstrap";


const Header = ({light}) => {

    return (
            <Navbar  collapseOnSelect expand="lg" variant={light} bg={light}>
                <Container>
                    <Navbar.Brand className = 'contents' href='/' >
                        <div className={`${light} logo`}>
                            <div className={'image'}>

                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={'m-auto'}>
                            <Nav.Link className={'link'} href={'/'}>
                                HOME
                            </Nav.Link>
                            <Nav.Link className={'link'}  href={'/setting'}>
                                SETTING
                            </Nav.Link>
                            <Nav.Link className={'link'}  href={'/help'}>
                                HELP
                            </Nav.Link>
                            <Nav.Link className={'link'}  href={'/about_us'}>
                                ABOUT US
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



    );
};

export default Header;