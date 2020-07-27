import React from "react"

class BlogPost extends React.Component {
    render() {
        const { date, title, excerpt } = this.props.post
        return (
            <div className="row col-6 m-auto">
                <p>{date}</p>
                <h1 className="blog-title">{title.rendered}</h1>
                <p dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
            </div>
        )
    }
}
export default BlogPost