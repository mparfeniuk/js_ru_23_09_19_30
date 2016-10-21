import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadComments } from '../AC/comments'
import Loader from './Loader'

class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        //form toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillUpdate(nextProps){
        const { article : { id, comments_loading, comments_loaded }, loadComments, isOpen } = this.props
        if (nextProps.isOpen && !isOpen && !comments_loading && !comments_loaded) loadComments(id)
    }
    
    render() {
        const {article, comments, addComment, isOpen, toggleOpen} = this.props

        if(article.comments_loading) return <Loader />
        if (!article.comments.length) return <div> <p>No comments yet</p>
            <NewCommentForm articleId={ article.id } addComment={addComment}/></div>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${article.comments.length} comments`

        const body = isOpen && <div>
                <ul>{commentItems}</ul>
                <NewCommentForm articleId={ article.id } addComment={addComment}/>
            </div>

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{ text }</a>
                {body}
            </div>
        )
    }
}


export default connect((state, props) => {
    const comments = props.article.comments_loaded ? getRelation(props.article, 'comments', state) : []
    return {
        comments : comments
    }
}, { addComment, loadComments })(toggleOpen(CommentList))