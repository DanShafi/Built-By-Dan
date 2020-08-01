import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Navbar style={{fontSize: 15}} expand="lg" className="nav-gap navbar-dark nav-style" >
                    <Navbar.Brand href="/" style={{fontSize: 15, fontWeight: "bold"}}>Built By Dan.</Navbar.Brand>
                        <Nav className="ml-auto">
                        <img src="https://images.vexels.com/media/users/3/143495/isolated/preview/6b80b9965b1ec4d47c31d7eccf8ce4b0-yellow-lightning-bolt-icon-by-vexels.png" height="30px"/>
                        {/* This is where we will add dark mode toggle */}
                        </Nav>
                </Navbar>
            </Container>
        )
    }
}

export default Header