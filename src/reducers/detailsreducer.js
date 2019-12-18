var clientdetails = [
    {
        id: 1,
        Firstname: 'Bob',
        Lastname: ' Jackson',
        Email: 'bobjackson@yahoo.com',
        balance: 0,
        contact: 994567322,
        reg: "hjdsbh",
        editing: false
    },
    {
        id: 2,
        Firstname: 'Karen',
        Lastname: ' Smith',
        Email: 'karensmith@yahoo.com',
        balance: 0,
        contact: 2137871298,
        reg: "djhgbj",
        editing: false
    },
    {
        id: 3,
        Firstname: 'Jeff',
        Lastname: ' Doe',
        Email: 'jeff@gmail.com',
        balance: 200,
        contact: 8437589475,
        reg: "jygjhkjl213321",
        editing: false
    },
    {
        id: 4,
        Firstname: 'Tammy',
        Lastname: ' Waters',
        Email: 'tammy@gmail.com',
        balance: 80,
        contact: 8437589475,
        reg: "jygjhkjl213321",
        editing: false
    }
];
const detailsreducer = (state = clientdetails, action) => {
    if (action.type === "ADD_CLIENT") {
        return state.concat([action.value])
    }
    if (action.type === "DELETE_CLIENT") {
        const newarray = state.filter((array, index) => index != action.id)
        return newarray;
    }
    if (action.type === "EDIT_CLIENT") {
        console.log(action.id)
        return state.map((client, index) =>
            index === action.id ? { ...client, editing: !client.editing } : client
        )
    }
    if (action.type === "UPDATE") {
        return state.map((client, index) => {
            if (index == action.id) {
                return {
                    ...client,
                    Firstname: action.data.newFirstname,
                    Lastname: action.data.newLastname,
                    Email: action.data.newEmail,
                    contact: action.data.newcontact,
                    balance: action.data.newbalance,
                    editing: !client.editing
                }
            } else return client;
        })
    }
    return state;
}

export default detailsreducer;
