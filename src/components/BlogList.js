import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row } from 'react-bootstrap'

class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.createMarkup = this.createMarkup.bind();
  }

  componentDidMount() {
    axios.get("http://blog.builtbydan.com/wp-json/wp/v2/posts").then(posts => {
      this.setState({
        posts: posts.data
      });
    });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <Container className="mt-5 pt-5">
        <Row>
          <h3 className="dark-title-text col-lg-4">Blog.</h3>
          <div className="col-lg-8 blog-links">
            {this.state.posts.map(post => (
            <Link to={`/${post.slug}`} key={post.id}>
              <div className="mb-5" key={post.id}>
                  <div>
                    <span className="hover hover-1">
                      <h2 className="blog-title scroll-border">{post.title.rendered}</h2>
                    </span>
                  </div>
                  <div dangerouslySetInnerHTML={this.createMarkup( post.excerpt.rendered )} />
                  <p className="blog-links-date">{post.formatted_date}</p>
              </div>
            </Link>
            ))}
          </div>
        </Row>
      </Container>
    );
  }
}

export default BlogList;