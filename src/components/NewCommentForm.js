import React from "react";
import "./app.css"

class NewCommentForm extends React.Component{
    state = {
        name : '',
        comment : ''
    }

    submitHandler = ev => {
        ev.preventDefault();
        console.log("Comment:", this.state.comment)
    }

    nameFieldChange = ev => {
        this.setState({
            name : ev.target.value
        })
    }

    commentFieldChange = ev => {
        this.setState({
            comment : ev.target.value
        })
    }

    render(){
        return(
            <form onSubmit = {this.submitHandler} id="commentForm" className="b-comment-form">
                <h4 className="b-comment-title">Add comment</h4>
                <div className="b-comment-form__group">
                    <label className="b-comment-form__label" htmlFor="name">Your name:</label>
                    <input className="b-comment-form__input" onChange={this.nameFieldChange} name="name" id="name" type="text"/>
                </div>
                <div className="b-comment-form__group">
                    <label className="b-comment-form__label" htmlFor="name">Comment:</label>
                    <textarea className="b-comment-form__textarea" onChange={this.commentFieldChange} name="comment" id="comment" cols="30" rows="10"></textarea>
                </div>
                <div className="b-comment-form__group">
                    <input className="b-comment-form__submit" type="submit" value="Submit"/>
                </div>
            </form>
        )
    }


}

export default NewCommentForm