import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap"

import Hero from './components/Hero'
import BlogList from './components/BlogList'
import BlogView from './components/BlogView'
import Footer from './components/Footer'
import Projects from './components/Projects'


const App = () => {
  const [lightMode, setLightMode ] = React.useState(false)

  return (
    <Router>
      <div className={lightMode ? "light-mode" : "dark-mode"}>

        <Container>
          <Nav style={{fontSize: 15}} expand="lg" className="nav-gap pt-4 pb-5" >
            <Navbar.Brand className={lightMode ? "light-mode" : "dark-mode"} href="/" style={{fontSize: 15, fontWeight: "bold"}}>Built By Dan.</Navbar.Brand>
            <div className ="toggle-container ml-auto">
              <span className="toggle">
              <span style={{ color: lightMode ? "yellow" : "grey" }}>☀</span>
                <input
                  checked={lightMode}
                  onChange={() => setLightMode(prevMode => !prevMode)}
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox" />
              </span>
              <span style={{ color: lightMode ? "slateblue" : "grey" }}>☽</span>
            </div>
          </Nav>
        </Container>
        
        <Route exact path="/" component={Hero} />
        <Route exact path="/" component={Projects} />
        <Route exact path="/" component={BlogList} id="blog" />
        <Route path="/:slug" component={BlogView} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
