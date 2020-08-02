import React, { Fragment } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import BlogList from './components/BlogList'
import BlogView from './components/BlogView'
import Footer from './components/Footer'
import Projects from './components/Projects'


const App = () => {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Hero} />
          <Route exact path="/" component={Projects} />
          <Route exact path="/" component={BlogList} id="blog" />
          <Route path="/:slug" component={BlogView} />
          <Footer />
        </Fragment>
      </Router>
    )
}

export default App;
