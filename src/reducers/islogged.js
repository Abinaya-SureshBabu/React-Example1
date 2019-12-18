var users = [
    {
        Email: "abi@gmail.com",
        Name: "abi",
        Password: "123"
    },
    {
        Email: "sneha@gmail.com",
        Name: "sneha",
        Password: "123"
    },

]
const login = (state = users, action) => {
    if (action.type == "User_Data") {
        return state.concat([action.value]);

    }
    return state;
}
export default login;
