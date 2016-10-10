export default (selectedArticles = null, action) => {
    const { type, payload } = action
    switch(type) {
        case "SELECT_ARTICLE" :
            //лучше просто хранить id выбранных статей, а присвоение тут совсем лишнее
            return selectedArticles = payload.obj
    }
    return selectedArticles
}
