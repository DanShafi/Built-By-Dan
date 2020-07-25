import React from "react"
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="row">
                    <p>© 2020 // Built By Dan.</p>
                    <p className="ml-auto">Proudly built with <a href="www.gatsbyjs.org" target="_blank">Gatsby.js</a></p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer