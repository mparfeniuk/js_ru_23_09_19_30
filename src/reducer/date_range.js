export default (date_range = { from : null, to : null}, action) => {
    const { type, payload } = action
    switch(type) {
        case "GET_DATE_RANGE" :
            return date_range = payload.obj
    }
    return date_range
}
