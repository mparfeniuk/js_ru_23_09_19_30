import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Chart from './Chart'
import accordeon from './decorators/accordeon'

class ArticleList extends Component {
    static PropTypes = {
        articles : PropTypes.array.isRequired,
        openArticleId : React.PropTypes.string,
        toggleOpenArticle : PropTypes.func.isRequired
    }

    render() {
        const { articles, openArticleId, toggleOpenArticle } = this.props

        const articleComponents = articles.map(article => (
        <li key={article.id}>
            <Article article = {article} isOpen = {article.id == openArticleId} openArticle = {toggleOpenArticle(article.id)} />
        </li>))
        return (
            <div>
                <ul>
                    {articleComponents}
                </ul>
                <Chart />
            </div>
        )
    }
}

export default accordeon(ArticleList)