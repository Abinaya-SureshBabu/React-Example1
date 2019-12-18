var auth = {
    authentication: false
}
const authreducer = (state = auth, action) => {
    if (action.type == "LOGIN") {
        console.log("logged")
        return {
            ...state,
            authentication: true,
        }
    }
    if (action.type == "LOGOUT") {
        console.log("Logout")
        return {
            ...state,
            authentication: false
        }
    }
    return state
}
export default authreducer;
