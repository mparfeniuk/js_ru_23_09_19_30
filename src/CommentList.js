"use strict"
import React from 'react'
import Comment from './Comment'

export default props => {
    const { comments } = props
    
    const commentsComponents = (comments) ? comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>) : null;
    
    return (
        <ul>
            { commentsComponents }
        </ul>
    )
}