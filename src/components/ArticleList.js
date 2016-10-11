import React, { Component, PropTypes } from 'react'
import Article from './Article'
import accordion from './../decorators/accordion'
import { connect } from 'react-redux'
import moment from 'moment'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        toggleItem: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    };

    render() {
        const { articles, toggleItem, isItemOpen } = this.props

        const articleComponents = articles.map(article => (
            <li key={article.id} >
                <Article article = {article} isOpen = {isItemOpen(article.id)} openArticle = {toggleItem(article.id)} />
            </li>))
        

        return (
            <ul>
                {articleComponents}
            </ul>
        )
    }
}

export default connect(state => {
    //ок, но еще по датам надо было сделать
    function filterByDate(articles, date_range){
        return  date_range.from ?
            articles.filter(item => moment(item.date).isSameOrAfter(date_range.from, 'day') && moment(item.date).isSameOrBefore(date_range.to, 'day')) : articles
    }


    function filterBySelect(articles, selected){
        let ids = (selected && selected.length > 0) ? selected.map(item => item.value) : null
        return ids ? articles.filter(article => ids.includes(article.id)) : articles
    }


    return {
        articles: filterByDate(filterBySelect(state.articles, state.selected), state.date_range)
    }
})(accordion(ArticleList))


