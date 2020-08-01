import React from "react"
import Container from 'react-bootstrap/Container'

const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <div className="row container" style={{color: "dimgrey"}}>
                    <p>© 2020 // Built By Dan.</p>
                    <p className="ml-auto">Proudly built with <a href="www.gatsbyjs.org" target="_blank">Gatsby.js</a></p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer