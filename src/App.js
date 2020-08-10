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
            <Navbar.Brand className={lightMode ? "light-mode" : "dark-mode"} href="/" id="logo">Built By Dan - Beta v.1.0</Navbar.Brand>
            <img
              className="mode-switch ml-auto"
              onClick={() => setLightMode(prevMode => !prevMode)}
              src={lightMode ? require("./media/sun-icon-retina.svg") : require("./media/moon-icon-retina.svg")}
              alt="lightning-bolt"
              height="30px"
            />
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
