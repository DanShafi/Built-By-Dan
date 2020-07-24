import React from "react"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import { NavbarBrand, Nav } from "react-bootstrap"

class Navigation extends React.Component {
    render() {
        return (
            <Navbar className="p-0 nav-gap">
                <Navbar.Brand>Built By Dan</Navbar.Brand>
                
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>

            </Navbar>
        )
    }
}

export default Navigation