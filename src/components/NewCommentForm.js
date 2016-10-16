import React, { Component, PropTypes } from 'react'
import '../stylesheets/style.css'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'
class NewCommentForm extends Component {

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        if(this.state.user == "" || this.state.text == "") return

        const { addComment, article_id, id } = this.props
        addComment(Object.assign({}, { article_id, id }, this.state))
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor="user">User:</label>
                <input type="text" onChange={this.handleChange('user')} id="user"/>
                <label htmlFor="text">Text:</label>
                <textarea id="text" onChange={this.handleChange('text')} rows="4" cols="50"></textarea>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, { addComment })(NewCommentForm)