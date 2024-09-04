import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import FooterComponent from "../home/FooterComponent";

const BaseComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" style={{position:"sticky", top:"0", zIndex:"100", height: "80px", borderBottom:"1px solid #e1dddd" }}>
                <Container>
                    <Navbar.Brand href="/home">
                        <img src="src/assets/logo.webp" height="30" className="d-inline-block align-top" alt="ECCO logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">HOME</Nav.Link>
                            <Nav.Link href="/women">NỮ</Nav.Link>
                            <Nav.Link href="/nam">NAM</Nav.Link>
                            <Nav.Link href="/golf">GOLF</Nav.Link>
                            <Nav.Link href="/leather">LEATHER GOODS</Nav.Link>
                            <Nav.Link href="/shoe-care">SHOE CARE</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Tìm sản phẩm" className="me-2" aria-label="Search" autoComplete="off" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link href="/profile">dat</Nav.Link>
                            <Nav.Link href="/location">
                                <i className="bi bi-geo-alt"></i>
                            </Nav.Link>
                            <Nav.Link href="/cart">
                                <i className="bi bi-cart"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
            <FooterComponent />
        </>
    );
};

export default BaseComponent;
