import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.scss';
import Container from 'react-bootstrap/Container'
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Router>
      <Container className="p-0">
        <Navigation />
        <Hero />
      </Container>
    </Router>
  );
}

export default App;
