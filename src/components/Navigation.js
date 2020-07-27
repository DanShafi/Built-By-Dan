import React from "react"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"
import ProjectPage from '../pages/ProjectPage'
import HomePage from '../pages/HomePage'
import BlogPage from '../pages/BlogPage'

class Navigation extends React.Component {
    render() {
        return (
            <Router>
                <Container>
                    <Navbar style={{fontSize: 15}} expand="lg" className="nav-gap navbar-dark nav-style" >
                        <Navbar.Brand href="/" style={{fontSize: 15, fontWeight: "bold"}}>Built By Dan.</Navbar.Brand>

                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />

                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/projects">Projects</Link>
                                <Link className="nav-link" to="/blog">Blog</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage />} />
                    <Route path="/projects" exact render={() => <ProjectPage />} />
                    <Route path="/blog" exact render={() => <BlogPage />} />
                </Container>
            </Router>
        )
    }
}

export default Navigation