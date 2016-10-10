export default (selectedArticles = null, action) => {
    const { type, payload } = action
    switch(type) {
        case "SELECT_ARTICLE" :
            return selectedArticles = payload.obj
    }
    return selectedArticles
}