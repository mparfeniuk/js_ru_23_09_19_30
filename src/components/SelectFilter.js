import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { connect } from 'react-redux'
import { selectArticle } from '../AC/filter'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };
    
    handleChange = selected => {
        const { selectArticle } = this.props
        selectArticle(selected)
    }

    render() {
        const { articles } = this.props
        const { selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))


        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({ articles : state.articles, selected:  state.selected }), { selectArticle })(SelectFilter)