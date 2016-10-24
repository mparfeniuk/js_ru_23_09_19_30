import React, { Component, PropTypes } from 'react'
import PaginatedComments from '../components/PaginatedComments'

class PaginatedCommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <PaginatedComments page = {this.props.params.page} limit = { 5 } />
            </div>
        )
    }
}

export default PaginatedCommentsPage