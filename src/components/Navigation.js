import React from "react"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { NavbarBrand, Nav } from "react-bootstrap"

class Navigation extends React.Component {
    render() {
        return (
            <Navbar style={{fontSize: 15}} expand="lg" className="nav-gap navbar-dark nav-style" >
                <Navbar.Brand style={{fontSize: 15, fontWeight: "bold"}}>Built By Dan.</Navbar.Brand>

                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/projects">Projects</Link>
                        <Link className="nav-link" to="/about">Blog</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default Navigation