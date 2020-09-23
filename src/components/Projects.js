import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const textStyle = {
    fontSize: '25px',
    fontWeight: 'bold'

}

const linkColour = {
    color: '#9c9c9c'
}

const Projects = () => {
    return (
        <Container className="mt-5">
            <h3 className="dark-title-text">Projects.</h3>
            <Row className="mt-5">
                <Col lg={4}>
                    <h3 style={textStyle}>+ Built By Dan</h3>
                </Col>
                <Col lg={8}>
                    <p>Stack: React.js / JavaScript / CSS3 / SASS / Node.js /WordPress API</p>
                    <p>
                        Personal portfolio website that is currently in beta. The application utilises React.js
                        components that use React Router to render particular elements. The dark mode/light mode
                        toggle was created using React Hooks and the blog component renders WordPress data using
                        the WordPress API via an Axios fetch request.
                    </p>
                    <p className="text-muted">
                        Hosted with Vercel and currently in beta. The WordPress API has failed to make a fetch request
                        with Vercel - fix pending.
                    </p>
                    <a style={linkColour} className="mr-3" href="https://builtbydan.com" target="_blank">Live</a>
                    <a style={linkColour} href="https://github.com/danshafi/builtbydan" target="_blank">Source Code</a>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4}>
                    <h3 style={textStyle}>+ The Space Programme</h3>
                </Col>
                <Col lg={8}>
                    <p>Stack: Parcel.js / HTML / CSS3 / SASS / Figma </p>
                    <p>
                        A one-pager static site created for a technical test and packaged using Parcel.js. The task involved 
                        using a Figma file and re-creating the components as per the design structure.
                    </p>
                    <p className="text-muted">
                        The site has not been fully mobile-tested as it was purpose built for desktop.
                    </p>
                    <a style={linkColour} className="mr-3" href="https://hsc-application.vercel.app/" target="_blank">Live</a>
                    <a style={linkColour} href="https://github.com/DanShafi/The-Space-Programme" target="_blank">Source Code</a>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4}>
                    <h3 style={textStyle}>+ Template</h3>
                </Col>
                <Col lg={8}>
                    <p>Stack: Ruby on Rails / Ruby / PostgreSQL / Postman / Stripe API / jQuery / JavaScript</p>
                    <p>
                        Le Wagon Bootcamp final week project web application built on Ruby on Rails. This was a team effort
                        with consistent mob coding in a group of four. Each member played to their strengths - most all backend
                        components whilst frontend development was managed by myself.
                    </p>
                    <p className="text-muted">
                        The site was only made as a MVP and does not serve a purpose as of yet, although functional.
                    </p>
                    <a style={linkColour} className="mr-3" href="https://templatejobs.co.uk" target="_blank">Live</a>
                    <a style={linkColour} href="https://github.com/DanShafi/Bootcamp-Graduation-Project-TEMPlate" target="_blank">Source Code</a>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={4}>
                    <h3 style={textStyle}>+ ShipBob UX Feature</h3>
                </Col>
                <Col lg={8}>
                    <p>Stack: JavaScript / CSS3 / UX </p>
                    <p>
                        An interactive world-map created as an upgrade of the current static feature on Shipbob.com.
                        Fixes to the feature include fixed mouseover events, span fixes and CSS3 animations.
                    </p>
                    <p className="text-muted">
                        The feature was reviewed by the ShipBob engineering team and unfortunately not implemented
                        due to lack of priority. This site was not tested for mobile-responsiveness.
                    </p>
                    <a style={linkColour} className="mr-3" href="https://builtbydan.com/shipbob" target="_blank">Live</a>
                    <a style={linkColour} href="https://github.com/DanShafi/SB-World-Map" target="_blank">Source Code</a>
                </Col>
            </Row>
            <div className ="hr-line" />
        </Container>
    )
}

export default Projects