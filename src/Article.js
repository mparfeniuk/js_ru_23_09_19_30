import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: false,
        commentsOpen: false,
        opened: {
            a: true
        }
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        const { commentsOpen } = this.state

        const body = isOpen ? <section>{article.text}</section> : null
        const commentsBlock = commentsOpen ? <section><CommentList comments = { article.comments }/></section>: null
        const commentsTitle = article.comments ? <a href="#" onClick = {this.showComments}>{ commentsOpen ? "Hide" : "Show" } Comments</a> : null

        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
                {commentsTitle}
                {commentsBlock}
            </div>
        )
    }
    
    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    showComments = ev => {
        this.setState({
            commentsOpen: !this.state.commentsOpen
        })
    }
}
