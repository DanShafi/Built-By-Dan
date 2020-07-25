import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.scss';
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <Router>
      <Container className="p-0">
        <Navigation />
        <HomePage />
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
