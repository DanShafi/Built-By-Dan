import React, { Component } from "react";
import axios from "axios";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    const slug = this.props.match.params.slug;
    axios
      .get(`https://blog.builtbydan.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then(post => {
        this.setState({
          post: post.data[0]
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    let build;
    if (this.state.post.title) {
      build = (
        <Container style={{maxWidth: '800px'}}>
          <Link to="/">Go Back</Link>
          <h1 className="blog-title">{this.state.post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={this.createMarkup( this.state.post.content.rendered )} />
        </Container>
      );
    } else {
      build = <div />;
    }
    return build;
  }
}

export default BlogView;