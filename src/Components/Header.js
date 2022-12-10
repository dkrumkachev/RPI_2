import React, {Component} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";
import { Link } from "react-router-dom"

const Header = () => {
    const { t } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    } 
        return (
            <>
            <Navbar collapseOnSelect bg="info" collapse = "" variant="info">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <Nav.Link as= {Link} to = "/">{t("header.main")}</Nav.Link>
                            <Nav.Link as= {Link} to = "/architects">{t("header.architects")}</Nav.Link>
                        </Nav>
                        <Nav>
                            <NavDropdown align="end" title={t("header.language")} id="dropdown-menu-align-end">
                                <NavDropdown.Item onClick = {() => changeLanguage("ru")}>Русский</NavDropdown.Item>
                                <NavDropdown.Item onClick = {() => changeLanguage("en")}>English</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        );
    }

export default Header;