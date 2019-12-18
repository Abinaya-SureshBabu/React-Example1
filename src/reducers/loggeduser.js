const loggedusers = (state = null, action) => {
    if (action.type == "LOGGED_IN_USERNAME") {
        return action.name
    }
    else return state
}
export default loggedusers;
