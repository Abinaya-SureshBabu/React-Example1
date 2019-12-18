var settings = {
    AllowRegistration: true,
    DisableBalanceOnAdd: true,
    DisableBalanceOnEdit: true
}
const settingsreducer = (state = settings, action) => {
    if (action.type == "AllowRegistration") {
        console.log(action.value);
        return {
            ...state,
            AllowRegistration: action.value,

        }
    }
    if (action.type == "DisableBalanceOnAdd") {
        console.log("DisableBalanceOnAdd  " + action.value)
        return {
            ...state,
            DisableBalanceOnAdd: action.value
        }
    }
    if (action.type == "DisableBalanceOnEdit") {
        console.log("DisableBalanceOnEdit  " + action.value)
        return {
            ...state,
            DisableBalanceOnEdit: action.value
        }
    }
    return state
}
export default settingsreducer
