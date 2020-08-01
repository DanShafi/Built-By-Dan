import React from 'react';
import './App.scss';
import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Hero from './components/Hero'
import PostList from './components/PostList'
import PostView from './components/PostView'
import Footer from './components/Footer'
import Projects from './components/Projects'


const App = () => {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Hero} />
          <Route exact path="/" component={PostList} />
          <Route path="/:slug" component={PostView} />
          <Footer />
        </Fragment>
      </Router>
    )
}

export default App;
