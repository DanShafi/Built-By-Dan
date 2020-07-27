import React from 'react';
import BlogPost from '../components/BlogPost'

class BlogPage extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            isLoaded: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch('http://blog.builtbydan.com/wp-json/wp/v2/posts?_fields=date,title,excerpt')
        .then(res => res.json())
        .then(data => this.setState({
            posts: data,
            isLoaded: true
        }))
        .catch(err => console.log(err))

    }

    render() {
        console.log(this.state)
        const { posts, isLoaded } = this.state;
        if(isLoaded) {
            return (
                <div>
                    <h1 className="dark-title-text">Blog.</h1>

                    { posts.map(post => (
                        <BlogPost className="blog-title" key={post.id} post={post}/>
                    )) }
                </div>
            )
        }

        return <h3>Loading...</h3>
    }
}

export default BlogPage