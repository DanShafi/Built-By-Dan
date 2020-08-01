import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'

class PostList extends Component {
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
      <Container style={{maxWidth: "600px"}}>
        {this.state.posts.map(post => (
          <Link to={`/${post.slug}`} key={post.id}>
            <div key={post.id}>
                <p>{post.date}</p>
                <h1 className="blog-title">{post.title.rendered}</h1>
                <div dangerouslySetInnerHTML={this.createMarkup( post.excerpt.rendered )} />
            </div>
          </Link>
        ))}
      </Container>
    );
  }
}

export default PostList;