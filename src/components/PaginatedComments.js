import React, {Component, PropTypes} from "react"
import {connect} from 'react-redux'
import {loadPaginatedComments} from '../AC/comments'
import Comment from './Comment'
import Loader from './Loader'
import {Link} from 'react-router'

class PaginatedComments extends Component {

    static PropTypes = {
        page: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        comments: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.number.isRequired,
        fail: PropTypes.bool.isRequired
    }

    componentDidMount() {
        const {loadPaginatedComments, page, limit} = this.props
        loadPaginatedComments(page, limit)
    }

    componentWillReceiveProps(nextProps) {
        const {loadPaginatedComments, page, loaded, total, limit} = nextProps
        if (!loaded && ((page * limit) < (total + limit))) loadPaginatedComments(page, limit)
    }

    paginatorInit(total, limit) {
        const pages = []
        for (let i = 0, p = 1; i < total; i += limit, p++) {
            pages.push(p)
        }
        return pages.map(item => <Link key={ item } to={`/comments/${item}`} activeStyle = {{color: 'red'}}> { item } </Link>)
    }

    render() {
        const {comments, total, limit, loading, fail} = this.props
        const paginationBar = this.paginatorInit(total, limit)
        const commentList = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)

        if (loading) return <div>{ paginationBar } <Loader/></div>
        if (fail.get('status')) return <div>{ fail.get('msg') }</div>
        return (
            <div>
                { paginationBar }
                { commentList }
            </div>
        )
    }

}

export default connect((state, {page, limit}) => {
    const range = {
        from: (page * limit) - limit,
        to: page * limit
    }
    //плохой подход, не никаких гарантий, что на клиенте они в том же порядке, что и на сервере. Более того в Map вообще никакой порядок не гарантируют
    const filteredComments = state.comments.get('entities').filter((el, i) => i >= range.from && i < range.to)
    return {
        total: state.comments.get('total'),
        comments: filteredComments.valueSeq().toArray() || [],
        loading: state.comments.get('loading'),
        loaded: filteredComments.size,
        fail: state.comments.get('fail')
    }
}, {loadPaginatedComments})(PaginatedComments)
