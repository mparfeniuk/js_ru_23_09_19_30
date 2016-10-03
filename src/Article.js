import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    static PropTypes : {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired, 
        openArticle: PropTypes.func.isRequired
    }

    render() {
        const { article, isOpen, openArticle } = this.props

        const body = (isOpen) ? <section>{article.text}<CommentList comments = {article.comments}/></section> : null

        return (
            <div>
                <h3 onClick = { openArticle }>{article.title}</h3>
                {body}
            </div>
        )
    }

}

export default Article
