import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import Architects from "../Pages/Architects";

class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand="md" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/architects">Архитекторы</Nav.Link>
                            <Nav.Link href="/developers">О разработчиках</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown title="Язык" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action1">Русский</NavDropdown.Item>
                                <NavDropdown.Item href="#action2">English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/architects" element={<Architects/>}/>
                    <Route path="/developers" element={<Home/>}/>
                </Routes>
            </Router>
            </>
        );
    }
}

export default Header;