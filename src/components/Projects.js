import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Projects = () => {
    return (
        <Container className ="mt-5 mb-5">
            <Row>
                <Col lg='6'>
                    <h1 className="blog-title">This will be your projects section.</h1>
                </Col>
                <Col lg='6'>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col lg='6'>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
                <Col lg='6'>
                    <h1 className="blog-title">This will be your projects section.</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects